# Applications Component Spec

## DOM Structure
```
<section class="briquette-types">
  <div class="header">
    <h2>Applications</h2>
  </div>
  <div class="actions"> <!-- tab pills -->
    <button class="secondary active">Sludge</button>
    <button class="secondary">Swarf</button>
    <button class="secondary">Chips</button>
    <button class="secondary">Turnings</button>
  </div>
  <div class="image-wrapper">
    <figure><!-- briquette image --></figure>
  </div>
  <div class="text">
    <p>Description of selected material</p>
  </div>
  <div class="speedbump">
    <h3>Output spec 1</h3>
    <h3>Output spec 2</h3>
    <h3>Output spec 3</h3>
  </div>
</section>
```

## Tab Content
| Tab | Description |
|-----|-------------|
| Sludge | Oily metallic sludge from grinding/machining. High moisture content, hard to handle conventionally. |
| Swarf | Fine metal shavings and chips from turning/milling. Mixed with coolant. |
| Chips | Larger metal pieces from machining operations. Can be compacted for high-value recovery. |
| Turnings | Long spiraling metal ribbons from lathe operations. Bulky, low-density. |

## CSS Values
- Background transitions between silver/aluminum/bronze themes per tab
- `--bgColor1: #eaeaea; --bgColor2: #c7c7c7` (silver default)
- Tab pills: `border-radius: 2rem; background: rgba(#ede8e3, 0.4)` secondary
- Active tab: `background: #ece7e2`
- Section padding: `0 2.22vw`
- speedbump border-top: `1px solid rgba(62,58,51,0.2)`

## Interactions
- Click tab pill → switch active content + background color theme
- Transition: `0.65s cubic-bezier(0.33, 1, 0.68, 1)` on background color
