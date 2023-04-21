// mock-api/posts.ts

import type { ChapterType } from '../../types/chapter-type';

const chapters: ChapterType[] = [
  {
    slug: 'chapter-1',
    content: '<h2>Hello world</h2>\n<br>\n<p>this cis a code</p>\n<pre><code class="language-jsx"><span class="hljs-keyword">const</span> <span class="hljs-title function_">ReactFunction</span> = (<span class="hljs-params"></span>) =&gt; {\n&nbsp; &nbsp;<span class="hljs-keyword">return</span> <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>Hello<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>\n}\n</code></pre>'
  }
];

export default chapters;