import { Calendar, Clock, MapPin } from 'lucide-react'

const events = [
  {
    id: 1,
    title: "Open House",
    date: "2023-08-15",
    time: "10:00 AM - 2:00 PM",
    location: "RVBI Main Campus",
    description: "Explore our campus, meet faculty, and learn about our programs."
  },
  {
    id: 2,
    title: "Career Fair",
    date: "2023-09-20",
    time: "9:00 AM - 4:00 PM",
    location: "RVBI Conference Center",
    description: "Connect with potential employers and explore career opportunities."
  },
  {
    id: 3,
    title: "Alumni Networking Event",
    date: "2023-10-05",
    time: "6:00 PM - 8:00 PM",
    location: "City Convention Center",
    description: "Network with RVBI alumni and industry professionals."
  },
  // Add more events as needed
]

export default function Events() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      <section>
        <h1 className="text-4xl font-bold mb-6">Upcoming Events</h1>
        <p className="text-lg mb-4">
          Stay connected with the RVBI community through our exciting events. From open houses to career fairs, there's always something happening at RVBI.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {events.map((event) => (
          <div key={event.id} className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-2">{event.title}</h2>
              <div className="flex items-center text-gray-600 mb-2">
                <Calendar className="w-4 h-4 mr-2" />
                <span>{event.date}</span>
              </div>
              <div className="flex items-center text-gray-600 mb-2">
                <Clock className="w-4 h-4 mr-2" />
                <span>{event.time}</span>
              </div>
              <div className="flex items-center text-gray-600 mb-4">
                <MapPin className="w-4 h-4 mr-2" />
                <span>{event.location}</span>
              </div>
              <p className="text-gray-700">{event.description}</p>
            </div>
            <div className="bg-gray-100 px-6 py-4">
              <button className="text-blue-500 hover:text-blue-700 font-semibold">
                Learn More
              </button>
            </div>
          </div>
        ))}
      </section>

      <section>
        <h2 className="text-3xl font-semibold mb-4">Can't Make It to an Event?</h2>
        <p className="mb-4">
          If you're unable to attend our events in person, don't worry! We offer virtual information sessions and campus tours. Contact our admissions office to schedule a virtual visit.
        </p>
        <button className="bg-blue-500 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-600 transition duration-300">
          Schedule a Virtual Visit
        </button>
      </section>
    </div>
  )
}