# Navbar Component Spec

## DOM Structure
```
<header id="header">
  <div class="nav-bar"> (grid: 1fr 1fr 1fr)
    <ul class="nav-left"> (flex, align-items: stretch)
      <li><a href="/company">Company</a></li>
      <li><a href="/news">News</a></li>
    </ul>
    <a class="logo" href="/"> (center)
      <svg>Sun Metalon SVG Logo</svg>
    </a>
    <ul class="nav-right"> (flex, justify: flex-end)
      <li><a href="/careers">Careers</a></li>
      <li><a href="/contact">Contact</a></li>
      <li><a class="lang-switcher" href="/">EN</a></li>
      <li><a class="lang-switcher" href="/jp">日本語</a></li>
    </ul>
  </div>
</header>
```

## CSS Values
- `backdrop-filter: blur(5px)`
- `background-color: #1b170fcc` (80% opacity)
- `position: sticky; top: 0; z-index: 40`
- Grid: `grid-template-columns: 1fr 1fr 1fr`
- Border bottom: `1px solid #3e3a33`
- Logo SVG height: `45px`
- Nav link padding: `0 40px`
- Nav link font: `0.727rem`, weight `600`, color `#ece7e2`
- Active underline: `3px solid #d96833` (bottom)
- Hover bg fill: `#2e281e` slides up from bottom
- Li border-right: `1px solid #3e3a33`
- Scroll-hide: `transform: translateY(-105%)` when `.scrolling`

## Content
Nav links: Home · Company · News · Careers · Contact · EN · 日本語

## Interactions
1. On scroll down → add `.scrolling` → header slides up out of view
2. On scroll up → remove `.scrolling` → header slides back in
3. Hover on nav link → dark bg (#2e281e) animates up from bottom
4. Active link → 3px orange bottom border
5. Language switcher: EN (active) / 日本語
