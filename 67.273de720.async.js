(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[67],{HQem:function(n,a){n.exports={attributes:{},html:'<h1>Badge \u5fbd\u6807</h1>\n<p>\u5728\u53f3\u4e0a\u89d2\u5c55\u793a\u5fbd\u6807\u6570\u5b57\u6216\u5c0f\u7ea2\u70b9\u3002</p>\n<h2 id="ji-chu-yong-fa" tabindex="-1">\u57fa\u7840\u7528\u6cd5</h2>\n<p>\u8bbe\u7f6e <code>count</code> \u5c5e\u6027\u540e\uff0c<code>Badge</code> \u4f1a\u5728\u5b50\u5143\u7d20\u7684\u53f3\u4e0a\u89d2\u663e\u793a\u5bf9\u5e94\u7684\u5fbd\u6807\uff0c\u4e5f\u53ef\u4ee5\u901a\u8fc7 <code>dot</code> \u6765\u663e\u793a\u5c0f\u7ea2\u70b9\u3002</p>\n<pre class="language-tsx"><code class="language-tsx"><span class="token keyword">import</span> <span class="token punctuation">{</span> Badge <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'fnx-ui\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Badge</span></span> <span class="token attr-name">count</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>hot<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">Content</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Badge</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode<span class="token punctuation">,</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<h2 id="zui-da-zhi" tabindex="-1">\u6700\u5927\u503c</h2>\n<p>\u8bbe\u7f6e <code>max</code> \u5c5e\u6027\u540e\uff0c\u5f53 <code>count</code> \u7684\u6570\u503c\u8d85\u8fc7\u6700\u5927\u503c\u65f6\u4e14 <code>count</code> \u7c7b\u578b\u662f <code>number</code> \uff0c\u4f1a\u81ea\u52a8\u663e\u793a\u4e3a<code>{max}+</code> \u3002</p>\n<pre class="language-tsx"><code class="language-tsx"><span class="token keyword">import</span> <span class="token punctuation">{</span> Badge <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'fnx-ui\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Badge</span></span> <span class="token attr-name">count</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>100<span class="token punctuation">"</span></span> <span class="token attr-name">max</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">99</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n      Content\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Badge</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode<span class="token punctuation">,</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<h2 id="zi-ding-yi-yan-se" tabindex="-1">\u81ea\u5b9a\u4e49\u989c\u8272</h2>\n<p>\u901a\u8fc7 <code>color</code> \u5c5e\u6027\u6765\u8bbe\u7f6e\u5fbd\u6807\u7684\u989c\u8272\u3002</p>\n<pre class="language-tsx"><code class="language-tsx"><span class="token keyword">import</span> <span class="token punctuation">{</span> Badge <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'fnx-ui\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Badge</span></span> <span class="token attr-name">count</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>hot<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">Content</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Badge</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode<span class="token punctuation">,</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<h2 id="du-li-zhan-shi" tabindex="-1">\u72ec\u7acb\u5c55\u793a</h2>\n<p>\u5f53 <code>Badge</code> \u6ca1\u6709\u5b50\u5143\u7d20\u65f6\uff0c\u4f1a\u4f5c\u4e3a\u4e00\u4e2a\u72ec\u7acb\u7684\u5143\u7d20\u8fdb\u884c\u5c55\u793a\u3002</p>\n<pre class="language-tsx"><code class="language-tsx"><span class="token keyword">import</span> <span class="token punctuation">{</span> Badge <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'fnx-ui\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Badge</span></span> <span class="token attr-name">count</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>100<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">Content</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Badge</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode<span class="token punctuation">,</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<h2 id="api" tabindex="-1">API</h2>\n<div class=\'table-wrapper\'><table>\n<thead>\n<tr>\n<th>\u53c2\u6570</th>\n<th>\u8bf4\u660e</th>\n<th>\u7c7b\u578b</th>\n<th>\u9ed8\u8ba4\u503c</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>count</td>\n<td>\u5fbd\u6807\u5185\u5bb9</td>\n<td><code>ReactNode</code></td>\n<td><code>8</code></td>\n</tr>\n<tr>\n<td>showZero</td>\n<td>\u5f53 <code>count</code> \u4e3a\u6570\u5b57 0 \u65f6\uff0c\u662f\u5426\u5c55\u793a\u5fbd\u6807</td>\n<td><code>boolean</code></td>\n<td><code>true</code></td>\n</tr>\n<tr>\n<td>dot</td>\n<td>\u662f\u5426\u5c55\u793a\u4e3a\u5c0f\u7ea2\u70b9</td>\n<td><code>boolean</code></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>max</td>\n<td>\u6700\u5927\u503c\uff0c\u8d85\u8fc7\u6700\u5927\u503c\u4f1a\u663e\u793a <code>{max}+</code> \uff0c\u4ec5\u5f53 <code>count</code> \u4e3a\u6570\u5b57\u65f6\u6709\u6548</td>\n<td><code>number | string</code></td>\n<td>-</td>\n</tr>\n<tr>\n<td>color</td>\n<td>\u5fbd\u6807\u80cc\u666f\u989c\u8272</td>\n<td><code>string</code></td>\n<td><code>#ee0a24</code></td>\n</tr>\n<tr>\n<td>offset</td>\n<td>\u8bbe\u7f6e\u5fbd\u6807\u7684\u504f\u79fb\u91cf\uff0c\u6570\u7ec4\u7684\u4e24\u9879\u5206\u522b\u5bf9\u5e94\u6c34\u5e73\u548c\u5782\u76f4\u65b9\u5411\u7684\u504f\u79fb\u91cf\uff0c\u9ed8\u8ba4\u5355\u4f4d\u4e3a <code>px</code></td>\n<td><code>number[] | string[]</code></td>\n<td>-</td>\n</tr>\n</tbody>\n</table>\n</div>',meta:{resourcePath:"/home/runner/work/fnx-ui/fnx-ui/packages/fnx-ui/src/badge/index.zh-CN.md"}}}}]);