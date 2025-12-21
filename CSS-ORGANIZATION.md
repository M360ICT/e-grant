# CSS Organization Documentation

## Overview
This project's CSS has been reorganized into modular, section-wise files for better maintainability and easier development.

## File Structure

```
wp-content/themes/e-grant/
├── style.css                    # Original monolithic CSS file (backup)
├── style-new.css                # New main CSS file with @import statements
│
└── css/                         # Modular CSS directory
    ├── base.css                 # Reset, Typography, Common Elements
    ├── header.css               # Header & Navigation
    ├── footer.css               # Footer
    ├── interview-archive.css    # Interview List Page
    ├── interview-detail.css     # Interview Detail Page
    └── recruit-banner.css       # Recruit Banner Section
│
├── service.css                  # Service Section
├── problem.css                  # Problem Section
├── career.css                   # Career Section
├── specialist.css               # Specialist Section
├── hero.css                     # Hero Section
├── responsive.css               # Additional Responsive Styles
├── systemdesign.css             # System Design Section
├── news.css                     # News Section
└── faq.css                      # FAQ Section
```

## CSS Modules Description

### Core Modules (in css/ directory)

#### 1. **base.css**
- CSS Reset
- Body and typography styles
- Link styles
- Common utilities (`.inner`, `.width-full`, etc.)
- Background circle patterns
- Responsive utility classes

#### 2. **header.css**
- Header layout and styling
- Logo styles
- Desktop navigation
- Mobile menu (hamburger menu)
- Header responsive breakpoints

#### 3. **footer.css**
- Footer layout
- Footer navigation
- Social media links
- Copyright section
- Back to top button
- Desktop and mobile footer layouts

#### 4. **interview-archive.css**
- Interview list page layout
- Interview card styles
- Interview thumbnail styles
- Grid layout for interview items
- Hover effects
- Responsive interview list

#### 5. **interview-detail.css**
- Interview detail page layout
- Interview info section
- Question and answer sections
- Interview images and galleries
- Member slider (Slick carousel)
- Navigation between questions
- Responsive interview detail

#### 6. **recruit-banner.css**
- Recruit banner section
- Circular design elements
- Call-to-action button
- Banner responsive layouts

### Section Modules (in root theme directory)

#### 7. **service.css**
- Service section layout
- Service cards
- Service banner
- Service buttons and interactions

#### 8. **problem.css**
- Problem section layout
- Content wrapper
- Image and text layouts

#### 9. **career.css**
- Career section
- Career flow diagrams
- Career boxes and cards
- Message containers

#### 10. **specialist.css**
- Specialist section
- Specialist images
- Text styling

#### 11. **hero.css**
- Hero banner
- Hero title and content

#### 12. **responsive.css**
- Additional responsive utilities
- Mobile-specific adjustments

#### 13. **systemdesign.css**
- System design section styles

#### 14. **news.css**
- News section layout

#### 15. **faq.css**
- FAQ section styles

## How to Use

### Option 1: Use the New Modular Structure (Recommended)

1. **Update your HTML file** to use the new CSS structure:

```html
<!-- Replace this line: -->
<link rel="stylesheet" href="wp-content/themes/e-grant/style.css?v1" />

<!-- With this: -->
<link rel="stylesheet" href="wp-content/themes/e-grant/style-new.css?v2" />
```

2. **Clear browser cache** to ensure the new CSS loads properly.

### Option 2: Use Individual CSS Files

If you prefer more granular control, you can link individual CSS files:

```html
<!-- Core Styles -->
<link rel="stylesheet" href="wp-content/themes/e-grant/css/base.css" />
<link rel="stylesheet" href="wp-content/themes/e-grant/css/header.css" />
<link rel="stylesheet" href="wp-content/themes/e-grant/css/footer.css" />

<!-- Page-Specific Styles -->
<link rel="stylesheet" href="wp-content/themes/e-grant/css/interview-archive.css" />
<link rel="stylesheet" href="wp-content/themes/e-grant/css/interview-detail.css" />
<link rel="stylesheet" href="wp-content/themes/e-grant/css/recruit-banner.css" />

<!-- Section Styles -->
<link rel="stylesheet" href="wp-content/themes/e-grant/service.css" />
<link rel="stylesheet" href="wp-content/themes/e-grant/problem.css" />
<link rel="stylesheet" href="wp-content/themes/e-grant/career.css" />
<!-- Add other sections as needed -->
```

## Benefits of This Organization

### 1. **Better Maintainability**
- Each file focuses on a specific section
- Easier to find and update styles
- Reduced risk of breaking unrelated sections

### 2. **Improved Collaboration**
- Multiple developers can work on different sections simultaneously
- Clear separation of concerns
- Easier code reviews

### 3. **Performance Optimization**
- Can load only necessary CSS for specific pages
- Easier to identify and remove unused styles
- Better caching strategies

### 4. **Reduced Duplication**
- Duplicate styles have been removed
- Common styles centralized in base.css
- Consistent styling across the site

### 5. **Easier Debugging**
- Smaller files are easier to debug
- Clear file names indicate where styles are located
- Better browser DevTools experience

## Responsive Breakpoints

The project uses the following breakpoints:

- **Mobile**: `max-width: 781px`
- **Tablet**: `782px - 1010px`
- **Desktop Small**: `1011px - 1280px`
- **Desktop Medium**: `1281px - 1440px`
- **Desktop Large**: `1441px+`

## Naming Conventions

### CSS Classes
- Use lowercase with hyphens: `.interview-list`
- Descriptive names: `.recruit-banner-circle`
- Avoid abbreviations unless commonly understood

### File Names
- Lowercase with hyphens
- Descriptive of content: `interview-archive.css`
- Section-based naming: `header.css`, `footer.css`

## Migration Guide

### From Old Structure to New

1. **Backup**: Keep `style.css` as backup
2. **Update HTML**: Change stylesheet link to `style-new.css`
3. **Test**: Verify all pages render correctly
4. **Clear Cache**: Clear browser and server caches
5. **Monitor**: Check for any styling issues

### Rollback Plan

If issues occur, simply revert the stylesheet link:

```html
<!-- Rollback to original -->
<link rel="stylesheet" href="wp-content/themes/e-grant/style.css?v1" />
```

## Future Improvements

### Recommended Next Steps

1. **CSS Variables**: Implement CSS custom properties for colors, spacing, etc.
2. **CSS Preprocessor**: Consider using SASS/SCSS for variables and mixins
3. **Critical CSS**: Extract above-the-fold CSS for faster initial render
4. **Minification**: Minify CSS files for production
5. **Autoprefixer**: Add vendor prefixes automatically
6. **CSS Grid**: Modernize layouts with CSS Grid where appropriate

### Potential Optimizations

```css
/* Example: CSS Variables for Colors */
:root {
  --color-primary: #c30000;
  --color-secondary: #ff6a6a;
  --color-text: #323232;
  --color-background: #eaeaea;
  --color-white: #ffffff;
}

/* Usage */
.header {
  background-color: var(--color-primary);
  color: var(--color-white);
}
```

## Troubleshooting

### Common Issues

#### 1. Styles Not Loading
- Check file paths in `style-new.css`
- Verify all CSS files exist
- Clear browser cache
- Check browser console for 404 errors

#### 2. Broken Layouts
- Verify all @import statements are correct
- Check for missing closing braces in CSS
- Validate CSS syntax

#### 3. Responsive Issues
- Check media query breakpoints
- Verify mobile-first approach
- Test on actual devices

## Support

For questions or issues with the CSS organization:
1. Check this documentation
2. Review individual CSS file comments
3. Consult the original `style.css` for reference
4. Test changes in a development environment first

## Version History

- **v1.0**: Original monolithic `style.css`
- **v1.2**: Modular CSS organization with separate files

## Notes

- The original `style.css` (77KB) has been kept as backup
- All duplicate CSS rules have been removed
- Responsive styles are now organized by section
- WordPress default styles are maintained in `style-new.css`
- Image paths use relative URLs (`../images/`)
