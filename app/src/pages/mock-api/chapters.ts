// mock-api/posts.ts

import type { Chapter } from '../../types/chapter';

const chapters: Chapter[] = [
  {
    title: 'First post',
    content: 'This is the first post.',
    slug: 'chapter-1',
  },
  {
    title: 'Second post',
    content: 'This is the second post.',
    slug: 'chapter-2',
  },
];

export default chapters;