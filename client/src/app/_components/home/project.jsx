import ProjectCard from "../ProjectComp/ProjectCard"
import VideoCard from "../ProjectComp/VideoCard"



function Project() {
  const videos = [

      {
        id: 1,
        videoId: "fnKrfGJSAY4", // Store only the YouTube video ID
        title: "Video Tour",
        description:
          "A walk-through video that always attracted many buyers & home that perfectly reflects their lifestyle. A home that makes a statement in the locality. A perfect blend of modern architecture with all the amenities that a family would need.",
      },

    {
      id: 2,
      thumbnail: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-cKwy3xQHzqXxV9cTBBWa0vRPH2WlFV.png",
      title: "Video Tour",
      description:
        "Dream home! Because we wanted to build a home to make skills in the Eyes of the Society. Life may feel like a short time, but I make it last long. The dream home we created just makes us happy.",
    },
    {
      id: 3,
      thumbnail: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-cKwy3xQHzqXxV9cTBBWa0vRPH2WlFV.png",
      title: "Video Tour",
      description:
        "Another weekend on successful booking. If someone asks me about my best work till date, I'll say this project! We are subject matter experts! The best work that could build our best time to.",
    },
  ]

  const projects = [
    {
      id: "CTHD-169",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-cKwy3xQHzqXxV9cTBBWa0vRPH2WlFV.png",
      location: "Chandapura, Bangalore",
      specs: "30x40 | G+2 | Budget Package",
    },
    {
      id: "CTHD-55",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-cKwy3xQHzqXxV9cTBBWa0vRPH2WlFV.png",
      location: "Sarjapur, Bangalore",
      specs: "40x60 | G+2 | Budget Package",
    },
    {
      id: "CTHD-147",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-cKwy3xQHzqXxV9cTBBWa0vRPH2WlFV.png",
      location: "Whitefield, Bangalore",
      specs: "30x40 | G+1 | Budget Package",
    },
    {
      id: "CTHD-271",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-cKwy3xQHzqXxV9cTBBWa0vRPH2WlFV.png",
      location: "HSR Layout, Bangalore",
      specs: "30x50 | G+2 | Budget Package",
    },
    {
      id: "CTHD-106",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-cKwy3xQHzqXxV9cTBBWa0vRPH2WlFV.png",
      location: "Electronic City, Bangalore",
      specs: "40x60 | G+3 | Premium Package",
    },
    {
      id: "CTHD-251",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-cKwy3xQHzqXxV9cTBBWa0vRPH2WlFV.png",
      location: "Marathahalli, Bangalore",
      specs: "30x40 | G+2 | Budget Package",
    },
  ]

  return (
    <div className="min-h-screen bg-white p-6 md:p-8">
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Walkthroughs - Video Tour</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {videos.map((video) => (
            <VideoCard key={video.id} {...video} />
          ))}
        </div>
      </section>

      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Our Projects</h2>
          <p className="text-sm text-gray-600">Projects that we delivered to our Customers.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </section>
    </div>
  )
}

export default Project

