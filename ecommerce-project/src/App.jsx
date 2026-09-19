import {Routes, Route} from 'react-router'
import {HomePage} from './pages/HomePage'
import { ChecoutPage } from './pages/checkout/CheckoutPage'
import {OrdersPage} from './pages/OrdersPage'
import {TrackingPage} from './pages/TrackingPage'
import {PageNotFound} from './pages/PageNotFound'

import './App.css'

function App() {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="checkout" element={<ChecoutPage />} />
      <Route path="orders" element={<OrdersPage />} />
      <Route path='tracking' element={<TrackingPage />} />
      <Route path="*" element={<PageNotFound />} />
      
    </Routes>
    
  )
}
export default App
