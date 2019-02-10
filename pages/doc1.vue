<template>
<div class="contents">
<pre class="hljs"><code><div>
////////////////////////////////////////////////////////////////////

＋　　　＋
　　∧ ＿ ∧ 　＋
　（0ﾟ・∀・）     忙しい人のためのHTML/CSSってなんぞや
　（0ﾟ∪ ∪ ＋
　と＿_）__）　＋


--------------------------------------------------------------------

              ★INDEX

              ●HTMLの歴史
              ●勧告までのプロセスは４段階
              ●これは覚えておきたいHTMLの概念
              ●TOYOTA CMSの画面を作った時の話


////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////

                           HTMLの歴史

////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////

もともと
CERN（欧州原子核研究機構）世界最大規模の素粒子物理学の研究所で生まれた技術

ティムバーナーズリーが考案。

膨大な資料の中から、自分の欲しい情報を効率よく探したい
科学者が入れ替わり立ち代わりで訪れるため、情報の共有がやりずらい

上記の課題を解決するために生まれた。

--------------------------------------------------------------------


膨大な資料の中から、自分の欲しい情報を効率よく探したい
⇒ハイパーテキストシステム・・・ざっくり言うと今でいうところのaタグですね...
科学者が入れ替わり立ち代わりで訪れるため、情報の共有がやりずらい
⇒サーバーに情報をためておこう


--------------------------------------------------------------------

■1990年
・世界初のサーバーとブラウザが誕生
・HTML1.0の草案が検討される。しかし、HTML1.0は草案のまま廃案。

♬夢を信じて【徳永英明】

--------------------------------------------------------------------

■1993年
・ブラウザで画像も読み込めたらいいよね。

・「Mosaic1.0ブラウザ」が公開される
⇒当時はMosaicで閲覧することを「モザイクする」といったりしていたらしいｗ

　マーク・アンドリーセンが開発
　⇒この人はのちにNetscapeを開発する人

♬渡良瀬橋【森高千里】

--------------------------------------------------------------------

■1994年
・W3Cの設立

　　. ＼：／
　・･･･☆･･･・
. ⋀,,⋀. ∩.＼ 　　ティムバーナーズリー:
(*・ω・)/ 　　　　　　　　「俺、HTMLなどの仕様を作成するんだ！」
.(つ　 ﾉ
.しーＪ

//  -----------------------------------------------------------
//
//  Web業界だけでなく、あらゆる産業において同様ですが
//  「新しい技術を世界的に広く受け入れてもらう」ことは
//  本来、とても難しいことです。
//  しかし、各国の関係者・担当者から
//  「これは国際的に認められたルールに準拠されている、確固たる技術だ」
//  というお墨付きを得られれば、
//  ほとんどの技術者は標準的にその新しい技術を使うようになるでしょう。
//  WebにおいてはそれがW3Cということになります。
//
//  -----------------------------------------------------------

♬悲しきASIAN BOY【THE YELLOW MONKEY】

--------------------------------------------------------------------

■1995年
・HTML2.0が勧告
・HTML3.0が勧告

♬サマーヌード【真心ブラザーズ】

--------------------------------------------------------------------

■1996年
・CSS1.0が勧告

♬イージュー★ライダー【奥田民生】

--------------------------------------------------------------------

■1997年
・HTML3.2が勧告
・HTML4.0が勧告

♬今宵の月のように【エレファントカシマシ】

--------------------------------------------------------------------

■1998年
・XML1.0が勧告（融合素材A）
・CSS2.0が勧告

♬さまよえる蒼い弾丸【B'z】

--------------------------------------------------------------------

■1999年
・HTML4.01が勧告（融合素材B）

♬Stay Gold【Hi-STANDARD】

--------------------------------------------------------------------

■2000年
・XHTML1.0が勧告（融合!!）

♬Fired【Ben Folds】（2001年）

--------------------------------------------------------------------

■2004年
・CSS2.1が勧告

・W3Cワークショップでの出来事
　W3Cはxmlとhtmlを合わせたXHTMLを推していくつもりだった。
　しかし、XHTMLは浸透しつつもその用途はXMLよりもHTMLとして利用されることが
  ほぼ一般的であった。

　このことから、Mozilla・Apple・Operaに所属するメンバーによって「WHATWG」
  が結成される

　※WHATWGとは、Webの発展に興味を持つ人たちにより結成された、
　　HTMLとWebアプリケーションに必要なAPIの開発に取り組んでいるコミュニティ
    のことである。
　　【 Web Hypertext Application Technology Working Group 】

♬奏(かなで)【スキマスイッチ】

--------------------------------------------------------------------

■2006年

     ∧_∧ ∧_∧     ティムバーナーズリー:
    (ºωº;≡;ºωº )   「世界をXMLへとスイッチさせる試みは
    ┳┻⊂　 ﾉ                               うまく機能しなかった...」
    ┻┳|ーＪ         ⇒ブログでぼやく

♬魔法のコトバ【スピッツ】

--------------------------------------------------------------------

■2007年
・W3CとWHATWG
　「協力してHTML5標準化しようぜ」

    　　　　+　　 　*
    　 　 ∧ ∧　 .∧∞∧　*         W3C:「よろしく～」
    *　ヽ(=´ω｀)人(´ω｀*)ﾉ  　　　　　　　　　　　　　
    　.～（ O x.） （ 　 O)～　+               WHATWG:「よろしく～」
    。*　 　∪　　　　∪

♬若者のすべて【フジファブリック】

--------------------------------------------------------------------

■2008年
・HTML5草案を発表

♬宙船【TOKIO】

--------------------------------------------------------------------

■2011年頃～
・CSS3.0の策定が進んでいる。
　CSS3以降では、仕様がモジュール(部品)単位で策定される方針に変わった
　よってCSS3という単一の規格は存在しない。
  ※モジュールの詳細：https://www.flapism.jp/html/358/

♬消臭力のうた【ミゲルくん】

--------------------------------------------------------------------

■2014年
・HTML5できたー \( ^ o ^ )/ｳﾚｼｰ　15年ぶりの勧告～
　※勧告された

♬ray【BUMP OF CHICKEN】

--------------------------------------------------------------------

■2016年
・HTML5.1が勧告
　⇒picture要素が使えるようになった

♬世界に一つだけの花【SMAP】

--------------------------------------------------------------------

■2018年頃～

・HTML 5.2が勧告
　CSS4.0の策定、草案、勧告が始まった

♬ミライのテーマ【山下達郎】

--------------------------------------------------------------------

                           今日に至る！

--------------------------------------------------------------------
































////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////

＋　　　＋
　　∧ ＿ ∧ 　＋
　（0ﾟ・∀・）　　　｛　　勧告までのプロセスは４段階
　（0ﾟ∪ ∪ ＋
　と＿_）__）　＋

////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////

--------------------------------------------------------------------


１、作業草稿
W3Cやワーキンググループ（WHATWG含）といったコミュニティでのレビューがおこ
なわれる段階
大まかな規格文書が作られる

２、勧告候補
規格文書の重要な部分が決まる段階
その内容はこの時点で修正されることも多い

３、勧告案
勧告のために「ほとんど修正が必要ないレベル」の規格文書がW3Cに提出される段階
実装に関する問題が見受けられない場合は勧告へと進む

４、勧告
規格策定の最終段階。
この段階に進むまでにその規格は理論面と実用面で幅広いレビューとテストを受け
規格に携わる者から多くの支持を集めている必要がある


--------------------------------------------------------------------






















////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////

＋　　　＋
　　∧ ＿ ∧ 　＋
　（0ﾟ・∀・）　　　｛　　これは覚えておきたいHTMLの概念
　（0ﾟ∪ ∪ ＋
　と＿_）__）　＋

////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////

--------------------------------------------------------------------

■マークアップ

HTML構造に意味付けをすること、

・見出しはhタグ
・文章はpタグ
・リストはul(ol) liタグ
・などなど、

最適な意味付けをするためには、いろんなタグを覚える必要がある。

---ex---

&lt;h1 class=&quot;title&quot;&gt;ここにタイトルが入ります&lt;/h1&gt;
&lt;p&gt;h1タグの説明をする文章がここにはいる&lt;/p&gt;
&lt;ol&gt;
  &lt;li&gt;h1タグをわかりやすく説明するためのリスト1&lt;/li&gt;
  &lt;li&gt;h1タグをわかりやすく説明するためのリスト1&lt;/li&gt;
  &lt;li&gt;h1タグをわかりやすく説明するためのリスト1&lt;/li&gt;
&lt;/ol&gt;

htmlタグは英単語の省略して定義されていることが多い。
これを意識しておくとかなり覚えやすい。

&lt;h1&gt;...heading1
&lt;h2&gt;...heading2
&lt;h3&gt;...以下同様
&lt;p&gt;....paragraph
&lt;ol&gt;...ordered-list
&lt;ul&gt;...unordered-list
&lt;li&gt;...list-item

--------------------------------------------------------------------

■アウトライン

hタグを使って文章構造に見出しのツリーを構築できる。
アウトラインを意識した文章構造は検索エンジンがが解釈しやすい。
こういったマークアップは検索エンジンからの評価も高くなると考えられ、
SEOを意識するうえでは重要な概念といえるだけでなく、
アクセシビリティやメンテナンス性の向上にもつながります。


アウトライン構造には

１、明示的アウトライン構造
２、暗黙的アウトライン構造

の２パターンあります。


---１、明示的アウトライン構造の例---

&lt;section&gt;
  &lt;h1 class=&quot;title&quot;&gt;
    &lt;span&gt;htmlの概念を抑えて検索エンジンにやさしい文章構造&lt;/span&gt;
  &lt;/h1&gt;
  &lt;p&gt;h1タグの説明をする文章がここにはいる&lt;/p&gt;
  &lt;ol&gt;
    &lt;li&gt;h1タグをわかりやすく説明するためのリスト1&lt;/li&gt;
    &lt;li&gt;h1タグをわかりやすく説明するためのリスト2&lt;/li&gt;
    &lt;li&gt;h1タグをわかりやすく説明するためのリスト3&lt;/li&gt;
  &lt;/ol&gt;
  &lt;section&gt;
    &lt;h2&gt;やさしい文章構造のためのポイント１&lt;/h2&gt;
    &lt;p&gt;h1タグの説明をする文章がここにはいる&lt;/p&gt;
    &lt;ol&gt;
      &lt;li&gt;ポイント１をわかりやすく説明するためのリスト1&lt;/li&gt;
      &lt;li&gt;ポイント１をわかりやすく説明するためのリスト2&lt;/li&gt;
      &lt;li&gt;ポイント１をわかりやすく説明するためのリスト3&lt;/li&gt;
    &lt;/ol&gt;
  &lt;/section&gt;
  &lt;section&gt;
    &lt;h2&gt;やさしい文章構造のためのポイント２&lt;/h1&gt;
    &lt;p&gt;ポイント２の説明をする文章がここにはいる&lt;/p&gt;
    &lt;ol&gt;
      &lt;li&gt;ポイント２をわかりやすく説明するためのリスト1&lt;/li&gt;
      &lt;li&gt;ポイント２をわかりやすく説明するためのリスト2&lt;/li&gt;
      &lt;li&gt;ポイント２をわかりやすく説明するためのリスト3&lt;/li&gt;
    &lt;/ol&gt;
  &lt;/section&gt;
  &lt;section&gt;
    &lt;h2&gt;やさしい文章構造のためのポイント３&lt;/h1&gt;
    &lt;p&gt;ポイント３の説明をする文章がここにはいる&lt;/p&gt;
    &lt;ol&gt;
      &lt;li&gt;ポイント３をわかりやすく説明するためのリスト1&lt;/li&gt;
      &lt;li&gt;ポイント３をわかりやすく説明するためのリスト2&lt;/li&gt;
      &lt;li&gt;ポイント３をわかりやすく説明するためのリスト3&lt;/li&gt;
    &lt;/ol&gt;
  &lt;/section&gt;
&lt;/section&gt;

上記のアウトラインは下記のようになる

//  -----------------------------------------------------------
//
//  1. htmlの概念を抑えて検索エンジンにやさしい文章構造
//      1.1. やさしい文章構造のためのポイント１
//      1.2. やさしい文章構造のためのポイント２
//      1.3. やさしい文章構造のためのポイント３
//
//  -----------------------------------------------------------


---２、暗黙的アウトライン構造の例---

  &lt;h1 class=&quot;title&quot;&gt;
    &lt;span&gt;htmlの概念を抑えて検索エンジンにやさしい文章構造&lt;/span&gt;
  &lt;/h1&gt;
  &lt;p&gt;h1タグの説明をする文章がここにはいる&lt;/p&gt;
  &lt;ol&gt;
    &lt;li&gt;h1タグをわかりやすく説明するためのリスト1&lt;/li&gt;
    &lt;li&gt;h1タグをわかりやすく説明するためのリスト2&lt;/li&gt;
    &lt;li&gt;h1タグをわかりやすく説明するためのリスト3&lt;/li&gt;
  &lt;/ol&gt;
  &lt;h2&gt;やさしい文章構造のためのポイント１&lt;/h2&gt;
  &lt;p&gt;h1タグの説明をする文章がここにはいる&lt;/p&gt;
  &lt;ol&gt;
    &lt;li&gt;ポイント１をわかりやすく説明するためのリスト1&lt;/li&gt;
    &lt;li&gt;ポイント１をわかりやすく説明するためのリスト2&lt;/li&gt;
    &lt;li&gt;ポイント１をわかりやすく説明するためのリスト3&lt;/li&gt;
  &lt;/ol&gt;
  &lt;h2&gt;やさしい文章構造のためのポイント２&lt;/h1&gt;
  &lt;p&gt;ポイント２の説明をする文章がここにはいる&lt;/p&gt;
  &lt;ol&gt;
    &lt;li&gt;ポイント２をわかりやすく説明するためのリスト1&lt;/li&gt;
    &lt;li&gt;ポイント２をわかりやすく説明するためのリスト2&lt;/li&gt;
    &lt;li&gt;ポイント２をわかりやすく説明するためのリスト3&lt;/li&gt;
  &lt;/ol&gt;
  &lt;h2&gt;やさしい文章構造のためのポイント３&lt;/h1&gt;
  &lt;p&gt;ポイント３の説明をする文章がここにはいる&lt;/p&gt;
  &lt;ol&gt;
    &lt;li&gt;ポイント３をわかりやすく説明するためのリスト1&lt;/li&gt;
    &lt;li&gt;ポイント３をわかりやすく説明するためのリスト2&lt;/li&gt;
    &lt;li&gt;ポイント３をわかりやすく説明するためのリスト3&lt;/li&gt;
  &lt;/ol&gt;

上記のアウトラインは下記のようになる

//  -----------------------------------------------------------
//
//  1. htmlの概念を抑えて検索エンジンにやさしい文章構造
//      1.1. やさしい文章構造のためのポイント１
//      1.2. やさしい文章構造のためのポイント２
//      1.3. やさしい文章構造のためのポイント３
//
//  -----------------------------------------------------------


上記２つのアウトラインは同じですが、
明示的アウトラインと、暗黙的アウトラインには下記のような違いがありま
す。


・自分自身と同レベル以上の見出しが出現した場合、暗黙的に閉じられる

・明示的なアウトラインは、HTML5のセクショニング・コンテンツ、または
  セクショニング・ルートによって生成される
・明示的なアウトライン内に出てくる一番最初の見出しのレベルが、その
  アウトラインのレベルになる
・明示的なアウトライン内で、そのアウトラインを表す見出しレベルと同等
  以上の見出しタグが出現した場合、暗黙的に閉じられる


・暗黙的なアウトラインは、見出しタグを使用すると自動的に生成される
・暗黙的なアウトライン内で、明示的なアウトラインが現れた場合、明示
  的に閉じられる



時間があれば、このサイトがわかりやすいかも。
http://shibe97.tumblr.com/post/121266132377/html5%E3%81%AE%E3%82%A2%E3%82%A6%E3%83%88%E3%83%A9%E3%82%A4%E3%83%B3%E3%82%92%E6%A5%B5%E3%82%81%E3%82%8B%E3%81%9F%E3%82%81%E3%81%AE6%E3%81%A4%E3%81%AE%E3%83%AB%E3%83%BC%E3%83%AB



--------------------------------------------------------------------

■ aタグ？buttonタグの見極め

ハイパーリンクはhtmlの根幹。

最近流行っているSPA ( Single Page Application )って
画面遷移はあるものの、ページ移動はほとんどないなぁ

ってことは、あれ？
...ティムの言ってたハイパーリンクは使えないってことだ...

なのでSPAで、DOMの更新だけで起こる遷移はbuttonタグをトリガーになるように
意識してます！
※昔、高野さんに教えてもらったことでもあるんだなぁ。

//  -----------------------------------------------------------
//
//  ※余談1
//  大八木はサーバーサイドで処理されたHTMLの構造は
//  「HTML構造」
//  ブラウザに描画された結果のHTML構造を
//  「DOM構造」
//  と、使い分けるようにしています。
//  でもこれ多分正しくない...いつか正しい答えが見つかりますように
//
//  -----------------------------------------------------------
//
//  ※余談2：「リンクをクリックして別ページにジャンプすること」を一言
//    で表現するとの巻
//
//  遷移は、画面の状態が変わることを指した言葉。
//  「リンクをクリックして別ページにジャンプすること」は遷移の意味を
//  あらわす１つに過ぎない
//
//  別ページにジャンプしないで、画面の一部分が変化すること、
//  例えば、入力フォームでエラーになったときにエラーメッセージが入力
//  インプットの周辺に
//  表示されるという場合であっても遷移。
//  例えば、タブUIの切り替えボタンをクリックしたときに起こる画面の
//  変化も遷移。
//
//  このことを踏まえると、
//  「リンクをクリックして別ページにジャンプすること」は
//  「ページ移動する」という言葉で表現したほうが誤解がないと思う。
//
//  -----------------------------------------------------------

--------------------------------------------------------------------


























////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////

＋　　　＋
　　∧ ＿ ∧ 　＋
　（0ﾟ・∀・）　　　｛　　TOYOTA CMSの画面を作った時の話
　（0ﾟ∪ ∪ ＋
　と＿_）__）　＋

////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////


■ URLは取り急ぎっ！　これだ！
https://vroom.dialonet.jp/cmstoyotajp/http/common/static/mod/windowList.html


--------------------------------------------------------------------

■ 取り入れた新技術や概念（その当時の）

・SVGスプライト
　⇒１つのsvgファイルに複数のsvgをまとめて記述しておいて。
　　特定のsvgを使いたいときにアクセスして利用する技術
　　
・SMACSS
　⇒クラス属性値に意味と秩序を持たせたら、破綻しにくいスタイル設定が
　　実現しやくすくなるね！と、いう考え方(ガイドライン)の１つ。
　　ほかにはOOCSS, BEM, MCSS, FLOCSSなどといったガイドラインがある。

--------------------------------------------------------------------

■ SMACSS
１コンポーネントのcssクラス名・設定をカテゴライズごとに分類し、
カテゴライズことに決まったプレフィックスを付けて役割を明示的にする。

・カテゴライズは下記

　・Base
　　⇒リセットcss, サイト共通設定
　　　クラス名のプレフィックスは特になし。
　　　なぜならタグに対して直接設定をしていくから。

　・Layout
　　⇒サイトのレイアウト、ヘッダ、フッタなど
　　　クラス名のプレフィックスは'l-'や'layout-'

　・Module
　　⇒ほとんどがこのカテゴリに分類される
　　　クラス名のプレフィックスは'mod-'や'module-'
　　　プレフィックスは付けても付けなくてもOK!
　　　⇒スタイルのほとんどの記述がmoduleに該当するため

　・State
　　⇒状態が変化するコンポーネントに付与するクラスは当カテゴリ
　　　クラス名のプレフィックスは'is-'

　・Theme
　　⇒stateよりも大きい意味で変化する場合につかう。
　　　たとえば、キャンペーンページだから色違いのヘッダにしたい場合など
　　　クラス名のプレフィックスは'theme-'

--------------------------------------------------------------------

例えばsmacssの命名規則の例

&lt;h1 class=&quot;mod-heading&quot;&gt;
  &lt;span class=&quot;mod-heading-subtitle&quot;&gt;2018年&lt;/span&gt;
  &lt;span class=&quot;mod-heading-title&quot;&gt;
    TOKIO不在！紅白歌合戦はどうなる！？
  &lt;/span&gt;
&lt;/h1&gt;

&lt;style&gt;
.heading .heading-subtitle{
  background: #f00;
  font-weight: bold;
  font-size: 1.0rem;
  line-height: 1.3;
}
.heading .heading-title{
  font-weight: bold;
  font-size: 1.8rem;
  line-height: 2.1;
}
&lt;/style&gt;

要素セレクタを避けるのがsmacssの考え方。
.fld span{}

--------------------------------------------------------------------
































////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////


                  ご清聴いただきありがとうございました。
                  このような機会をいただき、感謝です。

                      ありがとうございました。


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
	color: #4080D0;
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
	color: #4080D0;
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
</style>

<style>
/* Tomorrow Theme */
/* http://jmblog.github.com/color-themes-for-google-code-highlightjs */
/* Original theme - https://github.com/chriskempson/tomorrow-theme */

/* Tomorrow Comment */
.hljs-comment,
.hljs-quote {
	color: #8e908c;
}

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
	color: #4d4d4c;
	padding: 0.5em;
}

.hljs-emphasis {
	font-style: italic;
}

.hljs-strong {
	font-weight: bold;
}
</style>

<style>
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

*{
	font-family: Menlo, Monaco, Consolas, "Droid Sans Mono", "Courier New", monospace, "Droid Sans Fallback";
}

</style>
