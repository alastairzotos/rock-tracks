import * as path from 'path';
import * as express from 'express';
import fetch from 'node-fetch';

const start = () => {
    const PORT = 9001;

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

    app.get('/get-track', async(req, res) => {
        try {
            const data = await fetch(`https://itunes.apple.com/lookup?id=${req.query.id}`);
            const track = await data.json();

            if (track.results && track.results.length > 0) {
                res.status(200).json(track.results[0]);
            } else {
                res.sendStatus(404);
            }
        } catch (e) {
            res.status(500).end();
        }
    });

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, '..', 'public', 'index.html'));
    });

    app.listen(PORT, () => {
        console.log(`Page is live on http://localhost:${PORT}`);
    });
};

start();
