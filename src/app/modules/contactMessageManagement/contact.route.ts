import express from 'express';
import { ContactController } from './contact.controller';

const router = express.Router();

router.post('/add-message',ContactController.addMessageData);
router.get('/', ContactController.getAllMessageData);


export const contactRoutes = router;
