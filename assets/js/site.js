/* ==========================================================================
   KIKI Lab — rendering + behavior
   Pages are static shells. Each container carries data-render="<name>" and is
   filled from window.SITE (assets/js/data.js). Nav and footer are built once
   here so there is only one copy to edit.
   ========================================================================== */
(function () {
  "use strict";

  var S = window.SITE;
  var $ = function (sel, root) { return (root || document).querySelector(sel); };
  var $$ = function (sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); };

  var NAV = [
    { href: "research.html",     label: "Research" },
    { href: "publications.html", label: "Publications" },
    { href: "people.html",       label: "People" },
    { href: "news.html",         label: "News" },
    { href: "teaching.html",     label: "Teaching" },
    { href: "join.html",         label: "Join us" },
    { href: "contact.html",      label: "Contact" }
  ];

  var MONTHS = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

  /* ---- helpers ---------------------------------------------------------- */

  function codeById(id) {
    for (var i = 0; i < S.codes.length; i++) { if (S.codes[i].id === id) return S.codes[i]; }
    return null;
  }

  function chips(ids, asLinks) {
    if (!ids || !ids.length) return "";
    return ids.map(function (id) {
      var c = codeById(id);
      if (!c) return "";
      return asLinks
        ? '<a class="chip chip--' + id + '" href="research.html#' + id + '" title="' + stripTags(c.name) + '">' + c.code + "</a>"
        : '<span class="chip chip--' + id + '" title="' + stripTags(c.name) + '">' + c.code + "</span>";
    }).join("");
  }

  function stripTags(s) { return String(s).replace(/<[^>]*>/g, "").replace(/&amp;/g, "&"); }

  function boldLu(s) { return String(s).replace(/Lu, L\./g, "<b>Lu, L.</b>"); }

  function fmtDate(iso) {
    var p = String(iso).split("-");
    return p[2] + " " + MONTHS[parseInt(p[1], 10) - 1] + " " + p[0];
  }

  function links(arr) {
    if (!arr || !arr.length) return "";
    return arr.map(function (l) {
      return '<a href="' + l.url + '" target="_blank" rel="noopener">' + l.label + "</a>";
    }).join("");
  }

  /* ---- chrome ----------------------------------------------------------- */

  function currentPage() {
    var f = location.pathname.split("/").pop();
    return f && f.length ? f : "index.html";
  }

  function buildHeader() {
    var here = currentPage();
    var host = $("[data-chrome='header']");
    if (!host) return;

    host.className = "hdr";
    host.innerHTML =
      '<div class="wrap hdr__in">' +
        '<a class="mark" href="index.html">' +
          '<span class="mark__name">' + S.lab.name + "</span>" +
          '<span class="mark__unit">' + S.lab.university + "</span>" +
        "</a>" +
        '<nav class="nav" id="sitenav" aria-label="Main">' +
          NAV.map(function (n) {
            var cur = n.href === here ? ' aria-current="page"' : "";
            return '<a href="' + n.href + '"' + cur + ">" + n.label + "</a>";
          }).join("") +
        "</nav>" +
        '<div class="hdr__tools">' +
          '<button class="iconbtn menubtn" type="button" aria-expanded="false" aria-controls="sitenav" aria-label="Menu">' +
            '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M1 4h14M1 8h14M1 12h14"/></svg>' +
          "</button>" +
          '<button class="iconbtn themebtn" type="button" aria-label="Switch color theme"></button>' +
        "</div>" +
      "</div>";

    wireMenu();
    wireTheme();
  }

  function buildFooter() {
    var host = $("[data-chrome='footer']");
    if (!host) return;
    var c = S.contact;

    host.className = "ftr";
    host.innerHTML =
      '<div class="wrap">' +
        '<div class="ftr__in">' +
          "<div>" +
            "<h2>" + S.lab.name + "</h2>" +
            '<p class="mono ftr__exp" style="text-transform:none;letter-spacing:.06em;line-height:1.7">' +
              S.lab.expansion.join(" &middot; ") + "</p>" +
            '<p class="mono ftr__exp" style="text-transform:none;letter-spacing:.04em;line-height:1.7">' +
              S.lab.unit + "<br>" + S.lab.university + "</p>" +
          "</div>" +
          "<div><h3>Pages</h3><ul>" +
            NAV.map(function (n) { return '<li><a href="' + n.href + '">' + n.label + "</a></li>"; }).join("") +
          "</ul></div>" +
          "<div><h3>Elsewhere</h3><ul>" +
            S.people.pi.links.map(function (l) {
              return '<li><a href="' + l.url + '" target="_blank" rel="noopener">' + l.label + "</a></li>";
            }).join("") +
            '<li><a href="mailto:' + c.email + '">' + c.email + "</a></li>" +
          "</ul></div>" +
        "</div>" +
        '<div class="ftr__base">' +
          '<span class="mono">&copy; ' + new Date().getFullYear() + " " + S.lab.name + "</span>" +
          '<span class="mono">Grand Forks, North Dakota</span>' +
        "</div>" +
      "</div>";
  }

  function wireMenu() {
    var btn = $(".menubtn"), nav = $("#sitenav");
    if (!btn || !nav) return;

    var mq = window.matchMedia("(max-width: 900px)");
    function sync() {
      if (mq.matches) { nav.hidden = true; btn.setAttribute("aria-expanded", "false"); }
      else { nav.hidden = false; }
    }
    sync();
    (mq.addEventListener ? mq.addEventListener.bind(mq, "change") : mq.addListener.bind(mq))(sync);

    btn.addEventListener("click", function () {
      var open = btn.getAttribute("aria-expanded") === "true";
      btn.setAttribute("aria-expanded", String(!open));
      nav.hidden = open;
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && mq.matches && !nav.hidden) { btn.setAttribute("aria-expanded", "false"); nav.hidden = true; btn.focus(); }
    });
  }

  var SUN = '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.4"><circle cx="8" cy="8" r="3.2"/><path d="M8 .8v1.8M8 13.4v1.8M.8 8h1.8M13.4 8h1.8M2.9 2.9l1.3 1.3M11.8 11.8l1.3 1.3M13.1 2.9l-1.3 1.3M4.2 11.8l-1.3 1.3"/></svg>';
  var MOON = '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M13.5 9.6A5.8 5.8 0 0 1 6.4 2.5a5.8 5.8 0 1 0 7.1 7.1z"/></svg>';

  function wireTheme() {
    var btn = $(".themebtn");
    if (!btn) return;
    function paint() {
      var dark = document.documentElement.getAttribute("data-theme") === "dark" ||
        (!document.documentElement.getAttribute("data-theme") &&
          window.matchMedia("(prefers-color-scheme: dark)").matches);
      btn.innerHTML = dark ? SUN : MOON;
    }
    paint();
    btn.addEventListener("click", function () {
      var dark = document.documentElement.getAttribute("data-theme") === "dark" ||
        (!document.documentElement.getAttribute("data-theme") &&
          window.matchMedia("(prefers-color-scheme: dark)").matches);
      var next = dark ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", next);
      try { localStorage.setItem("kiki-theme", next); } catch (e) {}
      paint();
    });
  }

  /* ---- renderers -------------------------------------------------------- */

  var R = {};

  R["codes-preview"] = function (el) {
    el.className = "codes";
    el.innerHTML = S.codes.map(function (c) {
      return '<article class="code-row">' +
        '<div class="code-row__k"><a class="chip chip--' + c.id + '" href="research.html#' + c.id + '">' + c.code + "</a></div>" +
        "<div><h3>" + c.name + "</h3><p>" + c.short + "</p></div></article>";
    }).join("");
  };

  R["codes-full"] = function (el) {
    el.innerHTML = S.codes.map(function (c) {
      var rel = S.publications.filter(function (p) { return p.codes.indexOf(c.id) > -1; }).slice(0, 3);
      return '<section class="code-full" id="' + c.id + '">' +
        '<span class="chip chip--' + c.id + '">' + c.code + "</span>" +
        "<h3>" + c.name + "</h3>" +
        '<p class="lede" style="margin-bottom:1rem">' + c.short + "</p>" +
        '<div class="code-full__body"><p>' + c.body + "</p></div>" +
        (rel.length
          ? '<div class="code-full__pubs">' + rel.map(function (p) {
              var url = p.links && p.links[0] ? p.links[0].url : "publications.html";
              return '<a class="pub--mini" href="' + url + '" target="_blank" rel="noopener">' +
                '<span class="pub__year">' + p.year + "</span>" +
                '<span><span class="pub__title">' + p.title + "</span>" +
                '<span class="pub__venue">' + p.venue + "</span></span></a>";
            }).join("") + "</div>"
          : "") +
        "</section>";
    }).join("");
  };

  R["projects"] = function (el) {
    el.innerHTML = S.projects.map(function (p) {
      return '<article class="proj">' +
        '<div class="proj__fig"><img src="' + p.img + '" alt="" width="400" height="300"></div>' +
        "<div>" +
          '<div class="chips" style="margin-bottom:.7rem">' + chips(p.codes, true) + "</div>" +
          "<h3>" + p.name + "</h3>" +
          '<p class="proj__tag">' + p.tagline + "</p>" +
          '<p class="prose">' + p.body + "</p>" +
          '<div class="proj__links">' + links(p.links) + "</div>" +
        "</div></article>";
    }).join("");
  };

  function pubHTML(p) {
    return '<article class="pub" data-year="' + p.year + '" data-codes="' + p.codes.join(" ") + '" ' +
      'data-search="' + stripTags(p.title + " " + p.authors + " " + p.venue).toLowerCase().replace(/"/g, "") + '">' +
      '<div class="pub__year">' + p.year + "</div>" +
      "<div>" +
        '<h3 class="pub__title">' + p.title + "</h3>" +
        '<p class="pub__authors">' + boldLu(p.authors) + "</p>" +
        '<div class="pub__venue"><em>' + p.venue + "</em>" +
          (p.status ? ' &middot; <span class="pub__status">' + p.status + "</span>" : "") + "</div>" +
        (p.codes.length ? '<div class="pub__tags">' + chips(p.codes, true) + "</div>" : "") +
      "</div>" +
      '<div class="pub__links">' + links(p.links) + "</div>" +
      "</article>";
  }

  R["pubs-all"] = function (el) {
    el.className = "pubs";
    el.innerHTML = S.publications.map(pubHTML).join("") +
      '<p class="empty" hidden>No publications match those filters.</p>';
    wireFilters(el);
  };

  R["pubs-latest"] = function (el) {
    var n = parseInt(el.getAttribute("data-limit") || "4", 10);
    el.className = "pubs";
    el.innerHTML = S.publications.slice(0, n).map(pubHTML).join("");
  };

  function wireFilters(list) {
    var bar = $("[data-filters]");
    if (!bar) return;

    var years = [];
    S.publications.forEach(function (p) { if (years.indexOf(p.year) < 0) years.push(p.year); });

    bar.className = "filters";
    bar.innerHTML =
      '<input class="search" type="search" placeholder="Search titles, authors, venues" aria-label="Search publications">' +
      S.codes.map(function (c) {
        return '<button class="pill" type="button" data-c="' + c.id + '" data-filter="code" aria-pressed="false">' + c.code + "</button>";
      }).join("") +
      years.map(function (y) {
        return '<button class="pill" type="button" data-y="' + y + '" data-filter="year" aria-pressed="false">' + y + "</button>";
      }).join("") +
      '<span class="count" data-count></span>';

    var search = $(".search", bar);
    var countEl = $("[data-count]", bar);
    var empty = $(".empty", list);
    var items = $$(".pub", list);

    function apply() {
      var q = search.value.trim().toLowerCase();
      var codesOn = $$('[data-filter="code"][aria-pressed="true"]', bar).map(function (b) { return b.getAttribute("data-c"); });
      var yearsOn = $$('[data-filter="year"][aria-pressed="true"]', bar).map(function (b) { return b.getAttribute("data-y"); });
      var shown = 0;

      items.forEach(function (it) {
        var itCodes = it.getAttribute("data-codes").split(" ");
        var okCode = !codesOn.length || codesOn.some(function (c) { return itCodes.indexOf(c) > -1; });
        var okYear = !yearsOn.length || yearsOn.indexOf(it.getAttribute("data-year")) > -1;
        var okText = !q || it.getAttribute("data-search").indexOf(q) > -1;
        var ok = okCode && okYear && okText;
        it.hidden = !ok;
        if (ok) shown++;
      });

      countEl.textContent = shown + " of " + items.length;
      if (empty) empty.hidden = shown !== 0;
    }

    bar.addEventListener("click", function (e) {
      var b = e.target.closest(".pill");
      if (!b) return;
      b.setAttribute("aria-pressed", b.getAttribute("aria-pressed") === "true" ? "false" : "true");
      apply();
    });
    search.addEventListener("input", apply);
    apply();
  }

  R["metrics"] = function (el) {
    el.className = "metrics";
    el.innerHTML = S.metrics.items.map(function (m) {
      return '<div><div class="metric__v">' + m.value + '</div><div class="metric__l">' + m.label + "</div></div>";
    }).join("") +
      '<div><div class="metric__v" style="font-size:1rem;padding-top:.55rem">' +
      '<a href="' + S.metrics.source + '" target="_blank" rel="noopener" style="font-family:var(--mono);font-size:.6875rem;letter-spacing:.1em;text-transform:uppercase">Google Scholar &rarr;</a></div>' +
      '<div class="metric__l">as of ' + S.metrics.asOf + "</div></div>";
  };

  R["news-all"] = function (el) { renderNews(el, S.news.length); };
  R["news-latest"] = function (el) { renderNews(el, parseInt(el.getAttribute("data-limit") || "4", 10)); };

  function renderNews(el, n) {
    el.className = "news";
    el.innerHTML = S.news.slice(0, n).map(function (it) {
      return '<article class="news__item">' +
        '<div class="news__date">' + fmtDate(it.date) + "</div>" +
        "<div><h3>" + it.title + "</h3><p>" + it.body + "</p>" +
        (it.url ? '<a class="news__more" href="' + it.url + '" target="_blank" rel="noopener">Read more &rarr;</a>' : "") +
        "</div></article>";
    }).join("");
  }

  R["people-pi"] = function (el) {
    var p = S.people.pi;
    el.className = "pi";
    el.innerHTML =
      '<div><img class="portrait" src="' + p.img + '" alt="" width="220" height="275">' +
        '<div class="pi__links">' + p.links.map(function (l) {
          return '<a href="' + l.url + '" target="_blank" rel="noopener">' + l.label + "</a>";
        }).join("") + "</div>" +
      "</div>" +
      "<div>" +
        '<span class="mono">' + p.role + "</span>" +
        "<h2>" + p.name + "</h2>" +
        '<p class="pi__title">' + p.title + " &middot; " + p.org + "<br>" +
          '<span class="mono" style="text-transform:none;letter-spacing:.04em">pronounced ' + p.pronunciation + "</span></p>" +
        '<p class="prose">' + p.bio + "</p>" +
        '<ul class="namelist" style="margin-top:1.25rem">' +
          p.interests.map(function (i) { return "<li>" + i + "</li>"; }).join("") +
        "</ul>" +
      "</div>";
  };

  function memberHTML(m) {
    var name = m.url ? '<a href="' + m.url + '" target="_blank" rel="noopener">' + m.name + "</a>" : m.name;
    return '<article class="member">' +
      (m.img ? '<img class="member__img" src="' + m.img + '" alt="" width="68" height="68">' : "") +
      "<h3>" + name + "</h3>" +
      (m.title ? '<p class="member__title">' + m.title + "</p>" : "") +
      (m.note ? '<p class="member__note">' + m.note + "</p>" : "") +
      (m.interests ? '<p class="member__int">' + m.interests + "</p>" : "") +
      "</article>";
  }

  /* Hide the whole section when a group is empty, so people.html can keep a
     slot for every group and it appears the moment someone is added. */
  function hideIfEmpty(el, list) {
    var section = el.closest ? el.closest("section") : null;
    if (section) section.hidden = !list.length;
    return list.length > 0;
  }

  function roster(key, cls) {
    return function (el) {
      var list = S.people[key];
      if (!hideIfEmpty(el, list)) return;
      el.className = cls;
      el.innerHTML = list.map(memberHTML).join("");
    };
  }

  R["people-affiliated"] = roster("affiliated", "roster");
  R["people-graduate"] = roster("graduate", "roster");
  R["people-alumni"] = roster("alumni", "roster");
  R["people-undergrad"] = function (el) {
    var list = S.people.undergraduate;
    if (!hideIfEmpty(el, list)) return;
    el.className = "namelist";
    el.innerHTML = list.map(function (m) { return "<li>" + m.name + "</li>"; }).join("");
  };

  R["teaching"] = function (el) {
    el.innerHTML = S.teaching.map(function (g) {
      return '<section style="margin-bottom:2.75rem">' +
        '<h3 class="mono" style="margin-bottom:1rem">' + g.org + "</h3>" +
        g.courses.map(function (c) {
          return '<article class="course">' +
            '<div><span class="course__code">' + c.code + '</span><span class="course__term">' + c.term + "</span></div>" +
            "<div><h3>" + c.name + "</h3><p>" + c.body + "</p>" +
            '<p class="course__meta">' + c.level + (c.eval ? " &middot; evaluation " + c.eval : "") + "</p></div>" +
            "</article>";
        }).join("") +
      "</section>";
    }).join("");
  };

  R["resources"] = function (el) {
    el.className = "linklist";
    el.innerHTML = S.resources.map(function (r) {
      return '<a href="' + r.url + '" target="_blank" rel="noopener">' +
        '<span class="mono">' + r.kind + "</span>" +
        "<span><h3>" + r.name + "</h3><p>" + r.body + "</p></span></a>";
    }).join("");
  };

  R["grants"] = function (el) {
    el.innerHTML =
      '<div class="tablewrap"><table class="table">' +
      "<thead><tr><th>Year</th><th>Project</th><th>Funder</th><th>Amount</th><th>Role</th></tr></thead><tbody>" +
      S.grants.map(function (g) {
        return "<tr><td>" + g.year + "</td><td>" + g.title + "</td><td>" + g.funder + "</td><td>" +
          (g.amount || "&mdash;") + "</td><td>" + g.role + "</td></tr>";
      }).join("") +
      "</tbody></table></div>";
  };

  R["affiliations"] = function (el) {
    el.className = "affil";
    el.innerHTML = S.lab.affiliations.map(function (a) {
      return '<a href="' + a.url + '" target="_blank" rel="noopener"><strong>' + a.name + "</strong><span>" + a.note + "</span></a>";
    }).join("");
  };

  R["contact"] = function (el) {
    var c = S.contact;
    el.className = "contact-grid";
    el.innerHTML =
      "<div><h3>Visit</h3><address>" + c.address.join("<br>") + "</address></div>" +
      '<div><h3>Write</h3><p><a href="mailto:' + c.email + '">' + c.email + "</a></p>" +
        '<p style="margin-top:.6rem"><a href="' + c.directory + '" target="_blank" rel="noopener">UND directory &rarr;</a></p></div>' +
      '<div><h3>Department</h3><p><a href="' + c.department + '" target="_blank" rel="noopener">Communication at UND &rarr;</a></p>' +
        '<p style="margin-top:.6rem"><a href="join.html">Join the lab &rarr;</a></p></div>';
  };

  R["hero-exp"] = function (el) {
    el.className = "hero__exp";
    el.innerHTML = S.lab.expansion.map(function (w) {
      return "<span><b>" + w.charAt(0) + "</b>" + w.slice(1) + "</span>";
    }).join('<span aria-hidden="true">/</span>');
  };

  /* ---- boot ------------------------------------------------------------- */

  function render() {
    if (!S) return;
    buildHeader();
    buildFooter();
    $$("[data-render]").forEach(function (el) {
      var fn = R[el.getAttribute("data-render")];
      if (fn) { try { fn(el); } catch (err) { console.error("render failed:", el.getAttribute("data-render"), err); } }
    });
    // Fill any element that just wants a value from the data file.
    $$("[data-text]").forEach(function (el) {
      var path = el.getAttribute("data-text").split(".");
      var v = S;
      for (var i = 0; i < path.length && v != null; i++) { v = v[path[i]]; }
      if (v != null) el.innerHTML = v;
    });
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", render);
  else render();
})();
