FROM node:latest

# Jalankan sebagai root
USER root

# Install sudo
RUN apt-get update && apt-get install -y sudo

# Buat user dan tambahkan ke grup sudo
RUN useradd -ms /bin/bash muhammad && \
    usermod -aG sudo muhammad

# Izinkan user 'muhammad' menjalankan sudo tanpa password
RUN echo 'muhammad ALL=(ALL) NOPASSWD:ALL' >> /etc/sudoers

# Ubah ke user biasa
USER muhammad
WORKDIR /usr/src/app
