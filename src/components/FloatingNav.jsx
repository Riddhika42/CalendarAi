import {
  Home,
  User,
  UserPlus,
  LayoutDashboard
} from "lucide-react";

export default function FloatingNav() {
  return (
    <div className="fixed bottom-7 left-1/2 -translate-x-1/2 z-50">
      <div className="glass bg-[#18254a]/90 border border-indigo-500/20 rounded-full p-3 shadow-2xl">
        <div className="flex items-center gap-8">
          <button className="bg-gradient-to-r from-cyan-400 to-teal-500 rounded-full px-8 py-3 flex items-center gap-2 text-white font-semibold">
            <Home size={18} />
            Home
          </button>

          <button className="text-slate-400 flex flex-col items-center">
            <User size={20} />
            <span className="text-sm mt-1">
              Sign In
            </span>
          </button>

          <button className="text-slate-400 flex flex-col items-center">
            <UserPlus size={20} />
            <span className="text-sm mt-1">
              Sign Up
            </span>
          </button>

          <button className="text-slate-400 flex flex-col items-center">
            <LayoutDashboard size={20} />
            <span className="text-sm mt-1">
              Dashboard
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}