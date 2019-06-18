<template>
<div class="contents"><div>

<h1 id="aws%E3%81%A7wordpress%E3%82%92%E5%B0%8E%E5%85%A5%E3%81%99%E3%82%8B%EF%BC%88%EF%BC%91%EF%BC%89">AWSを使ったWordpressの導入（１）</h1>
<p>AWSサミット行ってみたい<br>
けど、AWSのこと知らなさすぎる...<br>
勉強しなきゃ！で、はじめた試み。</p>
<h2 id="%E3%83%89%E3%83%A1%E3%82%A4%E3%83%B3%E3%81%AE%E5%8F%96%E5%BE%97">ドメインの取得</h2>
<p>obenkyo.siteドメインを取得しました。<br>
お名前ドットコムで取得。</p>
<p>理由は２つ。</p>
<ul>
<li>レジストラがいい！（リセラは嫌だ）</li>
<li>GMOインターネット参加であるのもポイント</li>
</ul>
<p>※注意<br>
自分のサイトはブックマークなどはしないでください。<br>
１年後に閉じる予定のドメインなので、エロサイトとかに誘導される可能性があります。</p>
<h2 id="%E3%83%89%E3%83%A1%E3%82%A4%E3%83%B3%E3%81%AE%E3%83%8D%E3%83%BC%E3%83%A0%E3%82%B5%E3%83%BC%E3%83%90%E3%82%92aws%E3%81%AEroute53%E3%81%AB%E5%A4%89%E6%9B%B4%E3%81%99%E3%82%8B">ドメインのネームサーバをAWSのRoute53に変更する</h2>
<p>AWSのRoute53でobenkyo.siteのホストゾーンを作成</p>
<p>そうすると、</p>
<ul>
<li>お名前ドットコム側のネームサーバ</li>
<li>Route53側のネームサーバ</li>
</ul>
<p>の２つが存在することになる。</p>
<p>新しく作ったRoute53側を見るように設定する必要がある<br>
⇒お名前.com側にログインしてRoute53のレコードを参照するように設定</p>
<h2 id="aws%E3%81%AEcloud-watch%E3%81%AE%E8%A8%AD%E5%AE%9A">AWSのCloud Watchの設定</h2>
<p>2ドル以上使ったらSMSに通知がくるように(無料枠内)</p>
<h2 id="%E3%83%AB%E3%83%BC%E3%83%88%E3%83%A6%E3%83%BC%E3%82%B6%E3%83%BC%E3%82%92%E4%BD%BF%E3%82%8F%E3%81%AA%E3%81%84">ルートユーザーを使わない</h2>
<p>AWSのIAMでユーザを追加し、下位権限を与える</p>
<h2 id="mfa%E3%81%AE%E8%A8%AD%E5%AE%9A">MFAの設定</h2>
<p>Authenticatorの設定
一定時間ごとにパスワードが変更する仕様を実現</p>
<h2 id="aws%E3%82%92%E3%81%A9%E3%81%93%E3%81%AE%E3%83%AA%E3%83%BC%E3%82%B8%E3%83%A7%E3%83%B3%E3%81%A7%E4%BD%BF%E3%81%86%E3%81%AE%E3%81%8B%EF%BC%9F">AWSをどこのリージョンで使うのか？</h2>
<p>東京に設定</p>
<h2 id="cloud-trail%E3%81%A7%E3%81%84%E3%81%A4%E3%81%A0%E3%82%8C%E3%81%8C%E3%83%92%E3%82%B9%E3%83%88%E3%83%AA%E3%83%BC%E3%82%92%E8%A6%8B%E3%82%8C%E3%82%8B%E3%81%93%E3%81%A8%E3%82%92%E7%A2%BA%E8%AA%8D">Cloud Trailでいつだれがヒストリーを見れることを確認</h2>
<p>安心感が得られます</p>
<h2 id="ec2%E3%82%92%E4%BD%BF%E3%81%A3%E3%81%A6%E3%82%A4%E3%83%B3%E3%82%B9%E3%82%BF%E3%83%B3%E3%82%B9%EF%BC%88%E3%82%B5%E3%83%BC%E3%83%90%EF%BC%89%E3%82%92%E7%AB%8B%E3%81%A6%E3%82%8B">EC2を使ってインスタンス（サーバ）を立てる</h2>
<h3 id="os%E3%81%AFamazon-linux">OSはAmazon Linux</h3>
<p>バグや脆弱性が発見されたときに修正バージョンを出してくれるからAmazon製<br>
※自分でアンテナを張っておく必要がある</p>
<p>ストレージはEBS(Elastic Block Store)<br>
8GB SSD</p>
<p>-- コマンドライン --</p>
<ul>
<li>MySQLクライアント</li>
<li>php</li>
<li>Apache
を導入</li>
</ul>
<p>その他、時刻・言語の設定</p>
<h2 id="%E7%A9%B4%E3%81%82%E3%81%91%E4%BD%9C%E6%A5%AD">穴あけ作業</h2>
<p>-- マネジメントコンソール --<br>
obenkyo.siteがhttpでつながるように穴あけ作業<br>
※80番を許さないようなインスタンスのセキュリティの為</p>
<h2 id="%E3%83%90%E3%83%BC%E3%83%81%E3%83%A3%E3%83%AB%E3%83%9B%E3%82%B9%E3%83%88%E3%81%AE%E8%A8%AD%E5%AE%9A">バーチャルホストの設定</h2>
<p>-- コマンドライン --</p>
<ul>
<li>httpd.confでwwwの設定</li>
</ul>
<p>-- マネジメントコンソール --</p>
<ul>
<li>再度Route53の設定</li>
<li>wwwのAレコードを作る</li>
</ul>
<h2 id="%E3%83%87%E3%83%BC%E3%82%BF%E3%83%99%E3%83%BC%E3%82%B9%E3%82%92%E7%AB%8B%E3%81%A6%E3%82%8B">データベースを立てる</h2>
<p>-- マネジメントコンソール --<br>
Amazon RDS(Relational Database Service)でMySQLのインスタンスを立てる<br>
EC2インスタンスからこのDBに接続できるように穴あけ作業</p>
<h2 id="wordpress%E5%B0%8E%E5%85%A5">Wordpress導入</h2>
<p>-- コマンドライン<br>
wpをtarでダウンロードする<br>
ルートに解凍する</p>
<p>-- ブラウザ<br>
WPのデータベースの接続設定、からのインストール</p>
<h2 id="%E2%86%90%E3%82%A4%E3%83%9E%E3%82%B3%E3%82%B3">←イマココ</h2>
<h2 id="%E4%BB%8A%E5%BE%8C%E3%80%81">今後、</h2>
<ul>
<li>wpの画像の保存をS3にする</li>
<li>wpのログイン画面のURL変更</li>
<li>認証をもう１段階追加する。</li>
<li>obenkyo.siteのデザイン改修</li>
</ul>
<h2 id="%E4%BD%BF%E3%81%A3%E3%81%9Faws%E3%81%AE%E3%82%B5%E3%83%BC%E3%83%93%E3%82%B9">使ったAWSのサービス</h2>
<ul>
<li>IAM (Identity and Access Management)</li>
<li>Route53</li>
<li>Cloud Watch</li>
<li>MFA (Multi-Factor Authentication)</li>
<li>Cloud Trail</li>
<li>EC2 (Elastic Compute Cloud)]</li>
<li>EBS(Elastic Block Store)</li>
<li>RDS(Relational Database Service)</li>
</ul>








</div>
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

.contents {
  padding-top: 680px;
  padding-bottom: 380px;
}
.contents h1,
.contents h2,
.contents h3{
  font-weight: bold;
}

.contents h1{
  margin-top: 20px;
  margin-bottom: 20px;
}
.contents h2{
  margin-top: 680px;
  margin-bottom: 10px;
}
.contents h3{
  margin-top: 20px;
  margin-bottom: 5px;
}

</style>
