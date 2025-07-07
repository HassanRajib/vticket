
import { Outlet, NavLink } from 'react-router-dom'

const AdminLaout = () => {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 text-white p-4 space-y-4">
        <h2 className="text-xl font-bold mb-6">Admin Panel</h2>
        <nav className="flex flex-col gap-3">
          <NavLink to="/admin" className="hover:text-blue-400">Dashboard</NavLink>
          <NavLink to="/admin/events" className="hover:text-blue-400">Manage Events</NavLink>
          <NavLink to="/admin/users" className="hover:text-blue-400">Users</NavLink>
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-6 bg-gray-50">
        <Outlet />
      </main>
    </div>
  )
}

export default AdminLaout