## Instalasi

Ikuti langkah-langkah di bawah ini untuk menginstal dan menjalankan proyek ini:

1. **Clone Repository**

   Clone repository ini ke komputer lokal Anda dengan perintah berikut:

   ```bash
   git clone https://github.com/Stoic2002/tes-teknis-backend.git
   ```

2.	Masuk ke Direktori Proyek
    Setelah repository di-clone, navigasikan ke direktori proyek:
    
    ```bash
    cd tes-teknis-backend
   ```

3.	Instalasi Dependensi
    Instal semua dependensi yang diperlukan menggunakan npm atau Yarn. Pilih salah satu perintah berikut:

    ```bash
    npm install
   ```

4.	Konfigurasi Database
    Buat file konfigurasi .env di direktori root proyek Anda dan tambahkan variabel lingkungan berikut:

    ```bash
    DATABASE_URL="postgresql://username:password@localhost:5432/db_name"
   ```

5.	Generate Prisma Schema
    Jalankan perintah berikut untuk meng-generate Prisma schema dan membuat migrasi database:

    ```bash
    npx prisma migrate dev --name init
    ```

6.	Menjalankan Proyek
    Setelah konfigurasi selesai, jalankan proyek dengan perintah berikut:

    ```bash
    npm run dev
    ```
