(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[72],{"8i6V":function(n,a){n.exports={attributes:{},html:'<h1>Cascader</h1>\n<p>Cascade selection box is used for multi-level data selection. The typical scenario is provincial and urban selection.</p>\n<h2 id="basic-usage" tabindex="-1">Basic Usage</h2>\n<pre class="language-tsx"><code class="language-tsx"><span class="token keyword">import</span> <span class="token punctuation">{</span> Toast <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'fnx-ui\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">let</span> areaData <span class="token operator">=</span> <span class="token punctuation">[</span>\n  <span class="token punctuation">{</span>\n    label<span class="token operator">:</span> <span class="token string">\'China\'</span><span class="token punctuation">,</span>\n    children<span class="token operator">:</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">{</span>\n        label<span class="token operator">:</span> <span class="token string">\'Beijing\'</span><span class="token punctuation">,</span>\n        disabled<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n        children<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> label<span class="token operator">:</span> <span class="token string">\'Haidian\'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> label<span class="token operator">:</span> <span class="token string">\'Chaoyang\'</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">{</span>\n        label<span class="token operator">:</span> <span class="token string">\'Shanghai\'</span><span class="token punctuation">,</span>\n        children<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> label<span class="token operator">:</span> <span class="token string">\'Zhabei\'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> label<span class="token operator">:</span> <span class="token string">\'Jingan\'</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">]</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Cascader</span></span>\n      <span class="token attr-name">data</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>areaData<span class="token punctuation">}</span></span>\n      <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Please select region<span class="token punctuation">"</span></span>\n      <span class="token attr-name">dataNames</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> value<span class="token operator">:</span> <span class="token string">\'label\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n    <span class="token punctuation">/></span></span><span class="token plain-text">\n  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode<span class="token punctuation">,</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<h2 id="custom-color" tabindex="-1">Custom Color</h2>\n<p>Set the highlight color of the selected state through the <code>activeColor</code> attribute.</p>\n<pre class="language-tsx"><code class="language-tsx"><span class="token keyword">import</span> <span class="token punctuation">{</span> Popup <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'fnx-ui\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">let</span> areaData <span class="token operator">=</span> <span class="token punctuation">[</span>\n  <span class="token punctuation">{</span>\n    label<span class="token operator">:</span> <span class="token string">\'China\'</span><span class="token punctuation">,</span>\n    children<span class="token operator">:</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">{</span>\n        label<span class="token operator">:</span> <span class="token string">\'Beijing\'</span><span class="token punctuation">,</span>\n        disabled<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n        children<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> label<span class="token operator">:</span> <span class="token string">\'Haidian\'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> label<span class="token operator">:</span> <span class="token string">\'Chaoyang\'</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">{</span>\n        label<span class="token operator">:</span> <span class="token string">\'Shanghai\'</span><span class="token punctuation">,</span>\n        children<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> label<span class="token operator">:</span> <span class="token string">\'Zhabei\'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> label<span class="token operator">:</span> <span class="token string">\'Jingan\'</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">]</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Cascader</span></span>\n      <span class="token attr-name">data</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>areaData<span class="token punctuation">}</span></span>\n      <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Please select region<span class="token punctuation">"</span></span>\n      <span class="token attr-name">activeColor</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#1989fa<span class="token punctuation">"</span></span>\n    <span class="token punctuation">/></span></span><span class="token plain-text">\n  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode<span class="token punctuation">,</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<h2 id="async-load" tabindex="-1">Async Load</h2>\n<p>You can listen to the <code>onLoadData</code> event and dynamically set <code>options</code> to realize asynchronous loading options.</p>\n<pre class="language-tsx"><code class="language-tsx"><span class="token keyword">import</span> <span class="token punctuation">{</span> Popup<span class="token punctuation">,</span> Cascader<span class="token punctuation">,</span> Field<span class="token punctuation">,</span> Icon <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'fnx-ui\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> areaData <span class="token operator">=</span> <span class="token punctuation">[</span>\n  <span class="token punctuation">{</span>\n    label<span class="token operator">:</span> <span class="token string">\'China\'</span><span class="token punctuation">,</span>\n    children<span class="token operator">:</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">{</span>\n        label<span class="token operator">:</span> <span class="token string">\'Beijing\'</span><span class="token punctuation">,</span>\n        disabled<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n        children<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> label<span class="token operator">:</span> <span class="token string">\'Haidian\'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> label<span class="token operator">:</span> <span class="token string">\'Chaoyang\'</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">{</span>\n        label<span class="token operator">:</span> <span class="token string">\'Shanghai\'</span><span class="token punctuation">,</span>\n        children<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> label<span class="token operator">:</span> <span class="token string">\'Zhabei\'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> label<span class="token operator">:</span> <span class="token string">\'Jingan\'</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">]</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> <span class="token punctuation">[</span>asyncData<span class="token punctuation">,</span> setAsyncData<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span>\n  areaData<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">{</span> label<span class="token operator">:</span> item<span class="token punctuation">.</span>label <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> <span class="token function-variable function">findOption</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">tree<span class="token punctuation">,</span> label</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> item <span class="token keyword">of</span> tree<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>item<span class="token punctuation">.</span>label <span class="token operator">===</span> label<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">return</span> item<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>item<span class="token punctuation">.</span>children<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">const</span> option <span class="token operator">=</span> <span class="token function">findOption</span><span class="token punctuation">(</span>item<span class="token punctuation">.</span>children<span class="token punctuation">,</span> label<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n      <span class="token keyword">if</span> <span class="token punctuation">(</span>option<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> option<span class="token punctuation">;</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> <span class="token function-variable function">renderField</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Field</span></span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Field Label<span class="token punctuation">"</span></span> <span class="token attr-name">clickable</span> <span class="token attr-name">rightIcon</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Icon</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>arrow-right<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Field.Input</span></span>\n      <span class="token attr-name">readOnly</span>\n      <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Placeholder<span class="token punctuation">"</span></span>\n      <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>value <span class="token operator">&amp;&amp;</span> value<span class="token punctuation">.</span>length <span class="token operator">></span> <span class="token number">0</span> <span class="token operator">?</span> value<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">\' / \'</span><span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token keyword">undefined</span><span class="token punctuation">}</span></span>\n    <span class="token punctuation">/></span></span><span class="token plain-text">\n  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Field</span></span><span class="token punctuation">></span></span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n    &lt;Popup.Select\n      round\n      select=</span><span class="token punctuation">{</span>\n        <span class="token operator">&lt;</span>Cascader\n          data<span class="token operator">=</span><span class="token punctuation">{</span>asyncData<span class="token punctuation">}</span>\n          title<span class="token operator">=</span><span class="token string">"Async"</span>\n          dataNames<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> value<span class="token operator">:</span> <span class="token string">\'label\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span>\n          onLoadData<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter">options</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n            <span class="token keyword">const</span> option <span class="token operator">=</span> options<span class="token punctuation">[</span>options<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n            option<span class="token punctuation">.</span>loading <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>\n            <span class="token function">setAsyncData</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">prev</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">[</span><span class="token operator">...</span>prev<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n            <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n              <span class="token keyword">const</span> item <span class="token operator">=</span> <span class="token function">findOption</span><span class="token punctuation">(</span>areaData<span class="token punctuation">,</span> option<span class="token punctuation">.</span>label<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n              <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>item<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n                <span class="token keyword">return</span><span class="token punctuation">;</span>\n              <span class="token punctuation">}</span>\n\n              option<span class="token punctuation">.</span>loading <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>\n              option<span class="token punctuation">.</span>children <span class="token operator">=</span> item<span class="token punctuation">.</span>children<span class="token operator">?.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">o</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span>\n                label<span class="token operator">:</span> o<span class="token punctuation">.</span>label<span class="token punctuation">,</span>\n                children<span class="token operator">:</span> o<span class="token punctuation">.</span>children <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">?</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">:</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span>\n              <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n              <span class="token function">setAsyncData</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">prev</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">[</span><span class="token operator">...</span>prev<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n          <span class="token punctuation">}</span><span class="token punctuation">}</span>\n        <span class="token operator">/</span><span class="token operator">></span>\n      <span class="token punctuation">}</span><span class="token plain-text">\n    >\n      </span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">renderField</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Popup.Select</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode<span class="token punctuation">,</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<h2 id="custiom-datanames" tabindex="-1">Custiom DataNames</h2>\n<p>The field names in <code>options</code> can be customized through the <code>dataNames</code> attribute.</p>\n<pre class="language-tsx"><code class="language-tsx"><span class="token keyword">import</span> <span class="token punctuation">{</span> Toast <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'fnx-ui\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">let</span> areaData <span class="token operator">=</span> <span class="token punctuation">[</span>\n  <span class="token punctuation">{</span>\n    label<span class="token operator">:</span> <span class="token string">\'China\'</span><span class="token punctuation">,</span>\n    list<span class="token operator">:</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">{</span>\n        label<span class="token operator">:</span> <span class="token string">\'Beijing\'</span><span class="token punctuation">,</span>\n        disabled<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n        list<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> label<span class="token operator">:</span> <span class="token string">\'Haidian\'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> label<span class="token operator">:</span> <span class="token string">\'Chaoyang\'</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">{</span>\n        label<span class="token operator">:</span> <span class="token string">\'Shanghai\'</span><span class="token punctuation">,</span>\n        list<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> label<span class="token operator">:</span> <span class="token string">\'Zhabei\'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> label<span class="token operator">:</span> <span class="token string">\'Jingan\'</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">]</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Cascader</span></span>\n      <span class="token attr-name">data</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>areaData<span class="token punctuation">}</span></span>\n      <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Please select region<span class="token punctuation">"</span></span>\n      <span class="token attr-name">dataNames</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> value<span class="token operator">:</span> <span class="token string">\'label\'</span><span class="token punctuation">,</span> children<span class="token operator">:</span> <span class="token string">\'list\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n    <span class="token punctuation">/></span></span><span class="token plain-text">\n  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode<span class="token punctuation">,</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<h2 id="api" tabindex="-1">API</h2>\n<div class=\'table-wrapper\'><table>\n<thead>\n<tr>\n<th>Parameter</th>\n<th>Description</th>\n<th>Type</th>\n<th>Default value</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>data</td>\n<td>Optional data source</td>\n<td><code>CascaderOption[]</code></td>\n<td><code>[]</code></td>\n</tr>\n<tr>\n<td>defaultValue</td>\n<td>The default value of the selected item</td>\n<td><code>number[] | string[]</code></td>\n<td><code>[]</code></td>\n</tr>\n<tr>\n<td>title</td>\n<td>Top title</td>\n<td><code>ReactNode</code></td>\n<td>-</td>\n</tr>\n<tr>\n<td>dataNames</td>\n<td>Fields in custom data structure</td>\n<td><code>CascaderDataNames</code></td>\n<td>-</td>\n</tr>\n<tr>\n<td>placeholder</td>\n<td>Prompt copy when not selected</td>\n<td><code>ReactNode</code></td>\n<td><code>Select</code></td>\n</tr>\n<tr>\n<td>swipeable</td>\n<td>Can touchable switch tabs</td>\n<td><code>boolean</code></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>activeColor</td>\n<td>Highlight color of the selected state</td>\n<td><code>string</code></td>\n<td><code>#2196F3</code></td>\n</tr>\n<tr>\n<td>closeIcon</td>\n<td>Custom close icon</td>\n<td><code>ReactNode</code></td>\n<td>-</td>\n</tr>\n</tbody>\n</table>\n</div><h2 id="events" tabindex="-1">Events</h2>\n<div class=\'table-wrapper\'><table>\n<thead>\n<tr>\n<th>Event Name</th>\n<th>Description</th>\n<th>Callback parameter</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>onLoadData</td>\n<td>Triggered when loading asynchronously</td>\n<td><code>options:CascaderOption[]</code></td>\n</tr>\n<tr>\n<td>onConfirm</td>\n<td>Triggered when all options are selected</td>\n<td><code>value: string[] | number[], options: CascaderOption[]</code></td>\n</tr>\n<tr>\n<td>onCancel</td>\n<td>Triggered when the close icon is clicked</td>\n<td>-</td>\n</tr>\n<tr>\n<td>onChange</td>\n<td>Triggered when the selected item changes</td>\n<td><code>value: string[] | number[], options: CascaderOption[]</code></td>\n</tr>\n</tbody>\n</table>\n</div><h3 id="data-structure" tabindex="-1">Data Structure</h3>\n<div class=\'table-wrapper\'><table>\n<thead>\n<tr>\n<th>Parameter</th>\n<th>Description</th>\n<th>Type</th>\n<th>Default value</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>label</td>\n<td>Options display content</td>\n<td><code>ReactNode</code></td>\n<td>-</td>\n</tr>\n<tr>\n<td>value</td>\n<td>Value corresponding to option</td>\n<td><code>CascaderOption</code></td>\n<td>-</td>\n</tr>\n<tr>\n<td>loading</td>\n<td>Load</td>\n<td><code>boolean</code></td>\n<td>-</td>\n</tr>\n<tr>\n<td>disabled</td>\n<td>Disable</td>\n<td><code>boolean</code></td>\n<td>-</td>\n</tr>\n<tr>\n<td>children</td>\n<td>Child element (same type as data)</td>\n<td><code>CascaderOption[]</code></td>\n<td>-</td>\n</tr>\n</tbody>\n</table>\n</div><h3 id="datanames-structure" tabindex="-1">DataNames Structure</h3>\n<div class=\'table-wrapper\'><table>\n<thead>\n<tr>\n<th>Parameter</th>\n<th>Description</th>\n<th>Type</th>\n<th>Default value</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>label</td>\n<td>Options display content</td>\n<td><code>string |string[]</code></td>\n<td><code>label</code></td>\n</tr>\n<tr>\n<td>value</td>\n<td>Value corresponding to option</td>\n<td><code>string |string[]</code></td>\n<td><code>value</code></td>\n</tr>\n<tr>\n<td>loading</td>\n<td>Load</td>\n<td><code>string |string[]</code></td>\n<td><code>loading</code></td>\n</tr>\n<tr>\n<td>disabled</td>\n<td>Disable</td>\n<td><code>string |string[]</code></td>\n<td><code>disabled</code></td>\n</tr>\n<tr>\n<td>children</td>\n<td>Child element</td>\n<td><code>string |string[]</code></td>\n<td><code>children</code></td>\n</tr>\n</tbody>\n</table>\n</div>',meta:{resourcePath:"/home/runner/work/fnx-ui/fnx-ui/packages/fnx-ui/src/cascader/index.en-US.md"}}}}]);