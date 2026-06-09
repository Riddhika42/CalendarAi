// src/components/Features.jsx

import FeatureCard from "./FeatureCard";
import { features } from "./featuresData";

export default function Features() {
  return (
    <section className="max-w-7xl mx-auto px-10 py-24">

      <h2
        className="
        text-center
        text-[72px]
        font-bold
        leading-[1.1]
        tracking-[-2px]
      "
      >
        Everything your calendar

        <span className="text-cyan-400">
          {" "}should've
        </span>

        <br />

        <span className="text-cyan-400">
          always done
        </span>
      </h2>

      <div className="mt-20 grid md:grid-cols-2 gap-8">

        {features.map((feature, index) => (
          <FeatureCard
            key={feature.title}
            {...feature}
            active={index === 0}
          />
        ))}

      </div>
    </section>
  );
}