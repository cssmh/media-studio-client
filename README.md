# Cinemix (Your Gateway to Movie Magic)

![Build Status](https://img.shields.io/badge/build-passing-brightgreen)
![Version](https://img.shields.io/badge/version-1.0.0-blue)
![License](https://img.shields.io/badge/license-MIT-green)

## Live Demo

- [Cinemix on Firebase](https://cinemix-2ceee.web.app)
- [Cinemix on Netlify](https://cinemamix.netlify.app)
- [Cinemix on Surge](https://detailed-knife.surge.sh)

## Table of Contents

- [Description](#description)
- [Key Features](#key-features)
- [Packages Used](#packages-used)

## Description

Cinemix is a modern cineplex platform designed to offer a seamless ticket-buying experience for movie lovers. Users can explore a wide range of movies, choose showtimes, select seats, and purchase tickets all in one place. The platform is optimized for both desktop and mobile devices, providing a fast, secure, and user-friendly environment to enjoy your favorite movies.

## Key Features

1. **User Authentication:**

   - Sign up with email and Google account.
   - Email verification required for new users to log in.
   - Secure login system using Firebase authentication, including Google popup login.

2. **Movie Exploration:**

   - Browse movies by genre, popularity, or release date.
   - Detailed movie pages with trailers, ratings, and descriptions.
   - Filter and search options to quickly find preferred movies.

3. **Ticket Purchasing:**

   - View available showtimes for each movie.
   - Select seats and purchase tickets directly from the website.
   - Payment processing integrated with secure payment gateways.
   - Digital tickets sent via email after purchase.

4. **User Interface and Experience:**

   - Dark/light mode toggle for theme customization, saved to local storage.
   - Responsive design for an optimal experience on all devices.
   - Intuitive navigation and user-friendly checkout process.

5. **Account Management:**

   - Access to user profiles with order history and ticket details.
   - Update personal information and manage saved payment methods.
   - Option to reset password using the 'Forgot Password' feature.

6. **Data Management:**

   - Real-time updates for movie listings and showtimes.
   - Secure storage of user and transaction data in a MongoDB database.
   - Ability for users to cancel tickets before the showtime.

7. **Admin Capabilities:**

   - Admin panel for managing movies, showtimes, and user data.
   - Add, update, or delete movie listings and schedule new showtimes.
   - View analytics and reports on sales, user activity, and ticket trends.

## Packages Used

### Dependencies

- [firebase](https://www.npmjs.com/package/firebase)
- [axios](https://www.npmjs.com/package/axios)
- [react-router-dom](https://www.npmjs.com/package/react-router-dom)
- [react-icons](https://www.npmjs.com/package/react-icons)
- [react-spinners](https://www.davidhu.io/react-spinners)
- [react-hot-toast](https://www.npmjs.com/package/react-hot-toast)

### Dev Dependencies

- [vite](https://www.npmjs.com/package/vite)
- [tailwindcss](https://tailwindcss.com/docs/guides/vite)
- [daisyui](https://daisyui.com/docs/install)
