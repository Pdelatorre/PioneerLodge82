# Image Asset Specifications

This document outlines the required images for the Pioneer Lodge 82 website.

## Required Images

The following images must be placed in the `images/` folder:

### 1. logo.jpeg (Primary Logo)
- **Usage:** Header navigation, pay dues page
- **Recommended size:** 600x600px minimum
- **Format:** JPEG
- **Notes:** Should be square or nearly square for best display

### 2. footer-logo.jpg (Footer Logo)
- **Usage:** Footer on all pages
- **Recommended size:** 80x80px minimum
- **Format:** JPEG
- **Notes:** Can be same as primary logo, optimized for smaller display

### 3. brotherhood.jpg (Section Image)
- **Usage:** Homepage "Making Good Men Better" section
- **Recommended size:** 800x600px minimum
- **Format:** JPEG
- **Notes:** Landscape orientation preferred

### 4. brotherhood-icon.jpg (Card Image)
- **Usage:** Homepage values section - Brotherhood card
- **Recommended size:** 600x400px minimum
- **Format:** JPEG
- **Notes:** Should complement lodge theme

### 5. values.jpg (Card Image)
- **Usage:** Homepage values section - We Believe card
- **Recommended size:** 600x400px minimum
- **Format:** JPEG
- **Notes:** Should complement lodge theme

## Image Optimization Guidelines

- **File size:** Keep images under 500KB each for fast loading
- **Resolution:** Use 72 DPI for web
- **Format:** JPEG for photos, PNG for logos with transparency
- **Dimensions:** Maintain aspect ratios listed above
- **Compression:** Use 80-90% quality for optimal balance

## Hero Background Image

The hero section on the homepage uses a background image loaded via CSS. This is currently set to load from an external CDN URL in `css/styles.css` (line ~185).

To use a custom hero image:
1. Add your hero image to the `images/` folder (e.g., `hero-background.jpg`)
2. Recommended size: 1920x800px
3. Update CSS in `styles.css`:
   ```css
   .hero {
       background: linear-gradient(rgba(44, 24, 16, 0.6), rgba(44, 24, 16, 0.6)),
                   url('../images/hero-background.jpg') center/cover no-repeat;
   }
   ```

## Folder Structure

```
pioneer82-site/
└── images/
    ├── logo.jpeg
    ├── footer-logo.jpg
    ├── brotherhood.jpg
    ├── brotherhood-icon.jpg
    ├── values.jpg
    └── hero-background.jpg (optional)
```

## Image Sources

Images can be sourced from:
- Lodge photography archives
- Professional photography
- Stock photo services (ensure proper licensing)
- Lodge member contributions

Ensure all images have appropriate usage rights for public web display.

## Testing

After adding images:
1. Open `index.html` in a browser
2. Verify all images load correctly
3. Check responsive display on mobile devices
4. Confirm file sizes are optimized for web delivery
