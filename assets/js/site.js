(() => {
  const root = document.documentElement;
  const themeButton = document.querySelector('.theme-toggle');
  if (themeButton) {
    const updateThemeLabel = () => themeButton.setAttribute('aria-label', root.dataset.theme === 'dark' ? '切换到浅色模式' : '切换到深色模式');
    updateThemeLabel();
    themeButton.addEventListener('click', () => {
      root.dataset.theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
      try { localStorage.setItem('blog-theme', root.dataset.theme); } catch (_) {}
      updateThemeLabel();
    });
  }

  const article = document.querySelector('#post-content');
  if (article) {
    const headings = [...article.querySelectorAll('h2, h3')];
    const toc = document.querySelector('#post-toc');
    if (toc && headings.length) {
      headings.forEach((heading, index) => {
        if (!heading.id) heading.id = `section-${index + 1}`;
        const link = document.createElement('a');
        link.href = `#${heading.id}`;
        link.textContent = heading.textContent;
        if (heading.tagName === 'H3') link.className = 'toc-sub';
        toc.append(link);
      });
    } else if (toc) {
      const empty = document.createElement('span');
      empty.className = 'toc-empty';
      empty.textContent = '这篇文章暂无分节。';
      toc.append(empty);
    }

    article.querySelectorAll('.highlight').forEach((block) => {
      const code = block.querySelector('pre code');
      if (!code) return;
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'code-copy';
      button.textContent = '复制代码';
      button.setAttribute('aria-label', '复制这段代码');
      button.addEventListener('click', async () => {
        try {
          await navigator.clipboard.writeText(code.textContent);
          button.textContent = '已复制';
          window.setTimeout(() => { button.textContent = '复制代码'; }, 1800);
        } catch (_) { button.textContent = '复制失败'; }
      });
      block.append(button);
    });

    const count = document.querySelector('.reading-time');
    if (count) {
      const characters = Number(count.dataset.wordCount || 0);
      count.textContent = `约 ${Math.max(1, Math.ceil(characters / 450))} 分钟阅读`;
    }
    const progress = document.querySelector('#reading-progress');
    const updateProgress = () => {
      if (!progress) return;
      const start = article.getBoundingClientRect().top + window.scrollY;
      const length = Math.max(1, article.offsetHeight - window.innerHeight * .55);
      const percentage = Math.max(0, Math.min(100, (window.scrollY - start + 100) / length * 100));
      progress.style.width = `${percentage}%`;
    };
    updateProgress();
    window.addEventListener('scroll', updateProgress, { passive: true });
    window.addEventListener('resize', updateProgress);
  }

  const searchInput = document.querySelector('#site-search');
  const results = document.querySelector('#search-results');
  const status = document.querySelector('#search-status');
  if (searchInput && results && status) {
    const params = new URLSearchParams(window.location.search);
    if (params.get('q')) searchInput.value = params.get('q');
    const makeElement = (tag, className, text) => {
      const el = document.createElement(tag);
      if (className) el.className = className;
      if (text) el.textContent = text;
      return el;
    };
    const render = (posts, rawQuery) => {
      const query = rawQuery.trim().toLocaleLowerCase();
      results.replaceChildren();
      if (!query) { status.textContent = '输入关键词开始搜索。'; return; }
      const matched = posts.filter((post) => [post.title, post.description, post.category, post.tags].join(' ').toLocaleLowerCase().includes(query));
      status.textContent = matched.length ? `找到 ${matched.length} 篇相关记录` : '没有找到相关记录，换个关键词试试。';
      matched.forEach((post) => {
        const card = makeElement('article', 'post-card');
        const meta = makeElement('div', 'post-card-meta');
        meta.append(makeElement('span', 'category-label', post.category), makeElement('time', '', post.date));
        if (post.sample) meta.append(makeElement('span', 'sample-label', '示例'));
        const title = makeElement('h3');
        const link = makeElement('a', '', post.title);
        link.href = post.url;
        title.append(link);
        const summary = makeElement('p', '', post.description);
        const bottom = makeElement('div', 'post-card-bottom');
        const read = makeElement('a', 'read-link', '阅读文章 ↗');
        read.href = post.url;
        bottom.append(read);
        card.append(meta, title, summary, bottom);
        results.append(card);
      });
    };
    fetch(results.dataset.indexUrl)
      .then((response) => { if (!response.ok) throw new Error('search index unavailable'); return response.json(); })
      .then((posts) => { render(posts, searchInput.value); searchInput.addEventListener('input', () => render(posts, searchInput.value)); })
      .catch(() => { status.textContent = '搜索暂时不可用，请从文章归档浏览。'; });
  }
})();
