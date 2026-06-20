# 🛍️ ShopSmartN'Save

> **Shop Easy, Save Crazy, Repeat!**

A user-centric web application that streamlines online product discovery by offering a centralized platform for real-time price comparison and wishlist management — all without a backend.

---

## 📌 Overview

ShopSmartN'Save allows users to search for products and instantly view prices from multiple e-commerce platforms (Amazon, Croma, Meesho, Reliance Digital, and more) in a single window — eliminating the need to switch between tabs or websites. The app runs entirely in the browser using localStorage for data persistence.

---

## ✨ Features

- **Product Search & Price Comparison** — Search any product and view prices across multiple stores in a unified table.
- **Personalized Wishlist** — Save products with a single click; stored locally across sessions via localStorage.
- **Dynamic Categories** — Each wishlist item is auto-tagged with the original search keyword for easy organization.
- **User Profiles (Simulated Auth)** — Greets users by name, supports profile editing including photo preview.
- **Responsive Design** — Works on desktops, tablets, and mobile screens.
- **Smooth UI** — Gradient navbar, animated blobs, circular icons, and fade-out transitions.
- **Offline Support** — Wishlist and profile data persist without internet connection using localStorage.

---

## 🛠️ Tech Stack

| Layer      | Technology                          |
|------------|--------------------------------------|
| Structure  | HTML5                                |
| Styling    | CSS3 (Gradients, Animations, Flexbox)|
| Logic      | Vanilla JavaScript (ES6)             |
| Storage    | Browser localStorage                 |
| Icons      | RemixIcon                            |
| Hosting    | GitHub Pages / Netlify / Vercel (static) |

---

## 📁 Project Structure

```
ShopSmartN'Save/
├── index.html          # Landing / Home page
├── weblogin.html       # Login page
├── websignup.html      # Signup page
├── webdashboard.html   # Main dashboard with search
├── webprofile.html     # User profile page
├── websaved.html       # Wishlist page
├── webstyles.css       # Global styles
├── webscript.js        # Search logic, mock data, wishlist handling
├── webauth.js          # Auth simulation (checkAuth, logout)
├── logo.png            # App logo
├── wishlist.png        # Wishlist nav icon
└── profile.png         # Profile nav icon
```

---

## 🚀 Getting Started

No installation or server setup needed.

1. **Clone or download** the repository.
2. Open `index.html` in any modern web browser (Chrome, Firefox, Edge, Safari).
3. Sign up with a username and password, then log in to access the dashboard.
4. Search for products, compare prices, save to wishlist, and manage your profile.

```bash
git clone https://github.com/JAHNAVI-SAMALA/ShopSmartNSave.git
cd ShopSmartNSave
# Open index.html in a browser
```

---

## 🔍 How It Works

1. User signs up/logs in → credentials saved in localStorage.
2. On the dashboard, the user enters a product name in the search bar.
3. JavaScript looks up the query in a mock product dataset and renders price results in a table.
4. User clicks **Save** → item is stored in localStorage with its search keyword as a category.
5. The **Wishlist** page reads localStorage and displays saved items, with options to remove or visit the original store.

---

## 🧪 Testing Summary

| Type                  | Description                                          | Status |
|-----------------------|------------------------------------------------------|--------|
| Unit Testing          | Individual functions: `searchProduct()`, `saveItem()`, `checkAuth()` | ✅ Pass |
| Integration Testing   | Search + Wishlist + Profile module interactions      | ✅ Pass |
| System Testing        | Full flow across browsers and screen sizes           | ✅ Pass |
| Positive Testing      | Valid queries return correct mock results            | ✅ Pass |
| Negative Testing      | Invalid/empty input handled with alert, no crash     | ✅ Pass |
| Regression Testing    | UI changes didn't break existing functionality       | ✅ Pass |
| Smoke Testing         | App loads, searches, and saves without crashes       | ✅ Pass |

---

## 🔒 System Requirements

**Hardware:**
- Dual-core CPU or higher (Intel i5-13450 or equivalent)
- 4 GB RAM minimum
- 500 MB free storage
- 1024×768 display or higher

**Software:**
- Any modern browser (Chrome, Firefox, Edge, Safari)
- VS Code or any text editor (for development)
- Internet optional (only needed for external image links)

---

## 🔮 Future Enhancements

- [ ] Live product data via Amazon Affiliate API / Flipkart API
- [ ] Secure multi-user authentication (Firebase / Node.js)
- [ ] Cloud database for cross-device wishlist sync (Firebase Firestore / MongoDB)
- [ ] Advanced search filters (price range, ratings, category, store)
- [ ] Progressive Web App (PWA) with offline push notifications
- [ ] Product images, star ratings, and reviews in search results
- [ ] Personal analytics dashboard (saved items, price trends)
- [ ] Multilingual support for regional accessibility
- [ ] Share wishlist via link or email

---

## 👩‍💻 Authors

| Name | Roll No. |
|------|----------|
| Samala Jahnavi | 23D21A05H4 |
| Sarawath Soha | 23D21A05H5 |
| Shaik Ahiya | 23D21A05H6 |

**Department of Computer Science and Engineering**  
Sridevi Women's Engineering College, Hyderabad  
(UGC Autonomous | AICTE Approved | JNTUH Affiliated | NBA & NAAC A++ | ISO 9001:2015)

**Project Duration:** January 20, 2025 – June 14, 2025

---

## 📚 References

- [MDN Web Docs](https://developer.mozilla.org)
- [W3Schools](https://www.w3schools.com)
- [FreeCodeCamp](https://www.freecodecamp.org)
- [FakeStoreAPI](https://fakestoreapi.com)
- [RemixIcon](https://remixicon.com)
- [CSS Gradient Generator](https://cssgradient.io)
- *Learning Web Design* — Jennifer Niederst Robbins
- *Eloquent JavaScript* — Marijn Haverbeke
- *Don't Make Me Think* — Steve Krug

---

## 📄 License

This project was developed as an academic Real Time Research Project (RTRP) for B.Tech CSE. All rights reserved by the authors.
