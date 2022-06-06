import "./App.css";
import Home from "./pages/Home"
import Navbar from './components/Navbar/Navbar';
import Login from './pages/Login';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';
import {CartProvider} from "./context/CartContext";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
        <Router>
        <div className="App">
          <CartProvider >
          <Navbar />

          <AuthProvider>

          <Routes>
            <Route
              exact
              path="/"
              element={<Home />} 
            />
            <Route  path="/login" element={<Login />} />
          </Routes>
          </AuthProvider>
          </CartProvider>
        </div>
      </Router>
  );
}

export default App;
