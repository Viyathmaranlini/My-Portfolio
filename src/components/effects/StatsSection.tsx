"use client";

import AnimatedCounter from "./AnimatedCounter";

export default function StatsSection() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-16 px-6 max-w-4xl mx-auto">
      <AnimatedCounter end={10} suffix="+" label="Technologies" />
      <AnimatedCounter end={5} suffix="+" label="Projects" />
      <AnimatedCounter end={4} suffix="+" label="Certificates" />
      <AnimatedCounter end={2} suffix="+" label="Years Learning" />
    </div>
  );
}