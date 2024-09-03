import prisma  from "../config/prisma";

export const createJabatanService = async (data: any) => {
    return prisma.jabatan.create({
        data : {
            nama: data.nama,
            eselon: data.eselon,
            golongan: data.golongan
        }
    });
}

export const getAllJabatanService = async () => {
    return prisma.jabatan.findMany();
}

export const getByIdJabatanService = async (jabatanId: any) => {
    return prisma.jabatan.findUnique({where:{id:jabatanId}, include:{Pegawai: true}});
}

export const updateJabatanService = async (jabatanId: string, data: any) => {
    return prisma.jabatan.update({
        where: { id: jabatanId },
        data: {
            nama: data.nama,
            eselon: data.eselon,
            golongan : data.golongan
        },
    });
}

export const deleteJabatanService = async (jabatanId: string) => {
    return prisma.jabatan.delete({
        where: { id: jabatanId }
    });
}