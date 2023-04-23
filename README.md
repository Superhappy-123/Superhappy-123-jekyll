<div align="center">
  <br>

  <a href="https://github.com/jeffreytse/jekyll-theme-yat">
    <img alt="jekyll-theme-yat →~ jekyll" src="https://user-images.githubusercontent.com/9413601/106478481-346fdf00-64e4-11eb-9385-1ab5329c3234.png" width="600">
  </a>

  <h1>JEKYLL YAT THEME</h1>

</div>

<h4 align="center">
  <a href="https://jekyllrb.com/" target="_blank"><code>Jekyll</code></a> theme for elegant writers.
</h4>

<p align="center">
  <a href="https://jeffreytse.github.io/jekyll-theme-yat">
    <img src="https://github.com/jeffreytse/jekyll-theme-yat/workflows/Github%20Pages/badge.svg"
      alt="Github Pages" />
  </a>

  <a href="https://badge.fury.io/rb/jekyll-theme-yat">
    <img src="https://badge.fury.io/rb/jekyll-theme-yat.svg"
      alt="Gem Version" />
  </a>

  <a href="https://opensource.org/licenses/MIT">
    <img src="https://img.shields.io/badge/License-MIT-brightgreen.svg"
      alt="License: MIT" />
  </a>

  <a href="https://liberapay.com/jeffreytse">
    <img src="https://img.shields.io/liberapay/goal/jeffreytse.svg?logo=liberapay"
      alt="Donate (Liberapay)" />
  </a>

  <a href="https://patreon.com/jeffreytse">
    <img src="https://img.shields.io/badge/support-patreon-F96854.svg?style=flat-square"
      alt="Donate (Patreon)" />
  </a>

  <a href="https://ko-fi.com/jeffreytse">
  <img height="20" src="https://www.ko-fi.com/img/githubbutton_sm.svg"
  alt="Donate (Ko-fi)" />
  </a>
</p>

<div align="center">
  <sub>Built with ❤︎ by
  <a href="https://jeffreytse.net">jeffreytse</a> and
  <a href="https://github.com/jeffreytse/jekyll-theme-yat/graphs/contributors">contributors </a>
  </sub>
</div>

<br>

Hey, nice to meet you, you found this [Jekyll][jekyll] theme. Here the
_YAT (Yet Another Theme)_ is a modern responsive theme. It's quite
clear, clean and neat for writers and posts. **If you are an elegant
writer and focus on content, don't miss it.**

<p align="center">
Like this elegant theme? You can give it a star or sponsor me!<br>
I will respect your crucial support and say THANK YOU!
</p>

<p align="center">

  <img src="https://user-images.githubusercontent.com/9413601/91842897-6a840b00-ec87-11ea-95ca-52abcc1ac063.png" alt="demo-screenshot" width="100%"/>

</p>

<h4 align="center">BANNER</h4>

<p align="center">

  <img src="https://user-images.githubusercontent.com/9413601/123897812-ae729a00-d996-11eb-96b8-b76ba926f555.gif" alt="demo-screenshot" width="100%"/>

</p>

## Features

- Support beautiful **Night Mode**.
- Modern responsive web design.
- Full layouts `home`, `post`, `tags`, `archive` and `about`.
- Uses font awesome 5 for icons.
- Beautiful page banner with image and video.
- Beautiful Syntax Highlight using [highlight.js][highlight-js].
- RSS support using [Jekyll Feed][jekyll-feed] gem.
- Optimized for search engines using [Jekyll Seo Tag][jekyll-seo-tag] gem.
- Sitemap support using [Jekyll Sitemap][jekyll-sitemap] gem.
- Complex and flexible table support using [Jekyll Spaceship][jekyll-spaceship] gem.
- MathJAX and LaTeX optional support using [Jekyll Spaceship][jekyll-spaceship] gem.
- Media (Youtube, Spotify, etc.) support using [Jekyll Spaceship][jekyll-spaceship] gem.
- Diagram (PlantUML, Mermaid) support using [Jekyll Spaceship][jekyll-spaceship] gem.
- Google Translation support.
- New post tag support.

Also, visit the [Live Demo][yat-live-demo] site for the theme.

## Installation

There are three ways to install:

- As a [gem-based theme](https://jekyllrb.com/docs/themes/#understanding-gem-based-themes).
- As a [remote theme](https://blog.github.com/2017-11-29-use-any-theme-with-github-pages/) (GitHub Pages compatible).
- Forking/directly copying all of the theme files into your project.

### Gem-based Theme Method

Add this line to your Jekyll site's `Gemfile`:

```ruby
gem "jekyll-theme-yat"
```

And add this line to your Jekyll site's `_config.yml`:

```yaml
theme: jekyll-theme-yat
```

And then execute:

```bash
$ bundle
```

Or install it yourself as:

```bash
$ gem install jekyll-theme-yat
```

### Remote Theme Method with GitHub Pages

Remote themes are similar to Gem-based themes, but do not require `Gemfile` changes or whitelisting making them ideal for sites hosted with GitHub Pages.

To install:

Add this line to your Jekyll site's `Gemfile`:

```ruby
gem "github-pages", group: :jekyll_plugins
```

And add this line to your Jekyll site's `_config.yml`:

```yaml
# theme: owner/name --> Don't forget to remove/comment the gem-based theme option
remote_theme: "jeffreytse/jekyll-theme-yat"
```

And then execute:

```bash
$ bundle
```

### GitHub Pages without limitation

GitHub Pages runs in `safe` mode and only allows [a set of whitelisted plugins/themes](https://pages.github.com/versions/). **In other words, the third-party gems will not work normally**.

To use the third-party gem in GitHub Pages without limitation:

Here is a GitHub Action named [jekyll-deploy-action](https://github.com/jeffreytse/jekyll-deploy-action) for Jekyll site deployment conveniently. 👍

## Usage

Add or update your available layouts, includes, sass and/or assets.

## Development

To set up your environment to develop this theme, run `bundle install`.

Your theme is setup just like a normal Jekyll site! To test your theme, run `bundle exec jekyll serve` and open your browser at `http://localhost:4000`. This starts a Jekyll server using your theme. Add pages, documents, data, etc. like normal to test your theme's contents. As you make modifications to your theme and to your content, your site will regenerate and you should see the changes in the browser after a refresh, just like normal.

When your theme is released, only the files in `_data`, `_layouts`, `_includes`, `_sass` and `assets` tracked with Git will be bundled.
To add a custom directory to your theme-gem, please edit the regexp in `jekyll-theme-yat.gemspec` accordingly.

## Contributing

Issues and Pull Requests are greatly appreciated. If you've never contributed to an open source project before I'm more than happy to walk you through how to create a pull request.

You can start by [opening an issue](https://github.com/jeffreytse/jekyll-theme-yat/issues/new) describing the problem that you're looking to resolve and we'll go from there.

## License

This theme is licensed under the [MIT license](https://opensource.org/licenses/mit-license.php) © JeffreyTse.

<!-- External links -->

[jekyll]: https://jekyllrb.com/
[yat-git-repo]: https://github.com/jeffreytse/jekyll-theme-yat/
[yat-live-demo]: https://jeffreytse.github.io/jekyll-theme-yat/
[jekyll-spaceship]: https://github.com/jeffreytse/jekyll-spaceship
[jekyll-seo-tag]: https://github.com/jekyll/jekyll-seo-tag
[jekyll-sitemap]: https://github.com/jekyll/jekyll-sitemap
[jekyll-feed]: https://github.com/jekyll/jekyll-feed
[highlight-js]: https://github.com/highlightjs/highlight.js



<!--
 このコードは、Jekyllという静的サイトジェネレーターで動作するテーマ「JEKYLL YAT THEME」のREADMEファイル。
 READMEファイルは、ソフトウェアの説明、インストール方法、使用方法、
 ライセンス情報、貢献者リストなどを提供するためのファイルで、
 一般的にオープンソースプロジェクトで使用される。

以下は、READMEファイルのコンテンツの概要。

・画像付きのテーマ紹介
・使い方、インストール方法の解説
・テーマの主な特徴、機能の説明
・テーマのライセンス情報
・貢献者リスト

1〜6行目：画像とテーマのタイトルを中央に表示するHTMLタグ。
8〜12行目：テーマの説明と、Jekyllのリンクを表示するHTMLタグ。
14〜21行目：GitHub Actionsとバッジを表示するHTMLタグ。
　　　　　　GitHub Actionsは、GitHub上でホストされたビルドサービス。
23〜31行目：ライセンスや支援のバッジを表示するHTMLタグ。
33〜40行目：貢献者のリストを表示するHTMLタグ。
42〜49行目：テーマの説明を表示するHTMLタグ。
51〜56行目：スポンサー募集の文言を表示するHTMLタグ。
58〜63行目：テーマのデモ画像を表示するHTMLタグ。
65〜70行目：バナーの説明を表示するHTMLタグ。
72〜77行目：バナーのデモ画像を表示するHTMLタグ。
79〜110行目：テーマの特徴と機能の説明を表示するHTMLタグ。
112〜135行目：テーマのインストール方法についての説明を表示するHTMLタグ。Gem-based Theme Method、Remote Theme Method、Forking/Copying all of the theme files into your projectの3つのインストール方法を解説している。
137〜142行目：ライセンス情報を表示するHTMLタグ。MITライセンスを採用していることを示している。
144〜148行目：貢献者リストを表示するHTMLタグ。

 -->
