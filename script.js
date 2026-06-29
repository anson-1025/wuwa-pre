/**
 * ============================================================
 *  鸣潮版本前瞻 — 交互脚本
 *  功能：页面渲染、导航、统一筛选（搜索×分类×只看重点）、展开/收起、返回顶部
 * ============================================================
 */

(function() {
  'use strict';

  const D = VERSION_DATA;

  // ===================== DOM 缓存 =====================
  const $ = (sel) => document.querySelector(sel);
  const $$ = (sel) => document.querySelectorAll(sel);

  // ===================== 数据后处理：补全 highlight 字段 =====================
  (function augmentData() {
    // keyHighlights: emphasis=high → highlight=true
    D.keyHighlights.forEach(h => { h.highlight = h.emphasis === 'high'; });

    // 新角色 / 新武器 → 全是重点
    D.resonators.newCharacters.forEach(r => { r.highlight = true; });
    D.weapons.newWeapons.forEach(w => { w.highlight = true; });

    // 复刻 / 未来角色 / 复刻武器 / 皮肤 → 非重点
    D.resonators.rerunCharacters.forEach(r => { r.highlight = false; });
    D.resonators.futureCharacters.forEach(r => { r.highlight = false; });
    D.resonators.summerSkins.forEach(s => { s.highlight = false; });
    D.weapons.rerunWeapons.forEach(w => { w.highlight = false; });

    // 优化：impact=high → 重点
    D.optimizations.forEach(o => { o.highlight = o.impact === 'high'; });

    // 探索机制 / BOSS / 声骸套装 → 重点
    D.storyAndMap.newExplorations.forEach(ex => { ex.highlight = true; });
    D.storyAndMap.newBosses.forEach(b => { b.highlight = true; });
    D.storyAndMap.newEchoSets.forEach(ec => { ec.highlight = true; });

    // 活动：精选重点活动
    var highlightEventIds = new Set([
      'event-lament-recon', 'event-glimpse-xuanfang', 'event-virtual-crisis',
      'event-gifts-aftertune', 'event-tactical-hologram', 'event-endstate-matrix',
      'event-recaptured', 'event-shape-yesterday'
    ]);
    D.events.forEach(function(ev) { ev.highlight = highlightEventIds.has(ev.id); });
  })();

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
    var v = D.version;
    $('#verNumber').textContent = v.number;
    $('#heroTitle').textContent = v.title;
    $('#heroSubtitle').textContent = v.titleEn;
    $('#heroDate').textContent = v.releaseDate;
    $('#heroPlatform').textContent = v.platform;

    var tagsEl = $('#heroTags');
    tagsEl.innerHTML = v.keySellingPoints.map(function(p) {
      return '<span class="hero-tag">' + escapeHtml(p) + '</span>';
    }).join('');

    document.title = '鸣潮 v' + v.number + ' 前瞻 | ' + v.title;
  }

  // ---- Key Highlights ----
  function renderHighlights() {
    var grid = $('#highlightsGrid');
    grid.innerHTML = D.keyHighlights.map(function(h) {
      return '<div class="highlight-card emphasis-' + h.emphasis + '"'
           + ' data-category="' + escapeHtml(h.category) + '"'
           + ' data-highlight="' + h.highlight + '">'
           + '<div class="hl-icon">' + h.icon + '</div>'
           + '<div class="hl-category">' + escapeHtml(h.category) + '</div>'
           + '<div class="hl-title">' + escapeHtml(h.title) + '</div>'
           + '<div class="hl-desc">' + escapeHtml(h.desc) + '</div>'
           + '<div class="hl-tags">' + h.tags.map(function(t) { return '<span class="hl-tag">' + escapeHtml(t) + '</span>'; }).join('') + '</div>'
           + '<div class="hl-source">📎 ' + escapeHtml(h.source) + '</div>'
           + '</div>';
    }).join('');
  }

  // ---- New Resonators ----
  function renderNewResonators() {
    var container = $('#newResonators');
    container.innerHTML = D.resonators.newCharacters.map(function(r) {
      return '<div class="resonator-card" data-highlight="' + r.highlight + '">'
        + '<div class="rc-header">'
        + '<div>'
        + '<div class="rc-name">' + escapeHtml(r.name) + '</div>'
        + '<div class="rc-name-en">' + escapeHtml(r.nameEn) + '</div>'
        + '</div>'
        + '<div class="rc-rarity">' + '★'.repeat(r.rarity) + '</div>'
        + '</div>'
        + '<div class="rc-attribute"><span class="rc-label">属性</span>' + escapeHtml(r.attribute) + '</div>'
        + '<div class="rc-weapon"><span class="rc-label">武器</span>' + escapeHtml(r.weapon) + '</div>'
        + '<div class="rc-role"><span class="rc-label">定位</span>' + escapeHtml(r.role) + '</div>'
        + '<div class="rc-phase"><span class="rc-label">卡池</span>' + escapeHtml(r.bannerPhase) + '</div>'
        + (r.signatureWeapon ? '<div class="rc-weapon-sig"><span class="rc-label">专武</span>' + escapeHtml(r.signatureWeapon) + '</div>' : '')
        + '<div class="rc-desc">' + escapeHtml(r.description) + '</div>'
        + '<div class="rc-source">📎 ' + escapeHtml(r.source) + '</div>'
        + '<span class="rc-status ' + r.status + '">' + (r.status === 'confirmed' ? '✓ 已确认' : '⏳ 待官方确认') + '</span>'
        + '</div>';
    }).join('');
  }

  // ---- Rerun Resonators ----
  function renderRerunResonators() {
    var container = $('#rerunResonators');
    container.innerHTML = D.resonators.rerunCharacters.map(function(r) {
      return '<div class="resonator-card" data-highlight="' + r.highlight + '">'
        + '<div class="rc-header">'
        + '<div>'
        + '<div class="rc-name">' + escapeHtml(r.name) + '</div>'
        + '<div class="rc-name-en">' + escapeHtml(r.nameEn) + '</div>'
        + '</div>'
        + '<div class="rc-rarity">' + '★'.repeat(r.rarity) + '</div>'
        + '</div>'
        + '<div class="rc-attribute"><span class="rc-label">属性</span>' + escapeHtml(r.attribute) + '</div>'
        + '<div class="rc-weapon"><span class="rc-label">武器</span>' + escapeHtml(r.weapon) + '</div>'
        + '<div class="rc-phase"><span class="rc-label">卡池</span>' + escapeHtml(r.bannerPhase) + '</div>'
        + '<div class="rc-source">📎 ' + escapeHtml(r.source) + '</div>'
        + '</div>';
    }).join('');
  }

  // ---- Starpath Card ----
  function renderStarpathCard() {
    var sp = D.resonators.starpathReverbs;
    var card = $('#starpathCard');
    card.innerHTML = ''
      + '<div class="sp-title">' + escapeHtml(sp.title) + '</div>'
      + '<div class="sp-desc">' + escapeHtml(sp.description) + '</div>'
      + '<div class="sp-chars">'
      + sp.availableCharacters.map(function(c) {
          return '<span class="sp-char">' + escapeHtml(c.name) + ' <span class="sp-en">' + escapeHtml(c.nameEn) + '</span></span>';
        }).join('')
      + '</div>'
      + '<div class="sp-notes">' + escapeHtml(sp.notes) + '</div>'
      + '<div style="margin-top:8px;font-size:0.6875rem;color:var(--text-muted);">📎 ' + escapeHtml(sp.source) + '</div>';
  }

  // ---- Future Resonators ----
  function renderFutureResonators() {
    var container = $('#futureResonators');
    container.innerHTML = D.resonators.futureCharacters.map(function(r) {
      return '<div class="resonator-card" data-highlight="' + r.highlight + '">'
        + '<div class="rc-header">'
        + '<div>'
        + '<div class="rc-name">' + escapeHtml(r.name) + '</div>'
        + '<div class="rc-name-en">' + escapeHtml(r.nameEn) + '</div>'
        + '</div>'
        + '<span class="rc-status ' + (r.status === 'confirmed' ? 'confirmed' : 'pending') + '">' + (r.status === 'confirmed' ? '✓ 已确认' : '⏳ 待官方确认') + '</span>'
        + '</div>'
        + '<div class="rc-attribute"><span class="rc-label">版本</span>' + escapeHtml(r.expectedVersion) + '</div>'
        + '<div class="rc-attribute"><span class="rc-label">属性</span>' + escapeHtml(r.attribute) + '</div>'
        + '<div class="rc-weapon"><span class="rc-label">武器</span>' + escapeHtml(r.weapon) + '</div>'
        + '<div class="rc-role"><span class="rc-label">定位</span>' + escapeHtml(r.role) + '</div>'
        + '<div class="rc-desc">' + escapeHtml(r.description) + '</div>'
        + '<div class="rc-source">📎 ' + escapeHtml(r.source) + '</div>'
        + '</div>';
    }).join('');
  }

  // ---- Skins ----
  function renderSkins() {
    var container = $('#skinCards');
    container.innerHTML = D.resonators.summerSkins.map(function(s) {
      return '<div class="skin-card" data-highlight="' + s.highlight + '">'
        + '<div class="skin-name">' + escapeHtml(s.skinName) + '</div>'
        + '<div class="skin-character">👤 ' + escapeHtml(s.character) + ' · ' + escapeHtml(s.type) + '</div>'
        + '<div class="skin-price">💎 ' + escapeHtml(s.price) + '</div>'
        + '<div style="font-size:0.6875rem;color:var(--text-muted);margin-top:4px;">📎 ' + escapeHtml(s.source) + '</div>'
        + '</div>';
    }).join('');
  }

  // ---- New Weapons ----
  function renderNewWeapons() {
    var container = $('#newWeapons');
    container.innerHTML = D.weapons.newWeapons.map(function(w) {
      return '<div class="weapon-card" data-highlight="' + w.highlight + '">'
        + '<div class="wp-header">'
        + '<div>'
        + '<div class="wp-name">' + escapeHtml(w.name) + '</div>'
        + '<div class="wp-name-en">' + escapeHtml(w.nameEn) + '</div>'
        + '</div>'
        + '<div class="wp-rarity">' + '★'.repeat(w.rarity) + '</div>'
        + '</div>'
        + '<div class="wp-info"><span class="wp-label">类型</span>' + escapeHtml(w.type) + '</div>'
        + '<div class="wp-info"><span class="wp-label">基础攻击</span>' + w.baseATK + '</div>'
        + '<div class="wp-info"><span class="wp-label">副属性</span>' + escapeHtml(w.subStat) + '</div>'
        + '<div class="wp-info"><span class="wp-label">适用</span>' + escapeHtml(w.owner) + '</div>'
        + '<div class="wp-info"><span class="wp-label">卡池</span>' + escapeHtml(w.bannerPhase) + '</div>'
        + '<div class="wp-effect">' + escapeHtml(w.effect) + '</div>'
        + '<div style="font-size:0.6875rem;color:var(--text-muted);margin-top:6px;">📎 ' + escapeHtml(w.source) + '</div>'
        + '</div>';
    }).join('');
  }

  // ---- Rerun Weapons ----
  function renderRerunWeapons() {
    var container = $('#rerunWeapons');
    container.innerHTML = D.weapons.rerunWeapons.map(function(w) {
      return '<div class="weapon-card" data-highlight="' + w.highlight + '">'
        + '<div class="wp-header">'
        + '<div class="wp-name">' + escapeHtml(w.name) + '</div>'
        + '<div class="wp-rarity">' + '★'.repeat(w.rarity) + '</div>'
        + '</div>'
        + '<div class="wp-info"><span class="wp-label">卡池</span>' + escapeHtml(w.bannerPhase) + '</div>'
        + '<div style="font-size:0.6875rem;color:var(--text-muted);margin-top:6px;">📎 ' + escapeHtml(w.source) + '</div>'
        + '</div>';
    }).join('');
  }

  // ---- Events ----
  function renderEvents() {
    var container = $('#eventsGrid');
    container.innerHTML = D.events.map(function(ev) {
      return '<div class="event-card"'
           + ' data-id="' + ev.id + '"'
           + ' data-type="' + escapeHtml(ev.type) + '"'
           + ' data-category="' + escapeHtml(ev.category) + '"'
           + ' data-highlight="' + ev.highlight + '">'
        + '<div class="ev-header">'
        + '<div>'
        + '<div class="ev-name">' + escapeHtml(ev.name) + '</div>'
        + '<div class="ev-name-en">' + escapeHtml(ev.nameEn) + '</div>'
        + '</div>'
        + '<span class="ev-type" data-type="' + escapeHtml(ev.type) + '">' + escapeHtml(ev.type) + '</span>'
        + '</div>'
        + '<div class="ev-meta">'
        + '<span>📅 ' + escapeHtml(ev.duration) + '</span>'
        + '<span>🏷️ ' + escapeHtml(ev.category) + '</span>'
        + '</div>'
        + '<div class="ev-desc">' + escapeHtml(ev.description) + '</div>'
        + '<div class="ev-rewards">' + escapeHtml(ev.rewards) + '</div>'
        + '<div class="ev-tags">' + ev.tags.map(function(t) { return '<span class="ev-tag">' + escapeHtml(t) + '</span>'; }).join('') + '</div>'
        + '<button class="ev-expand-btn" data-action="expand">📎 查看来源</button>'
        + '<div class="ev-detail">'
        + '<span class="tag-confirmed">' + (ev.status === 'confirmed' ? '✓ 已确认' : '⏳ 待确认') + '</span>'
        + '<br>📎 ' + escapeHtml(ev.source)
        + '</div>'
        + '</div>';
    }).join('');

    // 委托展开/收起
    container.addEventListener('click', function(e) {
      var btn = e.target.closest('[data-action="expand"]');
      if (!btn) return;
      var card = btn.closest('.event-card');
      var isExpanded = card.classList.contains('expanded');
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
    var container = $('#mainStoryTimeline');
    container.innerHTML = D.storyAndMap.mainStory.map(function(s) {
      return '<div class="story-item">'
        + '<div class="st-chapter">' + escapeHtml(s.chapter) + '</div>'
        + '<div class="st-title">' + escapeHtml(s.title) + '</div>'
        + '<div class="st-title-en">' + escapeHtml(s.titleEn) + '</div>'
        + '<div class="st-time">⏰ ' + escapeHtml(s.unlockTime) + '</div>'
        + '<div class="st-desc">' + escapeHtml(s.description) + '</div>'
        + '<div style="font-size:0.6875rem;color:var(--text-muted);margin-top:4px;">'
        + '<span class="' + (s.status === 'confirmed' ? 'tag-confirmed' : 'tag-pending') + '">' + (s.status === 'confirmed' ? '✓ 已确认' : '⏳ ' + escapeHtml(s.status)) + '</span>'
        + ' · 📎 ' + escapeHtml(s.source)
        + '</div>'
        + '</div>';
    }).join('')
    // 支线任务
    + D.storyAndMap.sideQuests.map(function(q) {
      return '<div class="story-item">'
        + '<div class="st-chapter">危行任务</div>'
        + '<div class="st-title">' + escapeHtml(q.name) + '</div>'
        + '<div class="st-time">⏰ ' + escapeHtml(q.unlockTime) + ' · 🎁 ' + escapeHtml(q.reward) + '</div>'
        + '<div style="font-size:0.6875rem;color:var(--text-muted);margin-top:4px;">'
        + '<span class="' + (q.status === 'confirmed' ? 'tag-confirmed' : 'tag-pending') + '">' + (q.status === 'confirmed' ? '✓ 已确认' : '⏳ 待确认') + '</span>'
        + '</div>'
        + '</div>';
    }).join('');
  }

  // ---- Region ----
  function renderRegion() {
    var r = D.storyAndMap.newRegion;
    var card = $('#regionCard');
    card.innerHTML = ''
      + '<div class="rg-name">' + escapeHtml(r.name) + '</div>'
      + '<div class="rg-name-en">' + escapeHtml(r.nameEn) + '</div>'
      + '<div class="rg-desc">' + escapeHtml(r.description) + '</div>'
      + '<div class="rg-subareas">'
      + r.subAreas.map(function(a) {
          return '<div class="rg-subarea">'
            + '<div class="sa-name">' + escapeHtml(a.name) + '</div>'
            + '<div class="sa-name-en">' + escapeHtml(a.nameEn) + '</div>'
            + '<div class="sa-desc">' + escapeHtml(a.description) + '</div>'
            + '</div>';
        }).join('')
      + '</div>'
      + '<div class="rg-note">📌 ' + escapeHtml(r.futureAreasNote) + '</div>'
      + '<div style="font-size:0.6875rem;color:var(--text-muted);margin-top:8px;">📎 ' + escapeHtml(r.source) + '</div>';
  }

  // ---- Explorations ----
  function renderExplorations() {
    var container = $('#exploreGrid');
    container.innerHTML = D.storyAndMap.newExplorations.map(function(ex) {
      return '<div class="explore-item" data-highlight="' + ex.highlight + '">'
        + '<div class="ex-name">' + escapeHtml(ex.feature) + '</div>'
        + '<div class="ex-desc">' + escapeHtml(ex.description) + '</div>'
        + '</div>';
    }).join('');
  }

  // ---- Bosses ----
  function renderBosses() {
    var container = $('#bossCards');
    container.innerHTML = D.storyAndMap.newBosses.map(function(b) {
      return '<div class="boss-card" data-highlight="' + b.highlight + '">'
        + '<div class="bs-name">👹 ' + escapeHtml(b.name) + '</div>'
        + '<div class="bs-desc">' + escapeHtml(b.description) + '</div>'
        + '<div style="font-size:0.6875rem;color:var(--text-muted);margin-top:4px;">📎 ' + escapeHtml(b.source) + '</div>'
        + '</div>';
    }).join('');
  }

  // ---- Echo Sets ----
  function renderEchoSets() {
    var container = $('#echoCards');
    container.innerHTML = D.storyAndMap.newEchoSets.map(function(ec) {
      return '<div class="echo-card" data-highlight="' + ec.highlight + '">'
        + '<div class="ec-name">💠 ' + escapeHtml(ec.name) + '</div>'
        + '<div class="ec-set">'
        + '<span class="ec-label">2件套：</span>'
        + '<p>' + escapeHtml(ec.effect2pc) + '</p>'
        + '</div>'
        + '<div class="ec-set">'
        + '<span class="ec-label">5件套：</span>'
        + '<p>' + escapeHtml(ec.effect5pc) + '</p>'
        + '</div>'
        + '<div class="ec-best">🎯 适用角色：' + ec.bestFor.map(function(c) { return escapeHtml(c); }).join('、') + '</div>'
        + '</div>';
    }).join('');
  }

  // ---- Optimizations ----
  function renderOptimizations() {
    var container = $('#optimizationGrid');
    container.innerHTML = D.optimizations.map(function(o) {
      return '<div class="optimization-card impact-' + o.impact + '" data-highlight="' + o.highlight + '">'
        + '<div class="op-category">' + escapeHtml(o.category) + '</div>'
        + '<div class="op-title">' + escapeHtml(o.title) + '</div>'
        + '<div class="op-desc">' + escapeHtml(o.description) + '</div>'
        + '<div class="op-source">📎 ' + escapeHtml(o.source) + '</div>'
        + '</div>';
    }).join('');
  }

  // ---- Timeline ----
  function renderTimeline() {
    var container = $('#timelineContainer');
    container.innerHTML = D.timeline.map(function(t) {
      return '<div class="timeline-item status-' + t.status + '">'
        + '<div class="tl-header">'
        + '<span class="tl-date">' + t.icon + ' ' + escapeHtml(t.date) + '</span>'
        + '<span class="tl-status ' + t.status + '">' + (t.status === 'past' ? '已发生' : t.status === 'current' ? '进行中' : '即将到来') + '</span>'
        + '</div>'
        + '<div class="tl-event">' + escapeHtml(t.event) + '</div>'
        + '<div class="tl-desc">' + escapeHtml(t.description) + '</div>'
        + '</div>';
    }).join('');
  }

  // ---- Sources ----
  function renderSources() {
    var container = $('#sourcesContent');
    var src = D.sources;

    var officialItems = src.official.map(function(s) {
      return '<li>'
        + '<a href="' + escapeHtml(s.url) + '" target="_blank" rel="noopener">' + escapeHtml(s.name) + '</a>'
        + '<div>' + escapeHtml(s.description) + '</div>'
        + (s.note ? '<div class="src-note">⚠️ ' + escapeHtml(s.note) + '</div>' : '')
        + '</li>';
    }).join('');

    var thirdPartyItems = src.thirdParty.map(function(s) {
      return '<li>'
        + '<a href="' + escapeHtml(s.url) + '" target="_blank" rel="noopener">' + escapeHtml(s.name) + '</a>'
        + '<div>' + escapeHtml(s.description) + '</div>'
        + '</li>';
    }).join('');

    container.innerHTML = ''
      + '<div class="sources-section">'
      + '<h3>🔗 官方渠道</h3>'
      + '<ul class="sources-list">' + officialItems + '</ul>'
      + '</div>'
      + '<div class="sources-section">'
      + '<h3>📰 第三方资讯来源</h3>'
      + '<ul class="sources-list">' + thirdPartyItems + '</ul>'
      + '</div>'
      + '<div class="sources-disclaimer">' + escapeHtml(src.disclaimer) + '</div>';
  }

  // ===================== 导航 =====================

  // 滚动时高亮当前章节
  function initNavScroll() {
    var sections = $$('.section, .section-hero');
    var navLinks = $$('.nav-links a');
    var nav = $('#topNav');

    function updateNav() {
      var scrollY = window.scrollY;
      var navH = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-height'));
      var toolbarH = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--toolbar-height')) || 56;

      // Nav 背景
      if (scrollY > 50) {
        nav.classList.add('scrolled');
      } else {
        nav.classList.remove('scrolled');
      }

      // 高亮
      var currentId = '';
      sections.forEach(function(s) {
        var top = s.getBoundingClientRect().top + scrollY;
        if (scrollY >= top - navH - toolbarH - 60) {
          currentId = s.id;
        }
      });

      navLinks.forEach(function(link) {
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
    var toggle = $('#navToggle');
    var menu = $('#mobileMenu');
    var links = menu.querySelectorAll('a');

    toggle.addEventListener('click', function() {
      toggle.classList.toggle('open');
      menu.classList.toggle('open');
    });

    links.forEach(function(link) {
      link.addEventListener('click', function() {
        toggle.classList.remove('open');
        menu.classList.remove('open');
      });
    });
  }

  // ===================== 统一筛选系统 =====================
  var FILTERABLE_SELECTOR = '.highlight-card, .resonator-card, .weapon-card, .event-card, .explore-item, .boss-card, .echo-card, .optimization-card, .skin-card';

  var filterState = { query: '', category: 'all', highlightsOnly: false };
  var cardSearchIndex = null;
  var searchMatches = [];

  function buildCardSearchIndex() {
    cardSearchIndex = new Map();
    var cards = document.querySelectorAll(FILTERABLE_SELECTOR);
    cards.forEach(function(card) {
      cardSearchIndex.set(card, card.textContent.toLowerCase());
    });
  }

  function applyFilters() {
    var query = filterState.query;
    var category = filterState.category;
    var highlightsOnly = filterState.highlightsOnly;

    var cards = document.querySelectorAll(FILTERABLE_SELECTOR);
    var totalVisible = 0;
    // Track which sections have hidden cards
    var sectionHasCards = {};
    var sectionHasVisible = {};

    cards.forEach(function(card) {
      var visible = true;

      // Dimension 1: Category filter（仅活动卡片参与）
      if (category !== 'all' && card.classList.contains('event-card')) {
        if (card.dataset.type !== category) visible = false;
      }

      // Dimension 2: 只看重点（仅带有 data-highlight 属性的卡片参与）
      if (highlightsOnly && visible && card.dataset.highlight !== undefined) {
        if (card.dataset.highlight !== 'true') visible = false;
      }

      // Dimension 3: 搜索关键词
      if (query.length >= 2 && visible) {
        var text = cardSearchIndex ? (cardSearchIndex.get(card) || '') : '';
        if (text.indexOf(query) === -1) visible = false;
      }

      if (visible) {
        card.classList.remove('filtered-hidden');
        totalVisible++;
      } else {
        card.classList.add('filtered-hidden');
      }

      // 跟踪所属 section
      var section = card.closest('section');
      if (section) {
        var sid = section.id;
        if (!sectionHasCards[sid]) { sectionHasCards[sid] = true; }
        if (visible && !sectionHasVisible[sid]) { sectionHasVisible[sid] = true; }
      }
    });

    // 全局空结果提示
    var noResultsEl = $('#noResultsGlobal');
    var hasActiveFilter = query.length >= 2 || category !== 'all' || highlightsOnly;
    if (noResultsEl) {
      noResultsEl.style.display = (hasActiveFilter && totalVisible === 0) ? 'block' : 'none';
    }

    // 各区域空结果提示
    handleSectionEmptyStates();
  }

  function handleSectionEmptyStates() {
    var grids = [
      '#highlightsGrid', '#newResonators', '#rerunResonators', '#futureResonators',
      '#newWeapons', '#rerunWeapons', '#eventsGrid', '#exploreGrid',
      '#bossCards', '#echoCards', '#optimizationGrid', '#skinCards'
    ];

    grids.forEach(function(sel) {
      var grid = document.querySelector(sel);
      if (!grid) return;

      // 移除已有的空结果占位
      var existing = grid.querySelector('.no-results');
      if (existing) existing.remove();

      var cards = grid.querySelectorAll(FILTERABLE_SELECTOR);
      if (cards.length === 0) return;

      var hasVisible = false;
      cards.forEach(function(c) {
        if (!c.classList.contains('filtered-hidden')) hasVisible = true;
      });

      if (!hasVisible) {
        var noResults = document.createElement('div');
        noResults.className = 'no-results';
        noResults.textContent = '没有找到匹配内容';
        grid.appendChild(noResults);
      }
    });
  }

  function initToolbar() {
    // 注入全局空结果提示元素
    var noResultsEl = document.createElement('div');
    noResultsEl.id = 'noResultsGlobal';
    noResultsEl.className = 'no-results-global';
    noResultsEl.textContent = '没有找到匹配内容';
    noResultsEl.style.display = 'none';
    var main = $('#mainContent');
    main.insertBefore(noResultsEl, main.firstChild);

    var btnHighlight = $('#btnHighlightsOnly');
    var searchInput = $('#searchInput');
    var searchResults = $('#searchResults');
    var chips = $$('#filterChips .chip');

    // 构建搜索索引（DOM 渲染后）
    buildCardSearchIndex();

    // ===== "只看重点" 按钮 =====
    btnHighlight.addEventListener('click', function() {
      filterState.highlightsOnly = !filterState.highlightsOnly;
      if (filterState.highlightsOnly) {
        btnHighlight.classList.add('active');
        btnHighlight.querySelector('.btn-label').textContent = '显示全部';
      } else {
        btnHighlight.classList.remove('active');
        btnHighlight.querySelector('.btn-label').textContent = '只看重点';
      }
      applyFilters();
    });

    // ===== 搜索框 =====
    var debounceTimer;
    searchInput.addEventListener('input', function() {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(function() {
        filterState.query = searchInput.value.trim().toLowerCase();
        updateSearchDropdown();
        applyFilters();
      }, 200);
    });

    function updateSearchDropdown() {
      var query = filterState.query;
      if (query.length < 2) {
        searchResults.classList.remove('active');
        searchResults.innerHTML = '';
        searchMatches = [];
        return;
      }

      searchMatches = [];
      if (cardSearchIndex) {
        cardSearchIndex.forEach(function(text, card) {
          if (text.indexOf(query) !== -1) {
            var type = '内容';
            if (card.classList.contains('event-card')) type = '活动';
            else if (card.classList.contains('resonator-card')) type = '角色';
            else if (card.classList.contains('highlight-card')) type = '核心亮点';
            else if (card.classList.contains('weapon-card')) type = '武器';
            else if (card.classList.contains('optimization-card')) type = '系统优化';
            else if (card.classList.contains('explore-item')) type = '探索';
            else if (card.classList.contains('boss-card')) type = 'BOSS';
            else if (card.classList.contains('echo-card')) type = '声骸';
            else if (card.classList.contains('skin-card')) type = '皮肤';

            searchMatches.push({ type: type, text: text.slice(0, 120), card: card });
          }
        });
      }

      if (searchMatches.length === 0) {
        searchResults.classList.add('active');
        searchResults.innerHTML = '<div class="search-result-item" style="cursor:default;color:var(--text-muted);">未找到匹配结果</div>';
        return;
      }

      searchResults.classList.add('active');
      searchResults.innerHTML = searchMatches.slice(0, 10).map(function(m, i) {
        return '<div class="search-result-item" data-match-index="' + i + '">'
          + '<span class="result-highlight">[' + m.type + ']</span> '
          + highlightMatch(m.text, query)
          + '</div>';
      }).join('');
    }

    // 搜索结果点击：滚动到对应卡片
    searchResults.addEventListener('click', function(e) {
      var item = e.target.closest('.search-result-item');
      if (!item || item.dataset.matchIndex === undefined) return;
      var idx = parseInt(item.dataset.matchIndex);
      var match = searchMatches[idx];
      if (match && match.card) {
        match.card.scrollIntoView({ behavior: 'smooth', block: 'center' });
        searchResults.classList.remove('active');
      }
    });

    // ===== 分类标签 =====
    chips.forEach(function(chip) {
      chip.addEventListener('click', function() {
        chips.forEach(function(c) { c.classList.remove('active'); });
        chip.classList.add('active');
        filterState.category = chip.dataset.filter;
        applyFilters();
      });
    });

    // ===== ESC 清空搜索 =====
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') {
        searchResults.classList.remove('active');
        searchInput.value = '';
        filterState.query = '';
        searchMatches = [];
        applyFilters();
        searchInput.blur();
      }
    });

    // ===== 点击外部关闭搜索下拉 =====
    document.addEventListener('click', function(e) {
      if (!searchInput.contains(e.target) && !searchResults.contains(e.target)) {
        searchResults.classList.remove('active');
      }
    });
  }

  // 搜索高亮（复用 escapeRegex 辅助函数）
  function highlightMatch(text, query) {
    var maxLen = 80;
    var lower = text.toLowerCase();
    var idx = lower.indexOf(query);
    if (idx === -1) return escapeHtml(text.slice(0, maxLen)) + (text.length > maxLen ? '...' : '');
    var start = Math.max(0, idx - 20);
    var end = Math.min(text.length, idx + query.length + 40);
    var result = escapeHtml(text.slice(start, end));
    result = result.replace(new RegExp(escapeRegex(query), 'gi'), function(m) { return '<span class="search-highlight">' + m + '</span>'; });
    return (start > 0 ? '...' : '') + result + (end < text.length ? '...' : '');
  }

  // ===================== 返回顶部 =====================
  function initBackToTop() {
    var btn = $('#btnBackToTop');

    window.addEventListener('scroll', function() {
      if (window.scrollY > 800) {
        btn.classList.add('visible');
      } else {
        btn.classList.remove('visible');
      }
    }, { passive: true });

    btn.addEventListener('click', function() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ===================== 辅助函数 =====================
  function escapeHtml(str) {
    if (!str) return '';
    var div = document.createElement('div');
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
    initToolbar();
    initBackToTop();
  }

  // DOM 就绪后初始化
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
