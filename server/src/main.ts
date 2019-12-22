import * as path from 'path';
import * as express from 'express';
import fetch from 'node-fetch';

const start = () => {
    const app = express();

    app.use(express.static(path.resolve(__dirname, '..', 'public')));
    app.use(express.static(path.resolve(__dirname, '..', '..', 'client', 'build')));

    app.get('/tracks', async(req, res) => {
        try {
            const response = await fetch('https://itunes.apple.com/search?term=rock&media=music');
            const tracks = await response.json();

            res.json(tracks);
        } catch {
            res.status(500).end();
        }
    });

    app.get('/', (req, res) => {
        res.sendFile(path.resolve(__dirname, '..', 'public', 'index.html'));
    });

    app.listen(9001);
};

start();
