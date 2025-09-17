import { Outlet } from 'react-router'
import Navbar from '../navbar'

export default function Layout() {
  return (
    <div className="w-full">
      <Navbar />
      <Outlet />
    </div>
  )
}
