export function generateStaticParams() {
  return [
    { subject: 'physics', paper: 'paper-1', chapter: 'chapter-2', topic: 'topic-1' },
    { subject: 'physics', paper: 'paper-1', chapter: 'chapter-2', topic: 'topic-2' },
    { subject: 'physics', paper: 'paper-1', chapter: 'chapter-2', topic: 'topic-3' },
    { subject: 'physics', paper: 'paper-1', chapter: 'chapter-2', topic: 'topic-4' },
  ];
}

export default function TopicLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
