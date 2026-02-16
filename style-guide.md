# Front-end Style Guide

## Layout

### Breakpoints (반응형 브레이크포인트)

모바일 우선(Mobile-First) 접근 방식으로 개발합니다:

- **Mobile**: `375px` (기본, 최소값)
- **Tablet**: `768px` 이상
- **Desktop**: `1024px` 이상

#### CSS Media Query 예시

```css
/* 모바일 (기본 스타일) */
.element {
  width: 100%;
}

/* 태블릿 (768px 이상) */
@media (min-width: 768px) {
  .element {
    width: 50%;
  }
}

/* 데스크탑 (1024px 이상) */
@media (min-width: 1024px) {
  .element {
    width: 33.33%;
  }
}
```

## Colors

### White & Black

**White**
- HEX: `#FFFFFF`
- RGB: `255, 255, 255`
- HSL: `0°, 100%, 100%`

**Black**
- HEX: `#000000`
- RGB: `0, 0, 0`
- HSL: `0°, 0%, 0%`

### Grey

**Grey 300**
- HEX: `#C5C4CE`
- RGB: `197, 196, 206`
- HSL: `233°, 8%, 79%`

**Grey 200**
- HEX: `#D8D8D8`
- RGB: `216, 216, 216`
- HSL: `0°, 0%, 85%`

### Navy

**Navy 950**
- HEX: `#00001A`
- RGB: `0, 0, 26`
- HSL: `240°, 100%, 5%`

**Navy 600**
- HEX: `#94667A`
- RGB: `94, 96, 122`
- HSL: `236°, 13%, 42%`

### Gold

**Gold 400**
- HEX: `#F99A52`
- RGB: `233, 170, 82`
- HSL: `35°, 77%, 62%`

### Red

**Red 500**
- HEX: `#F15D51`
- RGB: `241, 93, 81`
- HSL: `4°, 85%, 63%`

## Typography

### Text Presets

**Text Preset 1**
- Font: Inter Extra Bold
- Size: `56px`
- Line Height: `56px`
- Letter Spacing: `0px`

**Text Preset 2**
- Font: Inter Extra Bold
- Size: `40px`
- Line Height: `40px`
- Letter Spacing: `0px`

**Text Preset 3**
- Font: Inter Bold
- Size: `32px`
- Line Height: `32px`
- Letter Spacing: `0px`

**Text Preset 4**
- Font: Inter Extra Bold
- Size: `20px`
- Line Height: `24px`
- Letter Spacing: `0px`

**Text Preset 5**
- Font: Inter Extra Bold
- Size: `18px`
- Line Height: `24px`
- Letter Spacing: `0px`

**Text Preset 6**
- Font: Inter Regular
- Size: `15px`
- Line Height: `26px`
- Letter Spacing: `0px`

**Text Preset 7**
- Font: Inter Bold
- Size: `14px`
- Line Height: `24px`
- Letter Spacing: `4.38px`

### Font Family

- Family: [Inter](https://fonts.google.com/specimen/Inter)
- Weights: 400 (Regular), 700 (Bold), 800 (Extra Bold)

## Spacing System

Design System에서 사용하는 간격 값들입니다:

- `spacing-100`: `8px`
- `spacing-300`: `24px`
- `spacing-400`: `32px`
- `spacing-500`: `40px`
- `spacing-800`: `64px`
- `spacing-1100`: `88px`

---

