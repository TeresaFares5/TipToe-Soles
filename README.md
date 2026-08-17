# TipToe Soles Website

A responsive multi-page website created for TipToe Soles, an Australian footwear company specialising in comfortable and affordable shoes.

This project was developed as part of a TAFE web design assessment using semantic HTML, CSS and vanilla JavaScript.

## Features

- Responsive desktop, tablet and mobile layouts
- Accessible hamburger navigation menu
- Product catalogue with seven footwear products
- Live product search and category filtering
- Working wishlist with persistent saved items
- Live wishlist item counter
- About and customer services pages
- Contact and feedback forms
- Demonstration customer login form
- Returns, delivery and privacy information
- Keyboard-accessible navigation and controls
- Visible focus indicators and skip navigation links
- Semantic HTML structure
- Accessible form labels and image alternative text

## Technologies

- HTML5
- CSS3
- Vanilla JavaScript
- Browser local storage
- Responsive CSS media queries

No frameworks, libraries or code generators are required.

## Project Structure

```text
TipToe-Soles/
├── index.html
├── products.html
├── services.html
├── about.html
├── contact.html
├── search.html
├── login.html
├── wishlist.html
├── feedback.html
├── returns.html
├── delivery.html
├── privacy.html
├── styles.css
├── site.js
└── images/
    ├── TipToe Soles_Logo_colour.png
    ├── Gary Black.jpg
    ├── Gary Tan.png
    ├── Work and Walk Chesnut.png
    ├── Sally Black.jpg
    ├── Sally Tan.jpg
    ├── Heavenly Black.jpg
    └── Clancy Blue.png
```

## Running the Website

No installation or build process is required.

1. Download or clone the repository.
2. Open the project folder.
3. Open `index.html` in a web browser.

For the best development experience, run the project through a local web server such as the Visual Studio Code Live Server extension.

## Wishlist

Products can be added to or removed from the wishlist on the Products page.

The wishlist system:

- Stores valid product IDs
- Prevents duplicate entries
- Updates the navigation counter
- Displays saved product cards
- Supports removing products
- Preserves saved products after refreshing
- Works when the project is opened directly or through a local server

Wishlist information is stored only in the user's browser. No information is sent to a server.

## Search and Filtering

The Products and Search pages support live filtering. Users can:

- Search by product name, colour, type or feature
- Filter products by men's or women's footwear
- Combine search terms with category filters
- View an automatically updated result count

## Responsive Navigation

At screen widths below 981 pixels, the desktop navigation changes into a hamburger menu.

The menu includes:

- An accessible open and close button
- An animated hamburger icon
- Correct `aria-expanded` states
- Escape-key support
- Automatic closing after selecting a link
- Automatic reset when returning to desktop size

## Accessibility

Accessibility features include:

- Semantic page landmarks
- Descriptive page titles
- Skip-to-content links
- Keyboard-accessible controls
- Visible focus indicators
- Form labels and validation
- Alternative text for product images
- `aria-current` page indicators
- Wishlist status announcements
- Live search result counts
- Reduced-motion support

## Forms

The login and feedback forms are demonstration forms created for the assessment. They validate user input locally but do not create accounts, authenticate users, store passwords or submit information to a database.

A secure server-side system would be required for production use.

## Testing

The website should be tested at approximately:

- 390px mobile width
- 768px tablet width
- 1280px desktop width

Recommended checks:

1. Test every navigation link.
2. Open and close the hamburger menu.
3. Close the menu using the Escape key.
4. Add several products to the wishlist.
5. Remove a product from the wishlist.
6. Refresh the page and check wishlist persistence.
7. Search for products by name or colour.
8. Filter between men's and women's shoes.
9. Submit forms with missing and valid information.
10. Navigate through the website using only the keyboard.

## Project Purpose

This website was created for educational and assessment purposes. TipToe Soles is the client scenario supplied for the project, and the website does not process real purchases or customer accounts.
