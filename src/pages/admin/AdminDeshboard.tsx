

const AdminDeshboard = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Dashboard Overview</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div className="bg-white shadow p-6 rounded-lg">
          <h2 className="text-lg font-semibold">Total Users</h2>
          <p className="text-3xl mt-2 text-blue-600">123</p>
        </div>

        {/* Card 2 */}
        <div className="bg-white shadow p-6 rounded-lg">
          <h2 className="text-lg font-semibold">Tickets Sold</h2>
          <p className="text-3xl mt-2 text-green-600">456</p>
        </div>

        {/* Card 3 */}
        <div className="bg-white shadow p-6 rounded-lg">
          <h2 className="text-lg font-semibold">Upcoming Events</h2>
          <p className="text-3xl mt-2 text-yellow-600">7</p>
        </div>
      </div>
    </div>
  )
}

export default AdminDeshboard