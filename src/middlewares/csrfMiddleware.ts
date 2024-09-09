import { Request, Response, NextFunction } from 'express';
import cookieParser from 'cookie-parser';
import { doubleCsrf } from 'csrf-csrf';

const oneDayInMilliseconds = 24 * 60 * 60 * 1000; // 24 hours in milliseconds
const expiresDate = new Date(Date.now() + oneDayInMilliseconds);

const doubleCsrfUtilities = doubleCsrf({
  getSecret: () => process.env.CSRF_SECRET || 'csrf_secret', // Replace with your CSRF secret
  cookieName: '__csrf_token',
  cookieOptions: {
    sameSite: 'strict', // Adjust according to your needs
    path: '/',
    secure: true,
    maxAge: oneDayInMilliseconds,
    expires: expiresDate,
  },
  size: 64,
  ignoredMethods: ['GET', 'HEAD', 'OPTIONS'],
  getTokenFromRequest: (req: Request) => req.headers['x-csrf-token'] as string | undefined,
});

export const { doubleCsrfProtection, generateToken } = doubleCsrfUtilities;

export const setupCsrf = (app: any) => {
  app.use(cookieParser());
  app.use(doubleCsrfProtection);
};