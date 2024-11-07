import { Link } from 'react-router-dom'

const programs = [
  {
    id: 1,
    title: "Business Administration",
    description: "Develop essential skills for managing businesses and organizations.",
    duration: "2 years",
    careers: ["Business Manager", "Entrepreneur", "Project Coordinator"]
  },
  {
    id: 2,
    title: "Information Technology",
    description: "Learn cutting-edge technologies and prepare for a career in IT.",
    duration: "2 years",
    careers: ["Software Developer", "Network Administrator", "IT Consultant"]
  },
  {
    id: 3,
    title: "Secretarial Studies",
    description: "Master office management and administrative skills.",
    duration: "1 year",
    careers: ["Executive Assistant", "Office Manager", "Administrative Coordinator"]
  },
  // Add more programs as needed
]

export default function Programs() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      <section>
        <h1 className="text-4xl font-bold mb-6">Our Programs</h1>
        <p className="text-lg mb-4">
          RVBI offers a wide range of career-focused programs designed to equip you with the skills and knowledge needed for success in today's competitive job market.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {programs.map((program) => (
          <div key={program.id} className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-2">{program.title}</h2>
              <p className="text-gray-600 mb-4">{program.description}</p>
              <p className="text-sm text-gray-500 mb-2">Duration: {program.duration}</p>
              <h3 className="text-lg font-semibold mb-2">Potential Careers:</h3>
              <ul className="list-disc list-inside text-sm text-gray-600">
                {program.careers.map((career, index) => (
                  <li key={index}>{career}</li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-100 px-6 py-4">
              <Link
                to={`/programs/${program.id}`}
                className="text-blue-500 hover:text-blue-700 font-semibold"
              >
                Learn More
              </Link>
            </div>
          </div>
        ))}
      </section>

      <section>
        <h2 className="text-3xl font-semibold mb-4">Short Courses and Certificates</h2>
        <p className="mb-4">
          In addition to our main programs, RVBI offers a variety of short courses and certificate programs for quick skill development in high-demand areas.
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>Digital Marketing</li>
          <li>Project Management</li>
          <li>Data Analysis</li>
          <li>Web Development</li>
          <li>Graphic Design</li>
        </ul>
      </section>

      <section className="text-center">
        <h2 className="text-3xl font-semibold mb-4">Ready to Get Started?</h2>
        <p className="mb-6">
          Take the first step towards your new career. Apply now or contact us for more information about our programs.
        </p>
        <div className="space-x-4">
          <Link
            to="/admissions"
            className="bg-blue-500 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-600 transition duration-300"
          >
            Apply Now
          </Link>
          <Link
            to="/contact"
            className="bg-gray-200 text-gray-800 px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-300 transition duration-300"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  )
}