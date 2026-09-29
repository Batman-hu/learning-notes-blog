# 黑暗骑士的博客

一个使用 GitHub Pages 原生 Jekyll 构建的中文博客。首页、分类、归档、站内搜索、RSS、深浅色模式和移动端布局都已备好；写文章只需新增 Markdown 文件。

## 启用 GitHub Pages

本站源码位于 [Batman-hu/learning-notes-blog](https://github.com/Batman-hu/learning-notes-blog)，已放在公开仓库的 `main` 分支根目录。

站点已启用 GitHub Pages。以后只要把文章提交到 `main` 分支，GitHub 就会自动重新发布。博客地址是：

```text
https://Batman-hu.github.io/learning-notes-blog/
```

`_config.yml` 已按当前 GitHub 账号与仓库名配置：

```yml
title: 黑暗骑士的博客
description: 记录学到的东西，也记录问题是怎样解决的。
url: "https://Batman-hu.github.io"
baseurl: "/learning-notes-blog"
```

如果仓库名不是 `learning-notes-blog`，`baseurl` 必须改成 `/<实际仓库名>`。如果使用专门的 `<用户名>.github.io` 仓库，请把 `baseurl` 改为 `""`。`url` 填站点的域名，不要在末尾加 `/`。

GitHub Pages 的官方说明：[创建站点](https://docs.github.com/en/pages/quickstart) · [设置发布来源](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)。

## 直接在 GitHub 网页写一篇新文章

1. 打开仓库中的 [`_posts` 文件夹](https://github.com/Batman-hu/learning-notes-blog/tree/main/_posts)。
2. 点击右上方 **Add file → Create new file**。文件名按 `年-月-日-英文短名.md` 写，例如 `2026-09-29-my-first-note.md`。
3. 把下面的示例粘贴到编辑框，修改标题、简介、日期和正文：

   ```md
   ---
   title: "我的第一篇学习笔记"
   description: "这篇文章主要记录我学到的一件事。"
   date: 2026-09-29 16:00:00 +0800
   category: 学习笔记
   tags: [学习, 入门]
   ---

   ## 背景

   我为什么要学习这个主题？

   ## 学到的内容

   用自己的话写下理解、例子和注意点。

   ## 小结

   这次最大的收获是什么？
   ```

4. 写完后点击 **Commit changes...**，保持提交到 `main` 分支，完成保存。GitHub Pages 会自动更新首页、分类、归档、搜索和 RSS。

如果写的是排查问题，把 `category` 改成 `问题记录`。文章日期不要晚于当天，否则 Jekyll 默认不会发布。`tags` 可以换成自己的关键词，多个词用英文逗号隔开。

想要更完整的结构，可以复制 [`_drafts/learning-note.md`](https://github.com/Batman-hu/learning-notes-blog/blob/main/_drafts/learning-note.md) 或 [`_drafts/problem-note.md`](https://github.com/Batman-hu/learning-notes-blog/blob/main/_drafts/problem-note.md) 的内容，再创建新文章。`_drafts` 只是模板区，里面的文件不会出现在博客上。

当前 `_posts` 中有两篇**明确标为示例**的写作指南。开始发表自己的文章后，可删除这两个示例文件。

## 调整与维护

- 首页文案：`index.html`
- 关于页面：`about/index.md`
- 颜色和排版：`assets/css/style.css`
- 站名、简介和网址：`_config.yml`
- 导航、页脚与通用页面：`_layouts/default.html`

在 GitHub 网页上编辑文件即可更新博客。公开发布前，请检查文章、日志和截图中是否含有密钥、账号或个人信息。
