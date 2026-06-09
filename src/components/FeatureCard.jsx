// src/components/FeatureCard.jsx

export default function FeatureCard({
  icon,
  title,
  description,
  active,
}) {
  return (
    <div
      className={`
      rounded-[26px]
      p-10
      bg-[#101f4a]
      border
      transition-all
      duration-300

      ${
        active
          ? "border-cyan-400 shadow-[0_0_25px_rgba(0,255,220,.15)]"
          : "border-[#22356c]"
      }
    `}
    >
      <div
        className="
        w-16
        h-16
        rounded-2xl
        bg-[#18355f]
        flex
        items-center
        justify-center
        text-3xl
      "
      >
        {icon}
      </div>

      <h3 className="mt-8 text-white font-bold text-[22px] leading-tight">
        {title}
      </h3>

      <p className="mt-6 text-[#9CB0DA] text-[18px] leading-[1.8]">
        {description}
      </p>
    </div>
  );
}