"use client";

import { useEffect, useRef, useState } from "react";
import MorphSlider from "./MorphSlider";

/*
  ============================================================
  GALLERY IMAGES

  IMPORTANT:

  Replace these paths later with your actual wedding photos.

  Recommended structure:

  public/
  └── images/
      └── gallery/
          ├── photo-1.jpg
          ├── photo-2.jpg
          ├── photo-3.jpg
          ├── photo-4.jpg
          ├── photo-5.jpg
          └── photo-6.jpg
  ============================================================
*/

const items = [
  {
    image: "/images/gallery/photo-1.jpg",
    caption: "Where it all began",
  },
  {
    image: "/images/gallery/photo-2.jpg",
    caption: "Moments we treasure",
  },
  {
    image: "/images/gallery/photo-3.jpg",
    caption: "Two hearts, one journey",
  },
  {
    image: "/images/gallery/photo-4.jpg",
    caption: "A little bit of forever",
  },
  {
    image: "/images/gallery/photo-5.jpg",
    caption: "Side by side",
  },
  {
    image: "/images/gallery/photo-6.jpg",
    caption: "Our beautiful beginning",
  },
  {
    image: "/images/gallery/photo-7.jpg",
    caption: "Love in its purest form",
  },
];

export default function GallerySection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      {
        threshold: 0.12,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-[#070408] text-white"
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0">
        {/* Main radial glow */}

        <div
          className="absolute left-1/2 top-[42%] -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            width: "min(1100px, 130vw)",
            height: "min(900px, 110vw)",
            background:
              "radial-gradient(circle, rgba(112,55,28,0.14) 0%, rgba(66,29,23,0.06) 35%, transparent 70%)",
            filter: "blur(70px)",
          }}
        />

        {/* Top fade */}

        <div
          className="absolute inset-x-0 top-0 h-[30%]"
          style={{
            background:
              "linear-gradient(to bottom, #070408 0%, transparent 100%)",
          }}
        />

        {/* Bottom fade */}

        <div
          className="absolute inset-x-0 bottom-0 h-[30%]"
          style={{
            background:
              "linear-gradient(to top, #070408 0%, transparent 100%)",
          }}
        />
      </div>

      {/* =====================================================
          STARS
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0">
        {Array.from({ length: 75 }).map((_, index) => {
          const left = (index * 43) % 100;
          const top = (index * 71) % 100;

          return (
            <span
              key={index}
              className="absolute rounded-full bg-white"
              style={{
                left: `${left}%`,
                top: `${top}%`,
                width: index % 10 === 0 ? "2px" : "1px",
                height: index % 10 === 0 ? "2px" : "1px",
                opacity: 0.08 + ((index * 17) % 35) / 100,
              }}
            />
          );
        })}
      </div>

      {/* =====================================================
          FLOATING LANTERNS
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0">
        {/* Left lantern */}

        <div
          className="absolute left-[3%] top-[12%]"
          style={{
            width: "clamp(55px, 7vw, 90px)",
            animation: "galleryLanternOne 7s ease-in-out infinite",
          }}
        >
          <div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
            style={{
              width: "120%",
              height: "120%",
              background: "rgba(255,150,55,0.20)",
              filter: "blur(25px)",
            }}
          />

          <img
            src="/images/lantern.png"
            alt=""
            draggable={false}
            className="relative z-10 h-auto w-full object-contain"
            style={{
              filter:
                "drop-shadow(0 0 18px rgba(255,145,45,0.50))",
            }}
          />
        </div>

        {/* Right lantern */}

        <div
          className="absolute right-[4%] top-[58%]"
          style={{
            width: "clamp(45px, 6vw, 78px)",
            animation: "galleryLanternTwo 8s ease-in-out infinite",
          }}
        >
          <div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
            style={{
              width: "125%",
              height: "125%",
              background: "rgba(255,150,55,0.18)",
              filter: "blur(22px)",
            }}
          />

          <img
            src="/images/lantern.png"
            alt=""
            draggable={false}
            className="relative z-10 h-auto w-full object-contain"
            style={{
              filter:
                "drop-shadow(0 0 17px rgba(255,145,45,0.48))",
            }}
          />
        </div>

        {/* Small upper-right lantern */}

        <div
          className="absolute right-[17%] top-[14%]"
          style={{
            width: "clamp(28px, 3vw, 46px)",
            opacity: 0.8,
            animation: "galleryLanternThree 6s ease-in-out infinite",
          }}
        >
          <img
            src="/images/lantern.png"
            alt=""
            draggable={false}
            className="h-auto w-full object-contain"
            style={{
              filter:
                "drop-shadow(0 0 12px rgba(255,145,45,0.45))",
            }}
          />
        </div>
      </div>

      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}

      <div className="relative z-10 px-5 py-28 sm:px-8 sm:py-36 md:px-12 lg:px-16 lg:py-44">
        <div className="mx-auto w-full max-w-7xl">
          {/* =================================================
              SECTION INTRO
          ================================================== */}

          <div
            className="mb-14 text-center sm:mb-16 md:mb-20"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible
                ? "translateY(0px)"
                : "translateY(35px)",
              transition:
                "opacity 1s ease, transform 1s cubic-bezier(0.22, 1, 0.36, 1)",
            }}
          >
            <p
              style={{
                fontFamily: "Georgia, Times New Roman, serif",
                fontSize: "clamp(10px, 0.85vw, 13px)",
                letterSpacing: "0.32em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.44)",
                margin: 0,
              }}
            >
              A collection of moments
            </p>

            <h2
              className="mt-5"
              style={{
                fontFamily: "Georgia, Times New Roman, serif",
                fontSize: "clamp(2.6rem, 6vw, 6rem)",
                fontWeight: 400,
                lineHeight: 0.95,
                letterSpacing: "-0.045em",
                color: "rgba(255,255,255,0.94)",
                marginBottom: 0,
              }}
            >
              Our moments
            </h2>

            <p
              className="mx-auto mt-6 max-w-lg"
              style={{
                fontFamily: "Georgia, Times New Roman, serif",
                fontSize: "clamp(12px, 1vw, 15px)",
                lineHeight: 1.9,
                letterSpacing: "0.04em",
                color: "rgba(255,255,255,0.43)",
                marginBottom: 0,
              }}
            >
              Little memories, quiet smiles, and moments that
              brought two lives together.
            </p>

            {/* Decorative line */}

            <div className="mt-9 flex items-center justify-center gap-4">
              <span
                className="h-px"
                style={{
                  width: "clamp(35px, 7vw, 80px)",
                  background:
                    "linear-gradient(to right, transparent, rgba(255,190,120,0.45))",
                }}
              />

              <span
                style={{
                  width: "5px",
                  height: "5px",
                  borderRadius: "50%",
                  background: "rgba(255,190,120,0.72)",
                  boxShadow:
                    "0 0 13px rgba(255,160,60,0.75)",
                }}
              />

              <span
                className="h-px"
                style={{
                  width: "clamp(35px, 7vw, 80px)",
                  background:
                    "linear-gradient(to left, transparent, rgba(255,190,120,0.45))",
                }}
              />
            </div>
          </div>

          {/* =================================================
              MORPH SLIDER
          ================================================== */}

          <div
            className="relative mx-auto w-full"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible
                ? "translateY(0px) scale(1)"
                : "translateY(45px) scale(0.98)",
              transition:
                "opacity 1.3s ease 0.15s, transform 1.3s cubic-bezier(0.22, 1, 0.36, 1) 0.15s",
            }}
          >
            {/* Slider frame */}

            <div
              className="relative w-full overflow-hidden"
              style={{
                height: "clamp(380px, 58vw, 650px)",
                borderRadius: "16px",
              }}
            >
              {/* Ambient glow behind slider */}

              <div
                className="pointer-events-none absolute left-1/2 top-1/2 z-0 -translate-x-1/2 -translate-y-1/2"
                style={{
                  width: "85%",
                  height: "85%",
                  background:
                    "radial-gradient(ellipse, rgba(255,150,55,0.13), transparent 70%)",
                  filter: "blur(55px)",
                }}
              />

              {/* Morph Slider */}

              <div className="relative z-10 h-full w-full">
                <MorphSlider
                  items={items}
                  transition="melt"
                  intensity={0.55}
                  aberration={0.35}
                  drift={0.4}
                  autoplay={false}
                  overlayColor="#05060a"
                  duration={1.1}
                  ease="power2.inOut"
                  scale={2.4}
                  autoplayDelay={4}
                  loop
                  radius={16}
                  showCaptions
                  showControls
                  showIndicators
                />
              </div>
            </div>
          </div>

          {/* =================================================
              GALLERY FOOTER
          ================================================== */}

          <div
            className="mt-12 flex flex-col items-center justify-center"
            style={{
              opacity: visible ? 1 : 0,
              transition: "opacity 1.2s ease 0.5s",
            }}
          >
            <span
              style={{
                fontFamily: "Georgia, Times New Roman, serif",
                fontSize: "10px",
                letterSpacing: "0.24em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.32)",
              }}
            >
              More memories to come
            </span>

            <div className="mt-5 flex items-center gap-3">
              <span
                style={{
                  width: "4px",
                  height: "4px",
                  borderRadius: "50%",
                  background: "rgba(255,190,120,0.52)",
                }}
              />

              <span
                style={{
                  width: "4px",
                  height: "4px",
                  borderRadius: "50%",
                  background: "rgba(255,190,120,0.30)",
                }}
              />

              <span
                style={{
                  width: "4px",
                  height: "4px",
                  borderRadius: "50%",
                  background: "rgba(255,190,120,0.18)",
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          BOTTOM ATMOSPHERIC FADE
      ====================================================== */}

      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 z-20"
        style={{
          height: "180px",
          background:
            "linear-gradient(to top, #070408 0%, rgba(7,4,8,0.5) 40%, transparent 100%)",
        }}
      />

      {/* =====================================================
          ANIMATIONS
      ====================================================== */}

      <style>{`
        @keyframes galleryLanternOne {
          0%,
          100% {
            transform: translate3d(0, 0, 0) rotate(-3deg);
          }

          50% {
            transform: translate3d(8px, -18px, 0) rotate(3deg);
          }
        }

        @keyframes galleryLanternTwo {
          0%,
          100% {
            transform: translate3d(0, 0, 0) rotate(2deg);
          }

          50% {
            transform: translate3d(-8px, -15px, 0) rotate(-3deg);
          }
        }

        @keyframes galleryLanternThree {
          0%,
          100% {
            transform: translate3d(0, 0, 0);
          }

          50% {
            transform: translate3d(-5px, -10px, 0);
          }
        }

        @media (max-width: 767px) {
          @keyframes galleryLanternOne {
            0%,
            100% {
              transform: translate3d(0, 0, 0) rotate(-2deg);
            }

            50% {
              transform: translate3d(5px, -12px, 0) rotate(2deg);
            }
          }

          @keyframes galleryLanternTwo {
            0%,
            100% {
              transform: translate3d(0, 0, 0) rotate(2deg);
            }

            50% {
              transform: translate3d(-5px, -10px, 0) rotate(-2deg);
            }
          }

          @keyframes galleryLanternThree {
            0%,
            100% {
              transform: translate3d(0, 0, 0);
            }

            50% {
              transform: translate3d(-3px, -7px, 0);
            }
          }
        }

        @media (prefers-reduced-motion: reduce) {
          * {
            animation: none !important;
            transition: none !important;
          }
        }
      `}</style>
    </section>
  );
}