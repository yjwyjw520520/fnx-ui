(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[89],{kH6c:function(n,a){n.exports={attributes:{},html:'<h1>Divider \u5206\u5272\u7ebf</h1>\n<p>\u533a\u9694\u5185\u5bb9\u7684\u5206\u5272\u7ebf\u3002</p>\n<h2 id="ji-chu-yong-fa" tabindex="-1">\u57fa\u7840\u7528\u6cd5</h2>\n<p>\u9ed8\u8ba4\u6e32\u67d3\u4e00\u6761\u6c34\u5e73\u5206\u5272\u7ebf\u3002</p>\n<pre class="language-tsx"><code class="language-tsx"><span class="token keyword">import</span> <span class="token punctuation">{</span> Divider <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span><span class="token plain-text">\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne\n      merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen,\n      quo modo.\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Divider</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span><span class="token plain-text">\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne\n      merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen,\n      quo modo.\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span><span class="token plain-text">\n  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode<span class="token punctuation">,</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<h2 id="zhan-shi-wen-zi" tabindex="-1">\u5c55\u793a\u6587\u5b57</h2>\n<p>\u901a\u8fc7\u5b50\u5143\u7d20\u5728\u53ef\u4ee5\u5206\u5272\u7ebf\u4e2d\u95f4\u63d2\u5165\u5185\u5bb9\u3002</p>\n<pre class="language-tsx"><code class="language-tsx"><span class="token keyword">import</span> <span class="token punctuation">{</span> Divider <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span><span class="token plain-text">\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne\n      merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen,\n      quo modo.\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Divider</span></span><span class="token punctuation">></span></span><span class="token plain-text">Children</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Divider</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span><span class="token plain-text">\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne\n      merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen,\n      quo modo.\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span><span class="token plain-text">\n  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode<span class="token punctuation">,</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<h2 id="nei-rong-wei-zhi" tabindex="-1">\u5185\u5bb9\u4f4d\u7f6e</h2>\n<p>\u901a\u8fc7 <code>contentPosition</code> \u6307\u5b9a\u5185\u5bb9\u6240\u5728\u4f4d\u7f6e\u3002</p>\n<pre class="language-tsx"><code class="language-tsx"><span class="token keyword">import</span> <span class="token punctuation">{</span> Divider <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span><span class="token plain-text">\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne\n      merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen,\n      quo modo.\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Divider</span></span> <span class="token attr-name">contentPosition</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>right<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span><span class="token plain-text">\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne\n      merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen,\n      quo modo.\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span><span class="token plain-text">\n  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode<span class="token punctuation">,</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<h2 id="xu-xian" tabindex="-1">\u865a\u7ebf</h2>\n<p>\u6dfb\u52a0 <code>dashed</code> \u5c5e\u6027\u4f7f\u5206\u5272\u7ebf\u6e32\u67d3\u4e3a\u865a\u7ebf\u3002</p>\n<pre class="language-tsx"><code class="language-tsx"><span class="token keyword">import</span> <span class="token punctuation">{</span> Divider <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span><span class="token plain-text">\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne\n      merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen,\n      quo modo.\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Divider</span></span> <span class="token attr-name">dashed</span> <span class="token punctuation">/></span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span><span class="token plain-text">\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne\n      merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen,\n      quo modo.\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span><span class="token plain-text">\n  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode<span class="token punctuation">,</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<h2 id="api" tabindex="-1">API</h2>\n<div class=\'table-wrapper\'><table>\n<thead>\n<tr>\n<th>\u53c2\u6570</th>\n<th>\u8bf4\u660e</th>\n<th>\u7c7b\u578b</th>\n<th>\u9ed8\u8ba4\u503c</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>dashed</td>\n<td>\u662f\u5426\u4f7f\u7528\u865a\u7ebf</td>\n<td><code>boolean</code></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>hairline</td>\n<td>\u662f\u5426\u4f7f\u7528 <code>0.5px</code> \u7ebf</td>\n<td><code>boolean</code></td>\n<td><code>true</code></td>\n</tr>\n<tr>\n<td>contentPosition</td>\n<td>\u5185\u5bb9\u4f4d\u7f6e</td>\n<td><code>\'left\' | \'right\' | \'center\'</code></td>\n<td><code>center</code></td>\n</tr>\n</tbody>\n</table>\n</div>',meta:{resourcePath:"/home/runner/work/fnx-ui/fnx-ui/packages/fnx-ui/src/divider/index.zh-CN.md"}}}}]);