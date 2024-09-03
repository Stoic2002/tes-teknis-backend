import prisma  from "../config/prisma";

export const createUnitKerjaService = async (data: any) => {
    return prisma.unitKerja.create({
        data : {
            nama: data.nama,
            kode: data.kode
        }
    });
}

export const getAllUnitKerjaService = async () => {
    return prisma.unitKerja.findMany();
}

export const getByIdUnitKerjaService = async (unitKerjaId: any) => {
    return prisma.unitKerja.findUnique({where:{id:unitKerjaId}, include:{Pegawai: true}});
}

export const updateUnitKerjaService = async (unitKerjaId: string, data: any) => {
    return prisma.unitKerja.update({
        where: { id: unitKerjaId },
        data: {
            nama: data.nama,
            kode: data.kode,
        },
    });
}

export const deleteUnitKerjaService = async (unitKerjaId: string) => {
    return prisma.unitKerja.delete({
        where: { id: unitKerjaId }
    });
}