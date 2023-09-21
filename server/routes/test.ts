import express, { Response, Request } from 'express';
const router = express.Router();
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

router.get('/', (req: Request, res: Response) => {
    try {
        const __filename = fileURLToPath(import.meta.url);
        const __dirname = path.dirname(__filename);
        const script = fs.readFileSync(`https://lue-watcher.vercel.app/${__dirname}/script.js`, 'utf-8');
        res.header('Content-Type', 'text/javascript');
        res.status(200).send(script);
    } catch(err: any) {
        res.status(500).json(err.message);
    }
})

export default router;

