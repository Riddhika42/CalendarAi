import {
  Home,
  User,
  UserPlus,
  LayoutDashboard,
} from "lucide-react";

export default function FloatingNav({
  activeTab,
  setActiveTab,
}) {
  return (
    <div className="fixed bottom-7 left-1/2 -translate-x-1/2 z-50">
      <div className="glass bg-[#18254a]/90 border border-indigo-500/20 rounded-full p-3 shadow-2xl">
        <div className="flex items-center gap-6">

          {/* HOME */}
          <button
            onClick={() => setActiveTab("home")}
            className={`flex items-center gap-2 px-8 py-3 rounded-full transition-all duration-300 ${
              activeTab === "home"
                ? "bg-gradient-to-r from-cyan-400 to-teal-500 text-white font-semibold"
                : "text-slate-400"
            }`}
          >
            <Home size={18} />
            Home
          </button>

          {/* SIGN IN */}
          <button
            onClick={() => setActiveTab("signin")}
            className={`flex flex-col items-center transition-all duration-300 ${
              activeTab === "signin"
                ? "text-cyan-400"
                : "text-slate-400"
            }`}
          >
            <User size={20} />
            <span className="text-sm mt-1">
              Sign In
            </span>
          </button>

          {/* SIGN UP */}
          <button
            onClick={() => setActiveTab("signup")}
            className={`flex flex-col items-center transition-all duration-300 ${
              activeTab === "signup"
                ? "text-cyan-400"
                : "text-slate-400"
            }`}
          >
            <UserPlus size={20} />
            <span className="text-sm mt-1">
              Sign Up
            </span>
          </button>

          {/* DASHBOARD */}
          <button
            onClick={() => setActiveTab("dashboard")}
            className={`flex flex-col items-center transition-all duration-300 ${
              activeTab === "dashboard"
                ? "text-cyan-400"
                : "text-slate-400"
            }`}
          >
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