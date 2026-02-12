// "use client";

// export default function PrinterSetupSection() {
//   return (
//     <section className="mb-32 py-20 h-[750px] mt-[-30px]">
//       <div className="max-w-[1360px] mx-auto px-4">
//         <div className="bg-gradient-to-br from-black via-gray-900 to-black rounded-4xl p-12 shadow-2xl border border-[var(--color-blue-500)] backdrop-blur-sm">
//           <div className="flex flex-col lg:flex-row items-center gap-16">
//             {/* Left Text Section */}
//             <div className="flex-1">
//               <div className="mb-8">
//                 <h2 className="text-5xl font-bold text-white mb-4 leading-tight">
//                   Diagnose and <span className="bg-gradient-to-r from-[var(--color-blue-500)] to-[var(--color-blue-500)] bg-clip-text text-transparent">Solve</span>
//                 </h2>
//                 <h3 className="text-3xl font-semibold text-gray-200 mb-4">
//                   Contact Support – <span className="text-[var(--color-blue-500)]">Chat Live</span>
//                 </h3>
//                 <p className="text-xl text-gray-400 mb-8 leading-relaxed">
//                   In this support hub, you'll find quick access to live assistance for Printer Setup
//                 </p>
//               </div>
              
//               {/* Issues List */}
//               <div className="space-y-4 mb-12">
//                 <div className="flex items-center space-x-4 p-4 bg-gray-900/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-800 hover:shadow-xl hover:border-[var(--color-blue-500)] transition-all duration-300 group">
//                   <div className="w-2 h-2 bg-[var(--color-blue-500)] rounded-full animate-pulse"></div>
//                   <span className="text-lg font-medium text-gray-200 group-hover:text-white">Can't connect to wireless printer</span>
//                 </div>
                
//                 <div className="flex items-center space-x-4 p-4 bg-gray-900/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-800 hover:shadow-xl hover:border-[var(--color-blue-500)] transition-all duration-300 group">
//                   <div className="w-2 h-2 bg-[var(--color-blue-500)] rounded-full animate-pulse"></div>
//                   <span className="text-lg font-medium text-gray-200 group-hover:text-white">Can't find  wireless printer on network</span>
//                 </div>
                
//                 <div className="flex items-center space-x-4 p-4 bg-gray-900/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-800 hover:shadow-xl hover:border-[var(--color-blue-500)] transition-all duration-300 group">
//                   <div className="w-2 h-2 bg-[var(--color-blue-500)] rounded-full animate-pulse"></div>
//                   <span className="text-lg font-medium text-gray-200 group-hover:text-white">Flashing blue light on the wireless printer</span>
//                 </div>
                
//                 <div className="flex items-center space-x-4 p-4 bg-gray-900/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-800 hover:shadow-xl hover:border-[var(--color-blue-500)] transition-all duration-300 group">
//                   <div className="w-2 h-2 bg-[var(--color-blue-500)] rounded-full animate-pulse"></div>
//                   <span className="text-lg font-medium text-gray-200 group-hover:text-white">Error printing from wireless printer</span>
//                 </div>
                
//                 <div className="flex items-center space-x-4 p-4 bg-gray-900/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-800 hover:shadow-xl hover:border-[var(--color-blue-500)] transition-all duration-300 group">
//                   <div className="w-2 h-2 bg-[var(--color-blue-500)] rounded-full animate-pulse"></div>
//                   <span className="text-lg font-medium text-gray-200 group-hover:text-white">Error setting up the wireless printer</span>
//                 </div>
//               </div>

//               {/* CTA Button */}
//               {/* <button className="bg-gradient-to-r from-[var(--color-blue-500)] to-[var(--color-blue-500)] hover:from-[var(--color-blue-600)] hover:to-[var(--color-blue-600)] text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
//                 Start Live Chat Now
//               </button> */}
//             </div>

//             {/* Right Image Section - Keeping original design */}
//             <div className="flex-1">
//               <div className="relative">
//                 <div className="relative rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
//                   <img 
//                     src="https://cdn.pixabay.com/photo/2024/04/11/17/03/ai-generated-8690198_1280.png" 
//                     alt="Professional IT Services" 
//                     className="w-full h-auto" 
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
//                 </div>
                
//                 {/* Floating Stats Card */}
//                 {/* <div className="absolute -bottom-6 -right-6 bg-gray-900/95 backdrop-blur-sm rounded-2xl p-6 shadow-2xl border border-gray-700/20">
//                   <div className="text-center">
//                     <div className="text-2xl font-bold bg-gradient-to-r from-[var(--color-blue-500)] to-[var(--color-blue-500)] bg-clip-text text-transparent">
//                       1000+
//                     </div>
//                     <div className="text-gray-400 text-sm font-semibold">Happy Customers</div>
//                   </div>
//                 </div> */}

//                 {/* Decorative Elements */}
//                 {/* <div className="absolute -top-4 -left-4 w-20 h-20 bg-[var(--color-blue-500)]/20 rounded-2xl rotate-12 backdrop-blur-sm animate-pulse"></div>
//                 <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-[var(--color-blue-500)]/20 rounded-2xl -rotate-12 backdrop-blur-sm animate-pulse delay-1000"></div> */}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }



"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function PrinterSetupSection() {
  const slides = [
    {
      image: "https://cdn.pixabay.com/photo/2024/04/11/17/03/ai-generated-8690198_1280.png",
      alt: "Professional IT Services"
    },
    {
      image: "/slide2.avif",
      alt: "HP Printer Setup"
    },
    {
      image: "slide3.avif",
      alt: "Printer Scanner"
    },
    {
      image: "slide4.avif",
      alt: "Wireless Printer"
    },
    {
      image: "slide5.avif",
      alt: "Office Printer"
    },
    {
      image: "slide6.webp",
      alt: "Office Printer"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="mb-32 py-20 h-[750px] mt-[-30px]">
      <div className="max-w-[1360px] mx-auto px-4">
        <div className="bg-gradient-to-br from-black via-gray-900 to-black rounded-4xl p-12 shadow-2xl border border-[var(--color-blue-500)] backdrop-blur-sm">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            {/* Left Text Section - EXACT SAME DESIGN */}
            <div className="flex-1">
              <div className="mb-8">
                <h2 className="text-5xl font-bold text-white mb-4 leading-tight">
                  Diagnose and <span className="bg-gradient-to-r from-[var(--color-blue-500)] to-[var(--color-blue-500)] bg-clip-text text-transparent">Solve</span>
                </h2>
                <h3 className="text-3xl font-semibold text-gray-200 mb-4">
                  Contact Support – <span className="text-[var(--color-blue-500)]">Chat Live</span>
                </h3>
                <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                  In this support hub, you'll find quick access to live assistance for Printer Setup
                </p>
              </div>
              
              {/* Issues List */}
              <div className="space-y-4 mb-12">
                <div className="flex items-center space-x-4 p-4 bg-gray-900/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-800 hover:shadow-xl hover:border-[var(--color-blue-500)] transition-all duration-300 group">
                  <div className="w-2 h-2 bg-[var(--color-blue-500)] rounded-full animate-pulse"></div>
                  <span className="text-lg font-medium text-gray-200 group-hover:text-white">Can't connect to wireless printer</span>
                </div>
                
                <div className="flex items-center space-x-4 p-4 bg-gray-900/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-800 hover:shadow-xl hover:border-[var(--color-blue-500)] transition-all duration-300 group">
                  <div className="w-2 h-2 bg-[var(--color-blue-500)] rounded-full animate-pulse"></div>
                  <span className="text-lg font-medium text-gray-200 group-hover:text-white">Can't find wireless printer on network</span>
                </div>
                
                <div className="flex items-center space-x-4 p-4 bg-gray-900/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-800 hover:shadow-xl hover:border-[var(--color-blue-500)] transition-all duration-300 group">
                  <div className="w-2 h-2 bg-[var(--color-blue-500)] rounded-full animate-pulse"></div>
                  <span className="text-lg font-medium text-gray-200 group-hover:text-white">Flashing blue light on the wireless printer</span>
                </div>
                
                <div className="flex items-center space-x-4 p-4 bg-gray-900/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-800 hover:shadow-xl hover:border-[var(--color-blue-500)] transition-all duration-300 group">
                  <div className="w-2 h-2 bg-[var(--color-blue-500)] rounded-full animate-pulse"></div>
                  <span className="text-lg font-medium text-gray-200 group-hover:text-white">Error printing from wireless printer</span>
                </div>
                
                <div className="flex items-center space-x-4 p-4 bg-gray-900/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-800 hover:shadow-xl hover:border-[var(--color-blue-500)] transition-all duration-300 group">
                  <div className="w-2 h-2 bg-[var(--color-blue-500)] rounded-full animate-pulse"></div>
                  <span className="text-lg font-medium text-gray-200 group-hover:text-white">Error setting up the wireless printer</span>
                </div>
              </div>
            </div>

            {/* Right Image Section - PROFESSIONAL SLIDER */}
            <div className="flex-1">
              <div className="relative">
                {/* Main Slider Container */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
                  {/* Slider Wrapper */}
                  <div className="relative h-[530px] w-full">
                    {slides.map((slide, index) => (
                      <div
                        key={index}
                        className={`absolute inset-0 transition-all duration-700 ease-in-out transform ${
                          index === currentIndex
                            ? "opacity-100 scale-100 translate-x-0"
                            : index < currentIndex
                            ? "opacity-0 -translate-x-full scale-95"
                            : "opacity-0 translate-x-full scale-95"
                        }`}
                      >
                        <img
                          src={slide.image}
                          alt={slide.alt}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                        
                        {/* Image Counter Badge */}
                        <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-sm px-3 py-1.5 rounded-full text-white text-sm font-medium border border-white/20">
                          {index + 1} / {slides.length}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Navigation Arrows - Modern Design */}
                  <button
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-[var(--color-blue-500)] transition-all duration-300 transform hover:scale-110 border border-white/20 group"
                    aria-label="Previous image"
                  >
                    <ChevronLeft size={20} className="group-hover:scale-110 transition-transform" />
                  </button>
                  
                  <button
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-[var(--color-blue-500)] transition-all duration-300 transform hover:scale-110 border border-white/20 group"
                    aria-label="Next image"
                  >
                    <ChevronRight size={20} className="group-hover:scale-110 transition-transform" />
                  </button>

                  {/* Dots Indicator - Modern Minimal */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
                    {slides.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`transition-all duration-300 ${
                          index === currentIndex
                            ? "w-6 h-2 bg-[var(--color-blue-500)] rounded-full shadow-lg shadow-[var(--color-blue-500)]/50"
                            : "w-2 h-2 bg-white/50 hover:bg-white rounded-full hover:scale-125"
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                      />
                    ))}
                  </div>

                  {/* Progress Bar */}
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-black/30">
                    <div 
                      className="h-full bg-gradient-to-r from-[var(--color-blue-500)] to-[var(--color-blue-400)] transition-all duration-300"
                      style={{ width: `${((currentIndex + 1) / slides.length) * 100}%` }}
                    ></div>
                  </div>
                </div>

                {/* Floating Stats Card - Kept commented as in original */}
                {/* <div className="absolute -bottom-6 -right-6 bg-gray-900/95 backdrop-blur-sm rounded-2xl p-6 shadow-2xl border border-gray-700/20">
                  <div className="text-center">
                    <div className="text-2xl font-bold bg-gradient-to-r from-[var(--color-blue-500)] to-[var(--color-blue-500)] bg-clip-text text-transparent">
                      1000+
                    </div>
                    <div className="text-gray-400 text-sm font-semibold">Happy Customers</div>
                  </div>
                </div> */}

                {/* Decorative Elements - Kept commented as in original */}
                {/* <div className="absolute -top-4 -left-4 w-20 h-20 bg-[var(--color-blue-500)]/20 rounded-2xl rotate-12 backdrop-blur-sm animate-pulse"></div>
                <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-[var(--color-blue-500)]/20 rounded-2xl -rotate-12 backdrop-blur-sm animate-pulse delay-1000"></div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}