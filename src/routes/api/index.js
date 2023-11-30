import express from 'express';
import register from './register.js';
import login from './login.js';

const api = express.Router();
api.post('/register', register);
api.post('/login', login)

export default api;