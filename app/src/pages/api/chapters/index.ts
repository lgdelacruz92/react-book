// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import chapters from '../../mock-api/chapters';

import { Chapter } from '@/types/chapter';
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Chapter[]>
) {
  res.status(200).json(chapters)
}
