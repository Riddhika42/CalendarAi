import { motion } from "framer-motion";

export default function LoginPage() {
  return (
    <div className="flex justify-center pt-10 pb-40">

      <motion.div
        initial={{
          opacity: 0,
          scale: 0.95,
          y: 30,
        }}
        animate={{
          opacity: 1,
          scale: 1,
          y: 0,
        }}
        transition={{
          duration: 0.4,
        }}
        className="
        w-[550px]
        bg-[#111f4b]
        rounded-[28px]
        border
        border-[#24386c]
        px-12
        py-14
      "
      >
        <div className="text-center">

          <h3 className="font-bold text-white text-4xl">
            ⏱ calendarAI
          </h3>

          <h1 className="mt-10 text-6xl font-bold text-white">
            Welcome back
          </h1>

          <p className="text-slate-400 mt-5 text-xl">
            Don't have an account?{" "}
            <span className="text-cyan-400">
              Sign up free
            </span>
          </p>

        </div>

        {/* EMAIL */}

        <div className="mt-16">

          <label className="block text-slate-400 text-lg mb-3">
            EMAIL ADDRESS
          </label>

          <input
            autoFocus
            type="email"
            defaultValue="arjun.sharma@gmail.com"
            className="
            w-full
            h-16
            bg-[#13234f]
            border
            border-[#20376b]
            rounded-2xl
            px-6
            text-white
            text-xl
            outline-none
            focus:border-cyan-400
          "
          />

        </div>

        {/* PASSWORD */}

        <div className="mt-8">

          <label className="block text-slate-400 text-lg mb-3">
            PASSWORD
          </label>

          <input
            type="password"
            defaultValue="password123"
            className="
            w-full
            h-16
            bg-[#13234f]
            border
            border-[#20376b]
            rounded-2xl
            px-6
            text-white
            text-xl
            outline-none
            focus:border-cyan-400
          "
          />

          <div className="flex justify-end mt-4">
            <button className="text-cyan-400 text-lg">
              Forgot password?
            </button>
          </div>

        </div>

        {/* CHECKBOX */}

        <div className="mt-8 flex items-center gap-3">

          <input
            defaultChecked
            type="checkbox"
            className="w-5 h-5 accent-cyan-400"
          />

          <span className="text-slate-400 text-lg">
            Keep me signed in for 30 days
          </span>

        </div>

        {/* BUTTON */}

        <button
          className="
          mt-8
          w-full
          h-16
          rounded-2xl
          bg-gradient-to-r
          from-cyan-400
          to-teal-500
          text-white
          text-2xl
          font-semibold
          hover:scale-[1.02]
          transition
        "
        >
          Sign in to calendarAI
        </button>

        {/* DIVIDER */}

        <div className="flex items-center my-10">

          <div className="flex-1 h-px bg-[#263c70]" />

          <span className="px-6 text-slate-500">
            or continue with
          </span>

          <div className="flex-1 h-px bg-[#263c70]" />

        </div>

        {/* GOOGLE */}

        <button
  className="
    w-full
    h-14
    rounded-2xl
    border
    border-[#263c70]
    text-white
    text-xl
    flex
    items-center
    justify-center
    gap-3
    hover:bg-[#13234f]
    transition
  "
>
  <img
    src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
    alt="Google"
    className="w-6 h-6"
  />

  Continue with Google
</button>
      </motion.div>
    </div>
  );
}