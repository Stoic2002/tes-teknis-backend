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

export const getAllPegawaiService = async () => {
    return prisma.pegawai.findMany({include:{Jabatan:true, UnitKerja:true}});
}

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