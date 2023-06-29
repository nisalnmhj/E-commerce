import { Counter } from './features/counter/Counter';
import './App.css';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import CartPage from './pages/CartPage';
import CheckOutPage from './pages/CheckOut';
import ProductDetails from './features/product-list/components/ProductDetails';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: (<Home />),
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/signup",
    element: <SignupPage />,
  }
  ,
  {
    path: "/cart",
    element: <CartPage />,
  },
  {
    path: "/checkout",
    element: <CheckOutPage />,
  },
  {
    path: "/product-detail",
    element: <ProductDetails />,
  }
]);
function App() {
  return (
    <div className="App">
       <RouterProvider router={router} />
    </div>
  );
}

export default App;
