import { registerService, loginService } from '../services/authService';
import { NextFunction, Request, Response } from 'express';
import { generateToken } from '../middlewares/csrfMiddleware';


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

      res.cookie('__sessionId', token, {
        maxAge: 36000000,     
        sameSite: 'strict',  
        secure:true
        });

      const csrfToken = generateToken(req, res);

      res.json({ user, token, csrfToken });
    } catch (error) {
      next(error);
    }
  };

  export const logoutController = (req: Request, res: Response, next: NextFunction) => {
    try {
        res.cookie('__sessionId', '', {
            maxAge: 0,
            sameSite: 'strict',
            secure: true
        });
        res.cookie('__csrf_token','', {
          maxAge: 0,
          sameSite: 'strict',
          secure: true
        });
        res.status(200).json({ message: 'Logout successful' });
    } catch (error) {
        next(error);
    }
};
