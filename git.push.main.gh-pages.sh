#!/bin/bash

# Exit kalau ada error
set -e

echo "📦 Commit perubahan di branch main..."
git checkout main
git add .
git commit -m "${1:-'update content'}"

echo "🚀 Deploy ke gh-pages..."
git checkout gh-pages

# Pastikan folder dist dari main diambil ulang
git checkout main -- dist

git add .
git commit -m "${2:-'deploy dist to gh-pages'}" || echo "⚠️  Tidak ada perubahan di dist, skip commit."
git push origin gh-pages

# Kembali ke main
git checkout main
git push origin main
echo "✅ Selesai!"
