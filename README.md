# Star Cinemix (Book Your Movie Ticket)

![Build Status](https://img.shields.io/badge/build-passing-brightgreen)
![Version](https://img.shields.io/badge/version-1.0.0-blue)
![License](https://img.shields.io/badge/license-MIT-green)

## Live Demo

- [Star CineMix on Firebase](https://cinemix-2ceee.web.app)
- [Star CineMix on Netlify](https://cinemamix.netlify.app)

## Table of Contents

- [Description](#description)
- [Key Features](#key-features)
- [Packages Used](#packages-used)

## Description

**Star Cinemix** is a modern, fully-featured movie ticket-selling platform that provides a seamless and enjoyable experience for users to explore movies, book tickets, and manage their reservations. Users can browse through now-playing movies, check available showtimes, purchase tickets, and receive instant booking confirmations. Built for both desktop and mobile devices, Star Cinemix ensures that movie lovers have a smooth, secure, and fun way to enjoy cinema.

## Key Features

1. **User Authentication:**
   - Secure sign-up and login with email and Google.
   - Firebase Authentication for safe, reliable user management.
   - Email verification for new users and secure access.
2. **Movie Exploration:**
   - Discover the latest movies, with details such as trailers, ratings, and genres.
   - View showtimes and filter movies by popularity or genre.
   - Easy search functionality to find favorite movies quickly.
3. **Ticket Purchasing:**

   - Choose showtimes, select seats, and securely pay for tickets.
   - Integrated with secure payment gateways for seamless transactions.
   - Digital tickets sent via email after booking for convenience.

4. **User Dashboard:**

   - Manage account details, view booking history.
   - Easy access to update personal details.

5. **Modern User Interface:**

   - Sleek, intuitive design with dark/light mode for enhanced customization.
   - Fully responsive across devices, including mobile, tablets, and desktop.
   - Optimized checkout flow for quick and easy ticket purchasing.

6. **Real-Time Data Management:**

   - Real-time movie listings and showtime updates.
   - MongoDB used for secure data storage, ensuring user and transaction data remains safe.

7. **Loading Indicators and Notifications:**
   - Elegant loading spinners using `react-spinners` to enhance the user experience.
   - Real-time toast notifications using `react-hot-toast` for user feedback.

## Packages Used

### Dependencies

- **[firebase](https://www.npmjs.com/package/firebase):** Authentication, user management, and real-time database.
- **[axios](https://www.npmjs.com/package/axios):** For making API requests to fetch movie data, showtimes, and ticketing info.
- **[react-router-dom](https://www.npmjs.com/package/react-router-dom):** Navigation and routing between different pages such as movies, tickets, and user profiles.
- **[react-icons](https://www.npmjs.com/package/react-icons):** For using beautiful icons across the UI for ratings, navigation, and more.
- **[react-spinners](https://www.davidhu.io/react-spinners):** Adding stylish loading indicators while fetching data.
- **[react-hot-toast](https://www.npmjs.com/package/react-hot-toast):** For real-time notifications and feedback for user interactions.

### Dev Dependencies

- **[vite](https://www.npmjs.com/package/vite):** Lightning-fast build tool for modern web development with React.
- **[tailwindcss](https://tailwindcss.com/docs/guides/vite):** For building responsive, modern UI components quickly and efficiently.
- **[daisyui](https://daisyui.com/docs/install):** UI component library that works with Tailwind CSS for adding accessible and customizable components.
