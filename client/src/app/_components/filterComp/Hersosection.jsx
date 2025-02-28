import React from 'react'

const Hersosection = () => {
  return (
    <>
    
    
     <div className="relative">
    {/* Background Image */}
    <img 
      src="https://d2d4xyu1zrrrws.cloudfront.net/website/web-ui/assets/images/temp/img-banner@3x.jpg" 
      alt="Banner" 
      className="w-full h-[300px] "
    />
    
    {/* Black Overlay */}
    <div className="absolute inset-0 bg-black/30"></div>
  
    {/* Overlay Text */}
    <div className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white font-bold text-[30px] ">
      House Designs and Floor Plans <br />
      Find the curated floor plans from Brick&Bolt.
    </div>
    
  </div>
  <p  className='text-[#6E7191] py-6 px-8 text-sm'>Welcome to Brick & Bolt’s House Design World! Are you looking for a house floor plan? Then you are at the right place. Explore our versatile house plan, the best 3D house designs, and detailed floor plans that are specifically designed for contemporary living. Our 3D house design allows you to visualize your dream home in stunning detail and explore many floor plans and finishes to ensure a seamless and distinctive construction experience. Our house design layout combines functionality with contemporary aesthetics, ensuring that every detail is designed for comfort and convenience. Whether you're looking for a modern, open floor plan, multi-story design or a Vastu-compliant home design, our expert team of architects and designers will ensure your vision is realized with precision and technical expertise.
  </p>
</>
  )
}

export default Hersosection

