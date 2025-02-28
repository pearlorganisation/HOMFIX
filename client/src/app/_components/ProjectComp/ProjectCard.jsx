function ProjectCard({ id, image, location, specs }) {
    return (
      <div className="bg-white rounded-lg shadow-md overflow-hidden group cursor-pointer">
        <div className="relative aspect-[4/3]">
          <img
            src={image || "/placeholder.svg"}
            alt={`Project ${id}`}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="p-4">
          <div className="flex justify-between items-start mb-2">
            <h3 className="font-semibold">{id}</h3>
            <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded">Completed</span>
          </div>
          <p className="text-sm text-gray-600 mb-1">{location}</p>
          <p className="text-xs text-gray-500">{specs}</p>
        </div>
      </div>
    )
  }
  
  export default ProjectCard
  
  