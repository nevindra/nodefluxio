"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const videos = [
  {
    id: "statistics",
    src: "https://pub-a8dc42a652814c1f82b6763e8cbfb0ba.r2.dev/videos/Statistics.mp4",
    poster: "/dashboard/Statistic_FRA.webp",
  },
  {
    id: "stream-view",
    src: "https://pub-a8dc42a652814c1f82b6763e8cbfb0ba.r2.dev/videos/Stream%20View.mp4",
    poster: "/dashboard/Home.webp",
  },
  {
    id: "event-timeline",
    src: "https://pub-a8dc42a652814c1f82b6763e8cbfb0ba.r2.dev/videos/Event%20Timeline.mp4",
    poster: "/dashboard/Event_History.webp",
  },
];

export function LenzHeroVideos() {
  const containerRef = useRef<HTMLDivElement>(null);
  const screensRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const container = containerRef.current;
    const screens = screensRef.current.filter(Boolean);
    if (!container || screens.length === 0) return;

    // Initial entrance animation
    const entranceTl = gsap.timeline({ delay: 0.5 });

    // Set initial state
    gsap.set(screens, {
      x: 0,
      y: 50,
      rotateY: 0,
      rotateX: 10,
      scale: 0.8,
      opacity: 0,
    });

    // Entrance: Left screen
    entranceTl.to(
      screens[0],
      {
        x: "-45%",
        y: "8%",
        rotateY: 20,
        rotateX: 5,
        scale: 0.75,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
      },
      0
    );

    // Entrance: Center screen (bigger)
    entranceTl.to(
      screens[1],
      {
        x: 0,
        y: 0,
        rotateY: 0,
        rotateX: 5,
        scale: 1.05,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
      },
      0.1
    );

    // Entrance: Right screen
    entranceTl.to(
      screens[2],
      {
        x: "45%",
        y: "8%",
        rotateY: -20,
        rotateX: 5,
        scale: 0.75,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
      },
      0.2
    );

    // Scroll-based animation: spread out more as user scrolls
    const scrollTl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top 80%",
        end: "bottom 20%",
        scrub: 1,
      },
    });

    // Left screen moves more left on scroll
    scrollTl.to(
      screens[0],
      {
        x: "-55%",
        y: "12%",
        rotateY: 25,
        scale: 0.7,
      },
      0
    );

    // Center screen gets slightly smaller on scroll
    scrollTl.to(
      screens[1],
      {
        y: "-5%",
        rotateX: 8,
        scale: 1,
      },
      0
    );

    // Right screen moves more right on scroll
    scrollTl.to(
      screens[2],
      {
        x: "55%",
        y: "12%",
        rotateY: -25,
        scale: 0.7,
      },
      0
    );

    return () => {
      entranceTl.kill();
      scrollTl.kill();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[280px] sm:h-[350px] md:h-[420px] lg:h-[500px]"
      style={{ perspective: "1500px" }}
    >
      {videos.map((video, index) => (
        <div
          key={video.id}
          ref={(el) => {
            screensRef.current[index] = el;
          }}
          className="absolute top-1/2 left-1/2 w-[65%] sm:w-[55%] md:w-[45%] -translate-x-1/2 -translate-y-1/2"
          style={{
            transformStyle: "preserve-3d",
            zIndex: index === 1 ? 30 : 20 - index,
          }}
        >
          <div className="relative rounded-lg md:rounded-xl overflow-hidden shadow-2xl bg-neutral-900">
            {/* Browser header */}
            <div className="flex items-center gap-1.5 px-3 py-2 bg-neutral-800">
              <div className="w-2 h-2 rounded-full bg-red-500/80" />
              <div className="w-2 h-2 rounded-full bg-yellow-500/80" />
              <div className="w-2 h-2 rounded-full bg-green-500/80" />
            </div>
            {/* Video */}
            <div className="relative aspect-video">
              <video
                autoPlay
                muted
                loop
                playsInline
                poster={video.poster}
                className="w-full h-full object-cover"
              >
                <source src={video.src} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
