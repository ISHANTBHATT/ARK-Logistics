"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";

const stats = [
  {
    value: "348K",
    label: "Service Provided Monthly",
    countTo: 348,
  },
  {
    value: "499K",
    label: "Deliveries Completed",
    countTo: 499,
  },
  {
    value: "150+",
    label: "Global Partners",
    countTo: 150,
  },
  {
    value: "100%",
    label: "On-Time Delivery Rate",
    countTo: 100,
  },
];

function CountingNumber({ value, duration = 2000 }) {
  const [count, setCount] = useState(0);
  const countRef = useRef(count);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (hasAnimated) return;

    const steps = 60;
    const increment = value / steps;
    const stepDuration = duration / steps;
    let currentStep = 0;

    const interval = setInterval(() => {
      if (currentStep === steps) {
        setCount(value);
        setHasAnimated(true);
        clearInterval(interval);
        return;
      }

      countRef.current = Math.min(countRef.current + increment, value);
      setCount(Math.floor(countRef.current));
      currentStep++;
    }, stepDuration);

    return () => clearInterval(interval);
  }, [value, duration, hasAnimated]);

  return <>{count}</>;
}

export default function Stats() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <div
      ref={ref}
      className="w-full max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8"
    >
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="text-center"
            role="status"
            aria-label={`${stat.label}: ${stat.value}`}
          >
            <div className="text-4xl font-bold tracking-tight lg:text-5xl">
              {inView ? (
                <>
                  <CountingNumber value={stat.countTo} />
                  {stat.value.includes("K") && "K"}
                  {stat.value.includes("+") && "+"}
                  {stat.value.includes("%") && "%"}
                </>
              ) : (
                "0"
              )}
            </div>
            <p className="mt-3 text-base text-muted-foreground">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
