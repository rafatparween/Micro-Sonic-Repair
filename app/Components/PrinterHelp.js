import Image from "next/image";

export default function PrinterHelp() {
  return (
    <section className="w-full bg-white min-h-[200px] md:min-h-[220px] lg:h-[245px] flex items-center py-8 md:py-10 lg:py-0">
      <div className="max-w-[1196px] mx-auto w-full px-4 md:px-6 lg:px-8">
        
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-6 md:gap-8 lg:gap-0">
          
          {/* LEFT TEXT */}
          <div className="max-w-full lg:max-w-[650px] text-center lg:text-left">
            <h1 className="text-[24px] md:text-[28px] lg:text-[32px] font-medium text-[#2a2a2a] leading-tight">
              We're here to help you set up your HP printer
            </h1>

            <p className="mt-3 text-[15px] md:text-[16px] lg:text-[16.5px] text-[#555] leading-relaxed">
              Let's connect your printer to a Wi-Fi or wired network or to a computer
              using a USB cable, but first, we need to know your printer model.
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex items-center justify-center lg:justify-end w-full lg:w-auto">
            <Image
              src="/printerhelp.avif"
              alt="HP Printer"
              width={520}
              height={220}
              className="object-contain w-[280px] md:w-[380px] lg:w-[480px] xl:w-[520px] h-auto"
              priority
            />
          </div>

        </div>
      </div>
    </section>
  );
}