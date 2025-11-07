import bgImage from "../assets/images/overview-bg.png";
import { useEffect, useRef, useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function Overview() {
  const [isLoading, setIsLoading] = useState(true);
  const [isAtBottom, setIsAtBottom] = useState(false);
  const [isScrollable, setIsScrollable] = useState(false);
  const [iframeHeight, setIframeHeight] = useState("60vh");

  // Fade state controls
  const [showPrimary, setShowPrimary] = useState(false);   // Navbar + background
  const [showSecondary, setShowSecondary] = useState(false); // Cards + right side
  const statementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.title = "Stats4Lulu Official Website";

    // Fade-in sequence
    setTimeout(() => setShowPrimary(true), 100);   // show navbar/bgImage first
    setTimeout(() => setShowSecondary(true), 500); // then everything else

    // Responsive LookerStudio height logic
    const resizeObserver = new ResizeObserver(() => {
      const vw = window.innerWidth;
      const vh = window.innerHeight;

      // Keep LookerStudio iframe height dynamic based on viewport height
      // idk what im doing here lel
      if (vw < 375) {
        setIframeHeight(`${vh * 0.50}px`);
      } else if (vw >= 375 && vw < 480) {
        setIframeHeight(`${vh * 0.53}px`);
      } else if (vw >= 480 && vw < 576) {
        setIframeHeight(`${vh * 0.53}px`);
      } else if (vw >= 576 && vw < 768) {
        setIframeHeight(`${vh * 0.53}px`);
      } else if (vw >= 768 && vw < 900) {
        setIframeHeight(`${vh * 0.53}px`);
      } else if (vw >= 900 && vw < 1024) {
        setIframeHeight(`${vh * 0.53}px`);
      } else if (vw >= 1024 && vw < 1440) {
        setIframeHeight(`${vh * 0.53}px`);
      } else {
        setIframeHeight(`${vh * 0.53}px`);
      }
    });

    resizeObserver.observe(document.body);

    return () => resizeObserver.disconnect();
  }, []);

  const checkScrollable = () => {
    const el = statementRef.current;
    if (!el) return;
    setIsScrollable(el.scrollHeight > el.clientHeight);
  };

  const handleScroll = () => {
    const el = statementRef.current;
    if (!el) return;
    const atBottom = el.scrollTop + el.clientHeight >= el.scrollHeight - 5;
    setIsAtBottom(atBottom);
  };

  const scrollToEndOrTop = () => {
    const el = statementRef.current;
    if (!el) return;
    el.scrollTo({
      top: isAtBottom ? 0 : el.scrollHeight,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    checkScrollable();
    window.addEventListener("resize", checkScrollable);
    return () => window.removeEventListener("resize", checkScrollable);
  }, [isLoading]);

  return (
    <div className="flex flex-col w-full h-auto overflow-y-auto text-white">
      <div className="flex flex-col md:flex-row w-full h-auto md:h-screen">
        {/* LEFT SIDE */}
        <div
          className={`flex flex-col w-full md:w-2/3 transition-all duration-700 ease-out ${
            showPrimary ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          {/* Navbar */}
          <nav
            className="flex justify-between items-start px-4 md:px-6 py-2 border-b border-white/30 min-w-0"
            style={{ fontFamily: "Courier New, monospace" }}
          >
            <div className="flex flex-col text-black">
              <h1
                className="text-xl sm:text-lg md:text-xl lg:text-3xl font-bold"
                style={{ lineHeight: 1.05 }}
              >
                Stats4Lulu Official Website
              </h1>
              <h2
                className="font-mono text-sm sm:text-sm md:text-base lg:text-base text-black/60"
                style={{ lineHeight: 1.05 }}
              >
                Luigi Mangione data and statistical insights
              </h2>

              <div
                className="flex flex-wrap items-center gap-[0.4rem] text-sm sm:text-sm md:text-base mt-1 font-semibold italic text-black/75"
                style={{ lineHeight: 1.05 }}
              >
                <a
                  href="mailto:stats4lulu@gmail.com"
                  className="hover:text-blue-200 transition whitespace-nowrap"
                >
                  stats4lulu@gmail.com
                </a>
                <span className="text-black/40">•</span>
                <a
                  href="https://discord.gg/hDuuFCtWbk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-200 transition whitespace-nowrap"
                >
                  Join our Discord
                </a>
                <span className="text-black/40">•</span>
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSeLFppQsFajVnM_QrxfphwQ-1EKnUKWgMMfBfga9yX3JkZ_9Q/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-200 transition whitespace-nowrap"
                >
                  Bug Reports & Suggestions
                </a>
              </div>
            </div>
          </nav>

          <div
            className="flex flex-col md:flex-row justify-center items-center flex-1 gap-8 pt-12 pb-8 px-4 md:px-8 bg-cover bg-center relative transition-all duration-700 ease-out"
            style={{
              backgroundImage: `url(${bgImage})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            {[
              {
                title: "Products",
                color: "#395752",
                sections: [
                  {
                    name: "Products",
                    links: [
                      [
                        "Stats4Lulu Dashboard",
                        "https://lookerstudio.google.com/reporting/f8ea035e-9a51-498e-b77c-ec1b971eada0/page/p_6tpp4q8xrd?s=smgrVIDQwas",
                      ],
                      [
                        "Stats4Lulu Dashboard [Translated]",
                        "https://lookerstudio.google.com/reporting/d603a7eb-4bb9-4231-973f-05b71e24d3a2/page/p_unct2t61td?s=qXhVAmCmFZM",
                      ],
                      [
                        "Luigi Mangione Event Timeline",
                        "https://stats4lulu.github.io/",
                      ],
                      [
                        "Datasets [Google Sheets]",
                        "https://docs.google.com/spreadsheets/d/1G9y8kqV5iUs6NhkQtEHvHhxasbp5mXq-IkXRKNBTiVA/edit?usp=drivesdk",
                      ],
                      [
                        "Datasets [Kaggle]",
                        "https://www.kaggle.com/stats4lulu/datasets",
                      ],
                      [
                        "Stats4Lulu Postcard",
                        "https://drive.google.com/drive/folders/1MaL0i87axR6M8W8i9NtqZzj7I0pM3CNi",
                      ],
                    ],
                  },
                  {
                    name: "Socials",
                    links: [
                      ["Instagram", "https://www.instagram.com/stats4lulu/"],
                      ["X", "https://x.com/stats4lulu"],
                      ["Tumblr", "https://www.tumblr.com/stats4lulu"],
                      ["Reddit", "https://www.reddit.com/user/stats4lulu/"],
                      ["GitHub", "https://github.com/Stats4Lulu/"],
                    ],
                  },
                ],
              },
              {
                title: "Collabs",
                color: "#6a8b88",
                sections: [
                  {
                    name: "Collabs",
                    links: [
                      [
                        "Postcards with Posters for Mangione",
                        "https://linktr.ee/postersformangione",
                      ],
                      [
                        "Donation Guide with The Luigi Case Files",
                        "https://www.instagram.com/p/DLxLB_-RMUl/",
                      ],
                      [
                        "Multilingual Printables with Mavericks with Mangione",
                        "https://www.instagram.com/p/DM3u3ijsoM0/",
                      ],
                    ],
                  },
                  {
                    name: "Media & Mentions",
                    links: [
                      [
                        "NY Defense Motion [cited on p.5]",
                        "https://cdn.sanity.io/files/detu0qji/production/667882212ac2c73a724fadcda417e50352de6303.pdf",
                      ],
                      [
                        "TMZ",
                        "https://www.tmz.com/2025/09/04/luigi-mangione-shein-ad-from-chinese-fans/",
                      ],
                    ],
                  },
                ],
              },
              {
                title: "Official Links",
                color: "#36454F",
                sections: [
                  {
                    name: "Official Links",
                    links: [
                      [
                        "Luigi Mangione Official Website",
                        "https://www.luigimangioneinfo.com/",
                      ],
                      [
                        "Luigi Mangione Legal Defense Fund",
                        "https://www.givesendgo.com/luigi-defense-fund",
                      ],
                    ],
                  },
                  {
                    name: "Community Links",
                    links: [
                      ["Party Girls Podcast", "https://fans.fm/partygirls"],
                      [
                        "Luigi Mangione Case Tracker",
                        "https://lookerstudio.google.com/u/0/reporting/af469363-3940-4305-8da7-8a183ca7ec3e/page/0umZF?s=ohfjbuftRe4",
                      ],
                      [
                        "The Plot Newspaper",
                        "https://linktr.ee/theplotnews",
                      ],
                      [
                        "Luigi Case Collection",
                        "https://luigicasecollection.wordpress.com/",
                      ],
                      [
                        "Luigi's Legal Fund Bookshop",
                        "https://linktr.ee/luigislegalfundbookshop",
                      ],
                    ],
                  },
                ],
              },
            ].map((card, i) => (
              <div
                key={i}
                className={`relative w-72 md:w-80 h-auto md:h-[84vh] rounded-2xl shadow-lg flex flex-col z-10 overflow-hidden mb-6 md:mb-0 transition-all duration-700 ease-out ${
                  showSecondary
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
              >
                <div className="absolute inset-0 bg-white/60 rounded-2xl"></div>
                <div className="relative pt-4 px-6 pb-6 flex flex-col h-full overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-transparent hover:scrollbar-thumb-gray-500">
                  {card.sections.map((section, idx) => (
                    <div key={idx} className={`${idx > 0 ? "mt-4" : ""}`}>
                      <h2
                        className="text-lg md:text-xl font-bold mb-2 text-[#36454F]"
                        style={{ fontFamily: "Courier New, monospace" }}
                      >
                        {section.name}
                      </h2>
                      <div className="flex flex-col gap-2">
                        {section.links.map(([text, link], j) => (
                          <button
                            key={j}
                            onClick={() =>
                              window.open(link, "_blank", "noopener,noreferrer")
                            }
                            className={`px-1.5 py-1.5 text-white rounded-md hover:opacity-90 text-center transition w-full cursor-pointer break-words`}
                            style={{ backgroundColor: card.color }}
                          >
                            {text}
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div
          className={`flex flex-col w-full md:w-1/3 h-auto md:h-full transition-all duration-700 ease-out ${
            showSecondary ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          {/* LookerStudio */}
          <div
            className="relative flex justify-center items-center bg-[#f5f5f5] overflow-hidden"
            style={{
              height: iframeHeight,
              overflow: "hidden", // Disable scrolling on mobile
            }}
          >
            {isLoading && (
              <div className="absolute inset-0 flex justify-center items-center bg-[#f5f5f5] text-gray-600 font-mono text-sm z-10">
                Please wait, loading the latest stats...
              </div>
            )}
            <iframe
              src="https://lookerstudio.google.com/embed/reporting/d679aad5-c506-4833-adc9-7d7b088aa128/page/p_6tpp4q8xrd"
              width="100%"
              height="100%"
              className="border-0 rounded-none overflow-hidden"
              onLoad={() => setIsLoading(false)}
              scrolling="no" // Disable scrolling inside iframe
            ></iframe>
          </div>

          {/* Official Statement */}
          <div
            className="relative h-auto md:h-[48%] flex flex-col justify-start items-start text-left bg-[#eeeeee] overflow-hidden"
            style={{ fontFamily: "Courier New, monospace" }}
          >
            <div
              ref={statementRef}
              onScroll={handleScroll}
              className="overflow-y-auto w-full px-6 py-4 pr-10"
              style={{ height: "100%" }}
            >
              <h4 className="text-black text-base sm:text-lg md:text-xl font-bold mb-2">
                Official Statement from the Team
              </h4>
              <div className="text-black text-sm md:text-base leading-relaxed">
                <p className="mb-2">
                  The Stats4Lulu team has created and maintains an online,
                  interactive dashboard on Luigi Mangione that shares
                  information about not only the letters he has received but
                  donations made to his GiveSendGo campaign to fund his legal
                  cases, and top news articles relating to Luigi. This dashboard
                  is translated into 8 languages: Italian, Spanish, French,
                  Brazilian Portuguese, German, Simplified Chinese, and
                  Traditional Chinese.
                </p>
                <p>
                  The team currently stands at over 30 volunteers working across
                  data, wordsmiths, translation, events, and collaborations. The
                  members are custodians of statistics related to Luigi. They
                  nurture and grow it, but in the end, it all belongs to Luigi
                  and is shared as an act of service for him.
                </p>
              </div>
            </div>

            {isScrollable && (
              <button
                onClick={scrollToEndOrTop}
                className="absolute bottom-3 right-4 flex items-center justify-center w-9 h-9 rounded-full bg-white/40 border border-[#395752]/60 text-[#395752] shadow-md hover:bg-white hover:shadow-lg transition cursor-pointer"
              >
                {isAtBottom ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
