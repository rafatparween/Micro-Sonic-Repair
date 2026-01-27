"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

export default function PrinterSetupSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });

  const issues = [
    "Can't connect to wireless printer",
    "Can't find wireless printer on network",
    "Flashing blue light on the printer",
    "Error printing from wireless printer",
    "Error setting up the wireless printer",
  ];

  const handleMouseMove = (e) => {
    setMousePosition({
      x: (e.clientX / window.innerWidth) * 100,
      y: (e.clientY / window.innerHeight) * 100,
    });
  };

  return (
    <section
      ref={ref}
      onMouseMove={handleMouseMove}
      className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-slate-50 to-indigo-100"
    >
      {/* soft glow background */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: `radial-gradient(500px at ${mousePosition.x}% ${mousePosition.y}%, rgba(79,70,229,0.16), transparent 70%)`,
        }}
      />

      {/* ambient soft blobs */}
      <div className="pointer-events-none absolute -top-40 -left-32 h-80 w-80 rounded-full bg-indigo-300/25 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-40 -right-32 h-80 w-80 rounded-full bg-blue-300/25 blur-[120px]" />

      {/* subtle floating shapes */}
      <motion.div
        className="pointer-events-none absolute left-1/4 top-20 h-32 w-32 rounded-3xl bg-white/10 border border-white/40 backdrop-blur-2xl shadow-[0_18px_40px_rgba(15,23,42,0.16)]"
        initial={{ opacity: 0, y: 20, scale: 0.9 }}
        animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.2 }}
      />
      <motion.div
        className="pointer-events-none absolute right-10 bottom-24 h-20 w-20 rounded-full bg-gradient-to-br from-indigo-500/40 to-blue-500/30 blur-[6px]"
        initial={{ opacity: 0, y: 20, scale: 0.9 }}
        animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.3 }}
      />

      {/* MAIN CONTENT DIV WITH 1328px MAX WIDTH AND MARGIN AUTO */}
      <div 
        style={{ 
          maxWidth: "1328px", 
          margin: "auto" 
        }}
        className="relative px-4 py-20 sm:px-6 lg:px-8 lg:py-28"
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="bg-white/70 backdrop-blur-2xl border border-white/60 shadow-[0_32px_80px_rgba(15,23,42,0.18)] rounded-[32px] px-8 py-10 sm:px-12 sm:py-12 lg:px-16 lg:py-14"
        >
          <div className="flex flex-col items-center gap-14 lg:flex-row">
            {/* LEFT */}
            <div className="flex-1">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-white/60 px-4 py-1 text-xs font-medium uppercase tracking-[0.18em] text-indigo-700">
                <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-indigo-500 to-blue-500" />
                Diagnose and Solve
              </div>

              <h1 className="mb-5 text-balance text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl lg:text-5xl">
               Contact Support -{" "}
                <span className="bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
                 Chat Live or Call Us
                </span>
              </h1>

              <p className="mb-8 max-w-xl text-lg leading-relaxed text-slate-600">
                In this support hub, you'll find quick access to live assistance for Printer Setup
                </p>

              <div className="mb-8 flex flex-wrap items-center gap-4">
                <a
                  href="tel:+18444915152"
                  className="group inline-flex items-center justify-center rounded-2xl bg-slate-900 px-7 py-3.5 text-sm font-semibold tracking-tight text-white shadow-[0_18px_40px_rgba(15,23,42,0.35)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_24px_60px_rgba(15,23,42,0.45)]"
                >
                  Call Support: +1 (844) 491-5152
                  
                </a>

                <button
                  type="button"
                  className="inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-white/70 px-6 py-3 text-sm font-medium tracking-tight text-slate-900 shadow-sm backdrop-blur-md transition-all duration-200 hover:border-indigo-300 hover:shadow-[0_14px_30px-rgba(15,23,42,0.16)]"
                >
                  Chat with an Expert
                </button>
              </div>

              <div className="space-y-3">
                {issues.map((text, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -14 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{
                      duration: 0.45,
                      delay: 0.2 + i * 0.08,
                      ease: "easeOut",
                    }}
                    className="group flex items-center gap-3 rounded-2xl border border-slate-100 bg-white/70 px-4 py-3 text-sm shadow-sm backdrop-blur-md transition-all duration-200 hover:border-indigo-200 hover:shadow-[0_14px_35px_rgba(15,23,42,0.12)]"
                  >
                    <span className="h-2 w-2 rounded-full bg-gradient-to-r from-indigo-500 to-blue-500 transition-transform duration-200 group-hover:scale-110" />
                    <span className="font-medium text-slate-800">{text}</span>
                  </motion.div>
                ))}
              </div>

              <div className="mt-7 flex flex-wrap items-center gap-5 border-t border-slate-100 pt-5">
                
              </div>
            </div>

            {/* RIGHT – visual card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 18 }}
              animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ duration: 0.65, ease: "easeOut", delay: 0.1 }}
              className="flex-1 w-full max-w-md lg:max-w-lg"
            >
              <div className="relative rounded-[30px] border border-white/60 bg-white/60 p-4 shadow-[0_26px_70px_rgba(15,23,42,0.24)] backdrop-blur-2xl">
                {/* glow ring */}
                <div className="pointer-events-none absolute -inset-px rounded-[32px] bg-gradient-to-r from-indigo-500/35 via-blue-500/25 to-indigo-500/35 opacity-60 blur-[22px]" />

                <div className="relative overflow-hidden rounded-[24px] bg-slate-950/5">
                  <motion.img
                    src="https://cdn.pixabay.com/photo/2024/04/11/17/03/ai-generated-8690198_1280.png"
                    alt="Printer Support"
                    className="h-full w-full object-cover"
                    whileHover={{ scale: 1.04 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/20 via-slate-900/0 to-slate-900/0" />

                  {/* mini status panel */}
                  <div className="pointer-events-none absolute left-5 top-5 flex items-center gap-2 rounded-2xl bg-slate-900/70 px-3 py-1.5 text-[11px] font-medium text-slate-100 backdrop-blur-md">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    Printer connected securely
                  </div>

                  
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}