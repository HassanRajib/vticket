import { useState, useEffect} from 'react'

interface EventItem {
  id: number;
  title: string;
  date: string;
  tickets: number;
}

const AdminEvent = () => {
    const [events, setEvents] = useState<EventItem[]>([]);

  // Dummy data for now
  useEffect(() => {
    const dummyEvents: EventItem[] = [
      { id: 1, title: "Concert A", date: "2025-08-01", tickets: 150 },
      { id: 2, title: "Concert B", date: "2025-08-15", tickets: 75 },
    ];
    setEvents(dummyEvents);
  }, []);

  const handleEdit = (event: EventItem) => {
    // TODO: implement edit logic or open modal
    console.log("Edit", event);
  };

  const handleDelete = (id: number) => {
    // TODO: implement delete logic or confirmation
    console.log("Delete", id);
  };
  
    return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Manage Events</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          + Add Event
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow">
          <thead>
            <tr className="bg-gray-100 text-left text-sm font-semibold text-gray-600">
              <th className="px-4 py-3">Title</th>
              <th className="px-4 py-3">Date</th>
              <th className="px-4 py-3">Tickets</th>
              <th className="px-4 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {events.map((event) => (
              <tr key={event.id} className="border-t text-sm">
                <td className="px-4 py-3 text-black">{event.title}</td>
                <td className="px-4 py-3 text-black">{event.date}</td>
                <td className="px-4 py-3 text-black">{event.tickets}</td>
                <td className="px-4 py-3 space-x-2">
                  <button
                    onClick={() => handleEdit(event)}
                    className="text-blue-600 hover:underline"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(event.id)}
                    className="text-red-600 hover:underline"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default AdminEvent