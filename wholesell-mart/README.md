# Wholesell Mart - E-Commerce Website

A modern, professional e-commerce website built with Next.js, TypeScript, and Tailwind CSS. Features a complete shopping experience with authentication, cart management, and responsive design.

## 🚀 Features

### Core Features
- **Modern Design**: Professional UI/UX with responsive design
- **Authentication System**: Login/signup with session management
- **Shopping Cart**: Add to cart, quantity management, persistent storage
- **Product Catalog**: 20+ products across 6 categories
- **Protected Routes**: Cart page requires authentication
- **Category Filtering**: Dynamic category pages with sorting and filtering
- **Professional Branding**: Custom logo and consistent design language

### Pages Included
- **Home Page**: Hero section, featured products, categories
- **Login/Signup**: Complete authentication flow
- **Cart Page**: Protected shopping cart with order summary
- **Category Pages**: Dynamic filtering and sorting
- **About Page**: Company information and values
- **Contact Page**: Contact form and support information

### Technical Features
- **Next.js 14**: App Router, TypeScript support
- **Tailwind CSS**: Utility-first styling
- **React Context**: State management for auth and cart
- **LocalStorage**: Persistent cart and session data
- **Responsive Design**: Mobile-first approach
- **SEO Optimized**: Proper metadata and structure

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v3.4.17
- **Icons**: Lucide React
- **State Management**: React Context API
- **Storage**: Browser LocalStorage
- **Build Tool**: Turbopack

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd wholesell-mart
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

## 🏗️ Project Structure

```
wholesell-mart/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── layout.tsx         # Root layout with providers
│   │   ├── page.tsx           # Home page
│   │   ├── globals.css        # Global styles
│   │   ├── login/page.tsx     # Login page
│   │   ├── signup/page.tsx    # Signup page
│   │   ├── cart/page.tsx      # Protected cart page
│   │   ├── about/page.tsx     # About page
│   │   ├── contact/page.tsx   # Contact page
│   │   └── category/[slug]/page.tsx  # Dynamic category pages
│   ├── components/            # Reusable components
│   │   ├── Header.tsx         # Navigation header
│   │   ├── Footer.tsx         # Site footer
│   │   └── ProductCard.tsx    # Product display component
│   ├── contexts/              # React Context providers
│   │   ├── AuthContext.tsx    # Authentication state
│   │   └── CartContext.tsx    # Shopping cart state
│   └── data/
│       └── products.ts        # Product catalog data
├── public/                    # Static assets
├── package.json              # Dependencies and scripts
├── tailwind.config.js        # Tailwind configuration
├── tsconfig.json             # TypeScript configuration
└── README.md                 # Project documentation
```

## 🎨 Components

### Header Component
- **Top Bar**: Contact info and shipping details
- **Logo Section**: Branded logo with gradient styling
- **Search Bar**: Product search functionality
- **Navigation Icons**: Cart with item count, user account
- **Category Menu**: Links to all product categories
- **Mobile Responsive**: Hamburger menu for mobile

### Footer Component
- **Company Info**: Logo, description, social links
- **Quick Links**: Navigation to key pages
- **Categories**: Links to all product categories
- **Customer Service**: Support and policy links
- **Contact Info**: Phone, email, address
- **Newsletter**: Email subscription

### ProductCard Component
- **Product Image**: Hover effects and discount badges
- **Product Info**: Name, category, rating, price
- **Add to Cart**: Quick add functionality
- **Wishlist**: Save for later functionality
- **Responsive**: Adapts to different screen sizes

## 🔐 Authentication System

### Features
- **Login/Signup**: Email and password authentication
- **Session Management**: Persistent login with localStorage
- **Protected Routes**: Cart page requires authentication
- **User Context**: Global authentication state

### Mock Authentication
- Any email/password combination works for demo
- Creates mock JWT token and user data
- Stores session in localStorage
- Automatic redirect for protected routes

## 🛒 Shopping Cart System

### Features
- **Add to Cart**: Add products from any page
- **Quantity Management**: Increase/decrease quantities
- **Remove Items**: Delete items from cart
- **Persistent Storage**: Cart survives browser refresh
- **Order Summary**: Subtotal, tax, and total calculation
- **Protected Access**: Requires authentication

### Cart Context
- Global cart state management
- LocalStorage integration
- Real-time updates across components
- Total price and item count calculations

## 📱 Responsive Design

### Breakpoints
- **Mobile**: 320px - 640px
- **Tablet**: 640px - 1024px
- **Desktop**: 1024px+

### Mobile Features
- Hamburger navigation menu
- Collapsible search bar
- Touch-friendly buttons
- Optimized product grids
- Mobile-first design approach

## 🎯 Product Catalog

### Categories (6 total)
1. **Electronics** (6 products): Phones, laptops, headphones
2. **Fashion** (4 products): Shoes, jeans, sunglasses
3. **Home & Kitchen** (3 products): Appliances, vacuum, mixer
4. **Books** (2 products): Business and self-help books
5. **Sports** (2 products): Yoga mat, dumbbells
6. **Beauty** (3 products): Cosmetics, skincare, hair care

### Product Features
- High-quality product images
- Detailed descriptions
- Star ratings (1-5 stars)
- Original and discounted prices
- Category classification
- Professional product photography

## 🚀 Build and Deployment

### Development
```bash
npm run dev          # Start development server
npm run build        # Create production build
npm run start        # Start production server
npm run lint         # Run ESLint
```

### Production Build
- Optimized for performance
- Static generation where possible
- Compressed assets
- SEO-friendly URLs

### Deployment Options
- **Vercel**: Recommended for Next.js apps
- **Netlify**: Static site deployment
- **AWS**: S3 + CloudFront
- **Docker**: Containerized deployment

## 🎨 Customization

### Branding
- Update logo in `Header.tsx` and `Footer.tsx`
- Modify color scheme in `tailwind.config.js`
- Change company name throughout components
- Update contact information in footer

### Products
- Add new products to `src/data/products.ts`
- Include product images (recommend Unsplash)
- Update categories as needed
- Modify product card layout in `ProductCard.tsx`

### Styling
- Customize Tailwind configuration
- Add custom CSS in `globals.css`
- Modify component styles
- Update responsive breakpoints

## 🔧 Configuration Files

### package.json
- Dependencies and scripts
- Next.js and React versions
- Development dependencies

### tailwind.config.js
- Custom color palette
- Font configuration
- Content paths
- Plugin settings

### tsconfig.json
- TypeScript compiler options
- Path aliases (@/*)
- Strict type checking

## 📞 Support

For questions or support:
- **Email**: support@wholesellmart.com
- **Phone**: 1800-123-4567
- **Documentation**: This README file
- **Issues**: Create GitHub issues for bugs

## 📄 License

This project is for demonstration purposes. Feel free to use as a starting point for your own e-commerce projects.

---

**Built with ❤️ using Next.js, TypeScript, and Tailwind CSS**

