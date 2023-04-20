// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import chapters from '../../mock-api/chapters';

import { Chapter } from '@/types/chapter-type';
import { NotFound } from '@/types/not-found-type';
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Chapter | NotFound>
) {
    const { slug } = req.query;
    const result = chapters.find(c => c.slug === slug)
    if (result) {
        res.status(200).json(result);
    } else {
        res.status(404).json({ message: 'Not found'})
    }
}
