# The Sweet Crumb Bakehouse Website

## Student Information
- **Name:** Zo
- **Student Number:** ST10496765
- **Course:** Network Management, WEDE5020

## Project Overview
The Sweet Crumb Bakehouse is a small home-based bakery run by Amahle Ndlovu, based in Observatory, Cape Town. It specialises in custom celebration cakes, birthday cakes, cupcakes, cookies, and DIY cupcake kits made to order. The business currently operates only through Instagram and Facebook, with no dedicated website, no online enquiry system, and no visibility on Google search. This project builds a website to give the bakery an online presence, showcase its products, and move order enquiries from social media DMs into a structured online process.

## Website Goals and Objectives
- Build brand scalability and improve discoverability in local search.
- Display a portfolio of past cake designs.
- Move order enquiries from social media direct messages to an organised online procedure.
- KPIs: number of online order enquiries per month, appearance in Google search results for custom cakes in Cape Town, growth in repeat customer enquiries.

## Key Features and Functionality
- **Home** – landing page with hero intro, a styled call-to-action button, a category grid linking into the Shop, and a social icons footer.
- **About Us** – the bakery's story and history, styled as a hero section plus a content block.
- **Shop** – menu of celebration cakes, birthday cakes, cupcakes, cookies, and DIY cupcake kits with pricing, each product box including a "Contact to Order" link through to the Contact page.
- **Contact** – business details, embedded map, and a contact form.
- **Enquiry** – embedded custom order enquiry form.
- Consistent styled navigation and a social icons footer across all five pages.
- Planned for Part 3: JavaScript gallery filtering, form validation, and SEO optimisation.

## Timeline and Milestones
- Weeks 1–2: Research, planning, and HTML foundation (Part 1)
- Weeks 3–5: Visual design, styling, and responsive layout (**Part 2**)
- Weeks 6–8: JavaScript functionality, forms, and SEO optimisation (Part 3)

## Part 1 Details
Part 1 covered site structure and static HTML pages (Home, About Us, Shop, Contact, Enquiry) with semantic markup, navigation, images, and basic forms. No CSS styling or JavaScript had been applied yet.

## Part 2 Details
Part 2 builds on the Part 1 feedback and adds full visual styling and responsive design across all five pages.

**Feedback addressed from Part 1:**
- Added this README with sitemap, changelog, and references, and made sure ongoing edits are tracked here going forward.
- Fixed broken internal links: several links and images on the Home page pointed to a non-existent `Products.html` page; these now correctly point to `Shop.html`.

**Styling and layout added:**
- Created an external stylesheet, `style.css`, linked from all five pages.
- Set up a base style: a CSS reset, a colour palette (blush pink, cream, and soft gold, via CSS custom properties), and consistent typography (`Playfair Display` for headings, `Poppins` for body text).
- Built page layouts using CSS Grid (the Home page category grid) and Flexbox (the navigation bar, the Shop page's product sections, and the contact/enquiry forms).
- Applied visual styling with colour, background colour, box shadows, and rounded/pill-shaped buttons, and used the `:hover`, `:focus`, and `:active` pseudo-classes on links, buttons, and navigation for interactivity.
- Added a consistent social media icons footer (Font Awesome) to all five pages.
- Added a small "Contact to Order" link inside each product box on the Shop page, linking through to the Contact page.

**Responsive design:**
- Added two breakpoints using media queries: a tablet breakpoint at 1024px and a mobile breakpoint at 600px.
- Layouts reflow from multi-column to single-column on smaller screens (category grid, contact cards, product sections), and the navigation stacks vertically on mobile.
- Used relative units (`rem`) for spacing and typography, and percentage-based sizing for images, so elements scale rather than staying a fixed pixel size.
- **Still to do:** add `srcset`/`sizes` (or a `<picture>` element) to product images so a smaller image is served on mobile, and add screenshot evidence of the site at desktop, tablet, and mobile widths below.

### Responsive Screenshot Evidence


| Desktop | Tablet | Mobile |
|---------|--------|--------|
![alt text](<Screenshot 2026-09-18 221939-1.png>)
![alt text](<Screenshot 2026-09-18 221852-1.png>)
![alt text](<Screenshot 2026-09-18 222025-1.png>)


## Sitemap
```
Home.html
├── AboutUs.html
├── Shop.html
├── Contact.html
└── Enquiry.html
```

## Changelog
| Date | Change |
|------|--------|
| 2026-08-14 | Initial Part 1 submission: created Home, About Us, Shop, Contact, and Enquiry pages with navigation, images, and basic forms. Added README.md. |
| 2026-09-18 | Part 2: created external stylesheet `style.css` and linked it from all five pages. Added CSS reset, colour palette, and typography (Playfair Display / Poppins). |
| 2026-09-18 | Part 2: built responsive layouts with CSS Grid and Flexbox (category grid, navigation, Shop product sections, forms); added visual styling, box shadows, and `:hover`/`:focus`/`:active` states; added tablet (1024px) and mobile (600px) breakpoints. |
| 2026-09-18 | Part 1 feedback fix: corrected broken links on the Home page that pointed to a non-existent `Products.html`; these now point to `Shop.html`. |
| 2026-09-18 | Added a Font Awesome social media icons footer to all five pages for visual consistency. |
| 2026-09-18 | Added a "Contact to Order" link inside each product box on the Shop page, linking to the Contact page. |
| 2026-09-18 | Updated README.md with Part 2 details, an updated changelog, and updated references. |

## References

### Part 1 References
- Charly's Bakery. (n.d.) *Celebration Cakes*. [Online]. Available at: https://charlysbakery.co.za/celebration-cakes/ [Accessed 14 August 2026].
- Cake Zone. (n.d.) *Elegant Ivory Wedding Cake*. [Online]. Available at: https://cakezone.co.za/product/elegant-ivory-wedding-cake/ [Accessed 14 August 2026].
- Bennison's Bakery. (n.d.) *Custom Cupcakes*. [Online]. Available at: https://bennisonscakes.com/bakery/cupcakes/ [Accessed 14 August 2026].
- Kitanovski, K. (2023) *Engagement Custom Cookies | Watercolor | MH Cookie Shoppe #CookiesBringJoy*. [Online]. MH Cookie Shoppe. Available at: https://www.mhcookieshoppe.com/blog/engagement-custom-cookies-watercolor-mh-cookie-shoppe-cookiesbringjoy [Accessed 14 August 2026].
- Source for Cakes.webp and DIY.png images: to be confirmed and added.

### Part 2 References
- Magnolia Bakery. (n.d.) *Magnolia Bakery | Home*. [Online]. Available at: https://www.magnoliabakery.com/ [Accessed 17 September 2026]. Used as the visual model for the colour palette, pill-shaped call-to-action buttons, card-based image grid with hover lift, and clean top navigation bar.
- Mozilla Developer Network. (n.d.) *CSS custom properties (variables)*. [Online]. Available at: https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties [Accessed 17 September 2026]. Used for the colour, font, and spacing tokens in `style.css`.
- Mozilla Developer Network. (n.d.) *CSS Grid Layout*. [Online]. Available at: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout [Accessed 17 September 2026]. Used for the Home page's category grid.
- Mozilla Developer Network. (n.d.) *Flexbox*. [Online]. Available at: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout [Accessed 17 September 2026]. Used for the navigation bar, Shop page product sections, and the contact/enquiry forms.
- Mozilla Developer Network. (n.d.) *Using media queries*. [Online]. Available at: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries [Accessed 17 September 2026]. Used for the tablet (1024px) and mobile (600px) breakpoints.
- Mozilla Developer Network. (n.d.) *Responsive images*. [Online]. Available at: https://developer.mozilla.org/en-US/docs/Web/HTML/Guides/Responsive_images [Accessed 17 September 2026]. Reference for the planned `srcset`/`sizes` implementation.
- Mozilla Developer Network. (n.d.) *:hover*. [Online]. Available at: https://developer.mozilla.org/en-US/docs/Web/CSS/:hover [Accessed 17 September 2026]. Used for button, link, and icon hover states.
- Mozilla Developer Network. (n.d.) *box-shadow*. [Online]. Available at: https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow [Accessed 17 September 2026]. Used for the card, navigation, and button shadows.
- Google Fonts. (n.d.) *Playfair Display*. [Online]. Available at: https://fonts.google.com/specimen/Playfair+Display [Accessed 17 September 2026]. Used for headings.
- Google Fonts. (n.d.) *Poppins*. [Online]. Available at: https://fonts.google.com/specimen/Poppins [Accessed 17 September 2026]. Used for body text.
- Font Awesome. (n.d.) *Font Awesome Free*. [Online]. Available at: https://fontawesome.com/ [Accessed 18 September 2026]. Used via CDN for the social media icons in the site footer.
