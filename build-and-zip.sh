#!/bin/bash
echo "🔨 Building AP CS A Practice..."
cd "$(dirname "$0")/electron"
npm run build

echo "📦 Zipping app..."
rm -f ~/Desktop/"AP CS A Practice.zip"
cd ../dist/mac-arm64
zip -r ~/Desktop/"AP CS A Practice.zip" "AP CS A Practice.app" > /dev/null

echo "✅ Done! ZIP is on your Desktop."
