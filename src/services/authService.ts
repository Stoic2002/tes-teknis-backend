import bcrypt from 'bcryptjs';
import prisma from '../config/prisma';
import 'dotenv/config';
import jwt from 'jsonwebtoken';


export const registerService = async (data: any) => {
    const existingUser = await prisma.user.findUnique({where: {email: data.email }});
    if(existingUser){
        throw Error("email sudah dipakai");
    }

    const hashedPassword = await bcrypt.hash(data.password, 8);

    const user = await prisma.user.create({
        data: {
            email: data.email,
            password: hashedPassword,
        }
    })

    return user;

}

export const loginService = async (email: any, password: any) => {
    const user = await prisma.user.findUnique({ where: { email:email } });
    if (!user) {
      throw new Error('tidak valid');
    }
    
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new Error('tidak valid');
    }
    
    const secret_key = process.env.JWT_SECRET || 'secret';
    const token = jwt.sign({id: user.id},secret_key, {expiresIn: '1d', algorithm: 'HS256'});
  
    return { user, token };
};

    
