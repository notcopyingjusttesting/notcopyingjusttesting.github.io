import bgImage from "../assets/images/overview-bg.png";
import { useEffect, useRef, useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function Overview() {
  const [isLoading, setIsLoading] = useState(true);
  const [isAtBottom, setIsAtBottom] = useState(false);
  const [isScrollable, setIsScrollable] = useState(false);
  const [iframeHeight, setIframeHeight] = useState("60vh");
  const statementRef = useRef<HTMLDivElement>(null);
  const lookerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.title = "Stats4Lulu Overview";

    // ✅ Keep LookerStudio section always fitting viewport
    const resizeObserver = new ResizeObserver(() => {
      const vw = window.innerWidth;
      const vh = window.innerHeight;

      if (vw < 768) {
        setIframeHeight(`${vh * 0.65}px`);
      } else if (vw < 1024) {
        setIframeHeight(`${vh * 0.60}px`);
      } else {
        setIframeHeight(`${vh * 0.57}px`);
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
        <div className="flex flex-col w-full md:w-2/3">
          {/* Navbar */}
          <nav
            className="flex justify-between items-start px-4 md:px-6 py-4 border-b border-white/30 min-w-0"
            style={{ fontFamily: "Courier New, monospace" }}
          >
            <div className="flex flex-col text-black">
              <h1
                className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold"
                style={{ lineHeight: 1.05 }}
              >
                Stats4Lulu Official Website
              </h1>

              <div className="flex flex-wrap items-center gap-[0.4rem] text-xs sm:text-sm md:text-base mt-1 font-semibold">
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

          {/* Cards Section */}
          <div
            className="flex flex-col md:flex-row justify-center items-center flex-1 gap-8 pt-12 pb-8 px-4 md:px-8 bg-cover bg-center relative"
            style={{
              backgroundImage: `url(${bgImage})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            {/* Card 1 */}
            <div className="relative w-72 md:w-80 h-auto md:h-[85vh] rounded-2xl shadow-lg flex flex-col z-10 overflow-hidden mb-6 md:mb-0">
              <div className="absolute inset-0 bg-white/60 rounded-2xl"></div>
              <div className="relative p-6 flex flex-col gap-4 justify-start h-full">
                <h2
                  className="text-xl md:text-2xl font-bold mb-2 text-[#36454F]"
                  style={{ fontFamily: "Courier New, monospace" }}
                >
                  Products
                </h2>
                <div className="flex flex-col gap-2">
                  <button className="px-4 py-2 text-white rounded-md bg-[#395752] hover:opacity-90 text-left transition">
                    Link1
                  </button>
                  <button className="px-4 py-2 text-white rounded-md bg-[#395752] hover:opacity-90 text-left transition">
                    Link2
                  </button>
                </div>

                <div className="mt-4">
                  <h2
                    className="text-xl md:text-2xl font-bold mb-2 text-[#36454F]"
                    style={{ fontFamily: "Courier New, monospace" }}
                  >
                    Socials
                  </h2>
                  <div className="flex flex-col gap-2">
                    <button className="px-4 py-2 text-white rounded-md bg-[#395752] hover:opacity-90 text-left transition">
                      bla
                    </button>
                    <button className="px-4 py-2 text-white rounded-md bg-[#395752] hover:opacity-90 text-left transition">
                      blabla
                    </button>
                    <button className="px-4 py-2 text-white rounded-md bg-[#395752] hover:opacity-90 text-left transition">
                      bla x3
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="relative w-72 md:w-80 h-auto md:h-[85vh] rounded-2xl shadow-lg flex flex-col z-10 overflow-hidden">
              <div className="absolute inset-0 bg-white/60 rounded-2xl"></div>
              <div className="relative p-6 flex flex-col gap-4 justify-start h-full">
                <h2
                  className="text-xl md:text-2xl font-bold mb-2 text-[#36454F]"
                  style={{ fontFamily: "Courier New, monospace" }}
                >
                  Collaborations
                </h2>
                <div className="flex flex-col gap-2">
                  <button className="px-4 py-2 text-white rounded-md bg-[#6a8b88] hover:opacity-90 text-left transition">
                    link1
                  </button>
                  <button className="px-4 py-2 text-white rounded-md bg-[#6a8b88] hover:opacity-90 text-left transition">
                    link2
                  </button>
                  <button className="px-4 py-2 text-white rounded-md bg-[#6a8b88] hover:opacity-90 text-left transition">
                    etc.
                  </button>
                </div>

                <div className="mt-4">
                  <h2
                    className="text-xl md:text-2xl font-bold mb-2 text-[#36454F]"
                    style={{ fontFamily: "Courier New, monospace" }}
                  >
                    Community Links
                  </h2>
                  <div className="flex flex-col gap-2">
                    <button className="px-4 py-2 text-white rounded-md bg-[#6a8b88] hover:opacity-90 text-left transition">
                      linkk 1
                    </button>
                    <button className="px-4 py-2 text-white rounded-md bg-[#6a8b88] hover:opacity-90 text-left transition">
                      link 2
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="relative w-72 md:w-80 h-auto md:h-[85vh] rounded-2xl shadow-lg flex flex-col z-10 overflow-hidden">
              <div className="absolute inset-0 bg-white/60 rounded-2xl"></div>
              <div className="relative p-6 flex flex-col gap-4 justify-start h-full">
                <h2
                  className="text-xl md:text-2xl font-bold mb-2 text-[#36454F]"
                  style={{ fontFamily: "Courier New, monospace" }}
                >
                  Official Links
                </h2>
                <div className="flex flex-col gap-2">
                  <button className="px-4 py-2 text-white rounded-md bg-[#36454F] hover:opacity-90 text-left transition">
                    link1
                  </button>
                  <button className="px-4 py-2 text-white rounded-md bg-[#36454F] hover:opacity-90 text-left transition">
                    link2
                  </button>
                  <button className="px-4 py-2 text-white rounded-md bg-[#36454F] hover:opacity-90 text-left transition">
                    link3
                  </button>
                </div>

                <div className="mt-4">
                  <h2
                    className="text-xl md:text-2xl font-bold mb-2 text-[#36454F]"
                    style={{ fontFamily: "Courier New, monospace" }}
                  >
                    Media
                  </h2>
                  <div className="flex flex-col gap-2">
                    <button className="px-4 py-2 text-white rounded-md bg-[#36454F] hover:opacity-90 text-left transition">
                      link1
                    </button>
                    <button className="px-4 py-2 text-white rounded-md bg-[#36454F] hover:opacity-90 text-left transition">
                      link2
                    </button>
                    <button className="px-4 py-2 text-white rounded-md bg-[#36454F] hover:opacity-90 text-left transition">
                      link3
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex flex-col w-full md:w-1/3 h-auto md:h-full" ref={lookerRef}>
          {/* LookerStudio */}
          <div
            className="relative flex justify-center items-center bg-[#f5f5f5] overflow-hidden"
            style={{ height: iframeHeight }}
          >
            {isLoading && (
              <div className="absolute inset-0 flex justify-center items-center bg-[#f5f5f5] text-gray-600 font-mono text-sm z-10">
                Please wait, loading the latest stats...
              </div>
            )}
            <iframe
              src="https://lookerstudio.google.com/embed/reporting/2e58763a-6a44-4843-a177-451c96c2b0b2/page/u35cF"
              width="100%"
              height="100%"
              className="border-0 rounded-none overflow-hidden"
              onLoad={() => setIsLoading(false)}
            ></iframe>
          </div>

          {/* Official Statement */}
          <div
            className="relative h-auto md:h-[46%] flex flex-col justify-start items-start text-left bg-[#eeeeee] overflow-hidden"
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
                  interactive dashboard that shares information about not only
                  the letters he has received but donations made to his
                  GiveSendGo campaign to fund his legal cases, Google search
                  trends, and top news articles relating to Luigi. This
                  dashboard is translated into 8 languages: Italian, Spanish,
                  French, Brazilian Portuguese, German, Simplified Chinese, and
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
