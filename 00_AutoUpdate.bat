@echo off
echo ==============================================
echo Auto-Pushing Sohag Physics App to GitHub...
echo ==============================================
git add .
git commit -m "Auto Update"
git push -u origin main
echo ==============================================
echo Update Complete!
pause
