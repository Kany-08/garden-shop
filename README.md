# Final Project - Garden Products Online Shop

**[Live Demo](https://garden-shop-kany.netlify.app/)**

## 📋 Table of Contents
- [About](#about)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [API Integration](#api-integration)

## About

This is a frontend final project for an online store selling home and garden goods. The application provides a user-friendly interface for browsing products, categorizing them, adding items to cart, and placing orders. The project demonstrates modern frontend development practices using TypeScript and React.

## ✨ Features

- 🛍️ Browse products by categories
- 🔍 Search and filter products
- 🛒 Shopping cart functionality
- 📦 Order placement and management
- 💳 Secure checkout process
- 📱 Responsive design for mobile and desktop
- ⚡ Fast and intuitive user experience

## 🛠️ Technologies Used

- **TypeScript** (94.6%) - Primary language for type-safe development
- **JavaScript** (4.4%) - Supporting scripts
- **React** - Frontend framework
- **Netlify** - Hosting and deployment


## API Integration

This frontend application integrates with a backend API that provides:

### GET Endpoints
- `/categories/all` - Get all product categories
- `/categories/1` - Get products from a specific category
- `/products/all` - Get all products
- `/products/1` - Get a specific product details

### POST Endpoints
- `/sale/send` - Submit a coupon request
- `/order/send` - Submit an order

For backend setup instructions, see [backend/README.md](./backend/README.md)
