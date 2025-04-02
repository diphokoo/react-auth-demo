# React Authentication Demo: Simple and Secure User Authentication System

This project is a React-based authentication system that demonstrates secure user access control and protected routing. It provides a straightforward implementation of user authentication with features like login functionality, protected routes, and persistent user sessions using local storage.

The application showcases modern React development practices using hooks, context API, and React Router for navigation. It implements a clean architecture that separates authentication logic, routing, and UI components, making it an excellent starting point for projects requiring user authentication. The system includes public and protected pages, demonstrating how to restrict access to sensitive content based on user authentication status.

## Repository Structure
```
react-auth-demo/
├── package.json              # Project dependencies and scripts configuration
├── public/                   # Static files served by the web server
│   ├── index.html           # Main HTML entry point
│   ├── manifest.json        # Web app manifest for PWA support
│   └── robots.txt           # Search engine crawling rules
└── src/                     # Source code directory
    ├── components/          # Reusable UI components
    │   └── ProtectedRoute.js # Authentication wrapper for protected routes
    ├── context/
    │   └── AuthContext.js   # Authentication context provider and hooks
    ├── pages/               # Application page components
    │   ├── Dashboard.js     # Protected dashboard page
    │   ├── Home.js         # Public home page
    │   └── Login.js        # User authentication page
    ├── App.js              # Main application component and routing setup
    ├── index.js            # Application entry point
    └── App.css             # Global application styles
```

## Usage Instructions
### Prerequisites
- Node.js (version 14.0.0 or higher)
- npm (version 6.0.0 or higher) or yarn
- Modern web browser with JavaScript enabled

### Installation
1. Clone the repository:
```bash
git clone <repository-url>
cd react-auth-demo
```

2. Install dependencies:
```bash
# Using npm
npm install

# Using yarn
yarn install
```

3. Start the development server:
```bash
# Using npm
npm start

# Using yarn
yarn start
```

### Quick Start
1. Launch the application and navigate to the home page at `http://localhost:3000`
2. Click the login link to access the login page
3. Enter your username (any value is accepted for demo purposes)
4. After successful login, you'll be redirected to the dashboard

### More Detailed Examples

#### Using Protected Routes
```jsx
// Wrap your protected components with ProtectedRoute
<Route
  path="/dashboard"
  element={
    <ProtectedRoute>
      <Dashboard />
    </ProtectedRoute>
  }
/>
```

#### Implementing Authentication in Components
```jsx
import { useAuth } from "../context/AuthContext";

const MyComponent = () => {
  const { user, login, logout } = useAuth();
  
  // Access user data
  console.log(user);
  
  // Perform login/logout
  const handleLogin = () => login(userData);
  const handleLogout = () => logout();
};
```

### Troubleshooting

#### Common Issues

1. **Login Redirect Issues**
   - Problem: Not being redirected after login
   - Solution: Check if `useNavigate` is properly implemented
   ```jsx
   const navigate = useNavigate();
   // Use navigate('/path') for redirects
   ```

2. **Protected Route Access**
   - Problem: Unauthorized access to protected routes
   - Solution: Verify AuthContext implementation
   ```jsx
   // Check if AuthContext is properly wrapped around your app
   <AuthProvider>
     <Router>
       {/* Your routes */}
     </Router>
   </AuthProvider>
   ```

#### Debugging
- Enable React Developer Tools in your browser
- Check the browser's console for error messages
- Verify local storage for user session data:
```javascript
// Open browser console and type:
localStorage.getItem('user')
```

## Data Flow
The authentication system manages user state through React Context API and maintains persistence using local storage. The flow begins with user input and ends with protected route access control.

```ascii
┌──────────┐    ┌───────────┐    ┌─────────────┐
│  Login   │───>│AuthContext│───>│LocalStorage │
└──────────┘    └───────────┘    └─────────────┘
      │               │                 │
      │               ▼                 │
      │         ┌───────────┐          │
      └────────>│Protected  │<─────────┘
                │Routes     │
                └───────────┘
```

Key Component Interactions:
1. Login component captures user credentials
2. AuthContext manages authentication state
3. Local storage persists user session
4. ProtectedRoute component guards private routes
5. Router handles navigation based on auth state
6. AuthProvider makes auth context available throughout the app
7. Components consume auth context using useAuth hook