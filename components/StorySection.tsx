"use client";

import { useEffect, useRef, useState } from "react";

export default function StorySection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const height = sectionRef.current.offsetHeight;
      const viewport = window.innerHeight;

      const raw =
        (viewport - rect.top) / (height + viewport);

      const value = Math.max(
        0,
        Math.min(1, raw)
      );

      setProgress(value);
    };

    handleScroll();

    window.addEventListener(
      "scroll",
      handleScroll,
      { passive: true }
    );

    window.addEventListener(
      "resize",
      handleScroll
    );

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );

      window.removeEventListener(
        "resize",
        handleScroll
      );
    };
  }, []);

  const introOpacity = Math.min(
    1,
    progress * 3
  );

  const vigneshProgress = Math.max(
    0,
    Math.min(
      1,
      (progress - 0.08) * 2.4
    )
  );

  const shobannaProgress = Math.max(
    0,
    Math.min(
      1,
      (progress - 0.28) * 2.2
    )
  );

  const endingProgress = Math.max(
    0,
    Math.min(
      1,
      (progress - 0.58) * 2.2
    )
  );

  return (
    <section
      ref={sectionRef}
      id="story-section"
      className="relative w-full overflow-hidden bg-[#070407] text-white"
      style={{
        minHeight: "185svh",
      }}
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0">
        {/* Main warm atmosphere */}

        <div
          className="absolute left-1/2 top-[35%] -translate-x-1/2 rounded-full"
          style={{
            width: "min(1000px, 120vw)",
            height: "min(1000px, 120vw)",
            background:
              "radial-gradient(circle, rgba(129,58,27,0.13) 0%, rgba(83,35,25,0.05) 35%, transparent 70%)",
            filter: "blur(70px)",
          }}
        />

        {/* Moving warm light */}

        <div
          className="absolute rounded-full"
          style={{
            width: "clamp(220px, 35vw, 500px)",
            height: "clamp(220px, 35vw, 500px)",
            left: `${18 + progress * 62}%`,
            top: `${28 + progress * 24}%`,
            transform: "translate(-50%, -50%)",
            background:
              "radial-gradient(circle, rgba(255,145,60,0.08), transparent 68%)",
            filter: "blur(45px)",
            transition:
              "left 0.15s linear, top 0.15s linear",
          }}
        />

        {/* Top fade */}

        <div
          className="absolute inset-x-0 top-0 h-[28%]"
          style={{
            background:
              "linear-gradient(to bottom, #070407, transparent)",
          }}
        />

        {/* Bottom fade */}

        <div
          className="absolute inset-x-0 bottom-0 h-[30%]"
          style={{
            background:
              "linear-gradient(to top, #070407, transparent)",
          }}
        />

        {/* Film grain */}

        <div
          className="absolute inset-0 opacity-[0.045]"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.55'/%3E%3C/svg%3E\")",
          }}
        />
      </div>

      {/* =====================================================
          STARS
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0">
        {Array.from({ length: 90 }).map(
          (_, index) => {
            const left =
              (index * 47.3) % 100;

            const top =
              (index * 71.7) % 100;

            const size =
              index % 17 === 0
                ? 2
                : 1;

            return (
              <span
                key={index}
                className="absolute rounded-full bg-white"
                style={{
                  left: `${left}%`,
                  top: `${top}%`,
                  width: `${size}px`,
                  height: `${size}px`,
                  opacity:
                    0.05 +
                    ((index * 13) % 25) /
                      100,
                }}
              />
            );
          }
        )}
      </div>

      {/* =====================================================
          STICKY EXPERIENCE
      ====================================================== */}

      <div className="sticky top-0 flex min-h-[100svh] items-center">
        <div className="relative mx-auto w-full max-w-7xl px-5 py-20 sm:px-8 md:px-12 lg:px-16">

          {/* =================================================
              INTRO
          ================================================== */}

          <div
            className="mb-14 text-center sm:mb-16 lg:mb-20"
            style={{
              opacity: introOpacity,
              transform: `translateY(${
                (1 - introOpacity) * 35
              }px)`,
              transition:
                "opacity 0.8s ease, transform 0.8s cubic-bezier(0.22,1,0.36,1)",
            }}
          >
            <div className="mb-5 flex items-center justify-center gap-3">
              <span
                className="h-px"
                style={{
                  width: "38px",
                  background:
                    "linear-gradient(to right, transparent, rgba(255,190,120,0.5))",
                }}
              />

              <span
                style={{
                  width: "4px",
                  height: "4px",
                  borderRadius: "50%",
                  background:
                    "rgba(255,190,120,0.8)",
                  boxShadow:
                    "0 0 15px rgba(255,150,50,0.8)",
                }}
              />

              <span
                className="h-px"
                style={{
                  width: "38px",
                  background:
                    "linear-gradient(to left, transparent, rgba(255,190,120,0.5))",
                }}
              />
            </div>

            <p
              style={{
                margin: 0,
                fontFamily:
                  "Georgia, Times New Roman, serif",
                fontSize:
                  "clamp(10px, 0.8vw, 13px)",
                letterSpacing: "0.3em",
                color:
                  "rgba(255,255,255,0.42)",
                textTransform: "uppercase",
              }}
            >
              The story behind the light
            </p>

            <h2
              className="mx-auto mt-5 max-w-3xl"
              style={{
                marginBottom: 0,
                fontFamily:
                  "Georgia, Times New Roman, serif",
                fontSize:
                  "clamp(2.4rem, 5.5vw, 6rem)",
                fontWeight: 400,
                lineHeight: 0.95,
                letterSpacing: "-0.055em",
              }}
            >
              Two paths.
              <br />
              <span
                style={{
                  color:
                    "rgba(255,190,120,0.72)",
                }}
              >
                One light.
              </span>
            </h2>
          </div>

          {/* =================================================
              STORY CANVAS
          ================================================== */}

          <div className="relative mx-auto max-w-6xl">

            {/* Central vertical light path */}

            <div
              className="pointer-events-none absolute left-1/2 top-0 hidden h-full -translate-x-1/2 md:block"
            >
              <div
                className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2"
                style={{
                  background:
                    "linear-gradient(to bottom, transparent 0%, rgba(255,180,100,0.18) 12%, rgba(255,180,100,0.42) 50%, rgba(255,180,100,0.16) 85%, transparent 100%)",
                }}
              />

              <div
                className="absolute left-1/2 -translate-x-1/2 rounded-full"
                style={{
                  top: `${Math.min(
                    92,
                    progress * 150
                  )}%`,
                  width: "9px",
                  height: "9px",
                  background:
                    "rgba(255,200,130,0.95)",
                  boxShadow:
                    "0 0 20px rgba(255,160,65,0.9), 0 0 55px rgba(255,120,40,0.45)",
                }}
              />
            </div>

            {/* =================================================
                VIGNESH CARD
            ================================================== */}

            <article
              className="relative md:mr-[12%] md:w-[52%]"
              style={{
                opacity: vigneshProgress,
                transform: `translateX(${
                  (1 - vigneshProgress) * -70
                }px)`,
                transition:
                  "opacity 0.9s ease, transform 0.9s cubic-bezier(0.22,1,0.36,1)",
              }}
            >
              <div
                className="relative overflow-hidden rounded-[28px] border border-white/[0.08] px-6 py-8 sm:px-9 sm:py-10 md:px-11 md:py-12"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(255,255,255,0.055), rgba(255,255,255,0.012))",
                  boxShadow:
                    "0 30px 100px rgba(0,0,0,0.30)",
                  backdropFilter:
                    "blur(18px)",
                }}
              >
                {/* Card glow */}

                <div
                  className="pointer-events-none absolute -right-24 -top-24 rounded-full"
                  style={{
                    width: "240px",
                    height: "240px",
                    background:
                      "radial-gradient(circle, rgba(255,150,60,0.11), transparent 70%)",
                    filter: "blur(20px)",
                  }}
                />

                {/* Number */}

                <div className="relative flex items-start justify-between">
                  <span
                    style={{
                      fontFamily:
                        "Georgia, Times New Roman, serif",
                      fontSize:
                        "clamp(4rem, 8vw, 8rem)",
                      lineHeight: 0.7,
                      color:
                        "rgba(255,255,255,0.055)",
                      letterSpacing:
                        "-0.08em",
                    }}
                  >
                    01
                  </span>

                  <span
                    className="mt-2 rounded-full border border-white/[0.10] px-3 py-1"
                    style={{
                      fontFamily:
                        "Georgia, Times New Roman, serif",
                      fontSize: "8px",
                      letterSpacing: "0.2em",
                      color:
                        "rgba(255,190,120,0.65)",
                    }}
                  >
                    A BEGINNING
                  </span>
                </div>

                {/* Vignesh photo */}

                <div
                  className="relative mt-8 overflow-hidden rounded-2xl"
                  style={{
                    height:
                      "clamp(240px, 34vw, 390px)",
                    background:
                      "linear-gradient(145deg, rgba(105,48,25,0.34), rgba(24,12,13,0.82))",
                  }}
                >
                  <img
                    src="/images/vignesh.jpg"
                    alt="Vignesh"
                    className="absolute inset-0 h-full w-full object-cover"
                    style={{
                      objectPosition: "center 42%",
                    }}
                  />

                  <div
                    className="pointer-events-none absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(to bottom, rgba(7,4,7,0.04) 20%, rgba(7,4,7,0.18) 55%, rgba(7,4,7,0.72) 100%)",
                    }}
                  />

                  <div className="absolute bottom-5 left-5">
                    <span
                      style={{
                        fontFamily:
                          "Georgia, Times New Roman, serif",
                        fontSize: "9px",
                        letterSpacing:
                          "0.18em",
                        color:
                          "rgba(255,255,255,0.58)",
                      }}
                    >
                      BEFORE THE LIGHT
                    </span>
                  </div>
                </div>

                {/* Content */}

                <div className="relative mt-8">
                  <h3
                    style={{
                      margin: 0,
                      fontFamily:
                        "Vartensie, Georgia, serif",
                      fontSize:
                        "clamp(3.2rem, 6vw, 6rem)",
                      fontWeight: 400,
                      lineHeight: 0.9,
                      letterSpacing:
                        "-0.025em",
                      color:
                        "rgba(255,255,255,0.94)",
                    }}
                  >
                    Vignesh
                  </h3>

                  <p
                    className="mt-6 max-w-md"
                    style={{
                      marginBottom: 0,
                      fontFamily:
                        "Georgia, Times New Roman, serif",
                      fontSize:
                        "clamp(12px, 1vw, 15px)",
                      lineHeight: 1.9,
                      color:
                        "rgba(255,255,255,0.44)",
                    }}
                  >
                    One heart, one dream, and a
                    journey waiting for the right
                    person to walk beside him.
                  </p>
                </div>

                {/* Accent */}

                <div className="mt-8 flex items-center gap-3">
                  <span
                    className="h-px"
                    style={{
                      width: "55px",
                      background:
                        "rgba(255,190,120,0.35)",
                    }}
                  />

                  <span
                    style={{
                      fontFamily:
                        "Georgia, Times New Roman, serif",
                      fontSize: "8px",
                      letterSpacing:
                        "0.2em",
                      color:
                        "rgba(255,255,255,0.25)",
                    }}
                  >
                    CHAPTER ONE
                  </span>
                </div>
              </div>
            </article>

            {/* =================================================
                SHOBANNA CARD
            ================================================== */}

            <article
              className="relative mt-10 md:ml-[36%] md:mt-[-3%] md:w-[52%]"
              style={{
                opacity: shobannaProgress,
                transform: `translateX(${
                  (1 - shobannaProgress) * 70
                }px)`,
                transition:
                  "opacity 0.9s ease, transform 0.9s cubic-bezier(0.22,1,0.36,1)",
              }}
            >
              <div
                className="relative overflow-hidden rounded-[28px] border border-white/[0.08] px-6 py-8 sm:px-9 sm:py-10 md:px-11 md:py-12"
                style={{
                  background:
                    "linear-gradient(225deg, rgba(255,255,255,0.055), rgba(255,255,255,0.012))",
                  boxShadow:
                    "0 30px 100px rgba(0,0,0,0.30)",
                  backdropFilter:
                    "blur(18px)",
                }}
              >
                {/* Card glow */}

                <div
                  className="pointer-events-none absolute -left-24 -top-24 rounded-full"
                  style={{
                    width: "240px",
                    height: "240px",
                    background:
                      "radial-gradient(circle, rgba(255,150,60,0.12), transparent 70%)",
                    filter: "blur(20px)",
                  }}
                />

                {/* Number */}

                <div className="relative flex items-start justify-between">
                  <span
                    style={{
                      fontFamily:
                        "Georgia, Times New Roman, serif",
                      fontSize:
                        "clamp(4rem, 8vw, 8rem)",
                      lineHeight: 0.7,
                      color:
                        "rgba(255,255,255,0.055)",
                      letterSpacing:
                        "-0.08em",
                    }}
                  >
                    02
                  </span>

                  <span
                    className="mt-2 rounded-full border border-white/[0.10] px-3 py-1"
                    style={{
                      fontFamily:
                        "Georgia, Times New Roman, serif",
                      fontSize: "8px",
                      letterSpacing: "0.2em",
                      color:
                        "rgba(255,190,120,0.65)",
                    }}
                  >
                    THEN CAME HER
                  </span>
                </div>

                {/* Shobanna photo */}

                <div
                  className="relative mt-8 overflow-hidden rounded-2xl"
                  style={{
                    height:
                      "clamp(240px, 34vw, 390px)",
                    background:
                      "linear-gradient(145deg, rgba(111,51,30,0.38), rgba(25,12,14,0.84))",
                  }}
                >
                  <img
                    src="/images/shobanna.jpg"
                    alt="Shobanna"
                    className="absolute inset-0 h-full w-full object-cover"
                    style={{
                      objectPosition: "center 42%",
                    }}
                  />

                  <div
                    className="pointer-events-none absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(to bottom, rgba(7,4,7,0.04) 20%, rgba(7,4,7,0.18) 55%, rgba(7,4,7,0.72) 100%)",
                    }}
                  />

                  <div className="absolute bottom-5 left-5">
                    <span
                      style={{
                        fontFamily:
                          "Georgia, Times New Roman, serif",
                        fontSize: "9px",
                        letterSpacing:
                          "0.18em",
                        color:
                          "rgba(255,255,255,0.58)",
                      }}
                    >
                      AND THEN EVERYTHING CHANGED
                    </span>
                  </div>
                </div>

                {/* Content */}

                <div className="relative mt-8">
                  <h3
                    style={{
                      margin: 0,
                      fontFamily:
                        "Vartensie, Georgia, serif",
                      fontSize:
                        "clamp(3.2rem, 6vw, 6rem)",
                      fontWeight: 400,
                      lineHeight: 0.9,
                      letterSpacing:
                        "-0.025em",
                      color:
                        "rgba(255,255,255,0.94)",
                    }}
                  >
                    Shobanna
                  </h3>

                  <p
                    className="mt-6 max-w-md"
                    style={{
                      marginBottom: 0,
                      fontFamily:
                        "Georgia, Times New Roman, serif",
                      fontSize:
                        "clamp(12px, 1vw, 15px)",
                      lineHeight: 1.9,
                      color:
                        "rgba(255,255,255,0.44)",
                    }}
                  >
                    And suddenly, the journey had
                    another heartbeat, another smile,
                    and someone to share every
                    tomorrow with.
                  </p>
                </div>

                {/* Accent */}

                <div className="mt-8 flex items-center gap-3">
                  <span
                    className="h-px"
                    style={{
                      width: "55px",
                      background:
                        "rgba(255,190,120,0.35)",
                    }}
                  />

                  <span
                    style={{
                      fontFamily:
                        "Georgia, Times New Roman, serif",
                      fontSize: "8px",
                      letterSpacing:
                        "0.2em",
                      color:
                        "rgba(255,255,255,0.25)",
                    }}
                  >
                    CHAPTER TWO
                  </span>
                </div>
              </div>
            </article>

            {/* =================================================
                FINAL STATEMENT
            ================================================== */}

            <div
              className="relative mx-auto mt-16 max-w-3xl text-center sm:mt-20 md:mt-28"
              style={{
                opacity: endingProgress,
                transform: `translateY(${
                  (1 - endingProgress) * 35
                }px)`,
                transition:
                  "opacity 1s ease, transform 1s cubic-bezier(0.22,1,0.36,1)",
              }}
            >
              <div className="mb-7 flex items-center justify-center gap-4">
                <span
                  className="h-px"
                  style={{
                    width:
                      "clamp(35px, 7vw, 80px)",
                    background:
                      "linear-gradient(to right, transparent, rgba(255,190,120,0.45))",
                  }}
                />

                <div
                  className="relative flex h-11 w-11 items-center justify-center rounded-full"
                  style={{
                    border:
                      "1px solid rgba(255,190,120,0.22)",
                    boxShadow:
                      "0 0 35px rgba(255,150,60,0.12)",
                  }}
                >
                  <span
                    style={{
                      width: "5px",
                      height: "5px",
                      borderRadius: "50%",
                      background:
                        "rgba(255,205,140,0.95)",
                      boxShadow:
                        "0 0 18px rgba(255,160,60,0.95)",
                    }}
                  />
                </div>

                <span
                  className="h-px"
                  style={{
                    width:
                      "clamp(35px, 7vw, 80px)",
                    background:
                      "linear-gradient(to left, transparent, rgba(255,190,120,0.45))",
                  }}
                />
              </div>

              <p
                style={{
                  margin: 0,
                  fontFamily:
                    "Georgia, Times New Roman, serif",
                  fontSize:
                    "clamp(10px, 0.8vw, 13px)",
                  letterSpacing:
                    "0.28em",
                  color:
                    "rgba(255,255,255,0.36)",
                  textTransform: "uppercase",
                }}
              >
                And the light became brighter
              </p>

              <h3
                className="mt-5"
                style={{
                  marginBottom: 0,
                  fontFamily:
                    "Georgia, Times New Roman, serif",
                  fontSize:
                    "clamp(2rem, 4.5vw, 4.8rem)",
                  fontWeight: 400,
                  lineHeight: 1,
                  letterSpacing:
                    "-0.045em",
                }}
              >
                Two stories,
                <br />
                <span
                  style={{
                    color:
                      "rgba(255,190,120,0.75)",
                  }}
                >
                  finally becoming one.
                </span>
              </h3>
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          REDUCED MOTION
      ====================================================== */}

      <style>{`
        @media (prefers-reduced-motion: reduce) {
          * {
            scroll-behavior: auto !important;
            transition: none !important;
          }
        }
      `}</style>
    </section>
  );
}