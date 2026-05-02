# Olive App Landing Page — Frontend Assignment

> **Assessment Task**: Recreate the Olive App landing page (https://www.oliveapp.com/) as closely as possible using any frontend framework.

##  Live Demo

🔗 **[Deployed Link](#)** *(will be updated after deployment)*

---

##  Preview

The landing page closely mimics the original Olive App design, featuring:

- A fully responsive **Navbar** with navigation links and CTA buttons
- A compelling **Hero Section** with social proof, bold headlines, and download CTAs
- A detailed **App Mockup** with an iPhone-styled phone showing the product analysis card (Fig and Olive Crackers, 46/100 score, Oliver Says card)

---

##  Tech Stack

| Technology | Purpose |
|---|---|
| **React (Vite)** | Component-based UI with fast HMR dev server |
| **Vanilla CSS** | Modular, variable-driven styling (no Tailwind) |
| **Lucide React** | Scalable SVG icons |
| **Google Fonts** | Inter & Plus Jakarta Sans for premium typography |

---

##  Project Structure

```
src/
├── components/
│   ├── Navbar.jsx       # Navigation bar with logo, links, CTAs
│   ├── Navbar.css
│   ├── Hero.jsx         # Hero section with social proof & CTAs
│   ├── Hero.css
│   ├── AppMockup.jsx    # iPhone mockup with product card
│   └── AppMockup.css
├── App.jsx              # Root component assembling all sections
├── index.css            # Global styles & CSS variables
└── main.jsx             # React entry point
```

---

##  Getting Started

### Prerequisites
- Node.js (v18+)
- npm

### Installation & Running Locally

```bash
# 1. Clone the repository
git clone https://github.com/SaurabhBiswal/Assignment-Round-Hire-My-Idea-FRONTEND-TASK-.git

# 2. Navigate into the directory
cd Assignment-Round-Hire-My-Idea-FRONTEND-TASK-

# 3. Install dependencies
npm install

# 4. Start the dev server
npm run dev
```

The app will be available at `http://localhost:5173/`

### Build for Production

```bash
npm run build
```

---

##  Features Implemented

- [x] Pixel-perfect Navbar matching original design
- [x] Social proof avatars + "Trusted by thousands" text
- [x] Bold hero headline with olive-green gradient typography
- [x] "Download for iOS" and "Join the Olive Community" CTAs
- [x] iPhone phone mockup with Dynamic Island and product analysis card
- [x] Oliver Says advisory card with product score (46/100 Avoid)
- [x] Background depth effect with blurred card elements
- [x] Smooth hover transitions on all interactive elements
- [x] Modern Google Fonts (Inter + Plus Jakarta Sans)
- [x] Fully responsive layout

---

*Built as part of the Hire My Idea Frontend Intern Assessment. Submitted by Saurabh Biswal.*
