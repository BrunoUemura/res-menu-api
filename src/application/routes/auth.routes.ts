import { Router } from 'express';
import SignInUserController from '@src/application/controller/auth/SignInController';

const auth = Router();

auth.post('/signin', new SignInUserController().handle);

export default auth;
