import {
  Home,
  User,
  LayoutDashboard
} from "lucide-react";

export default function BottomNav() {
  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2">

      <div className="bg-indigo-950/90 backdrop-blur-xl border border-indigo-700/40 rounded-full px-3 py-2 flex items-center gap-5">

        <button className="bg-cyan-400 text-black px-8 py-3 rounded-full flex items-center gap-2">
          <Home size={18} />
          Home
        </button>

        <button className="text-slate-400 px-4">
          <User />
        </button>

        <button className="text-slate-400 px-4">
          Sign Up
        </button>

        <button className="text-slate-400 px-4">
          <LayoutDashboard />
        </button>

      </div>
    </div>
  );
}