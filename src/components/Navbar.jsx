export default function Navbar() {
  return (
    <nav className="border-b border-cyan-900/30">
      <div className="max-w-7xl mx-auto px-8 h-[88px] flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-11 h-11 rounded-xl bg-gradient-to-r from-cyan-400 to-teal-500 flex items-center justify-center">
            <span className="font-bold text-white">⌚</span>
          </div>

          <h1 className="text-[24px] font-bold">
            calendar <span className="text-cyan-400">AI</span>
          </h1>
        </div>

        <div className="hidden md:flex gap-14 text-slate-300 text-lg">
          <a href="#">Features</a>
          <a href="#">Pricing</a>
          <a href="#">About</a>
          <a href="#">Sign In</a>
        </div>

        <button className="bg-gradient-to-r from-cyan-400 to-teal-500 px-8 py-3 rounded-xl text-white font-semibold">
          Get Started Free
        </button>
      </div>
    </nav>
  );
}