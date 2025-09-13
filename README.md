# Health & Electrical Product Dashboard

A **React + Tailwind CSS dashboard** for tracking health products and electrical appliances, with live theme support, dynamic calculations, and modular UI components.

---

## Link

-[link](https://my-tracker-jp2fxyp0o-sosenkkks-projects.vercel.app/electrical)

--

## Table of Contents

- [Features](#features)  
- [Screenshots](#screenshots)  
- [Getting Started](#getting-started)  
- [Installation](#installation)  
- [Usage](#usage)  
- [Folder Structure](#folder-structure)  
- [Technologies](#technologies)  
- [Contributing](#contributing)  
- [License](#license)  

---

## Features

### Health Products
- Add products with:
  - Name
  - Protein content
  - Calories
  - Amount & unit (g/ml)
  - Category (WHEY, SUPPLEMENTS, FOOD ITEMS)
  - Multiple website prices
- Auto-calculate **per 100g/ml** protein & calories
- Highlight **lowest price** per website
- Responsive **cards** and **list view**
- Dark, light, and colorful themes
- Form validation with red borders for invalid inputs
- Add/remove website dynamically

### Electrical Appliances
- Add appliances with:
  - Name
  - Base price
  - Warranty (months)
  - Multiple website prices
- Highlight **lowest price**
- Modular **ElectricalCard** & **ElectricalList**
- Theme support (light, dark, colorful)
- Form validation

### Navigation
- Homepage with welcome message  
- Separate pages for **Health Products** and **Electrical Appliances**  

---

## Screenshots

*Add screenshots here to showcase your UI in different themes.*

---

## Getting Started

### Prerequisites
- Node.js >= 16.x  
- npm >= 8.x  

---

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/health-electrical-dashboard.git

# Navigate to the project directory
cd health-electrical-dashboard

# Install dependencies
npm install

# Start development server
npm run dev
