import { Link } from 'react-router-dom'

export default function About() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      <section>
        <h1 className="text-4xl font-bold mb-6">About RVBI</h1>
        <p className="text-lg mb-4">
          Ronsil Vocational and Business Institute (RVBI) is committed to empowering students with practical skills and knowledge for tomorrow's workforce. Our focus on hands-on training and industry-relevant education sets us apart in the field of vocational and business education.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
        <p className="mb-4">
          To provide high-quality, career-oriented education that prepares students for success in the rapidly evolving job market, fostering innovation, professionalism, and lifelong learning.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-semibold mb-4">Our Vision</h2>
        <p className="mb-4">
          To be the leading vocational and business institute, recognized for excellence in practical education, producing skilled professionals who drive economic growth and societal progress.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-semibold mb-4">Core Values</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Practical Excellence</li>
          <li>Innovation</li>
          <li>Integrity</li>
          <li>Student-Centered Approach</li>
          <li>Community Engagement</li>
        </ul>
      </section>

      <section>
        <h2 className="text-3xl font-semibold mb-4">History and Partnerships</h2>
        <p className="mb-4">
          Founded in [year], RVBI has grown from a small local institute to a renowned center for vocational and business education. Our partnerships with industry leaders ensure our curriculum remains cutting-edge and relevant.
        </p>
        <p className="mb-4">
          Some of our key partnerships include:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>[Partner Company 1]</li>
          <li>[Partner Company 2]</li>
          <li>[Partner Company 3]</li>
        </ul>
      </section>

      <section>
        <h2 className="text-3xl font-semibold mb-4">Community Impact</h2>
        <p className="mb-4">
          At RVBI, we're proud of the positive impact we've made on our local and regional communities. Our graduates go on to become skilled professionals, entrepreneurs, and community leaders.
        </p>
        <div className="bg-gray-100 p-4 rounded-lg">
          <h3 className="text-xl font-semibold mb-2">Success Story</h3>
          <p>
            "[Student Name], a recent RVBI graduate, launched a successful tech startup that now employs over 50 people in our local community."
          </p>
        </div>
      </section>

      <section className="text-center">
        <h2 className="text-3xl font-semibold mb-4">Join Our Community</h2>
        <p className="mb-6">
          Ready to start your journey with RVBI? Explore our programs and take the first step towards your future career.
        </p>
        <Link
          to="/programs"
          className="bg-blue-500 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-600 transition duration-300"
        >
          Explore Our Programs
        </Link>
      </section>
    </div>
  )
}