// mock-api/posts.ts

import type { Chapter } from '../../types/chapter';

const chapters: Chapter[] = [
  {
    title: 'First post',
    content: 
      {
        title: {
          attributes: 
            { mt: '2rem', as: 'h2'}
          ,
          text: 'Chapter 1.1: React\'s History - An Unexpected Adventure'
        },
        content: [
          {
            title: {
              attributes: {
                mt: '1rem', as: 'h5'
              },
              text: 'Introduction'
            },
            content: {
              attributes: { mt: '1rem'},
              text: 'Gather \'round, folks! It\'s time for a tale of epic proportions, filled with twists, turns, and the unforeseen rise of a true web development hero. This is the story of React, the brave UI champion that took the frontend world by storm and continues to do so to this day.'
            }
          },
        ]
      }
    ,
    slug: 'chapter-1',
  },

];

export default chapters;