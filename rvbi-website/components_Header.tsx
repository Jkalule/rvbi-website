import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, Search } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-blue-600 text-white">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">RVBI</Link>
        <nav className="hidden md:flex space-x-4">
          <Link to="/" className="hover:text-blue-200">Home</Link>
          <Link to="/about" className="hover:text-blue-200">About</Link>
          <Link to="/programs" className="hover:text-blue-200">Programs</Link>
          <Link to="/admissions" className="hover:text-blue-200">Admissions</Link>
          <Link to="/events" className="hover:text-blue-200">Events</Link>
          <Link to="/gallery" className="hover:text-blue-200">Gallery</Link>
          <Link to="/contact" className="hover:text-blue-200">Contact</Link>
        </nav>
        <div className="flex items-center space-x-4">
          <Search className="w-5 h-5 cursor-pointer" />
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <nav className="flex flex-col space-y-2 px-4 py-2">
            <Link to="/" className="hover:text-blue-200">Home</Link>
            <Link to="/about" className="hover:text-blue-200">About</Link>
            <Link to="/programs" className="hover:text-blue-200">Programs</Link>
            <Link to="/admissions" className="hover:text-blue-200">Admissions</Link>
            <Link to="/events" className="hover:text-blue-200">Events</Link>
            <Link to="/gallery" className="hover:text-blue-200">Gallery</Link>
            <Link to="/contact" className="hover:text-blue-200">Contact</Link>
          </nav>
        </div>
      )}
    </header>
  )
}