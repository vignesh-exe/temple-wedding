"use client";

import { useEffect, useState } from "react";

export default function VenueSection() {
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

    const element = document.getElementById(
      "venue-section"
    );

    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const venues = [
    {
      number: "01",
      type: "The wedding",
      date: "13 november 2026",
      location: "Mayiliamman Temple, Urappakkam, Chennai",
      description:
        "Where our journey begins, surrounded by the warmth of family, friends, and the light of a new beginning.",
    },
    {
      number: "02",
      type: "The reception",
      date: "22 november 2026",
      location: "Senaithalaivar Suthanthira Kalyana Mahal, Bodinayakanur",
      description:
        "An evening to gather, celebrate, laugh, and create beautiful memories together.",
    },
  ];

  return (
    <section
      id="venue-section"
      className="relative w-full overflow-hidden bg-[#070408] text-white"
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            width: "min(1100px, 140vw)",
            height: "min(900px, 120vw)",
            background:
              "radial-gradient(circle, rgba(116,55,29,0.13) 0%, rgba(66,29,23,0.06) 38%, transparent 72%)",
            filter: "blur(75px)",
          }}
        />

        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at center, transparent 20%, rgba(0,0,0,0.25) 70%, rgba(0,0,0,0.65) 100%)",
          }}
        />
      </div>

      {/* =====================================================
          STARS
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0">
        {Array.from({ length: 55 }).map((_, index) => {
          const left = (index * 53) % 100;
          const top = (index * 79) % 100;

          return (
            <span
              key={index}
              className="absolute rounded-full bg-white"
              style={{
                left: `${left}%`,
                top: `${top}%`,
                width: index % 12 === 0 ? "2px" : "1px",
                height: index % 12 === 0 ? "2px" : "1px",
                opacity:
                  0.06 + ((index * 19) % 28) / 100,
              }}
            />
          );
        })}
      </div>

      {/* =====================================================
          FLOATING LANTERNS
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0">
        {/* Left */}

        <div
          className="absolute left-[2%] top-[18%] sm:left-[7%]"
          style={{
            width: "clamp(48px, 6vw, 82px)",
            animation:
              "venueLanternLeft 7s ease-in-out infinite",
          }}
        >
          <div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
            style={{
              width: "130%",
              height: "130%",
              background:
                "rgba(255,150,55,0.16)",
              filter: "blur(25px)",
            }}
          />

          <img
            src="/images/lantern.png"
            alt=""
            draggable={false}
            className="relative z-10 w-full object-contain"
            style={{
              filter:
                "drop-shadow(0 0 18px rgba(255,145,45,0.50))",
            }}
          />
        </div>

        {/* Right */}

        <div
          className="absolute right-[2%] bottom-[20%] sm:right-[8%]"
          style={{
            width: "clamp(52px, 6.5vw, 86px)",
            animation:
              "venueLanternRight 8s ease-in-out infinite",
          }}
        >
          <div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
            style={{
              width: "125%",
              height: "125%",
              background:
                "rgba(255,150,55,0.16)",
              filter: "blur(25px)",
            }}
          />

          <img
            src="/images/lantern.png"
            alt=""
            draggable={false}
            className="relative z-10 w-full object-contain"
            style={{
              filter:
                "drop-shadow(0 0 19px rgba(255,145,45,0.50))",
            }}
          />
        </div>
      </div>

      {/* =====================================================
          CONTENT
      ====================================================== */}

      <div className="relative z-10 px-5 py-28 sm:px-8 sm:py-36 md:px-12 lg:px-16 lg:py-44">
        <div className="mx-auto max-w-6xl">
          {/* =================================================
              HEADER
          ================================================== */}

          <div
            className="text-center"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible
                ? "translateY(0)"
                : "translateY(30px)",
              transition:
                "opacity 1s ease, transform 1s cubic-bezier(0.22, 1, 0.36, 1)",
            }}
          >
            <p
              style={{
                margin: 0,
                fontFamily:
                  "Georgia, Times New Roman, serif",
                fontSize: "clamp(10px, 0.8vw, 13px)",
                letterSpacing: "0.30em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.40)",
              }}
            >
              Follow the light
            </p>

            <h2
              className="mt-5"
              style={{
                marginBottom: 0,
                fontFamily:
                  "Georgia, Times New Roman, serif",
                fontSize: "clamp(2.8rem, 6vw, 6.2rem)",
                fontWeight: 400,
                lineHeight: 0.94,
                letterSpacing: "-0.055em",
                color: "rgba(255,255,255,0.95)",
              }}
            >
              Find us there
            </h2>

            <p
              className="mx-auto mt-6 max-w-xl"
              style={{
                marginBottom: 0,
                fontFamily:
                  "Georgia, Times New Roman, serif",
                fontSize: "clamp(12px, 1vw, 15px)",
                lineHeight: 1.9,
                letterSpacing: "0.035em",
                color: "rgba(255,255,255,0.40)",
              }}
            >
              Two celebrations. Two places.
              One beautiful story.
            </p>

            <div className="mt-9 flex items-center justify-center gap-4">
              <span
                className="h-px"
                style={{
                  width: "clamp(35px, 7vw, 80px)",
                  background:
                    "linear-gradient(to right, transparent, rgba(255,190,120,0.42))",
                }}
              />

              <span
                style={{
                  width: "5px",
                  height: "5px",
                  borderRadius: "50%",
                  background:
                    "rgba(255,190,120,0.70)",
                  boxShadow:
                    "0 0 13px rgba(255,160,60,0.70)",
                }}
              />

              <span
                className="h-px"
                style={{
                  width: "clamp(35px, 7vw, 80px)",
                  background:
                    "linear-gradient(to left, transparent, rgba(255,190,120,0.42))",
                }}
              />
            </div>
          </div>

          {/* =================================================
              VENUES
          ================================================== */}

          <div className="relative mt-20 sm:mt-24">
            {/* Connecting line */}

            <div
              className="pointer-events-none absolute left-1/2 top-0 hidden h-full -translate-x-1/2 md:block"
              style={{
                width: "1px",
                background:
                  "linear-gradient(to bottom, transparent, rgba(255,180,100,0.20) 15%, rgba(255,180,100,0.20) 85%, transparent)",
              }}
            />

            <div className="grid gap-6 md:grid-cols-2 md:gap-12">
              {venues.map((venue, index) => (
                <div
                  key={venue.number}
                  style={{
                    opacity: visible ? 1 : 0,
                    transform: visible
                      ? "translateY(0)"
                      : "translateY(45px)",
                    transition: `opacity 1s ease ${
                      0.25 + index * 0.18
                    }s, transform 1s cubic-bezier(0.22, 1, 0.36, 1) ${
                      0.25 + index * 0.18
                    }s`,
                  }}
                >
                  <div
                    className="relative overflow-hidden rounded-[14px] border border-white/[0.08] px-7 py-9 sm:px-10 sm:py-12"
                    style={{
                      background:
                        "linear-gradient(145deg, rgba(255,255,255,0.045), rgba(255,255,255,0.012))",
                      backdropFilter: "blur(10px)",
                    }}
                  >
                    {/* Number */}

                    <div className="flex items-center justify-between">
                      <span
                        style={{
                          fontFamily:
                            "Georgia, Times New Roman, serif",
                          fontSize: "11px",
                          letterSpacing: "0.25em",
                          color:
                            "rgba(255,190,120,0.65)",
                        }}
                      >
                        {venue.number}
                      </span>

                      {/* Location icon */}

                      <span
                        className="flex h-9 w-9 items-center justify-center rounded-full border border-white/[0.10]"
                        style={{
                          color:
                            "rgba(255,190,120,0.75)",
                        }}
                      >
                        <svg
                          width="15"
                          height="15"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
                          <circle
                            cx="12"
                            cy="10"
                            r="2.5"
                          />
                        </svg>
                      </span>
                    </div>

                    {/* Type */}

                    <p
                      className="mt-12"
                      style={{
                        marginBottom: 0,
                        fontFamily:
                          "Georgia, Times New Roman, serif",
                        fontSize: "10px",
                        letterSpacing: "0.28em",
                        textTransform: "uppercase",
                        color:
                          "rgba(255,255,255,0.35)",
                      }}
                    >
                      {venue.type}
                    </p>

                    {/* Location */}

                    <h3
                      className="mt-4"
                      style={{
                        marginBottom: 0,
                        fontFamily:
                          "Georgia, Times New Roman, serif",
                        fontSize:
                          "clamp(2.6rem, 5vw, 5rem)",
                        fontWeight: 400,
                        lineHeight: 0.95,
                        letterSpacing: "-0.05em",
                        color:
                          "rgba(255,255,255,0.94)",
                      }}
                    >
                      {venue.location}
                    </h3>

                    {/* Date */}

                    <p
                      className="mt-5"
                      style={{
                        marginBottom: 0,
                        fontFamily:
                          "Georgia, Times New Roman, serif",
                        fontSize: "12px",
                        letterSpacing: "0.12em",
                        color:
                          "rgba(255,190,120,0.68)",
                      }}
                    >
                      {venue.date}
                    </p>

                    {/* Description */}

                    <p
                      className="mt-7 max-w-md"
                      style={{
                        marginBottom: 0,
                        fontFamily:
                          "Georgia, Times New Roman, serif",
                        fontSize: "13px",
                        lineHeight: 1.9,
                        letterSpacing: "0.025em",
                        color:
                          "rgba(255,255,255,0.38)",
                      }}
                    >
                      {venue.description}
                    </p>

                    {/* Map button */}

                    <a
                      href={
                        venue.location === "Mayiliamman Temple, Urappakkam, Chennai"
                          ? "https://www.google.com/maps/place/Arulmigu+Mayili+Amman+Temple/@12.2352739,78.0466193,9z/data=!4m10!1m2!2m1!1smayilliamman+temple+urappakkam!3m6!1s0x3a52f6339a9fde01:0xd7b8770aef18de56!8m2!3d12.8509477!4d80.0822293!15sChttYWxsaWFtbWFuIHRlbXBsZSB1cmFwYWtrYW1aHSIbbWFsbGlhbW1hbiB0ZW1wbGUgdXJhcGFra2FtkgEMaGluZHVfdGVtcGxlmgEkQ2hkRFNVaE5NRzluUzBWSlEwRm5TVVF4WHpWbGRTMVJSUkFC4AEA-gEECAAQDw!16s%2Fg%2F1pycmvt_z!18m1!1e1?entry=ttu&g_ep=EgoyMDI2MDkxNi4wIKXMDSoASAFQAw%3D%3D"
                          : "https://www.google.com/maps/place/Senaithalaivar+Suthanthira+Kalyana+Mahal/@10.0075295,77.3550228,17z/data=!3m1!4b1!4m6!3m5!1s0x3b070daaeaf13633:0x4dcb064632aded41!8m2!3d10.0075295!4d77.3550228!16s%2Fg%2F11rkclsdlc!18m1!1e1?entry=ttu&g_ep=EgoyMDI2MDkxNi4wIKXMDSoASAFQAw%3D%3D"
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-9 inline-flex items-center gap-3 border-b border-white/20 pb-2 transition-all duration-300 hover:border-white/60"
                      style={{
                        fontFamily:
                          "Georgia, Times New Roman, serif",
                        fontSize: "11px",
                        letterSpacing: "0.10em",
                        color:
                          "rgba(255,255,255,0.68)",
                      }}
                    >
                      <span>Open in maps</span>

                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h13" />
                        <path d="m13 6 6 6-6 6" />
                      </svg>
                    </a>

                    {/* Corner glow */}

                    <div
                      className="pointer-events-none absolute -bottom-20 -right-20 h-52 w-52 rounded-full"
                      style={{
                        background:
                          "radial-gradient(circle, rgba(255,150,60,0.09), transparent 70%)",
                        filter: "blur(25px)",
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* =================================================
              FINAL LINE
          ================================================== */}

          <div
            className="mt-16 text-center sm:mt-20"
            style={{
              opacity: visible ? 1 : 0,
              transition: "opacity 1s ease 0.8s",
            }}
          >
            <p
              style={{
                margin: 0,
                fontFamily:
                  "Georgia, Times New Roman, serif",
                fontSize: "12px",
                fontStyle: "italic",
                letterSpacing: "0.04em",
                color:
                  "rgba(255,255,255,0.30)",
              }}
            >
              Wherever the light leads,
              we hope it leads you to us.
            </p>
          </div>
        </div>
      </div>

      {/* =====================================================
          BOTTOM FADE
      ====================================================== */}

      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0"
        style={{
          height: "150px",
          background:
            "linear-gradient(to top, #070408, transparent)",
        }}
      />

      {/* =====================================================
          ANIMATIONS
      ====================================================== */}

      <style>{`
        @keyframes venueLanternLeft {
          0%,
          100% {
            transform: translate3d(0, 0, 0) rotate(-3deg);
          }

          50% {
            transform: translate3d(8px, -17px, 0) rotate(3deg);
          }
        }

        @keyframes venueLanternRight {
          0%,
          100% {
            transform: translate3d(0, 0, 0) rotate(2deg);
          }

          50% {
            transform: translate3d(-9px, -15px, 0) rotate(-3deg);
          }
        }

        @media (max-width: 767px) {
          @keyframes venueLanternLeft {
            0%,
            100% {
              transform: translate3d(0, 0, 0) rotate(-2deg);
            }

            50% {
              transform: translate3d(5px, -10px, 0) rotate(2deg);
            }
          }

          @keyframes venueLanternRight {
            0%,
            100% {
              transform: translate3d(0, 0, 0) rotate(2deg);
            }

            50% {
              transform: translate3d(-5px, -10px, 0) rotate(-2deg);
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