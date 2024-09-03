-- CreateEnum
CREATE TYPE "Agama" AS ENUM ('islam', 'kristen', 'katolik', 'hindu', 'buddha', 'konghucu');

-- CreateEnum
CREATE TYPE "JenisKelamin" AS ENUM ('male', 'female');

-- CreateTable
CREATE TABLE "Jabatan" (
    "id" TEXT NOT NULL,
    "nama" TEXT NOT NULL,
    "eselon" TEXT,
    "golongan" TEXT,

    CONSTRAINT "Jabatan_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Pegawai" (
    "id" TEXT NOT NULL,
    "nip" TEXT NOT NULL,
    "nama" TEXT NOT NULL,
    "tempatLahir" TEXT,
    "tanggalLahir" TIMESTAMP(3),
    "jenisKelamin" "JenisKelamin" NOT NULL,
    "agama" "Agama" NOT NULL,
    "alamat" TEXT,
    "noHp" TEXT,
    "npwp" TEXT,
    "fotoPath" TEXT,
    "unitKerjaId" TEXT NOT NULL,
    "jabatanId" TEXT NOT NULL,

    CONSTRAINT "Pegawai_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UnitKerja" (
    "id" TEXT NOT NULL,
    "nama" TEXT NOT NULL,
    "kode" TEXT NOT NULL,

    CONSTRAINT "UnitKerja_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Pegawai_nip_key" ON "Pegawai"("nip");

-- CreateIndex
CREATE UNIQUE INDEX "UnitKerja_kode_key" ON "UnitKerja"("kode");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Pegawai" ADD CONSTRAINT "Pegawai_jabatanId_fkey" FOREIGN KEY ("jabatanId") REFERENCES "Jabatan"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pegawai" ADD CONSTRAINT "Pegawai_unitKerjaId_fkey" FOREIGN KEY ("unitKerjaId") REFERENCES "UnitKerja"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
