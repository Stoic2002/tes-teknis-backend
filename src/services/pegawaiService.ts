import { Prisma } from '@prisma/client';
import prisma from '../config/prisma';

export const createPegawaiService = async (data: any) => {
    return prisma.pegawai.create({
        data: {
            nip : data.nip,
            nama : data.nama,
            tempatLahir : data.tempatLahir,
            tanggalLahir : data.tanggalLahir,
            jenisKelamin : data.jenisKelamin,
            agama : data.agama,
            alamat: data.alamat,
            noHp: data.noHp,
            npwp: data.npwp,
            fotoPath: data.fotoPath,
            jabatanId:data.jabatanId,
            unitKerjaId:data.unitKerjaId
        }
    });
}

// export const getAllPegawaiService = async () => {
//     return prisma.pegawai.findMany({include:{Jabatan:true, UnitKerja:true}});
// }

export const getByIdPegawaiService = async (pegawaiId: any) => {
    return prisma.pegawai.findUnique({where: { id: pegawaiId },include: {Jabatan:true, UnitKerja: true}});
}

export const updatePegawaiService = async (pegawaiId: string, data: any) => {
    return prisma.pegawai.update({
        where: { id: pegawaiId },
        data: {
            nip: data.nip,
            nama: data.nama,
            tempatLahir: data.tempatLahir,
            tanggalLahir: data.tanggalLahir,
            jenisKelamin: data.jenisKelamin,
            agama: data.agama,
            alamat: data.alamat,
            noHp: data.noHp,
            npwp: data.npwp,
            fotoPath: data.fotoPath,
            jabatanId:data.jabatanId,
            unitKerjaId:data.unitKerjaId
        },
        include: { Jabatan: true, UnitKerja: true }
    });
}

export const deletePegawaiService = async (pegawaiId: string) => {
    return prisma.pegawai.delete({
        where: { id: pegawaiId }
    });
}

// Fungsi untuk membuat pagination
export const getAllPegawaiService = async (page: number = 1, pageSize: number = 6, search = '', unitKerja = '') => {
    const skip = (page - 1) * pageSize;
    const take = pageSize;

    const where: Prisma.PegawaiWhereInput = {
        AND: [
            search
                ? {
                      OR: [
                          { nama: { contains: search, mode: 'insensitive' } },
                          { nip: { contains: search, mode: 'insensitive' } },
                      ],
                  }
                : {},
            unitKerja ? { unitKerjaId: unitKerja } : {},
        ],
    };

    // Fetch data dengan pagination
    const pegawaiList = await prisma.pegawai.findMany({
        where,
        skip,
        take,
        include: {
            Jabatan: true,
            UnitKerja: true
        }
    });

    // Menghitung total pegawai untuk menentukan jumlah halaman
    const totalPegawai = await prisma.pegawai.count({where});

    // Mengembalikan data beserta informasi pagination
    return {
        statusCode : 200,
        message : 'success get all pegawai',
        data: pegawaiList,
        total: totalPegawai,
        page,
        pageSize,
        totalPages: Math.ceil(totalPegawai / pageSize)
    };
};

