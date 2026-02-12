"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, User } from "lucide-react";
import { useState, useEffect } from "react";

export default function HpSetupSection() {
  const slides = [
    {
      main: "/deskjet.avif",
      zoom: "/deskjet.avif",
    },
    {
      main: "/nslaser.avif",
      zoom: "/nslaser.avif",
    },
    {
      main: "/laserjet.avif",
      zoom: "/laserjet.avif",
    },
    {
      main: "/envy.avif",
      zoom: "/envy.avif",
    },
  ];

  const [index, setIndex] = useState(0);

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="w-full bg-[#e6e6e6] py-6 xs:py-8 sm:py-10 md:py-12 lg:py-[70px]">
      <div className="w-[1230px] px-4 xs:px-5 sm:px-6 md:px-8 lg:px-10 lg:max-w-[1024px] xl:max-w-[1200px] 2xl:max-w-[1400px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-6 xs:gap-8 sm:gap-10 md:gap-12 lg:gap-16 xl:gap-16">
          
          {/* LEFT SIDE */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center min-h-[300px] xs:min-h-[320px] sm:min-h-[350px] md:min-h-[380px] lg:min-h-[400px]">
            <div className="max-w-full lg:max-w-[400px] xl:max-w-[450px] 2xl:max-w-[500px] mx-auto lg:mx-0">
              <h2 className="text-[15px] xs:text-[16px] sm:text-[16px] md:text-[17px] lg:text-[17px] xl:text-[17px] text-[#2a2a2a] font-normal mb-4 xs:mb-4 sm:mb-5 md:mb-6 lg:mb-7 font-light leading-tight text-center lg:text-left">
                Enter your serial number, product number or product name
              </h2>
              <div className="flex flex-col sm:flex-row lg:flex-row gap-3 items-center lg:items-start">
                <input
                  type="text"
                  placeholder="Example: HP DeskJet 2632 All-in-One printer"
                  className="w-full sm:w-[320px] md:w-[340px] lg:w-[350px] xl:w-[370px] h-[48px] xs:h-[50px] sm:h-[52px] md:h-[52px] lg:h-[52px] px-4 border border-[#8a8a8a] bg-white text-[14px] xs:text-[14px] sm:text-[15px] md:text-[15px] lg:text-[15px] placeholder:text-[#666666] placeholder:text-[14px] xs:placeholder:text-[14px] sm:placeholder:text-[15px] focus:outline-none focus:border-[#0066b3]"
                />
                <button className="w-full sm:w-auto px-6 xs:px-7 sm:px-8 md:px-8 lg:px-8 h-[48px] xs:h-[50px] sm:h-[52px] md:h-[52px] lg:h-[52px] bg-[#3a3a3a] text-white text-[14px] xs:text-[14px] sm:text-[15px] md:text-[15px] lg:text-[15px] font-medium hover:bg-[#2a2a2a] transition whitespace-nowrap">
                  Submit
                </button>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-2 mt-5 xs:mt-5 sm:mt-6 md:mt-7 lg:mt-8 text-[#0066b3] cursor-pointer group">
                <User size={16} className="xs:w-[17px] xs:h-[17px] sm:w-[18px] sm:h-[18px] md:w-[18px] md:h-[18px] lg:w-[18px] lg:h-[18px]" strokeWidth={1.5} />
                <span className="text-[14px] xs:text-[14px] sm:text-[15px] md:text-[15px] lg:text-[15px] border-b border-transparent group-hover:border-[#0066b3] transition">
                  Sign in to select a saved product
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="w-full lg:w-1/2 lg:pl-8 xl:pl-12 lg:border-l lg:border-[#b0b0b0]">
            <h2 className="text-[15px] xs:text-[16px] sm:text-[16px] md:text-[17px] lg:text-[17px] xl:text-[17px] font-normal text-center mb-4 xs:mb-5 sm:mb-6 md:mb-7 lg:mb-8 text-[#000000] px-2">
              Examples of where to find your printer model
            </h2>

            <div className="relative w-full max-w-[350px] xs:max-w-[400px] sm:max-w-[450px] md:max-w-[480px] lg:max-w-[504px] xl:max-w-[504px] mx-auto px-6 xs:px-8 sm:px-8 md:px-8 lg:px-0">
              
              {/* SLIDER */}
              <div className="overflow-hidden">
                <div
                  className="flex transition-transform duration-500 ease-out"
                  style={{ transform: `translateX(-${index * 100}%)` }}
                >
                  {slides.map((slide, i) => (
                    <div key={i} className="min-w-full relative">
                      <div className="flex justify-center">
                        <Image
                          src={slide.main}
                          alt="HP printer"
                          width={504}
                          height={301}
                          className="object-contain w-full xs:w-[350px] sm:w-[400px] md:w-[450px] lg:w-[504px] xl:w-[504px] h-auto xs:h-[200px] sm:h-[230px] md:h-[260px] lg:h-[301px]"
                          priority={i === 0}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* DESKTOP ARROWS */}
              <button
                onClick={prevSlide}
                className="hidden lg:block absolute -left-8 xl:-left-12 top-1/2 -translate-y-1/2 text-[#4a4a4a] hover:text-[#0066b3] transition"
              >
                <ChevronLeft size={32} className="xl:w-[38px] xl:h-[38px]" strokeWidth={1.2} />
              </button>
              <button
                onClick={nextSlide}
                className="hidden lg:block absolute -right-8 xl:-right-12 top-1/2 -translate-y-1/2 text-[#4a4a4a] hover:text-[#0066b3] transition"
              >
                <ChevronRight size={32} className="xl:w-[38px] xl:h-[38px]" strokeWidth={1.2} />
              </button>

              {/* TABLET ARROWS */}
              <button
                onClick={prevSlide}
                className="lg:hidden md:block hidden absolute -left-6 top-1/2 -translate-y-1/2 text-[#4a4a4a] hover:text-[#0066b3] transition"
              >
                <ChevronLeft size={32} strokeWidth={1.2} />
              </button>
              <button
                onClick={nextSlide}
                className="lg:hidden md:block hidden absolute -right-6 top-1/2 -translate-y-1/2 text-[#4a4a4a] hover:text-[#0066b3] transition"
              >
                <ChevronRight size={32} strokeWidth={1.2} />
              </button>

              {/* MOBILE ARROWS */}
              <button
                onClick={prevSlide}
                className="md:hidden absolute left-0 top-1/2 -translate-y-1/2 text-[#4a4a4a] hover:text-[#0066b3] transition"
              >
                <ChevronLeft size={28} className="xs:w-[30px] xs:h-[30px] sm:w-[32px] sm:h-[32px]" strokeWidth={1.2} />
              </button>
              <button
                onClick={nextSlide}
                className="md:hidden absolute right-0 top-1/2 -translate-y-1/2 text-[#4a4a4a] hover:text-[#0066b3] transition"
              >
                <ChevronRight size={28} className="xs:w-[30px] xs:h-[30px] sm:w-[32px] sm:h-[32px]" strokeWidth={1.2} />
              </button>

              {/* DOTS INDICATOR */}
              <div className="flex justify-center gap-1.5 xs:gap-2 sm:gap-2 md:gap-2 lg:gap-2 mt-4 xs:mt-5 sm:mt-5 md:mt-6 lg:mt-6">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setIndex(i)}
                    className={`rounded-full transition-all ${
                      i === index 
                        ? 'bg-[#0066b3] w-4 xs:w-5 sm:w-6 md:w-6 lg:w-6 h-1.5 xs:h-1.5 sm:h-2 md:h-2 lg:h-2' 
                        : 'bg-[#9e9e9e] hover:bg-[#0066b3] w-1.5 xs:w-1.5 sm:w-2 md:w-2 lg:w-2 h-1.5 xs:h-1.5 sm:h-2 md:h-2 lg:h-2'
                    }`}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}