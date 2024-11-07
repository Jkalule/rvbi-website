import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function Home() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="bg-blue-500 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Empowering Skills for Tomorrow's Workforce</h1>
          <p className="text-xl mb-8">Join Ronsil Vocational and Business Institute for a future-ready education</p>
          <Link to="/admissions" className="bg-white text-blue-500 px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-100 transition duration-300">
            Apply Now
          </Link>
        </div>
      </section>

      {/* Quick Links */}
      <section className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link to="/programs" className="bg-gray-100 p-6 rounded-lg text-center hover:bg-gray-200 transition duration-300">
            <h2 className="text-2xl font-bold mb-2">Programs</h2>
            <p>Explore our wide range of career-focused courses</p>
          </Link>
          <Link to="/admissions" className="bg-gray-100 p-6 rounded-lg text-center hover:bg-gray-200 transition duration-300">
            <h2 className="text-2xl font-bold mb-2">Admissions</h2>
            <p>Learn about our application process and requirements</p>
          </Link>
          <Link to="/contact" className="bg-gray-100 p-6 rounded-lg text-center hover:bg-gray-200 transition duration-300">
            <h2 className="text-2xl font-bold mb-2">Contact Us</h2>
            <p>Get in touch with our admissions team for more information</p>
          </Link>
        </div>
      </section>

      {/* Key Highlights */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Why Choose RVBI?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2">Hands-on Training</h3>
              <p>Our programs focus on practical skills that employers demand</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2">Industry Partnerships</h3>
              <p>We collaborate with leading companies to ensure our curriculum stays relevant</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2">Career Support</h3>
              <p>Our dedicated career services team helps you transition from student to professional</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h2>
        <Link to="/admissions" className="inline-flex items-center bg-blue-500 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-600 transition duration-300">
          Apply Now <ArrowRight className="ml-2" />
        </Link>
      </section>
    </div>
  )
}