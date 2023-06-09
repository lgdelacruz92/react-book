import express from 'express';
import { Request, Response} from 'express';
import fs from 'fs';
import { ChapterSlugs } from './chapters/chapter-slugs';
import cors from 'cors';

const app = express();

app.use(cors());

app.get('/api/chapters', (req: Request, res: Response) => {
  res.json(ChapterSlugs);
});

app.get('/api/chapters/:slug', (req: Request, res: Response) => {
    const chapter = fs.readFileSync(`./chapters/${req.params.slug}.txt`, 'utf-8');
    const chapterSlug = ChapterSlugs.find((chapter) => chapter.slug === req.params.slug);
    res.json({
        title: chapterSlug.title,
        content: chapter,
        fileName: chapterSlug.slug
    });
});

const port = 3003;
app.listen(port, () => {
  console.log('Server listening on port ' + port);
});