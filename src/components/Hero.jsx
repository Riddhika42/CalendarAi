export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-6 text-center pt-20">
      {/* Badge */}

      <div className="inline-flex items-center gap-3 px-7 py-3 rounded-full border border-cyan-500/25 bg-cyan-500/10">
        <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>

        <span className="text-cyan-400 text-xl">
          Powered by Gemini AI
        </span>
      </div>

      {/* Heading */}

      <h1 className="max-w-5xl mx-auto mt-12 text-[76px] font-bold leading-[1.05] tracking-tight">
        <span className="text-slate-200">
          Your Calendar That
        </span>

        <br />

        <span className="bg-gradient-to-r from-cyan-400 to-teal-500 bg-clip-text text-transparent">
          Thinks Ahead
        </span>

        <span className="text-slate-200">
          {" "}of You
        </span>
      </h1>

      {/* Description */}

      <p className="max-w-4xl mx-auto mt-10 text-[22px] leading-[1.8] text-slate-400">
        ChronoAI automatically schedules your tasks,
        detects long weekends, summarizes meetings,
        and manages your time — all through a single
        conversation.
      </p>

      {/* Buttons */}

      <div className="flex flex-col md:flex-row justify-center gap-6 mt-16">
        <button className="glow-btn px-14 py-5 rounded-2xl bg-gradient-to-r from-cyan-400 to-teal-500 text-white font-semibold text-2xl">
          Start for Free — No Card Needed
        </button>

        <button className="px-14 py-5 rounded-2xl border border-cyan-800 text-white text-2xl hover:bg-cyan-950/20 transition">
          View Demo Dashboard →
        </button>
      </div>
    </section>
  );
}