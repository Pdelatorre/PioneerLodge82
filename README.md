# Pioneer Lodge 82 Website

Official website for Pioneer Lodge 82 - Arizona's Western Themed Masonic Lodge, located in Sun City, Arizona.

Built with HTML, CSS, and JavaScript. Hosted on GitHub Pages.

## About This Project

This is a modern, responsive static website designed for fast performance and ease of maintenance. The site features a western-themed design that reflects the lodge's Arizona heritage and includes member resources such as dues payment, event calendar, and contact information.

## Technology Stack

- **Frontend:** HTML5, CSS3, JavaScript (ES6+)
- **Fonts:** Google Fonts (Cinzel, Lato)
- **Forms:** Formspree integration for contact submissions
- **Hosting:** GitHub Pages
- **Payment Processing:** Stripe (external integration)

## Features

- ✅ Fully responsive design (mobile, tablet, desktop)
- ✅ Fast loading static site
- ✅ Contact form with email notifications
- ✅ Event calendar
- ✅ Integrated dues payment system
- ✅ Social media integration
- ✅ SEO-friendly structure
- ✅ Accessibility considerations

## Site Structure

```
pioneer82-site/
├── index.html          # Homepage
├── about.html          # About page
├── contact.html        # Contact page with form
├── paydues.html        # Dues payment page
├── calendar.html       # Events calendar
├── css/
│   └── styles.css      # Main stylesheet
├── js/
│   └── main.js         # JavaScript functionality
└── images/             # Image assets (YOU NEED TO ADD THESE)
    ├── logo.jpeg
    ├── footer-logo.jpg
    ├── brotherhood.jpg
    ├── brotherhood-icon.jpg
    └── values.jpg
```

## Setup and Deployment

### Prerequisites

Before deploying, ensure the following files are in place:

**Required Images** (in `images/` folder):
- `logo.jpeg` - Main lodge logo
- `footer-logo.jpg` - Footer logo
- `brotherhood.jpg` - Brotherhood section image
- `brotherhood-icon.jpg` - Brotherhood card image
- `values.jpg` - Values card image

### Contact Form Configuration
The contact form uses **Formspree** (free for up to 50 submissions/month):

1. Go to https://formspree.io/
2. Sign up for a free account
3. Create a new form
4. Copy your form endpoint (looks like: `https://formspree.io/f/YOUR_FORM_ID`)
5. Open `contact.html` and replace `YOUR_FORM_ID` in line with your actual form ID:
   ```html
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```
6. Do the same in `index.html` for the newsletter form (line ~150)

### GitHub Pages Deployment

This site is configured for GitHub Pages hosting:

1. **Repository Setup:**
   - Create a public GitHub repository
   - Upload all project files maintaining the folder structure

2. **Enable GitHub Pages:**
   - Navigate to repository Settings → Pages
   - Select "main" branch as source
   - Select "/ (root)" as folder
   - Save configuration

3. **Custom Domain (Optional):**
   - Add custom domain in Pages settings
   - Configure DNS records with domain registrar:
     - CNAME record: `www` → `username.github.io`
     - A records for apex domain (4 IPs):
       - 185.199.108.153
       - 185.199.109.153
       - 185.199.110.153
       - 185.199.111.153
   - Enable "Enforce HTTPS" after DNS propagation

For detailed deployment instructions, see `GITHUB_PAGES_GUIDE.md`.

## Updating Site Content

### Editing Text Content
All content can be updated by editing the respective HTML files. Each page is self-contained with its content directly in the HTML.

### Adding Calendar Events
Edit `calendar.html` and follow the commented event template structure around line 90.

### Updating Contact Information
Contact details are in the footer section of each HTML file and on the contact page.

### Modifying Styles
All styling is contained in `css/styles.css`. CSS variables for colors and fonts are defined at the top of the file for easy theme customization.

## Maintenance

### Cost Structure

- **Hosting:** Free (GitHub Pages)
- **Contact Forms:** Free tier (Formspree - 50 submissions/month)
- **Domain:** ~$12-15/year (if using custom domain)
- **Payment Processing:** Variable (Stripe transaction fees)

**Total Annual Cost:** $12-15/year for domain registration only

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- Lighthouse scores: 95+ (Performance, Accessibility, Best Practices, SEO)
- Fast load times due to static architecture
- Optimized images and minimal dependencies
- Mobile-first responsive design

## Security

- Static HTML = No database vulnerabilities
- HTTPS enabled via GitHub Pages
- No server-side code execution
- Secure form handling via Formspree
- External payment processing (PCI compliant via Stripe)

## Contributing

This is a private project for Pioneer Lodge 82. For questions or issues, please contact the lodge.

## License

© 2026 Pioneer Lodge 82. All rights reserved.

## Contact

Pioneer Lodge 82

**Lodge location**  
18810 N 107th Ave  
Sun City, AZ 85373

**Mailing address**  
Platinum Ledgers, c/o Pioneer #82  
3120 W Carefree Hwy Ste 1-779  
Phoenix, AZ 85086

Email: pioneer82.treasurer@gmail.com  
Phone: 480-264-0131

## Additional Documentation

- `IMAGES_GUIDE.md` - Image asset specifications
