import express from 'express';
import register from './register.js';

const api = express.Router();
api.post('/register', register);

export default api;