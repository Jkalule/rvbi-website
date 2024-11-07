import { useState } from 'react'
import { X } from 'lucide-react'

const images = [
  { id: 1, src: "/placeholder.svg?height=300&width=400", alt: "Campus Building", category: "Campus" },
  { id: 2, src: "/placeholder.svg?height=300&width=400", alt: "Students in Class", category: "Academic" },
  { id: 3, src: "/placeholder.svg?height=300&width=400", alt: "Graduation Ceremony", category: "Events" },
  { id: 4, src: "/placeholder.svg?height=300&width=400", alt: "Computer Lab", category: "Facilities" },
  { id: 5, src: "/placeholder.svg?height=300&width=400", alt: "Student Life", category: "Student Life" },
  { id: 6, src: "/placeholder.svg?height=300&width=400", alt: "Sports Event", category: "Events" },
  // Add more images as needed
]

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null)
  const [filter, setFilter] = useState('All')

  const categories = ['All', ...new Set(images.map(img => img.category))]

  const filteredImages = filter === 'All' 
    ? images 
    : images.filter(img => img.category === filter)

  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      <section>
        <h1 className="text-4xl font-bold mb-6">RVBI Gallery</h1>
        <p className="text-lg mb-4">
          Explore life at RVBI through our gallery. From campus views to student activities, get a glimpse of what it's like to be part of our community.
        </p>
      </section>

      <section>
        <div className="flex flex-wrap gap-4 mb-8">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-full ${
                filter === category 
                  ? 'bg-blue-500 text-white' 
                  : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredImages.map((image) => (
            <div 
              key={image.id} 
              className="cursor-pointer"
              onClick={() => setSelectedImage(image)}
            >
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
          ))}
        </div>
      </section>

      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="max-w-3xl max-h-full p-4">
            <img 
              src={selectedImage.src} 
              alt={selectedImage.alt} 
              className="max-w-full max-h-[80vh] object-contain"
            />
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white"
            >
              <X className="w-8 h-8" />
            </button>
          </div>
        </div>
      )}
    </div>
  )
}