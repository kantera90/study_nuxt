<template>
<div class="contents">
<pre class="hljs"><code><div>
////////////////////////////////////////////////////////////////////

＋　　　＋
　　∧ ＿ ∧ 　＋ ﾊﾟｰﾄ2-
　（0ﾟ・∀・）             忙しい人のためのHTML/CSSってなんぞや！
　（0ﾟ∪ ∪ ＋
　と＿_）__）　＋


--------------------------------------------------------------------

            ★INDEX

            ●発表後にいただいた質問
            ●明示的アウトライン・暗黙的アウトライン
            ●このタグの中には何がいれられるのか？(多分次回)
            ●CSSについて触れていこう。(多分次回)


////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////

                    前回発表後にいただいた質問

////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////


--------------------------------------------------------------------


■ 明示的アウトラインと、暗黙的アウトライン
  の違いについて、そんなに変わらないように見えました。
  明示的アウトラインはそんなにわかりやすいかな？

  暗黙的アウトラインをきれいに書きすぎましたね...汗
  意図的に汚く書くって大変だという気付き...

　⇒ はい！とにかく次行ってみよう！


--------------------------------------------------------------------








































////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////

＋　　　＋
　　∧ ＿ ∧ 　＋ ｵｶﾜﾘー
　（0ﾟ・∀・）　　　｛　　明示的アウトライン・暗黙的アウトライン
　（0ﾟ∪ ∪ ＋
　と＿_）__）　＋

////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////

--------------------------------------------------------------------


■ 文章の概要を表す「アウトライン」

HTML5のコーディングでは「アウトライン」を強く意識しながら
進める必要がある。

なぜか？

アウトラインを意識した文章構造は検索エンジンがが解釈しやすい。
こういったマークアップは検索エンジンからの評価も高くなると考えられ、
SEOを意識するうえでは重要な概念といえるだけでなく、
アクセシビリティやメンテナンス性の向上にもつながります。（前回同様）

では、アウトラインとはそもそもなんぞや？
アウトラインとは、一般的に「あらすじ」や「概要」といった意味で、
HTMLおいては「文章の概要」と考えてよい。
具体的な例でいえば、「本の目次のようなもの」が一番しっくりくる。


--------------------------------------------------------------------


■ 暗黙的アウトライン

&lt;h1&gt;猫について&lt;/h1&gt;
&lt;p&gt;思いのたけをかたります&lt;/p&gt;
&lt;h2&gt;ねこはかわいい&lt;/h2&gt;
&lt;p&gt;ねこがかわいいのは常識ですが改めてその理由を考えてみます。&lt;/p&gt;
&lt;ul&gt;
  &lt;li&gt;もふもふだから&lt;/li&gt;
  &lt;li&gt;ねこだから&lt;/li&gt;
&lt;/ul&gt;
&lt;p&gt;納得ですね&lt;/p&gt;
&lt;h2&gt;ねこは、つよい&lt;/h2&gt;
&lt;p&gt;実は、ねこは強いのです。人間程度じゃかないません&lt;/p&gt;
&lt;h3&gt;ねこ vs 人間&lt;/h3&gt;
&lt;p&gt;人間は刀をもって猫と対等という意見がありますが、あれは嘘です&lt;/p&gt;
&lt;p&gt;かわいすぎで攻撃できないからです。&lt;/p&gt;
&lt;h2&gt;ねこは、不思議&lt;/h2&gt;
&lt;p&gt;ねこは、たまに広場に集合していますね。とても不思議です。&lt;/p&gt;

※これまだきれいなほうなコードね...

<nuxt-link id="doc2_outline_anmok" class="button--pink" to="/doc2_outline_anmok">doc2_outline_anmok</nuxt-link>

アウトラインは下記のようになる

//  -----------------------------------------------------------
//
//  1. ねこについて...[h1]
//      1. ねこはかわいい...[h2]
//      2. ねこは、つよい...[h2]
//            1. ねこ vs 人間...[h3]
//      3. ねこは、不思議...[h2]
//
//  -----------------------------------------------------------

新しい見出しごとにツリー階層が変わっている...
この階層のことを「セクション」と言います。


--------------------------------------------------------------------


■ 明示的アウトライン

&lt;section&gt;
  &lt;h1&gt;ねこについて&lt;/h1&gt;
  &lt;p&gt;思いのたけをかたります&lt;/p&gt;
  &lt;section&gt;
    &lt;h2&gt;ねこはかわいい&lt;/h2&gt;
    &lt;p&gt;ねこがかわいいのは常識ですが改めてその理由を考えてみます。&lt;/p&gt;
    &lt;ul&gt;
      &lt;li&gt;もふもふだから&lt;/li&gt;
      &lt;li&gt;ねこだから&lt;/li&gt;
    &lt;/ul&gt;
    &lt;p&gt;納得ですね&lt;/p&gt;
  &lt;/section&gt;
  &lt;section&gt;
    &lt;h2&gt;ねこは、つよい&lt;/h2&gt;
    &lt;p&gt;実は、ねこは強いのです。人間程度じゃかないません&lt;/p&gt;
    &lt;section&gt;
      &lt;h3&gt;ねこ vs 人間&lt;/h3&gt;
      &lt;p&gt;人間は刀をもって猫と対等という意見がありますが、あれは嘘です&lt;/p&gt;
      &lt;p&gt;かわいすぎで攻撃できないからです。&lt;/p&gt;
    &lt;/section&gt;
  &lt;/section&gt;
  &lt;section&gt;
    &lt;h2&gt;ねこは、不思議&lt;/h2&gt;
    &lt;p&gt;ねこは、たまに広場に集合していますね。とても不思議です。&lt;/p&gt;
  &lt;/section&gt;
&lt;/section&gt;


明示的アウトラインから[section]というタグが登場しました。
このタグはいったいなに？

これは、html5から新設されたセクションを明示的にするためのタグです。

[section]以外にも
● article
● aside...ややこしい
● nav
● body

などのセクションを明示的にするためのタグがあります。

<nuxt-link id="doc2_outline_meiji" class="button--pink" to="/doc2_outline_meiji">doc2_outline_meiji</nuxt-link>

さてこちらのアウトラインといえば

//  -----------------------------------------------------------
//
//  1. ねこについて...[h1]
//      1. ねこはかわいい...[h2]
//      2. ねこは、つよい...[h2]
//            1. ねこ vs 人間...[h3]
//      3. ねこは、不思議...[h2]
//
//  -----------------------------------------------------------

前回の勉強会同様。暗黙的アウトラインとおなじですね＾＾


--------------------------------------------------------------------


■ 明示的アウトラインを使ったほうがいい理由

・実はHTML5の仕様書で明示的アウトラインは推奨されている。
・コンポーネント化しやすくなる。【これ大事】

●コンポーネント化しやすくなる？
大きなwebサイトを作るときにはHTMLをパーツごとにコーディングして
それらを組み合わせていくコンポーネントコーディングという手法が
取られることがよくある。

パーツごとに、という部分が大切

仮にパーツ化の単位をセクションで区切ろうとした場合
どこから、どこまでをパーツとして扱えばいいのかという
判断材料が暗黙的アウトラインは少ない。
具体的には、見出し要素のみの暗黙的アウトラインで判別する場合、
アウトラインの手がかりになるのは見出しのレベル（h1～h6までの数字）しかない。

しかし、セクションを明示する要素を使用していれば、見出しのレベルに
かかわらず、明示されたセクションをもとにアウトラインを判別することができる。
判断材料が多い。


--------------------------------------------------------------------


時間があれば、このサイトがわかりやすいかも。
http://shibe97.tumblr.com/post/121266132377/html5%E3%81%AE%E3%82%A2%E3%82%A6%E3%83%88%E3%83%A9%E3%82%A4%E3%83%B3%E3%82%92%E6%A5%B5%E3%82%81%E3%82%8B%E3%81%9F%E3%82%81%E3%81%AE6%E3%81%A4%E3%81%AE%E3%83%AB%E3%83%BC%E3%83%AB









































////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////

＋　　　＋
　　∧ ＿ ∧ 　＋ ｱﾀﾗｼ-
　（0ﾟ・∀・）　　　   ｛　このタグの中には何がいれられるのか？
　（0ﾟ∪ ∪ ＋
　と＿_）__）　＋

////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////

--------------------------------------------------------------------

■ 昔話

  html5以前のルールでは、「ブロックレベル要素・インライン要素」の
　概念があった。（過去形）

・ブロック要素にインライン要素を入れることはOK。
・インライン要素の中にブロック要素を入れることはできない。

例：
&lt;span&gt;
  &lt;div&gt;
    &lt;p&gt;div要素・p要素はブロックレベル要素。&lt;/p&gt;
    &lt;p&gt;一番親要素のspanタグはインライン要素。&lt;/p&gt;
  &lt;/div&gt;
&lt;/span&gt;
※このマークアップは間違いの例です。

と、まぁ、上記は極端な例ですが、こんなルールがありました。
しかし、html5から上記の概念がなくなりました。


--------------------------------------------------------------------


■ なくなった代わりに
  「コンテンツモデル」という概念と
  「カテゴリー」という概念とが登場した。

● コンテンツモデル
  ある要素がどの要素を内容として持つことができるか、
  つまり子要素とできるかというルールを表す。

● カテゴリー
  似たような意味を持つタグをまとめたもの。
  分類されていないタグもある。
  複数に分類されているタグもある。

  １. メタデータコンテンツ
  ２. フローコンテンツ
  ３. セクショニングコンテンツ
  ４. ヘディングコンテンツ
  ５. フレージングコンテンツ
  ６. エンベディッドコンテンツ
  ７. インタラクティブコンテンツ
  ８. パルパブルコンテンツ
  ９. セクショニングルート
  10. フォーム関連要素
  11. ラベル化要素
  12. 送信可能要素
  13. リセット可能要素
  14. ラベル付け要素

  特に上記の中でも８までの内容は覚えておく必要がある。

  このコンテンツモデルと、カテゴリーの組み合わせで
  [このタグの中には何がいれられるのか？]
  が解決することになるのですが...

  ここからが長くなりそうな予感。笑

  次回じっくりお話しさせてください。


--------------------------------------------------------------------









































////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////


                ご清聴いただきありがとうございました。

              次回は、コンテンツモデル！？カテゴリー！？
                このタグに入れられるのは何のタグだ！

                    よろしくおねがいします！！


////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////















</div></code></pre>
</div>
</template>



<style scoped>

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

.contents {
	font-family: "Segoe WPC", "Segoe UI", "SFUIText-Light", "HelveticaNeue-Light", sans-serif, "Droid Sans Fallback";
	font-size: 14px;
	padding: 0 12px;
	line-height: 22px;
	word-wrap: break-word;
  color: #fff;
}

#code-csp-warning {
	position: fixed;
	top: 0;
	right: 0;
	color: white;
	margin: 16px;
	text-align: center;
	font-size: 12px;
	font-family: sans-serif;
	background-color:#444444;
	cursor: pointer;
	padding: 6px;
	box-shadow: 1px 1px 1px rgba(0,0,0,.25);
}

#code-csp-warning:hover {
	text-decoration: none;
	background-color:#007acc;
	box-shadow: 2px 2px 2px rgba(0,0,0,.25);
}


.contents.scrollBeyondLastLine {
	margin-bottom: calc(100vh - 22px);
}

.contents.showEditorSelection .code-line {
	position: relative;
}

.contents.showEditorSelection .code-active-line:before,
.contents.showEditorSelection .code-line:hover:before {
	content: "";
	display: block;
	position: absolute;
	top: 0;
	left: -12px;
	height: 100%;
}

.contents.showEditorSelection li.code-active-line:before,
.contents.showEditorSelection li.code-line:hover:before {
	left: -30px;
}

.vscode-light.showEditorSelection .code-active-line:before {
	border-left: 3px solid rgba(0, 0, 0, 0.15);
}

.vscode-light.showEditorSelection .code-line:hover:before {
	border-left: 3px solid rgba(0, 0, 0, 0.40);
}

.vscode-dark.showEditorSelection .code-active-line:before {
	border-left: 3px solid rgba(255, 255, 255, 0.4);
}

.vscode-dark.showEditorSelection .code-line:hover:before {
	border-left: 3px solid rgba(255, 255, 255, 0.60);
}

.vscode-high-contrast.showEditorSelection .code-active-line:before {
	border-left: 3px solid rgba(255, 160, 0, 0.7);
}

.vscode-high-contrast.showEditorSelection .code-line:hover:before {
	border-left: 3px solid rgba(255, 160, 0, 1);
}

img {
	max-width: 100%;
	max-height: 100%;
}

a {
	color: #EC008C;
	text-decoration: none;
}

a:focus,
input:focus,
select:focus,
textarea:focus {
	outline: 1px solid -webkit-focus-ring-color;
	outline-offset: -1px;
}

hr {
	border: 0;
	height: 2px;
	border-bottom: 2px solid;
}

h1 {
	padding-bottom: 0.3em;
	line-height: 1.2;
	border-bottom-width: 1px;
	border-bottom-style: solid;
}

h1, h2, h3 {
	font-weight: normal;
}

h1 code,
h2 code,
h3 code,
h4 code,
h5 code,
h6 code {
	font-size: inherit;
	line-height: auto;
}

a:hover {
	color: #EC008C;
	text-decoration: underline;
}

table {
	border-collapse: collapse;
}

table > thead > tr > th {
	text-align: left;
	border-bottom: 1px solid;
}

table > thead > tr > th,
table > thead > tr > td,
table > tbody > tr > th,
table > tbody > tr > td {
	padding: 5px 10px;
}

table > tbody > tr + tr > td {
	border-top: 1px solid;
}

blockquote {
	margin: 0 7px 0 5px;
	padding: 0 16px 0 10px;
	border-left: 5px solid;
}

code {
	font-family: Menlo, Monaco, Consolas, "Droid Sans Mono", "Courier New", monospace, "Droid Sans Fallback";
	font-size: 14px;
	line-height: 19px;
}

.contents.wordWrap pre {
	white-space: pre-wrap;
}

.mac code {
	font-size: 12px;
	line-height: 18px;
}

pre:not(.hljs),
pre.hljs code > div {
	padding: 16px;
	border-radius: 3px;
	overflow: auto;
}

/** Theming */

.vscode-light,
.vscode-light pre code {
	color: rgb(30, 30, 30);
}

.vscode-dark,
.vscode-dark pre code {
	color: #DDD;
}

.vscode-high-contrast,
.vscode-high-contrast pre code {
	color: white;
}

.vscode-light code {
	color: #A31515;
}

.vscode-dark code {
	color: #D7BA7D;
}

.vscode-light pre:not(.hljs),
.vscode-light code > div {
	background-color: rgba(220, 220, 220, 0.4);
}

.vscode-dark pre:not(.hljs),
.vscode-dark code > div {
	background-color: rgba(10, 10, 10, 0.4);
}

.vscode-high-contrast pre:not(.hljs),
.vscode-high-contrast code > div {
	background-color: rgb(0, 0, 0);
}

.vscode-high-contrast h1 {
	border-color: rgb(0, 0, 0);
}

.vscode-light table > thead > tr > th {
	border-color: rgba(0, 0, 0, 0.69);
}

.vscode-dark table > thead > tr > th {
	border-color: rgba(255, 255, 255, 0.69);
}

.vscode-light h1,
.vscode-light hr,
.vscode-light table > tbody > tr + tr > td {
	border-color: rgba(0, 0, 0, 0.18);
}

.vscode-dark h1,
.vscode-dark hr,
.vscode-dark table > tbody > tr + tr > td {
	border-color: rgba(255, 255, 255, 0.18);
}

.vscode-light blockquote,
.vscode-dark blockquote {
	background: rgba(127, 127, 127, 0.1);
	border-color: rgba(0, 122, 204, 0.5);
}

.vscode-high-contrast blockquote {
	background: transparent;
	border-color: #fff;
}

/* Tomorrow Theme */
/* http://jmblog.github.com/color-themes-for-google-code-highlightjs */
/* Original theme - https://github.com/chriskempson/tomorrow-theme */

/* Tomorrow Comment */

/* Tomorrow Red */
.hljs-variable,
.hljs-template-variable,
.hljs-tag,
.hljs-name,
.hljs-selector-id,
.hljs-selector-class,
.hljs-regexp,
.hljs-deletion {
	color: #c82829;
}

/* Tomorrow Orange */
.hljs-number,
.hljs-built_in,
.hljs-builtin-name,
.hljs-literal,
.hljs-type,
.hljs-params,
.hljs-meta,
.hljs-link {
	color: #f5871f;
}

/* Tomorrow Yellow */
.hljs-attribute {
	color: #eab700;
}

/* Tomorrow Green */
.hljs-string,
.hljs-symbol,
.hljs-bullet,
.hljs-addition {
	color: #718c00;
}

/* Tomorrow Blue */
.hljs-title,
.hljs-section {
	color: #4271ae;
}

/* Tomorrow Purple */
.hljs-keyword,
.hljs-selector-tag {
	color: #8959a8;
}

.hljs {
	display: block;
	overflow-x: auto;

	padding: 0.5em;
}

.hljs-emphasis {
	font-style: italic;
}

.hljs-strong {
	font-weight: bold;
}


/*
 * Markdown PDF CSS
 */

.contents {
	font-family:  "Meiryo", "Segoe WPC", "Segoe UI", "SFUIText-Light", "HelveticaNeue-Light", sans-serif, "Droid Sans Fallback";
}

pre {
	background-color: #f8f8f8;
	border: 1px solid #cccccc;
	border-radius: 3px;
	overflow-x: auto;
	white-space: pre-wrap;
	overflow-wrap: break-word;
}

pre:not(.hljs) {
	padding: 23px;
	line-height: 19px;
}

blockquote {
	background: rgba(127, 127, 127, 0.1);
	border-color: rgba(0, 122, 204, 0.5);
}

.emoji {
	height: 1.4em;
}

/* for inline code */
:not(pre):not(.hljs) > code {
	color: #C9AE75; /* Change the old color so it seems less like an error */
	font-size: inherit;
}

/* Page Break : use <div class="page"/> to insert page break
-------------------------------------------------------- */
.page {
	page-break-after: always;
}

.contents{
	background: #212121;
}

.contents > *{
	width: 580px;
	margin: auto;
	padding: 0;
}

.hljs{
	background: transparent;
	color: #fff;
	border: 0;
	word-break: break-all;
}

::selection {
	background: #EC008C;
}

a.button--pink {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #EC008C;
  color: #EC008C;
  text-decoration: none;
  padding: 10px 30px;
  outline: none;
}

a.button--pink:hover {
  color: #fff;
  background-color: #EC008C;
  text-decoration: none;
}
*{
	font-family: Menlo, Monaco, Consolas, "Droid Sans Mono", "Courier New", monospace, "Droid Sans Fallback";
}

</style>
