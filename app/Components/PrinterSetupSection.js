"use client";

export default function PrinterSetupSection() {
  return (
    <section className="mb-32 py-20 h-[750px] mt-[-30px]">
      <div className="max-w-[1360px] mx-auto px-4">
        <div className="bg-gradient-to-br from-black via-gray-900 to-black rounded-4xl p-12 shadow-2xl border border-[var(--color-blue-500)] backdrop-blur-sm">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            {/* Left Text Section */}
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
                  <span className="text-lg font-medium text-gray-200 group-hover:text-white">Can't find  wireless printer on network</span>
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

              {/* CTA Button */}
              {/* <button className="bg-gradient-to-r from-[var(--color-blue-500)] to-[var(--color-blue-500)] hover:from-[var(--color-blue-600)] hover:to-[var(--color-blue-600)] text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                Start Live Chat Now
              </button> */}
            </div>

            {/* Right Image Section - Keeping original design */}
            <div className="flex-1">
              <div className="relative">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
                  <img 
                    src="https://cdn.pixabay.com/photo/2024/04/11/17/03/ai-generated-8690198_1280.png" 
                    alt="Professional IT Services" 
                    className="w-full h-auto" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                
                {/* Floating Stats Card */}
                {/* <div className="absolute -bottom-6 -right-6 bg-gray-900/95 backdrop-blur-sm rounded-2xl p-6 shadow-2xl border border-gray-700/20">
                  <div className="text-center">
                    <div className="text-2xl font-bold bg-gradient-to-r from-[var(--color-blue-500)] to-[var(--color-blue-500)] bg-clip-text text-transparent">
                      1000+
                    </div>
                    <div className="text-gray-400 text-sm font-semibold">Happy Customers</div>
                  </div>
                </div> */}

                {/* Decorative Elements */}
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