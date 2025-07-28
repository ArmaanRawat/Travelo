# Travelo - Modern React Tour Guide Management System

A modern, full-stack tour guide management system built with React, Node.js, and MongoDB.

## 🚀 Modern Features

### Frontend (React)

- **Modern React Hooks** - useState, useEffect, useCallback, useMemo
- **Context API** - Centralized state management
- **Custom Hooks** - Reusable logic (useApi, useMutation, useLocalStorage)
- **Component Composition** - Modular, reusable components
- **Modern UI Components** - Button, Input, Card with Tailwind CSS
- **Responsive Design** - Mobile-first approach
- **Error Boundaries** - Graceful error handling
- **Loading States** - Better user experience
- **Form Validation** - Client-side validation with error messages
- **Protected Routes** - Authentication-based routing

### Backend (Node.js/Express)

- **RESTful API** - Clean, organized endpoints
- **MongoDB Atlas** - Cloud database
- **JWT Authentication** - Secure user sessions
- **Error Handling** - Comprehensive error responses
- **CORS Support** - Cross-origin requests
- **Environment Variables** - Secure configuration

## 🏗️ Project Structure

```
frontend/
├── src/
│   ├── components/
│   │   ├── ui/           # Reusable UI components
│   │   │   ├── Button.jsx
│   │   │   ├── Input.jsx
│   │   │   └── Card.jsx
│   │   ├── layout/       # Layout components
│   │   │   └── Layout.jsx
│   │   ├── auth/         # Authentication components
│   │   │   └── Login.jsx
│   │   └── ...           # Legacy components (being modernized)
│   ├── contexts/         # React Context providers
│   │   └── AuthContext.js
│   ├── hooks/            # Custom React hooks
│   │   └── useApi.js
│   ├── pages/            # Page components
│   │   └── Home.jsx
│   ├── services/         # API service layer
│   │   └── api.js
│   └── ...
```

## 🛠️ Technology Stack

### Frontend

- **React 18** - Latest React features
- **React Router v6** - Modern routing
- **Tailwind CSS** - Utility-first CSS framework
- **Axios** - HTTP client
- **PropTypes** - Runtime type checking

### Backend

- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB ODM
- **JWT** - Authentication tokens
- **CORS** - Cross-origin resource sharing

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- MongoDB Atlas account

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd SPM_TourGuideManagement
   ```

2. **Install frontend dependencies**

   ```bash
   cd frontend
   npm install
   ```

3. **Install backend dependencies**

   ```bash
   cd ../BACKEND
   npm install
   ```

4. **Set up environment variables**

   ```bash
   # In BACKEND directory
   echo "MONGODB_URL=mongodb+srv://your-username:your-password@cluster.mongodb.net/travelo" > .env
   echo "PORT=8070" >> .env
   ```

5. **Start the backend server**

   ```bash
   cd BACKEND
   npm start
   ```

6. **Start the frontend development server**

   ```bash
   cd frontend
   npm start
   ```

7. **Access the application**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:8070

## 📱 Features

### User Management

- ✅ User registration and login
- ✅ Profile management
- ✅ Session persistence
- ✅ Protected routes

### Hotel Management

- ✅ Hotel listings
- ✅ Hotel booking
- ✅ Room management
- ✅ Hotel search and filtering

### Tour Guide Management

- ✅ Tour guide profiles
- ✅ Guide availability
- ✅ Guide ratings and reviews
- ✅ Guide booking

### Package Management

- ✅ Travel package creation
- ✅ Package customization
- ✅ Package search
- ✅ Package booking

### Payment System

- ✅ Payment processing
- ✅ Payment history
- ✅ Invoice generation
- ✅ Payment tracking

## 🎨 UI Components

### Modern Button Component

```jsx
<Button variant="primary" size="large" loading={isLoading} fullWidth>
  Click me
</Button>
```

### Modern Input Component

```jsx
<Input
  label="Email"
  name="email"
  type="email"
  error={errors.email}
  placeholder="Enter your email"
  fullWidth
/>
```

### Modern Card Component

```jsx
<Card title="Hotel Information" subtitle="Luxury accommodation" hover>
  Content goes here
</Card>
```

## 🔧 Custom Hooks

### useApi Hook

```jsx
const { data, loading, error, refetch } = useApi(() => hotelAPI.getAll(), []);
```

### useMutation Hook

```jsx
const { mutate, loading, error } = useMutation((data) => hotelAPI.create(data));
```

## 🚀 Deployment

### Frontend Deployment

1. Build the production version:
   ```bash
   npm run build
   ```
2. Deploy to your preferred hosting service (Vercel, Netlify, etc.)

### Backend Deployment

1. Set up environment variables on your hosting platform
2. Deploy to your preferred hosting service (Heroku, Railway, etc.)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is built for Software Project Management (SE3080) module.

## 🆘 Support

For support, please contact the development team or create an issue in the repository.

---

**Built with ❤️ for Software Project Management (SE3080)**
