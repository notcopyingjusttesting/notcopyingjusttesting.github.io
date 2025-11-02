import bgImage from "../assets/images/overview-bg.png";
import { useEffect, useRef, useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function Overview() {
  const [isLoading, setIsLoading] = useState(true);
  const [isAtBottom, setIsAtBottom] = useState(false);
  const [isScrollable, setIsScrollable] = useState(false);
  const statementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.title = "Stats4Lulu Overview";
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
        <div className="flex flex-col w-full md:w-2/3">
          {/* Navbar */}
          <nav
            className="flex justify-between items-start px-4 md:px-6 py-4 border-b border-white/30 min-w-0"
            style={{ fontFamily: "Courier New, monospace" }}
          >
            {/* Left: Title */}
            <h1
              className="min-w-0 text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-black"
              style={{ lineHeight: 1.05 }}
            >
              Stats4Lulu Official Website
            </h1>

            {/* Right: Contact + Links */}
            <div className="flex flex-col items-end text-black font-semibold min-w-0">
              <a
                href="mailto:stats4lulu@gmail.com"
                className="hover:text-blue-200 transition text-base sm:text-base whitespace-nowrap"
              >
                stats4lulu@gmail.com
              </a>

              <div className="mt-1 flex items-center gap-[0.4rem] text-xs sm:text-sm whitespace-nowrap">
                <a
                  href="https://discord.gg/hDuuFCtWbk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-200 transition"
                >
                  Join our Discord
                </a>
                <span className="text-black/60 text-[12px] leading-none flex items-center">
                  •
                </span>
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSeLFppQsFajVnM_QrxfphwQ-1EKnUKWgMMfBfga9yX3JkZ_9Q/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-200 transition"
                >
                  Bug reports & suggestions
                </a>
              </div>
            </div>
          </nav>

          <div
            className="flex flex-col md:flex-row justify-center items-center flex-1 gap-8 py-8 px-4 md:px-8 bg-cover bg-center relative"
            style={{
              backgroundImage: `url(${bgImage})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            {/* Card 1 */}
            <div className="relative w-72 md:w-80 h-auto md:h-[85vh] rounded-2xl shadow-lg flex flex-col z-10 overflow-hidden mb-6 md:mb-0">
              <div className="absolute inset-0 bg-white/70 rounded-2xl"></div>
              <div className="relative p-6 flex flex-col gap-4 justify-start h-full">
                <div>
                  <h2
                    className="text-lg md:text-xl font-bold mb-2"
                    style={{
                      color: "#395752",
                      fontFamily: "Courier New, monospace",
                    }}
                  >
                    Products
                  </h2>
                  <div className="flex flex-col gap-2">
                    <button className="px-4 py-2 text-white rounded-md hover:opacity-90 transition text-left bg-[#395752]">
                      Link1
                    </button>
                    <button className="px-4 py-2 text-white rounded-md hover:opacity-90 transition text-left bg-[#395752]">
                      Link2
                    </button>
                  </div>
                </div>

                <div className="mt-4">
                  <h2
                    className="text-lg md:text-xl font-bold mb-2"
                    style={{
                      color: "#395752",
                      fontFamily: "Courier New, monospace",
                    }}
                  >
                    Socials
                  </h2>
                  <div className="flex flex-col gap-2">
                    <button className="px-4 py-2 text-white rounded-md hover:opacity-90 transition text-left bg-[#395752]">
                      bla
                    </button>
                    <button className="px-4 py-2 text-white rounded-md hover:opacity-90 transition text-left bg-[#395752]">
                      blabla
                    </button>
                    <button className="px-4 py-2 text-white rounded-md hover:opacity-90 transition text-left bg-[#395752]">
                      bla x3
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="relative w-72 md:w-80 h-auto md:h-[85vh] rounded-2xl shadow-lg flex flex-col z-10 overflow-hidden">
              <div className="absolute inset-0 bg-white/70 rounded-2xl"></div>
              <div className="relative p-6 flex flex-col gap-4 justify-start h-full">
                <div>
                  <h2
                    className="text-lg md:text-xl font-bold mb-2"
                    style={{
                      color: "#395752",
                      fontFamily: "Courier New, monospace",
                    }}
                  >
                    Collaborations
                  </h2>
                  <div className="flex flex-col gap-2">
                    <button className="px-4 py-2 text-white rounded-md hover:opacity-90 transition text-left bg-[#6a8b88]">
                      link1
                    </button>
                    <button className="px-4 py-2 text-white rounded-md hover:opacity-90 transition text-left bg-[#6a8b88]">
                      link2
                    </button>
                    <button className="px-4 py-2 text-white rounded-md hover:opacity-90 transition text-left bg-[#6a8b88]">
                      etc.
                    </button>
                  </div>
                </div>

                <div className="mt-4">
                  <h2
                    className="text-lg md:text-xl font-bold mb-2"
                    style={{
                      color: "#395752",
                      fontFamily: "Courier New, monospace",
                    }}
                  >
                    Community Links
                  </h2>
                  <div className="flex flex-col gap-2">
                    <button className="px-4 py-2 text-white rounded-md hover:opacity-90 transition text-left bg-[#6a8b88]">
                      linkk 1
                    </button>
                    <button className="px-4 py-2 text-white rounded-md hover:opacity-90 transition text-left bg-[#6a8b88]">
                      link 2
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="relative w-72 md:w-80 h-auto md:h-[85vh] rounded-2xl shadow-lg flex flex-col z-10 overflow-hidden">
              <div className="absolute inset-0 bg-white/70 rounded-2xl"></div>
              <div className="relative p-6 flex flex-col gap-4 justify-start h-full">
                <div>
                  <h2
                    className="text-lg md:text-xl font-bold mb-2"
                    style={{
                      color: "#395752",
                      fontFamily: "Courier New, monospace",
                    }}
                  >
                    Official Links
                  </h2>
                  <div className="flex flex-col gap-2">
                    <button className="px-4 py-2 text-white rounded-md hover:opacity-90 transition text-left bg-[#36454F]">
                      link1
                    </button>
                    <button className="px-4 py-2 text-white rounded-md hover:opacity-90 transition text-left bg-[#36454F]">
                      link2
                    </button>
                    <button className="px-4 py-2 text-white rounded-md hover:opacity-90 transition text-left bg-[#36454F]">
                      link3
                    </button>
                  </div>
                </div>

                <div className="mt-4">
                  <h2
                    className="text-lg md:text-xl font-bold mb-2"
                    style={{
                      color: "#395752",
                      fontFamily: "Courier New, monospace",
                    }}
                  >
                    Media
                  </h2>
                  <div className="flex flex-col gap-2">
                    <button className="px-4 py-2 text-white rounded-md hover:opacity-90 transition text-left bg-[#36454F]">
                      link1
                    </button>
                    <button className="px-4 py-2 text-white rounded-md hover:opacity-90 transition text-left bg-[#36454F]">
                      link2
                    </button>
                    <button className="px-4 py-2 text-white rounded-md hover:opacity-90 transition text-left bg-[#36454F]">
                      link3
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col w-full md:w-1/3 h-auto md:h-full">
          {/* Top Section */}
          <div className="relative h-[100vh] md:h-[57%] flex justify-center items-center bg-[#f5f5f5]">
            {isLoading && (
              <div className="absolute inset-0 flex justify-center items-center bg-[#f5f5f5] text-gray-600 font-mono text-sm z-10">
                Please wait, loading the latest stats...
              </div>
            )}
            <iframe
              src="https://lookerstudio.google.com/embed/reporting/2e58763a-6a44-4843-a177-451c96c2b0b2/page/u35cF"
              width="100%"
              height="100%"
              className="border-0 rounded-none md:h-full"
              onLoad={() => setIsLoading(false)}
            ></iframe>
          </div>

          {/* Bottom Section */}
          <div
            className="relative h-auto md:h-[43%] flex flex-col justify-start items-start text-left bg-[#eeeeee]"
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

              <div className="text-black text-sm sm:text-sm md:text-base lg:text-[14px] xl:text-[15px] leading-relaxed">
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

            {/* Floating Scroll Button */}
            {isScrollable && (
              <button
                onClick={scrollToEndOrTop}
                className="sticky bottom-3 left-[calc(100%-3rem)] flex items-center justify-center w-9 h-9 rounded-full bg-white/30 border border-[#395752]/60 text-[#395752] shadow-md hover:bg-white hover:shadow-lg transition cursor-pointer"
              >
                {isAtBottom ? (
                  <ChevronUp size={18} />
                ) : (
                  <ChevronDown size={18} />
                )}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
