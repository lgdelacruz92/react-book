import "highlight.js/styles/monokai.css";
const ChapterTest = () => {
  const content = `<h2>Hello world</h2>
  <br>
  <p>this cis a code</p>
  <pre><code class="language-jsx"><span class="hljs-keyword">const</span> <span class="hljs-title function_">ReactFunction</span> = (<span class="hljs-params"></span>) =&gt; {
  &nbsp; &nbsp;<span class="hljs-keyword">return</span> <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>Hello<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
}</code></pre>`;
  return (
    <div
      className="chapter-test"
      dangerouslySetInnerHTML={{ __html: content }}
    ></div>
  );
};

export default ChapterTest;
