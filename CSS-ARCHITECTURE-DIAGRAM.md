# CSS Architecture Diagram

## Before Refactoring (আগে)

```
┌─────────────────────────────────────┐
│                                     │
│         style.css (77KB)            │
│                                     │
│  • All CSS mixed together           │
│  • Duplicate styles                 │
│  • Hard to maintain                 │
│  • Difficult to find specific CSS   │
│                                     │
└─────────────────────────────────────┘
```

---

## After Refactoring (এখন)

```
┌───────────────────────────────────────────────────────────────┐
│                     style-new.css (Main)                      │
│                   (Imports all modules)                       │
└───────────────────────────────────────────────────────────────┘
                              │
                              │ @import
                              ▼
        ┌─────────────────────────────────────────┐
        │                                         │
        │         Core CSS Modules                │
        │         (css/ directory)                │
        │                                         │
        ├─────────────────────────────────────────┤
        │                                         │
        │  ┌─────────────────────────────────┐   │
        │  │  base.css                       │   │
        │  │  • Reset                        │   │
        │  │  • Typography                   │   │
        │  │  • Common Utilities             │   │
        │  └─────────────────────────────────┘   │
        │                                         │
        │  ┌─────────────────────────────────┐   │
        │  │  header.css                     │   │
        │  │  • Header Layout                │   │
        │  │  • Navigation                   │   │
        │  │  • Mobile Menu                  │   │
        │  └─────────────────────────────────┘   │
        │                                         │
        │  ┌─────────────────────────────────┐   │
        │  │  footer.css                     │   │
        │  │  • Footer Layout                │   │
        │  │  • Social Links                 │   │
        │  │  • Copyright                    │   │
        │  └─────────────────────────────────┘   │
        │                                         │
        │  ┌─────────────────────────────────┐   │
        │  │  interview-archive.css          │   │
        │  │  • Interview List               │   │
        │  │  • Card Layouts                 │   │
        │  │  • Grid System                  │   │
        │  └─────────────────────────────────┘   │
        │                                         │
        │  ┌─────────────────────────────────┐   │
        │  │  interview-detail.css           │   │
        │  │  • Interview Page               │   │
        │  │  • Questions & Answers          │   │
        │  │  • Image Galleries              │   │
        │  └─────────────────────────────────┘   │
        │                                         │
        │  ┌─────────────────────────────────┐   │
        │  │  recruit-banner.css             │   │
        │  │  • Recruit Section              │   │
        │  │  • Circular Design              │   │
        │  │  • CTA Buttons                  │   │
        │  └─────────────────────────────────┘   │
        │                                         │
        └─────────────────────────────────────────┘
                              │
                              │ @import
                              ▼
        ┌─────────────────────────────────────────┐
        │                                         │
        │      Section CSS Modules                │
        │      (theme root directory)             │
        │                                         │
        ├─────────────────────────────────────────┤
        │                                         │
        │  • service.css      • hero.css          │
        │  • problem.css      • responsive.css    │
        │  • career.css       • systemdesign.css  │
        │  • specialist.css   • news.css          │
        │                     • faq.css           │
        │                                         │
        └─────────────────────────────────────────┘
```

---

## File Size Comparison

```
Before:
┌──────────────────────────────┐
│ style.css: 77KB              │
│ (All CSS in one file)        │
└──────────────────────────────┘

After:
┌──────────────────────────────┐
│ base.css: ~8KB               │
│ header.css: ~6KB             │
│ footer.css: ~4KB             │
│ interview-archive.css: ~7KB  │
│ interview-detail.css: ~12KB  │
│ recruit-banner.css: ~3KB     │
│ + other section files        │
│                              │
│ Total: ~77KB (same size)     │
│ But better organized!        │
└──────────────────────────────┘
```

---

## Import Flow

```
index.html
    │
    └──> style-new.css
            │
            ├──> css/base.css
            │       └─> Reset, Typography, Utilities
            │
            ├──> css/header.css
            │       └─> Header, Navigation, Menu
            │
            ├──> css/footer.css
            │       └─> Footer, Links, Copyright
            │
            ├──> css/interview-archive.css
            │       └─> List, Cards, Grid
            │
            ├──> css/interview-detail.css
            │       └─> Detail Page, Q&A, Images
            │
            ├──> css/recruit-banner.css
            │       └─> Banner, Circular Design
            │
            ├──> service.css
            ├──> problem.css
            ├──> career.css
            ├──> specialist.css
            ├──> hero.css
            ├──> responsive.css
            ├──> systemdesign.css
            ├──> news.css
            └──> faq.css
```

---

## Responsive Organization

```
Each CSS file contains its own responsive breakpoints:

┌─────────────────────────────────────────────────────┐
│                  CSS File                           │
├─────────────────────────────────────────────────────┤
│                                                     │
│  Desktop Styles (default)                           │
│  ↓                                                  │
│  @media (min-width: 782px) { ... }                  │
│  ↓                                                  │
│  @media (max-width: 781px) { ... }                  │
│  ↓                                                  │
│  @media (min-width: 782px) and                      │
│         (max-width: 1010px) { ... }                 │
│  ↓                                                  │
│  @media (min-width: 1011px) and                     │
│         (max-width: 1280px) { ... }                 │
│  ↓                                                  │
│  @media (min-width: 1281px) { ... }                 │
│                                                     │
└─────────────────────────────────────────────────────┘
```

---

## Benefits Visualization

```
┌──────────────────────┐      ┌──────────────────────┐
│   Before (আগে)       │      │   After (এখন)        │
├──────────────────────┤      ├──────────────────────┤
│                      │      │                      │
│  ❌ One big file     │      │  ✅ 15 small files   │
│  ❌ Hard to find     │      │  ✅ Easy to find     │
│  ❌ Duplicates       │      │  ✅ No duplicates    │
│  ❌ Merge conflicts  │      │  ✅ Team friendly    │
│  ❌ Slow to edit     │      │  ✅ Fast to edit     │
│                      │      │                      │
└──────────────────────┘      └──────────────────────┘
```

---

## Development Workflow

```
┌─────────────────────────────────────────────────────┐
│                                                     │
│  Developer wants to change Header styles            │
│                                                     │
│  Before:                                            │
│  1. Open style.css (77KB)                           │
│  2. Search for header styles                        │
│  3. Find among 4000+ lines                          │
│  4. Hope not to break other sections                │
│                                                     │
│  After:                                             │
│  1. Open css/header.css (~6KB)                      │
│  2. All header styles in one place                  │
│  3. Easy to find and modify                         │
│  4. Won't affect other sections                     │
│                                                     │
└─────────────────────────────────────────────────────┘
```

---

## Maintenance Comparison

```
Scenario: Fix a bug in the footer

Before:
┌────────────────────────────────────┐
│ 1. Open style.css (4009 lines)     │
│ 2. Search "footer"                 │
│ 3. Found in multiple places        │
│ 4. Check each occurrence           │
│ 5. Fix the right one               │
│ 6. Hope nothing else breaks        │
│ Time: 15-20 minutes                │
└────────────────────────────────────┘

After:
┌────────────────────────────────────┐
│ 1. Open css/footer.css (~130 lines)│
│ 2. All footer code visible         │
│ 3. Find and fix the bug            │
│ 4. Only footer affected            │
│ Time: 5 minutes                    │
└────────────────────────────────────┘
```

---

## Team Collaboration

```
Before:
┌──────────────────────────────────────────┐
│  Developer A: Working on header          │
│  Developer B: Working on footer          │
│                                          │
│  Both editing: style.css                 │
│                                          │
│  Result: ❌ Merge conflicts!             │
└──────────────────────────────────────────┘

After:
┌──────────────────────────────────────────┐
│  Developer A: Working on header          │
│  Editing: css/header.css                 │
│                                          │
│  Developer B: Working on footer          │
│  Editing: css/footer.css                 │
│                                          │
│  Result: ✅ No conflicts!                │
└──────────────────────────────────────────┘
```

---

## Performance Strategy

```
Future Optimization Possibilities:

┌─────────────────────────────────────────┐
│                                         │
│  Page-Specific Loading:                 │
│                                         │
│  Homepage:                              │
│  ├─ base.css                            │
│  ├─ header.css                          │
│  ├─ footer.css                          │
│  ├─ hero.css                            │
│  └─ service.css                         │
│                                         │
│  Interview Page:                        │
│  ├─ base.css                            │
│  ├─ header.css                          │
│  ├─ footer.css                          │
│  └─ interview-detail.css                │
│                                         │
│  = Faster page loads!                   │
│                                         │
└─────────────────────────────────────────┘
```

---

## Summary

```
╔═══════════════════════════════════════════════════╗
║                                                   ║
║  ✅ CSS organized into 15 modular files           ║
║  ✅ Duplicates removed                            ║
║  ✅ Connected to main project                     ║
║  ✅ Easy to maintain                              ║
║  ✅ Team-friendly                                 ║
║  ✅ Better performance potential                  ║
║  ✅ Clear structure                               ║
║                                                   ║
║  Total Files Created: 6 new CSS files             ║
║  Total Files Updated: 1 (index.html)              ║
║  Documentation: 3 files                           ║
║                                                   ║
╚═══════════════════════════════════════════════════╝
```
