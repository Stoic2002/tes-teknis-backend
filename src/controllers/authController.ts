import { registerService, loginService } from '../services/authService';
import { NextFunction, Request, Response } from 'express';

export const registerController = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user = await registerService(req.body);
        res.status(201).json(user);
      } catch (error) {
        next(error);
      }
}

export const loginController = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { email, password } = req.body;
      const { user, token } = await loginService(email, password);

      res.cookie('token', token, {
        maxAge: 3600000,     
        sameSite: 'strict',  
        secure:true
        });

      res.json({ user, token });
    } catch (error) {
      next(error);
    }
  };

  export const logoutController = (req: Request, res: Response, next: NextFunction) => {
    try {
        res.cookie('token', '', {
            maxAge: 0,
            sameSite: 'strict',
            secure: true
        });
        res.status(200).json({ message: 'Logout successful' });
    } catch (error) {
        next(error);
    }
};
