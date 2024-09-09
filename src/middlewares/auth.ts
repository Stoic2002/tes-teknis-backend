import { NextFunction, Request, Response } from 'express';
import "dotenv/config"
import jwt from 'jsonwebtoken';

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    const secretKey = process.env.JWT_SECRET || 'secret';
  
    if (!token) {
      return res.status(401).json({ message: 'Access denied, no token provided' });
    }
    try {
        const decoded = jwt.verify(token, secretKey);
        req.body.user = decoded;
        next();
      } catch (error) {
        res.status(403).json({ message: 'Invalid or expired token' });
      }
};