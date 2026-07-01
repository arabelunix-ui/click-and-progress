# Hero Component Spec

## DOM Structure
```
<section class="page-header homepage">
  <div class="text">
    <h5>Turn your metal waste into revenue</h5>
  </div>
  <figure> <!-- product/machine image --> </figure>
  <svg class="large-logo">Sun Metalon large text logo</svg>
  <div class="glow"></div>
</section>
```

## CSS Values
- `min-height: calc(100dvh - var(--header-height))`
- `background-color: #1b170f`
- `display: flex; flex-direction: column; align-items: center; justify-content: flex-end`
- Large logo: `width: 100vw`, fills bottom of hero
- Text positioned absolute at `top: 50%; transform: translateY(-100%)`
- Glow: `background: #d9683366; filter: blur(158px); height: 25vh; width: 50vw`
- Figure: `width: 49.44vw; margin-bottom: -5vh`

## Content
- **Headline:** "Turn your metal waste into revenue"
- **Sub-headline h5:** Text with decorative lines/SVG arrows on sides
- **Subtext:** "Up to 20% of all metal used in manufacturing becomes waste"
- **CTA Button:** "Contact Us" (links to /contact)
- **Logo Display:** Large "SUN METALON" text SVG at bottom
- **Machine image:** Venus machine product shot

## Interactions
- Glow orb: orange radial glow at bottom center
- Animations: text + figure entrance with clip-path / translate transforms
- Smooth scroll lenis integration
