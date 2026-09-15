"use client";

import { useEffect, useRef, useState } from "react";

export default function WeddingAndReceptionSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      {
        threshold: 0.08,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect =
        sectionRef.current.getBoundingClientRect();

      const height =
        sectionRef.current.offsetHeight;

      const viewport =
        window.innerHeight;

      const raw =
        (viewport - rect.top) /
        (height + viewport);

      setProgress(
        Math.max(0, Math.min(1, raw))
      );
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
      observer.disconnect();

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

  const weddingProgress = Math.max(
    0,
    Math.min(1, (progress - 0.03) * 2.5)
  );

  const receptionProgress = Math.max(
    0,
    Math.min(1, (progress - 0.24) * 2.4)
  );

  const endingProgress = Math.max(
    0,
    Math.min(1, (progress - 0.53) * 2.2)
  );

  return (
    <section
      ref={sectionRef}
      id="wedding-reception-section"
      className="relative w-full overflow-hidden bg-[#070407] text-white"
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0">
        {/* Main atmospheric glow */}

        <div
          className="absolute left-1/2 top-[45%] -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            width: "min(1100px, 125vw)",
            height: "min(900px, 110vw)",
            background:
              "radial-gradient(ellipse, rgba(128,58,28,0.13) 0%, rgba(76,31,23,0.06) 38%, transparent 72%)",
            filter: "blur(75px)",
          }}
        />

        {/* Moving warm atmosphere */}

        <div
          className="absolute rounded-full"
          style={{
            left: `${20 + progress * 55}%`,
            top: `${25 + progress * 35}%`,
            width:
              "clamp(220px, 30vw, 420px)",
            height:
              "clamp(220px, 30vw, 420px)",
            transform:
              "translate(-50%, -50%)",
            background:
              "radial-gradient(circle, rgba(255,145,55,0.08), transparent 70%)",
            filter: "blur(45px)",
          }}
        />

        {/* Fine horizontal light */}

        <div
          className="absolute left-0 right-0 top-1/2"
          style={{
            height: "1px",
            background:
              "linear-gradient(to right, transparent, rgba(255,190,120,0.07), transparent)",
          }}
        />

        {/* Top fade */}

        <div
          className="absolute inset-x-0 top-0 h-40"
          style={{
            background:
              "linear-gradient(to bottom, #070407, transparent)",
          }}
        />

        {/* Bottom fade */}

        <div
          className="absolute inset-x-0 bottom-0 h-48"
          style={{
            background:
              "linear-gradient(to top, #070407, transparent)",
          }}
        />

        {/* Grain */}

        <div
          className="absolute inset-0 opacity-[0.035]"
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
        {Array.from({ length: 85 }).map(
          (_, index) => {
            const left =
              (index * 43.7) % 100;

            const top =
              (index * 67.3) % 100;

            const size =
              index % 15 === 0 ? 2 : 1;

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
                    0.04 +
                    ((index * 17) % 28) /
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

      <div
        className="relative mx-auto flex w-full max-w-7xl flex-col px-5 pb-28 pt-24 sm:px-8 sm:pb-36 sm:pt-28 md:px-12 lg:px-16"
      >
        {/* =================================================
            INTRO
        ================================================== */}

        <div
          className="relative z-10 mx-auto max-w-3xl text-center"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible
              ? "translateY(0)"
              : "translateY(25px)",
            transition:
              "opacity 1s ease, transform 1s cubic-bezier(0.22,1,0.36,1)",
          }}
        >
          <div className="flex items-center justify-center gap-3">
            <span
              className="h-px"
              style={{
                width: "42px",
                background:
                  "linear-gradient(to right, transparent, rgba(255,190,120,0.45))",
              }}
            />

            <span
              style={{
                width: "5px",
                height: "5px",
                borderRadius: "50%",
                background:
                  "rgba(255,200,130,0.85)",
                boxShadow:
                  "0 0 16px rgba(255,155,55,0.8)",
              }}
            />

            <span
              className="h-px"
              style={{
                width: "42px",
                background:
                  "linear-gradient(to left, transparent, rgba(255,190,120,0.45))",
              }}
            />
          </div>

          <p
            className="mt-5"
            style={{
              marginBottom: 0,
              fontFamily:
                "Georgia, Times New Roman, serif",
              fontSize:
                "clamp(9px, 0.75vw, 12px)",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color:
                "rgba(255,255,255,0.38)",
            }}
          >
            Two moments · one celebration
          </p>

          <h2
            className="mt-5"
            style={{
              marginBottom: 0,
              fontFamily:
                "Georgia, Times New Roman, serif",
              fontSize:
                "clamp(2.5rem, 5.5vw, 6rem)",
              fontWeight: 400,
              lineHeight: 0.92,
              letterSpacing: "-0.06em",
            }}
          >
            Save the
            <br />
            <span
              style={{
                color:
                  "rgba(255,190,120,0.76)",
              }}
            >
              moments.
            </span>
          </h2>
        </div>

        {/* =================================================
            EVENTS CANVAS
        ================================================== */}

        <div className="relative mx-auto mt-16 w-full max-w-6xl sm:mt-20 md:mt-24">

          {/* =================================================
              CONNECTING LIGHT PATH
          ================================================== */}

          <div
            className="pointer-events-none absolute left-1/2 top-0 hidden h-full -translate-x-1/2 md:block"
          >
            <div
              className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2"
              style={{
                background:
                  "linear-gradient(to bottom, transparent, rgba(255,185,110,0.18) 12%, rgba(255,185,110,0.34) 50%, rgba(255,185,110,0.14) 88%, transparent)",
              }}
            />

            {/* Moving light */}

            <div
              className="absolute left-1/2 -translate-x-1/2 rounded-full"
              style={{
                top: `${12 + progress * 70}%`,
                width: "8px",
                height: "8px",
                background:
                  "rgba(255,205,140,0.95)",
                boxShadow:
                  "0 0 18px rgba(255,170,75,0.95), 0 0 50px rgba(255,130,40,0.45)",
                transition:
                  "top 0.15s linear",
              }}
            />
          </div>

          {/* =================================================
              WEDDING CARD
          ================================================== */}

          <article
            id="wedding-details"
            className="relative z-10 md:mr-[15%] md:w-[60%]"
            style={{
              opacity: weddingProgress,
              transform: `translateX(${
                (1 - weddingProgress) * -65
              }px)`,
              transition:
                "opacity 0.9s ease, transform 0.9s cubic-bezier(0.22,1,0.36,1)",
            }}
          >
            <div
              className="relative overflow-hidden rounded-[30px] border border-white/[0.08] p-6 sm:p-8 md:p-10"
              style={{
                background:
                  "linear-gradient(135deg, rgba(255,255,255,0.055), rgba(255,255,255,0.012))",
                boxShadow:
                  "0 35px 110px rgba(0,0,0,0.30)",
                backdropFilter:
                  "blur(18px)",
              }}
            >
              {/* Glow */}

              <div
                className="pointer-events-none absolute -right-24 -top-24 rounded-full"
                style={{
                  width: "280px",
                  height: "280px",
                  background:
                    "radial-gradient(circle, rgba(255,150,60,0.12), transparent 70%)",
                  filter: "blur(25px)",
                }}
              />

              {/* Header */}

              <div className="relative flex items-start justify-between gap-5">
                <div>
                  <span
                    style={{
                      fontFamily:
                        "Georgia, Times New Roman, serif",
                      fontSize: "8px",
                      letterSpacing:
                        "0.24em",
                      color:
                        "rgba(255,190,120,0.64)",
                    }}
                  >
                    THE WEDDING
                  </span>

                  <p
                    className="mt-3"
                    style={{
                      marginBottom: 0,
                      fontFamily:
                        "Georgia, Times New Roman, serif",
                      fontSize:
                        "clamp(10px, 0.85vw, 12px)",
                      letterSpacing:
                        "0.08em",
                      color:
                        "rgba(255,255,255,0.36)",
                    }}
                  >
                    A day illuminated by love
                  </p>
                </div>

                <span
                  style={{
                    fontFamily:
                      "Georgia, Times New Roman, serif",
                    fontSize:
                      "clamp(5rem, 10vw, 9rem)",
                    lineHeight: 0.7,
                    letterSpacing:
                      "-0.09em",
                    color:
                      "rgba(255,255,255,0.055)",
                  }}
                >
                  01
                </span>
              </div>

              {/* Date */}

              <div className="relative mt-12 sm:mt-14">
                <div
                  style={{
                    fontFamily:
                      "Georgia, Times New Roman, serif",
                    fontSize:
                      "clamp(6rem, 16vw, 13rem)",
                    fontWeight: 400,
                    lineHeight: 0.72,
                    letterSpacing:
                      "-0.09em",
                    color:
                      "rgba(255,255,255,0.94)",
                  }}
                >
                  13
                </div>

                <div
                  className="mt-6"
                  style={{
                    fontFamily:
                      "Georgia, Times New Roman, serif",
                    fontSize:
                      "clamp(1.1rem, 2.1vw, 2rem)",
                    letterSpacing:
                      "0.16em",
                    color:
                      "rgba(255,195,135,0.82)",
                  }}
                >
                  November 2026
                </div>
              </div>

              {/* Footer */}

              <div className="relative mt-10 flex flex-col gap-5 border-t border-white/[0.07] pt-6 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <span
                    style={{
                      fontFamily:
                        "Georgia, Times New Roman, serif",
                      fontSize: "8px",
                      letterSpacing:
                        "0.20em",
                      color:
                        "rgba(255,255,255,0.28)",
                      textTransform:
                        "uppercase",
                    }}
                  >
                    Where
                  </span>

                  <p
                    className="mt-2"
                    style={{
                      marginBottom: 0,
                      fontFamily:
                        "Georgia, Times New Roman, serif",
                      fontSize:
                        "clamp(1rem, 1.5vw, 1.35rem)",
                      color:
                        "rgba(255,255,255,0.76)",
                    }}
                  >
                    Chennai
                  </p>
                </div>

                <span
                  className="self-start rounded-full border border-white/[0.08] px-3 py-1.5 sm:self-auto"
                  style={{
                    fontFamily:
                      "Georgia, Times New Roman, serif",
                    fontSize: "8px",
                    letterSpacing:
                      "0.16em",
                    color:
                      "rgba(255,255,255,0.35)",
                  }}
                >
                  CEREMONY
                </span>
              </div>
            </div>
          </article>

          {/* =================================================
              CENTER MARK
          ================================================== */}

          <div
            className="relative z-20 my-10 flex items-center justify-center md:my-[-8px]"
            style={{
              opacity:
                receptionProgress > 0
                  ? 1
                  : 0,
              transform: `scale(${
                receptionProgress > 0
                  ? 1
                  : 0.7
              })`,
              transition:
                "opacity 0.7s ease, transform 0.7s ease",
            }}
          >
            <div
              className="flex items-center gap-3 rounded-full border border-white/[0.08] px-4 py-2"
              style={{
                background:
                  "rgba(10,5,7,0.65)",
                backdropFilter:
                  "blur(14px)",
                boxShadow:
                  "0 10px 40px rgba(0,0,0,0.3)",
              }}
            >
              <span
                style={{
                  fontFamily:
                    "Georgia, Times New Roman, serif",
                  fontSize: "8px",
                  letterSpacing:
                    "0.16em",
                  color:
                    "rgba(255,255,255,0.3)",
                }}
              >
                13
              </span>

              <span
                style={{
                  width: "5px",
                  height: "5px",
                  borderRadius: "50%",
                  background:
                    "rgba(255,190,120,0.85)",
                  boxShadow:
                    "0 0 12px rgba(255,150,55,0.75)",
                }}
              />

              <span
                style={{
                  fontFamily:
                    "Georgia, Times New Roman, serif",
                  fontSize: "8px",
                  letterSpacing:
                    "0.16em",
                  color:
                    "rgba(255,255,255,0.3)",
                }}
              >
                22
              </span>
            </div>
          </div>

          {/* =================================================
              RECEPTION CARD
          ================================================== */}

          <article
            id="reception-section"
            className="relative z-10 md:ml-[25%] md:mt-[-2%] md:w-[60%]"
            style={{
              opacity: receptionProgress,
              transform: `translateX(${
                (1 - receptionProgress) * 65
              }px)`,
              transition:
                "opacity 0.9s ease, transform 0.9s cubic-bezier(0.22,1,0.36,1)",
            }}
          >
            <div
              className="relative overflow-hidden rounded-[30px] border border-white/[0.08] p-6 sm:p-8 md:p-10"
              style={{
                background:
                  "linear-gradient(225deg, rgba(255,255,255,0.055), rgba(255,255,255,0.012))",
                boxShadow:
                  "0 35px 110px rgba(0,0,0,0.30)",
                backdropFilter:
                  "blur(18px)",
              }}
            >
              {/* Glow */}

              <div
                className="pointer-events-none absolute -left-24 -top-24 rounded-full"
                style={{
                  width: "280px",
                  height: "280px",
                  background:
                    "radial-gradient(circle, rgba(255,150,60,0.12), transparent 70%)",
                  filter: "blur(25px)",
                }}
              />

              {/* Header */}

              <div className="relative flex items-start justify-between gap-5">
                <div>
                  <span
                    style={{
                      fontFamily:
                        "Georgia, Times New Roman, serif",
                      fontSize: "8px",
                      letterSpacing:
                        "0.24em",
                      color:
                        "rgba(255,190,120,0.64)",
                    }}
                  >
                    THE RECEPTION
                  </span>

                  <p
                    className="mt-3"
                    style={{
                      marginBottom: 0,
                      fontFamily:
                        "Georgia, Times New Roman, serif",
                      fontSize:
                        "clamp(10px, 0.85vw, 12px)",
                      letterSpacing:
                        "0.08em",
                      color:
                        "rgba(255,255,255,0.36)",
                    }}
                  >
                    An evening of celebration
                  </p>
                </div>

                <span
                  style={{
                    fontFamily:
                      "Georgia, Times New Roman, serif",
                    fontSize:
                      "clamp(5rem, 10vw, 9rem)",
                    lineHeight: 0.7,
                    letterSpacing:
                      "-0.09em",
                    color:
                      "rgba(255,255,255,0.055)",
                  }}
                >
                  02
                </span>
              </div>

              {/* Date */}

              <div className="relative mt-12 sm:mt-14">
                <div
                  style={{
                    fontFamily:
                      "Georgia, Times New Roman, serif",
                    fontSize:
                      "clamp(6rem, 16vw, 13rem)",
                    fontWeight: 400,
                    lineHeight: 0.72,
                    letterSpacing:
                      "-0.09em",
                    color:
                      "rgba(255,255,255,0.94)",
                  }}
                >
                  22
                </div>

                <div
                  className="mt-6"
                  style={{
                    fontFamily:
                      "Georgia, Times New Roman, serif",
                    fontSize:
                      "clamp(1.1rem, 2.1vw, 2rem)",
                    letterSpacing:
                      "0.16em",
                    color:
                      "rgba(255,195,135,0.82)",
                  }}
                >
                  November 2026
                </div>
              </div>

              {/* Footer */}

              <div className="relative mt-10 flex flex-col gap-5 border-t border-white/[0.07] pt-6 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <span
                    style={{
                      fontFamily:
                        "Georgia, Times New Roman, serif",
                      fontSize: "8px",
                      letterSpacing:
                        "0.20em",
                      color:
                        "rgba(255,255,255,0.28)",
                      textTransform:
                        "uppercase",
                    }}
                  >
                    Where
                  </span>

                  <p
                    className="mt-2"
                    style={{
                      marginBottom: 0,
                      fontFamily:
                        "Georgia, Times New Roman, serif",
                      fontSize:
                        "clamp(1rem, 1.5vw, 1.35rem)",
                      color:
                        "rgba(255,255,255,0.76)",
                    }}
                  >
                    Bodinayakanur
                  </p>
                </div>

                <span
                  className="self-start rounded-full border border-white/[0.08] px-3 py-1.5 sm:self-auto"
                  style={{
                    fontFamily:
                      "Georgia, Times New Roman, serif",
                    fontSize: "8px",
                    letterSpacing:
                      "0.16em",
                    color:
                      "rgba(255,255,255,0.35)",
                  }}
                >
                  CELEBRATION
                </span>
              </div>
            </div>
          </article>

          {/* =================================================
              FINAL LINE
          ================================================== */}

          <div
            className="relative z-10 mx-auto mt-16 max-w-2xl text-center sm:mt-20 md:mt-24"
            style={{
              opacity: endingProgress,
              transform: `translateY(${
                (1 - endingProgress) * 25
              }px)`,
              transition:
                "opacity 1s ease, transform 1s cubic-bezier(0.22,1,0.36,1)",
            }}
          >
            <div className="flex items-center justify-center gap-4">
              <span
                className="h-px"
                style={{
                  width: "55px",
                  background:
                    "linear-gradient(to right, transparent, rgba(255,190,120,0.4))",
                }}
              />

              <span
                style={{
                  fontFamily:
                    "Georgia, Times New Roman, serif",
                  fontSize: "8px",
                  letterSpacing:
                    "0.25em",
                  color:
                    "rgba(255,255,255,0.32)",
                }}
              >
                V · S
              </span>

              <span
                className="h-px"
                style={{
                  width: "55px",
                  background:
                    "linear-gradient(to left, transparent, rgba(255,190,120,0.4))",
                }}
              />
            </div>

            <p
              className="mt-5"
              style={{
                marginBottom: 0,
                fontFamily:
                  "Georgia, Times New Roman, serif",
                fontSize:
                  "clamp(1.1rem, 2vw, 1.8rem)",
                fontStyle: "italic",
                color:
                  "rgba(255,255,255,0.48)",
              }}
            >
              two dates, one beginning.
            </p>
          </div>
        </div>
      </div>

      {/* =====================================================
          BOTTOM ATMOSPHERE
      ====================================================== */}

      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2"
        style={{
          width: "80vw",
          height: "240px",
          background:
            "radial-gradient(ellipse, rgba(135,62,28,0.09), transparent 70%)",
          filter: "blur(55px)",
        }}
      />

      {/* =====================================================
          REDUCED MOTION
      ====================================================== */}

      <style>{`
        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            animation: none !important;
            transition: none !important;
          }
        }
      `}</style>
    </section>
  );
}