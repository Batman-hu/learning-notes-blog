# 慢慢写 · 学习与问题记录博客

一个使用 GitHub Pages 原生 Jekyll 构建的中文博客。首页、分类、归档、站内搜索、RSS、深浅色模式和移动端布局都已备好；写文章只需新增 Markdown 文件。

## 发布到 GitHub Pages

项目预设仓库名为 **`learning-notes-blog`**。在 GitHub 创建同名**公开**仓库，把这个文件夹中的全部文件上传到仓库根目录，并提交到 `main` 分支。

打开仓库 **Settings → Pages → Build and deployment**，将 **Source** 设为 **Deploy from a branch**，分支选 **`main`**，目录选 **`/(root)`**，保存。GitHub Pages 会自动运行 Jekyll 构建。发布完成后，地址通常是：

```text
https://Batman-hu.github.io/learning-notes-blog/
```

发布前，编辑 `_config.yml`：

```yml
title: 你的博客名称
description: 一句话介绍博客
url: "https://Batman-hu.github.io"
baseurl: "/learning-notes-blog"
```

如果仓库名不是 `learning-notes-blog`，`baseurl` 必须改成 `/<实际仓库名>`。如果使用专门的 `<用户名>.github.io` 仓库，请把 `baseurl` 改为 `""`。`url` 填站点的域名，不要在末尾加 `/`。

GitHub Pages 的官方说明：[创建站点](https://docs.github.com/en/pages/quickstart) · [设置发布来源](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)。

## 写一篇新文章

1. 复制 `_drafts/learning-note.md` 或 `_drafts/problem-note.md` 的内容。
2. 在 `_posts` 文件夹中新建 `YYYY-MM-DD-english-slug.md`，例如 `2026-10-01-my-first-note.md`。
3. 修改顶部的 `title`、`description`、`date`、`category`、`tags`，再写正文。
4. 提交文件后，GitHub Pages 会重新发布，首页、分类、归档、搜索和 RSS 会自动更新。

`category` 请使用 `学习笔记` 或 `问题记录`，这样文章才能出现在对应分类页。文章日期不应晚于当前日期，否则 Jekyll 默认不会发布。

当前 `_posts` 中有两篇**明确标为示例**的写作指南。开始发表自己的文章后，可直接删除这两个示例文件。`_drafts` 目录不会发布。

## 调整与维护

- 首页文案：`index.html`
- 关于页面：`about/index.md`
- 颜色和排版：`assets/css/style.css`
- 站名、简介和网址：`_config.yml`
- 导航、页脚与通用页面：`_layouts/default.html`

在 GitHub 网页上编辑文件即可更新博客。公开发布前，请检查文章、日志和截图中是否含有密钥、账号或个人信息。
