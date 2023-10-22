import { BrowserRouter, Route, Routes } from 'react-router-dom'
import {
  Analysis,
  Dashboard,
  Orders,
  Planning,
  Reports,
  Royalty,
  SharedLayout,
  Stock,
} from './pages/dashboardPages'
import Error from './pages/Error'
import Login from './pages/Login'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="/stock" element={<Stock />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/planning" element={<Planning />} />
          <Route path="/analysis" element={<Analysis />} />
          <Route path="/royalty" element={<Royalty />} />
          <Route path="/reports" element={<Reports />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
