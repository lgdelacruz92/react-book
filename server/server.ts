import express from 'express';
import { Request, Response} from 'express';

const app = express();

app.get('/api/chapters', (req: Request, res: Response) => {
  const chapters = [
    { id: 1, title: 'Chapter 1' },
    { id: 2, title: 'Chapter 2' },
    { id: 3, title: 'Chapter 3' },
  ];

  res.json(chapters);
});

app.listen(3003, () => {
  console.log('Server listening on port 3000');
});