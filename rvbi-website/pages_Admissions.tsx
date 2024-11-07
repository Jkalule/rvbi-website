import { Link } from 'react-router-dom'
import { Download } from 'lucide-react'

export default function Admissions() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      <section>
        <h1 className="text-4xl font-bold mb-6">Admissions</h1>
        <p className="text-lg mb-4">
          Join the RVBI community and take the first step towards your future career. Our admissions process is designed to be straightforward and supportive.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-semibold mb-4">Application Instructions</h2>
        <ol className="list-decimal list-inside space-y-4">
          <li>
            <span className="font-semibold">Review Programs:</span> Explore our programs and choose the one that aligns with your career goals.
          </li>
          <li>
            <span className="font-semibold">Check Eligibility:</span> Ensure you meet the eligibility requirements for your chosen program.
          </li>
          <li>
            <span className="font-semibold">Prepare Documents:</span> Gather all required documents, including transcripts and identification.
          </li>
          <li>
            <span className="font-semibold">Complete Application Form:</span> Fill out the online application form or download a printable version.
          </li>
          <li>
            <span className="font-semibold">Submit Application:</span> Submit your completed application along with all required documents.
          </li>
          <li>
            <span className="font-semibold">Await Decision:</span> Our admissions team will review your application and contact you with a decision.
          </li>
        </ol>
        <div className="mt-6">
          <a
            href="/application-form.pdf"
            className="inline-flex items-center bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
          >
            <Download className="mr-2" />
            Download Application Form
          </a>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-semibold mb-4">Eligibility Requirements</h2>
        <p className="mb-4">
          Eligibility requirements may vary by program. Generally, applicants should have:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>High school diploma or equivalent</li>
          <li>Minimum GPA of 2.5</li>
          <li>Proof of English proficiency (for non-native speakers)</li>
          <li>Any program-specific prerequisites</li>
        </ul>
      </section>

      <section>
        <h2 className="text-3xl font-semibold mb-4">Scholarships and Financial Aid</h2>
        <p className="mb-4">
          RVBI is committed to making education accessible. We offer various scholarships and financial aid options to eligible students.
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>Merit-based scholarships</li>
          <li>Need-based financial aid</li>
          <li>Work-study programs</li>
          <li>Payment plans</li>
        </ul>
        <p className="mt-4">
          For more information on scholarships and financial aid, please contact our financial aid office.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-semibold mb-4">Contact Admissions</h2>
        <p className="mb-4">
          Have questions about the admissions process? Our team is here to help.
        </p>
        <div className="bg-gray-100 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-2">Admissions Office</h3>
          <p className="mb-2">Phone: (123) 456-7890</p>
          <p className="mb-2">Email: admissions@rvbi.edu</p>
          <p>Hours: Monday - Friday, 9:00 AM - 5:00 PM</p>
        </div>
      </section>

      <section className="text-center">
        <h2 className="text-3xl font-semibold mb-4">Ready to Apply?</h2>
        <p className="mb-6">
          Take the next step towards your future. Apply now or contact us for more information.
        </p>
        <div className="space-x-4">
          <Link
            to="/application"
            className="bg-blue-500 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-600 transition duration-300"
          >
            Start Application
          </Link>
          <Link
            to="/contact"
            className="bg-gray-200 text-gray-800 px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-300 transition duration-300"
          >
            Contact Admissions
          </Link>
        </div>
      </section>
    </div>
  )
}