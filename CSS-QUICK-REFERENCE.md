# Quick Reference Guide - CSS Files

## 🎯 কোন CSS File কোথায় কি আছে (Quick Lookup)

### যদি আপনি খুঁজছেন... (If you're looking for...)

#### **Header সম্পর্কিত**
- Logo styles → `css/header.css`
- Navigation → `css/header.css`
- Mobile menu → `css/header.css`
- Header background → `css/header.css`

#### **Footer সম্পর্কিত**
- Footer layout → `css/footer.css`
- Social media links → `css/footer.css`
- Copyright text → `css/footer.css`
- Back to top button → `css/footer.css`

#### **Interview List Page**
- Interview cards → `css/interview-archive.css`
- Grid layout → `css/interview-archive.css`
- Thumbnails → `css/interview-archive.css`
- Hover effects → `css/interview-archive.css`

#### **Interview Detail Page**
- Question sections → `css/interview-detail.css`
- Answer text → `css/interview-detail.css`
- Image galleries → `css/interview-detail.css`
- Member slider → `css/interview-detail.css`

#### **Common Elements**
- Typography → `css/base.css`
- Links → `css/base.css`
- Reset styles → `css/base.css`
- Utilities → `css/base.css`
- Background circles → `css/base.css`

#### **Other Sections**
- Service section → `service.css`
- Problem section → `problem.css`
- Career section → `career.css`
- Specialist section → `specialist.css`
- Hero banner → `hero.css`
- FAQ → `faq.css`
- News → `news.css`

---

## 📱 Responsive Breakpoints Quick Reference

```css
/* Mobile First */
Default styles = Mobile (0-781px)

/* Tablet */
@media screen and (min-width: 782px) { }

/* Desktop */
@media screen and (min-width: 1011px) { }

/* Large Desktop */
@media screen and (min-width: 1441px) { }
```

---

## 🔧 Common Tasks

### Task 1: Change Header Color
**File:** `css/header.css`
```css
#header {
  background: #c30000; /* Change this */
}
```

### Task 2: Change Footer Background
**File:** `css/footer.css`
```css
#footer {
  background: #c30000; /* Change this */
}
```

### Task 3: Modify Interview Card Size
**File:** `css/interview-archive.css`
```css
.interview-list > a {
  width: 33%; /* Change this */
}
```

### Task 4: Change Link Color
**File:** `css/base.css`
```css
a {
  color: #323232; /* Change this */
}
```

### Task 5: Adjust Mobile Menu
**File:** `css/header.css`
```css
#menu {
  /* Mobile menu styles here */
}
```

---

## 🎨 Color Variables (Currently Used)

```css
Primary Red: #c30000
Secondary Red: #ff6a6a
Text Color: #323232
Background: #eaeaea
White: #ffffff
```

**Location:** Used throughout all CSS files

**Recommendation:** Convert to CSS variables in future:
```css
:root {
  --color-primary: #c30000;
  --color-secondary: #ff6a6a;
  --color-text: #323232;
  --color-bg: #eaeaea;
}
```

---

## 📏 Spacing System

```css
Small: 20px
Medium: 30px
Large: 60px
Extra Large: 100px
```

---

## 🔍 How to Find Specific Styles

### Method 1: By Section
1. Identify which section you want to modify
2. Open corresponding CSS file
3. Find the styles

### Method 2: By Element
1. Use browser DevTools
2. Inspect element
3. See which CSS file it comes from
4. Open that file

### Method 3: By Search
1. Use VS Code global search (Ctrl+Shift+F)
2. Search for class name or selector
3. It will show which file contains it

---

## 🚀 Quick Commands

### Search for a class
```bash
# In VS Code
Ctrl+Shift+F (Windows)
Cmd+Shift+F (Mac)
```

### Find in current file
```bash
Ctrl+F (Windows)
Cmd+F (Mac)
```

### Go to line
```bash
Ctrl+G (Windows)
Cmd+G (Mac)
```

---

## ⚡ Performance Tips

### Load only what you need
```html
<!-- For Interview Page only -->
<link rel="stylesheet" href="css/base.css" />
<link rel="stylesheet" href="css/header.css" />
<link rel="stylesheet" href="css/footer.css" />
<link rel="stylesheet" href="css/interview-detail.css" />
```

### Minify for production
```bash
# Use a CSS minifier
# Example: cssnano, clean-css
```

---

## 🐛 Debugging Tips

### CSS not loading?
1. Check browser console for 404 errors
2. Verify file paths in `style-new.css`
3. Clear browser cache (Ctrl+Shift+R)
4. Check if file exists

### Styles not applying?
1. Check CSS specificity
2. Look for `!important` overrides
3. Verify media query breakpoints
4. Use DevTools to see computed styles

### Layout broken?
1. Check for missing closing braces `}`
2. Validate CSS syntax
3. Check for conflicting styles
4. Test on different browsers

---

## 📋 File Size Reference

| File | Approximate Size | Lines |
|------|-----------------|-------|
| base.css | ~8KB | ~200 |
| header.css | ~6KB | ~200 |
| footer.css | ~4KB | ~130 |
| interview-archive.css | ~7KB | ~250 |
| interview-detail.css | ~12KB | ~600 |
| recruit-banner.css | ~3KB | ~120 |

---

## 🔄 Update Workflow

### When making changes:

1. **Identify** which section needs changes
2. **Open** the corresponding CSS file
3. **Edit** the styles
4. **Save** the file
5. **Test** in browser (clear cache)
6. **Verify** responsive behavior
7. **Commit** changes with descriptive message

---

## 📝 Naming Conventions

### Classes
```css
/* Good */
.interview-list
.recruit-banner-circle
.footer-lower

/* Avoid */
.il
.rbc
.fl
```

### IDs
```css
/* Good */
#header
#footer
#interview-archive

/* Avoid */
#h
#f
#ia
```

---

## 🎯 Common Selectors Location

| Selector | File |
|----------|------|
| `#header` | css/header.css |
| `#footer` | css/footer.css |
| `#menu` | css/header.css |
| `#panel` | css/header.css |
| `.interview-list` | css/interview-archive.css |
| `.interview-info` | css/interview-detail.css |
| `.question` | css/interview-detail.css |
| `.recruit-banner-circle` | css/recruit-banner.css |
| `body` | css/base.css |
| `a` | css/base.css |
| `.inner` | css/base.css |

---

## 💡 Pro Tips

1. **Use DevTools**: Chrome/Firefox DevTools show which CSS file a style comes from
2. **Search Smart**: Use specific class names to find styles quickly
3. **Comment Your Code**: Add comments for complex styles
4. **Test Responsive**: Always test on mobile, tablet, and desktop
5. **Keep Organized**: Don't add styles to wrong files
6. **Version Control**: Commit changes regularly
7. **Backup**: Keep the old `style.css` as backup

---

## 🆘 Emergency Rollback

If something breaks:

```html
<!-- In index.html, change: -->
<link rel="stylesheet" href="wp-content/themes/e-grant/style-new.css?v2" />

<!-- Back to: -->
<link rel="stylesheet" href="wp-content/themes/e-grant/style.css?v1" />
```

---

## 📞 Quick Help

### Problem: Styles not showing
**Solution:** Clear cache, check file paths

### Problem: Layout broken on mobile
**Solution:** Check `css/header.css` and `css/footer.css` media queries

### Problem: Interview page looks wrong
**Solution:** Check `css/interview-detail.css`

### Problem: Colors are wrong
**Solution:** Check `css/base.css` for global styles

---

## ✅ Checklist Before Deployment

- [ ] All CSS files exist
- [ ] No 404 errors in console
- [ ] Tested on Chrome
- [ ] Tested on Firefox
- [ ] Tested on Safari
- [ ] Mobile responsive works
- [ ] Tablet responsive works
- [ ] Desktop responsive works
- [ ] All links work
- [ ] All images load
- [ ] No console errors

---

**Remember:** 
- Each CSS file is focused on one section
- No duplicate styles
- Easy to find and modify
- Better for team collaboration
