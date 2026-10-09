import { GoogleGenerativeAI } from '@google/generative-ai';

// Initialize Gemini with an API key if available in env, or use a mock if not.
// In production, you MUST set GEMINI_API_KEY in your environment variables.
const apiKey = process.env.GEMINI_API_KEY || '';
const genAI = new GoogleGenerativeAI(apiKey);

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    if (!apiKey) {
      // Mock response if no API key is provided
      return new Response(
        JSON.stringify({ 
          reply: "আপনার প্রশ্নটি পেয়েছি: '" + message + "'। উত্তর দেওয়ার জন্য Gemini API Key সেট করা প্রয়োজন। দয়া করে `.env.local` ফাইলে GEMINI_API_KEY সেট করুন।" 
        }),
        { headers: { 'Content-Type': 'application/json' } }
      );
    }

    let searchContext = "";
    const serperKey = process.env.SERPER_API_KEY;
    
    if (serperKey && message.length > 5) {
      try {
        const serperRes = await fetch('https://google.serper.dev/search', {
          method: 'POST',
          headers: {
            'X-API-KEY': serperKey,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ q: message + " physics" })
        });
        const searchData = await serperRes.json();
        if (searchData.organic && searchData.organic.length > 0) {
          searchContext = "\n\nRelevant Web Search Results:\n" + 
            searchData.organic.slice(0, 3).map((item: any) => `- ${item.title}: ${item.snippet}`).join("\n");
        }
      } catch (err) {
        console.error("Serper search failed", err);
      }
    }

    const model = genAI.getGenerativeModel({ model: "gemini-3.6-flash" });
    const prompt = `You are a helpful physics AI tutor for Bangladeshi students (Sohag Physics). 
You teach SSC Physics, HSC Physics, and Admission Physics (Medical, Varsity, Engineering).
Answer in Bengali. Keep it clear, friendly, and educational.${searchContext}

Student: ${message}
Tutor:`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    return new Response(JSON.stringify({ reply: text }), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error("AI Error:", error);
    return new Response(JSON.stringify({ reply: "দুঃখিত, কোনো একটি সমস্যা হয়েছে। আবার চেষ্টা করুন।" }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
