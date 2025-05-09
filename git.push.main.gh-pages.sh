#!/bin/bash

# Exit kalau ada error
set -e

echo "📦 Commit dan push perubahan di branch main..."
git checkout main
git add .
git commit -m "${1:-'update content'}" || echo "⚠️  main - Tidak ada perubahan di dist, skip commit."
git push origin main

echo "🚀 Deploy ke gh-pages..."
git checkout gh-pages

# Pastikan folder dist dari main diambil ulang
git checkout main -- docs

git add .
git commit -m "${2:-'deploy dist to gh-pages'}" || echo "⚠️  gh-pages - Tidak ada perubahan di dist, skip commit."
git push origin gh-pages

# Kembali ke main
git checkout main
echo "✅ Selesai!"
