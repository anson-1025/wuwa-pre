/**
 * ============================================================
 *  鸣潮版本前瞻 — 交互脚本
 *  功能：页面渲染、导航、搜索、筛选、展开/收起、返回顶部
 * ============================================================
 */

(function() {
  'use strict';

  const D = VERSION_DATA;

  // ===================== DOM 缓存 =====================
  const $ = (sel) => document.querySelector(sel);
  const $$ = (sel) => document.querySelectorAll(sel);

  // ===================== 页面渲染 =====================

  function renderAll() {
    renderHero();
    renderHighlights();
    renderNewResonators();
    renderRerunResonators();
    renderStarpathCard();
    renderFutureResonators();
    renderSkins();
    renderNewWeapons();
    renderRerunWeapons();
    renderEvents();
    renderMainStory();
    renderRegion();
    renderExplorations();
    renderBosses();
    renderEchoSets();
    renderOptimizations();
    renderTimeline();
    renderSources();
  }

  // ---- Hero ----
  function renderHero() {
    const v = D.version;
    $('#verNumber').textContent = v.number;
    $('#heroTitle').textContent = v.title;
    $('#heroSubtitle').textContent = v.titleEn;
    $('#heroDate').textContent = v.releaseDate;
    $('#heroPlatform').textContent = v.platform;

    const tagsEl = $('#heroTags');
    tagsEl.innerHTML = v.keySellingPoints.map(p =>
      `<span class="hero-tag">${escapeHtml(p)}</span>`
    ).join('');

    document.title = `鸣潮 v${v.number} 前瞻 | ${v.title}`;
  }

  // ---- Key Highlights ----
  function renderHighlights() {
    const grid = $('#highlightsGrid');
    grid.innerHTML = D.keyHighlights.map(h => `
      <div class="highlight-card emphasis-${h.emphasis}"
           data-category="${escapeHtml(h.category)}"
           data-highlight="${h.emphasis}">
        <div class="hl-icon">${h.icon}</div>
        <div class="hl-category">${escapeHtml(h.category)}</div>
        <div class="hl-title">${escapeHtml(h.title)}</div>
        <div class="hl-desc">${escapeHtml(h.desc)}</div>
        <div class="hl-tags">${h.tags.map(t => `<span class="hl-tag">${escapeHtml(t)}</span>`).join('')}</div>
        <div class="hl-source">📎 ${escapeHtml(h.source)}</div>
      </div>
    `).join('');
  }

  // ---- New Resonators ----
  function renderNewResonators() {
    const container = $('#newResonators');
    container.innerHTML = D.resonators.newCharacters.map(r => `
      <div class="resonator-card">
        <div class="rc-header">
          <div>
            <div class="rc-name">${escapeHtml(r.name)}</div>
            <div class="rc-name-en">${escapeHtml(r.nameEn)}</div>
          </div>
          <div class="rc-rarity">${'★'.repeat(r.rarity)}</div>
        </div>
        <div class="rc-attribute"><span class="rc-label">属性</span>${escapeHtml(r.attribute)}</div>
        <div class="rc-weapon"><span class="rc-label">武器</span>${escapeHtml(r.weapon)}</div>
        <div class="rc-role"><span class="rc-label">定位</span>${escapeHtml(r.role)}</div>
        <div class="rc-phase"><span class="rc-label">卡池</span>${escapeHtml(r.bannerPhase)}</div>
        ${r.signatureWeapon ? `<div class="rc-weapon-sig"><span class="rc-label">专武</span>${escapeHtml(r.signatureWeapon)}</div>` : ''}
        <div class="rc-desc">${escapeHtml(r.description)}</div>
        <div class="rc-source">📎 ${escapeHtml(r.source)}</div>
        <span class="rc-status ${r.status}">${r.status === 'confirmed' ? '✓ 已确认' : '⏳ 待官方确认'}</span>
      </div>
    `).join('');
  }

  // ---- Rerun Resonators ----
  function renderRerunResonators() {
    const container = $('#rerunResonators');
    container.innerHTML = D.resonators.rerunCharacters.map(r => `
      <div class="resonator-card">
        <div class="rc-header">
          <div>
            <div class="rc-name">${escapeHtml(r.name)}</div>
            <div class="rc-name-en">${escapeHtml(r.nameEn)}</div>
          </div>
          <div class="rc-rarity">${'★'.repeat(r.rarity)}</div>
        </div>
        <div class="rc-attribute"><span class="rc-label">属性</span>${escapeHtml(r.attribute)}</div>
        <div class="rc-weapon"><span class="rc-label">武器</span>${escapeHtml(r.weapon)}</div>
        <div class="rc-phase"><span class="rc-label">卡池</span>${escapeHtml(r.bannerPhase)}</div>
        <div class="rc-source">📎 ${escapeHtml(r.source)}</div>
      </div>
    `).join('');
  }

  // ---- Starpath Card ----
  function renderStarpathCard() {
    const sp = D.resonators.starpathReverbs;
    const card = $('#starpathCard');
    card.innerHTML = `
      <div class="sp-title">${escapeHtml(sp.title)}</div>
      <div class="sp-desc">${escapeHtml(sp.description)}</div>
      <div class="sp-chars">
        ${sp.availableCharacters.map(c => `
          <span class="sp-char">${escapeHtml(c.name)} <span class="sp-en">${escapeHtml(c.nameEn)}</span></span>
        `).join('')}
      </div>
      <div class="sp-notes">${escapeHtml(sp.notes)}</div>
      <div style="margin-top:8px;font-size:0.6875rem;color:var(--text-muted);">📎 ${escapeHtml(sp.source)}</div>
    `;
  }

  // ---- Future Resonators ----
  function renderFutureResonators() {
    const container = $('#futureResonators');
    container.innerHTML = D.resonators.futureCharacters.map(r => `
      <div class="resonator-card">
        <div class="rc-header">
          <div>
            <div class="rc-name">${escapeHtml(r.name)}</div>
            <div class="rc-name-en">${escapeHtml(r.nameEn)}</div>
          </div>
          <span class="rc-status ${r.status === 'confirmed' ? 'confirmed' : 'pending'}">${r.status === 'confirmed' ? '✓ 已确认' : '⏳ 待官方确认'}</span>
        </div>
        <div class="rc-attribute"><span class="rc-label">版本</span>${escapeHtml(r.expectedVersion)}</div>
        <div class="rc-attribute"><span class="rc-label">属性</span>${escapeHtml(r.attribute)}</div>
        <div class="rc-weapon"><span class="rc-label">武器</span>${escapeHtml(r.weapon)}</div>
        <div class="rc-role"><span class="rc-label">定位</span>${escapeHtml(r.role)}</div>
        <div class="rc-desc">${escapeHtml(r.description)}</div>
        <div class="rc-source">📎 ${escapeHtml(r.source)}</div>
      </div>
    `).join('');
  }

  // ---- Skins ----
  function renderSkins() {
    const container = $('#skinCards');
    container.innerHTML = D.resonators.summerSkins.map(s => `
      <div class="skin-card">
        <div class="skin-name">${escapeHtml(s.skinName)}</div>
        <div class="skin-character">👤 ${escapeHtml(s.character)} · ${escapeHtml(s.type)}</div>
        <div class="skin-price">💎 ${escapeHtml(s.price)}</div>
        <div style="font-size:0.6875rem;color:var(--text-muted);margin-top:4px;">📎 ${escapeHtml(s.source)}</div>
      </div>
    `).join('');
  }

  // ---- New Weapons ----
  function renderNewWeapons() {
    const container = $('#newWeapons');
    container.innerHTML = D.weapons.newWeapons.map(w => `
      <div class="weapon-card">
        <div class="wp-header">
          <div>
            <div class="wp-name">${escapeHtml(w.name)}</div>
            <div class="wp-name-en">${escapeHtml(w.nameEn)}</div>
          </div>
          <div class="wp-rarity">${'★'.repeat(w.rarity)}</div>
        </div>
        <div class="wp-info"><span class="wp-label">类型</span>${escapeHtml(w.type)}</div>
        <div class="wp-info"><span class="wp-label">基础攻击</span>${w.baseATK}</div>
        <div class="wp-info"><span class="wp-label">副属性</span>${escapeHtml(w.subStat)}</div>
        <div class="wp-info"><span class="wp-label">适用</span>${escapeHtml(w.owner)}</div>
        <div class="wp-info"><span class="wp-label">卡池</span>${escapeHtml(w.bannerPhase)}</div>
        <div class="wp-effect">${escapeHtml(w.effect)}</div>
        <div style="font-size:0.6875rem;color:var(--text-muted);margin-top:6px;">📎 ${escapeHtml(w.source)}</div>
      </div>
    `).join('');
  }

  // ---- Rerun Weapons ----
  function renderRerunWeapons() {
    const container = $('#rerunWeapons');
    container.innerHTML = D.weapons.rerunWeapons.map(w => `
      <div class="weapon-card">
        <div class="wp-header">
          <div class="wp-name">${escapeHtml(w.name)}</div>
          <div class="wp-rarity">${'★'.repeat(w.rarity)}</div>
        </div>
        <div class="wp-info"><span class="wp-label">卡池</span>${escapeHtml(w.bannerPhase)}</div>
        <div style="font-size:0.6875rem;color:var(--text-muted);margin-top:6px;">📎 ${escapeHtml(w.source)}</div>
      </div>
    `).join('');
  }

  // ---- Events ----
  function renderEvents() {
    const container = $('#eventsGrid');
    container.innerHTML = D.events.map(ev => `
      <div class="event-card" data-id="${ev.id}" data-type="${escapeHtml(ev.type)}" data-category="${escapeHtml(ev.category)}">
        <div class="ev-header">
          <div>
            <div class="ev-name">${escapeHtml(ev.name)}</div>
            <div class="ev-name-en">${escapeHtml(ev.nameEn)}</div>
          </div>
          <span class="ev-type" data-type="${escapeHtml(ev.type)}">${escapeHtml(ev.type)}</span>
        </div>
        <div class="ev-meta">
          <span>📅 ${escapeHtml(ev.duration)}</span>
          <span>🏷️ ${escapeHtml(ev.category)}</span>
        </div>
        <div class="ev-desc">${escapeHtml(ev.description)}</div>
        <div class="ev-rewards">${escapeHtml(ev.rewards)}</div>
        <div class="ev-tags">${ev.tags.map(t => `<span class="ev-tag">${escapeHtml(t)}</span>`).join('')}</div>
        <button class="ev-expand-btn" data-action="expand">📎 查看来源</button>
        <div class="ev-detail">
          <span class="tag-confirmed">${ev.status === 'confirmed' ? '✓ 已确认' : '⏳ 待确认'}</span>
          <br>📎 ${escapeHtml(ev.source)}
        </div>
      </div>
    `).join('');

    // 委托展开/收起
    container.addEventListener('click', (e) => {
      const btn = e.target.closest('[data-action="expand"]');
      if (!btn) return;
      const card = btn.closest('.event-card');
      const detail = card.querySelector('.ev-detail');
      const isExpanded = card.classList.contains('expanded');
      if (isExpanded) {
        card.classList.remove('expanded');
        btn.textContent = '📎 查看来源';
      } else {
        card.classList.add('expanded');
        btn.textContent = '🔼 收起来源';
      }
    });
  }

  // ---- Main Story Timeline ----
  function renderMainStory() {
    const container = $('#mainStoryTimeline');
    container.innerHTML = D.storyAndMap.mainStory.map(s => `
      <div class="story-item">
        <div class="st-chapter">${escapeHtml(s.chapter)}</div>
        <div class="st-title">${escapeHtml(s.title)}</div>
        <div class="st-title-en">${escapeHtml(s.titleEn)}</div>
        <div class="st-time">⏰ ${escapeHtml(s.unlockTime)}</div>
        <div class="st-desc">${escapeHtml(s.description)}</div>
        <div style="font-size:0.6875rem;color:var(--text-muted);margin-top:4px;">
          <span class="${s.status === 'confirmed' ? 'tag-confirmed' : 'tag-pending'}">${s.status === 'confirmed' ? '✓ 已确认' : '⏳ ' + escapeHtml(s.status)}</span>
          · 📎 ${escapeHtml(s.source)}
        </div>
      </div>
    `).join('') +
    // 支线任务
    D.storyAndMap.sideQuests.map(q => `
      <div class="story-item">
        <div class="st-chapter">危行任务</div>
        <div class="st-title">${escapeHtml(q.name)}</div>
        <div class="st-time">⏰ ${escapeHtml(q.unlockTime)} · 🎁 ${escapeHtml(q.reward)}</div>
        <div style="font-size:0.6875rem;color:var(--text-muted);margin-top:4px;">
          <span class="${q.status === 'confirmed' ? 'tag-confirmed' : 'tag-pending'}">${q.status === 'confirmed' ? '✓ 已确认' : '⏳ 待确认'}</span>
        </div>
      </div>
    `).join('');
  }

  // ---- Region ----
  function renderRegion() {
    const r = D.storyAndMap.newRegion;
    const card = $('#regionCard');
    card.innerHTML = `
      <div class="rg-name">${escapeHtml(r.name)}</div>
      <div class="rg-name-en">${escapeHtml(r.nameEn)}</div>
      <div class="rg-desc">${escapeHtml(r.description)}</div>
      <div class="rg-subareas">
        ${r.subAreas.map(a => `
          <div class="rg-subarea">
            <div class="sa-name">${escapeHtml(a.name)}</div>
            <div class="sa-name-en">${escapeHtml(a.nameEn)}</div>
            <div class="sa-desc">${escapeHtml(a.description)}</div>
          </div>
        `).join('')}
      </div>
      <div class="rg-note">📌 ${escapeHtml(r.futureAreasNote)}</div>
      <div style="font-size:0.6875rem;color:var(--text-muted);margin-top:8px;">📎 ${escapeHtml(r.source)}</div>
    `;
  }

  // ---- Explorations ----
  function renderExplorations() {
    const container = $('#exploreGrid');
    container.innerHTML = D.storyAndMap.newExplorations.map(ex => `
      <div class="explore-item">
        <div class="ex-name">${escapeHtml(ex.feature)}</div>
        <div class="ex-desc">${escapeHtml(ex.description)}</div>
      </div>
    `).join('');
  }

  // ---- Bosses ----
  function renderBosses() {
    const container = $('#bossCards');
    container.innerHTML = D.storyAndMap.newBosses.map(b => `
      <div class="boss-card">
        <div class="bs-name">👹 ${escapeHtml(b.name)}</div>
        <div class="bs-desc">${escapeHtml(b.description)}</div>
        <div style="font-size:0.6875rem;color:var(--text-muted);margin-top:4px;">📎 ${escapeHtml(b.source)}</div>
      </div>
    `).join('');
  }

  // ---- Echo Sets ----
  function renderEchoSets() {
    const container = $('#echoCards');
    container.innerHTML = D.storyAndMap.newEchoSets.map(ec => `
      <div class="echo-card">
        <div class="ec-name">💠 ${escapeHtml(ec.name)}</div>
        <div class="ec-set">
          <span class="ec-label">2件套：</span>
          <p>${escapeHtml(ec.effect2pc)}</p>
        </div>
        <div class="ec-set">
          <span class="ec-label">5件套：</span>
          <p>${escapeHtml(ec.effect5pc)}</p>
        </div>
        <div class="ec-best">🎯 适用角色：${ec.bestFor.map(c => escapeHtml(c)).join('、')}</div>
      </div>
    `).join('');
  }

  // ---- Optimizations ----
  function renderOptimizations() {
    const container = $('#optimizationGrid');
    container.innerHTML = D.optimizations.map(o => `
      <div class="optimization-card impact-${o.impact}">
        <div class="op-category">${escapeHtml(o.category)}</div>
        <div class="op-title">${escapeHtml(o.title)}</div>
        <div class="op-desc">${escapeHtml(o.description)}</div>
        <div class="op-source">📎 ${escapeHtml(o.source)}</div>
      </div>
    `).join('');
  }

  // ---- Timeline ----
  function renderTimeline() {
    const container = $('#timelineContainer');
    container.innerHTML = D.timeline.map(t => `
      <div class="timeline-item status-${t.status}">
        <div class="tl-header">
          <span class="tl-date">${t.icon} ${escapeHtml(t.date)}</span>
          <span class="tl-status ${t.status}">${t.status === 'past' ? '已发生' : t.status === 'current' ? '进行中' : '即将到来'}</span>
        </div>
        <div class="tl-event">${escapeHtml(t.event)}</div>
        <div class="tl-desc">${escapeHtml(t.description)}</div>
      </div>
    `).join('');
  }

  // ---- Sources ----
  function renderSources() {
    const container = $('#sourcesContent');
    const src = D.sources;

    const officialItems = src.official.map(s => `
      <li>
        <a href="${escapeHtml(s.url)}" target="_blank" rel="noopener">${escapeHtml(s.name)}</a>
        <div>${escapeHtml(s.description)}</div>
        ${s.note ? `<div class="src-note">⚠️ ${escapeHtml(s.note)}</div>` : ''}
      </li>
    `).join('');

    const thirdPartyItems = src.thirdParty.map(s => `
      <li>
        <a href="${escapeHtml(s.url)}" target="_blank" rel="noopener">${escapeHtml(s.name)}</a>
        <div>${escapeHtml(s.description)}</div>
      </li>
    `).join('');

    container.innerHTML = `
      <div class="sources-section">
        <h3>🔗 官方渠道</h3>
        <ul class="sources-list">${officialItems}</ul>
      </div>
      <div class="sources-section">
        <h3>📰 第三方资讯来源</h3>
        <ul class="sources-list">${thirdPartyItems}</ul>
      </div>
      <div class="sources-disclaimer">${escapeHtml(src.disclaimer)}</div>
    `;
  }

  // ===================== 导航 =====================

  // 滚动时高亮当前章节
  function initNavScroll() {
    const sections = $$('.section, .section-hero');
    const navLinks = $$('.nav-links a');
    const nav = $('#topNav');

    function updateNav() {
      const scrollY = window.scrollY;
      const navH = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-height'));
      const toolbarH = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--toolbar-height')) || 56;

      // Nav 背景
      if (scrollY > 50) {
        nav.classList.add('scrolled');
      } else {
        nav.classList.remove('scrolled');
      }

      // 高亮
      let currentId = '';
      sections.forEach(s => {
        const top = s.getBoundingClientRect().top + scrollY;
        if (scrollY >= top - navH - toolbarH - 60) {
          currentId = s.id;
        }
      });

      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + currentId) {
          link.classList.add('active');
        }
      });
    }

    window.addEventListener('scroll', updateNav, { passive: true });
    updateNav();
  }

  // 移动端菜单
  function initMobileMenu() {
    const toggle = $('#navToggle');
    const menu = $('#mobileMenu');
    const links = menu.querySelectorAll('a');

    toggle.addEventListener('click', () => {
      toggle.classList.toggle('open');
      menu.classList.toggle('open');
    });

    links.forEach(link => {
      link.addEventListener('click', () => {
        toggle.classList.remove('open');
        menu.classList.remove('open');
      });
    });
  }

  // ===================== 只看重点 =====================
  function initHighlightsOnly() {
    const btn = $('#btnHighlightsOnly');
    const main = $('#mainContent');
    let isActive = false;

    btn.addEventListener('click', () => {
      isActive = !isActive;
      if (isActive) {
        main.classList.add('highlights-only');
        btn.classList.add('active');
        btn.querySelector('.btn-label').textContent = '显示全部';
      } else {
        main.classList.remove('highlights-only');
        btn.classList.remove('active');
        btn.querySelector('.btn-label').textContent = '只看重点';
      }
    });
  }

  // ===================== 搜索 =====================
  function initSearch() {
    const input = $('#searchInput');
    const resultsEl = $('#searchResults');

    // 构建搜索索引
    const searchIndex = [];
    D.events.forEach(ev => {
      searchIndex.push({ type: '活动', text: ev.name + ' ' + ev.nameEn + ' ' + ev.description + ' ' + ev.tags.join(' '), el: null, id: ev.id });
    });
    D.resonators.newCharacters.forEach(r => {
      searchIndex.push({ type: '角色', text: r.name + ' ' + r.nameEn + ' ' + r.attribute + ' ' + r.weapon + ' ' + r.role + ' ' + r.description, el: null, id: null });
    });
    D.resonators.futureCharacters.forEach(r => {
      searchIndex.push({ type: '未来角色', text: r.name + ' ' + r.nameEn + ' ' + r.attribute + ' ' + r.weapon + ' ' + r.role + ' ' + r.description, el: null, id: null });
    });
    D.keyHighlights.forEach(h => {
      searchIndex.push({ type: '核心亮点', text: h.title + ' ' + h.category + ' ' + h.desc + ' ' + h.tags.join(' '), el: null, id: h.id });
    });
    D.optimizations.forEach(o => {
      searchIndex.push({ type: '系统优化', text: o.title + ' ' + o.category + ' ' + o.description, el: null, id: o.id });
    });

    let debounceTimer;
    input.addEventListener('input', () => {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(performSearch, 200);
    });

    function performSearch() {
      const query = input.value.trim().toLowerCase();
      if (query.length < 2) {
        resultsEl.classList.remove('active');
        resultsEl.innerHTML = '';
        // 恢复所有活动卡片
        $$('.event-card').forEach(c => c.classList.remove('hidden-event'));
        return;
      }

      const matches = searchIndex.filter(item =>
        item.text.toLowerCase().includes(query)
      );

      if (matches.length === 0) {
        resultsEl.classList.add('active');
        resultsEl.innerHTML = '<div class="search-result-item" style="cursor:default;color:var(--text-muted);">未找到匹配结果</div>';
        // 隐藏所有活动卡片
        $$('.event-card').forEach(c => c.classList.add('hidden-event'));
        return;
      }

      resultsEl.classList.add('active');
      resultsEl.innerHTML = matches.slice(0, 10).map(m => `
        <div class="search-result-item" data-type="${m.type}" data-id="${m.id || ''}">
          <span class="result-highlight">[${m.type}]</span> ${highlightMatch(m.text, query)}
        </div>
      `).join('');

      // 高亮匹配的活动卡片
      const matchedEventIds = new Set(
        matches.filter(m => m.type === '活动' && m.id).map(m => m.id)
      );
      if (matchedEventIds.size > 0) {
        $$('.event-card').forEach(c => {
          if (matchedEventIds.has(c.dataset.id)) {
            c.classList.remove('hidden-event');
          } else {
            c.classList.add('hidden-event');
          }
        });
      }
    }

    function highlightMatch(text, query) {
      const maxLen = 80;
      const lower = text.toLowerCase();
      const idx = lower.indexOf(query);
      if (idx === -1) return escapeHtml(text.slice(0, maxLen)) + (text.length > maxLen ? '...' : '');
      const start = Math.max(0, idx - 20);
      const end = Math.min(text.length, idx + query.length + 40);
      let result = escapeHtml(text.slice(start, end));
      result = result.replace(new RegExp(escapeRegex(query), 'gi'), m => `<span class="search-highlight">${m}</span>`);
      return (start > 0 ? '...' : '') + result + (end < text.length ? '...' : '');
    }

    // 点击搜索结果 → 滚动到对应区域
    resultsEl.addEventListener('click', (e) => {
      const item = e.target.closest('.search-result-item');
      if (!item || !item.dataset.type) return;

      const type = item.dataset.type;
      if (type === '活动') {
        document.querySelector('#events').scrollIntoView({ behavior: 'smooth' });
      } else if (type === '角色' || type === '未来角色') {
        document.querySelector('#resonators').scrollIntoView({ behavior: 'smooth' });
      } else if (type === '核心亮点') {
        document.querySelector('#highlights').scrollIntoView({ behavior: 'smooth' });
      } else if (type === '系统优化') {
        document.querySelector('#optimizations').scrollIntoView({ behavior: 'smooth' });
      }

      resultsEl.classList.remove('active');
    });

    // 点击外部关闭
    document.addEventListener('click', (e) => {
      if (!input.contains(e.target) && !resultsEl.contains(e.target)) {
        resultsEl.classList.remove('active');
        if (input.value.trim().length === 0) {
          $$('.event-card').forEach(c => c.classList.remove('hidden-event'));
        }
      }
    });

    // ESC 关闭
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        resultsEl.classList.remove('active');
        input.value = '';
        $$('.event-card').forEach(c => c.classList.remove('hidden-event'));
        input.blur();
      }
    });
  }

  // ===================== 活动类型筛选 =====================
  function initEventFilter() {
    const chips = $$('#filterChips .chip');
    let currentFilter = 'all';

    chips.forEach(chip => {
      chip.addEventListener('click', () => {
        chips.forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        currentFilter = chip.dataset.filter;

        $$('.event-card').forEach(card => {
          if (currentFilter === 'all' || card.dataset.type === currentFilter) {
            card.classList.remove('hidden-event');
          } else {
            card.classList.add('hidden-event');
          }
        });
      });
    });
  }

  // ===================== 返回顶部 =====================
  function initBackToTop() {
    const btn = $('#btnBackToTop');

    window.addEventListener('scroll', () => {
      if (window.scrollY > 800) {
        btn.classList.add('visible');
      } else {
        btn.classList.remove('visible');
      }
    }, { passive: true });

    btn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ===================== 辅助函数 =====================
  function escapeHtml(str) {
    if (!str) return '';
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }

  function escapeRegex(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }

  // ===================== 初始化 =====================
  function init() {
    renderAll();
    initNavScroll();
    initMobileMenu();
    initHighlightsOnly();
    initSearch();
    initEventFilter();
    initBackToTop();
  }

  // DOM 就绪后初始化
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
