import {createBrowserRouter} from "react-router-dom";
import Main from '../pages/Main.jsx'
import Catalog from '../pages/Catalog'
import ProductPage from '../pages/ProductPage'

const path = (import.meta.env.PROD)? '/shop-template' : ''
  
const router = createBrowserRouter([
  {
    path: `${path}/`,
    element: <Main />
  },
  {
    path: `${path}/catalog`,
    element: <Catalog />
  },
  {
    path: `${path}/products/:id`,
    element: <ProductPage />
  },
]);

export default router;