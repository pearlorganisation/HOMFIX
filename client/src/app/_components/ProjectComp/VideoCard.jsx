import { FaPlayCircle } from "react-icons/fa"

function VideoCard({ thumbnail, title, description }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative aspect-video">
        <div className="absolute inset-0 bg-black/20 flex items-center justify-center group cursor-pointer">
          <FaPlayCircle className="w-12 h-12 text-white opacity-80 group-hover:opacity-100 transition-opacity" />
        </div>
        <img src={thumbnail || "/placeholder.svg"} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="p-4">
        <h3 className="font-semibold mb-2">{title}</h3>
        <p className="text-sm text-gray-600 line-clamp-3">{description}</p>
      </div>
    </div>
  )
}

export default VideoCard

