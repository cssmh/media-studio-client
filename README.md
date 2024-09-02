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

Cinemix is a dynamic platform for movie enthusiasts, offering a seamless way to explore, manage, and enjoy a wide variety of movies and entertainment content. The platform provides an interactive and user-friendly experience with several features to enhance the user's engagement.

## Key Features

1. **User Authentication:**

   - Sign up with email and Google account.
   - Email verification is required for new users to log in.
   - Secure login system with Firebase authentication, including Google popup login.

2. **Content Organization:**

   - Six types of entertainment and media, each with separate cards on the details page.
   - Dark/light mode toggle for theme customization, saved to local storage.
   - Comprehensive details page accessible to all users.

3. **Protected Routes:**

   - Update card and add product pages are private routes.
   - My Cart and My Profile sections are protected and only accessible to authenticated users.

4. **User Interface:**

   - Responsive design suitable for all devices.
   - Intuitive navigation and interactive elements for a smooth user experience.

5. **Data Management:**

   - Users can delete items from their cart, which will also be removed from the database.
   - All data added from the product page is stored in a MongoDB database.
   - User-specific actions like adding or deleting content are secured.

6. **Advanced Functionalities:**

   - Password reset option using the 'Forgot Password' feature.
   - Local storage usage for theme preferences (dark/light mode).
   - Real-time database updates upon user actions.

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
