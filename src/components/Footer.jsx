import { LuMail } from "react-icons/lu";
import { FaGithub, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { FiDownload } from "react-icons/fi";
import { useLenis } from "lenis/react";

const Footer = () => {
  const lenis = useLenis();

  const handleNavClick = (target) => {
    if (lenis) {
      lenis.scrollTo(target, { offset: -100 });
    } else {
      const el = document.querySelector(target);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      } else {
        window.location.hash = target;
      }
    }
  };

  return (
    <>
      <footer id="connect" className="scroll-m-24 pt-28 sm:pt-32 text-grey max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-10">
        {/* Footer Top Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading">
            Let's Make Something <span className="text-white">Worth Shipping</span>.
          </h2>
          <p className="subheading">
            Looking for full-time software engineering roles. Open to interesting problems.
          </p>
        </div>

        {/* 3-Column Minimalist Content Grid */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 py-12 border-t border-b border-white/10 relative z-20">
          {/* Column 1: Direct Contact & Resume */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-mono uppercase tracking-wider text-white font-bold">
              Contact & Resume
            </h3>
            <p className="text-xs sm:text-sm text-grey leading-relaxed">
              Have an open position or project in mind? Reach out directly via email or check my resume.
            </p>

            <div className="flex flex-wrap gap-2.5 mt-2">
              <a
                href="mailto:subodh.dsgn@gmail.com"
                aria-label="Send email to Subodh Galande"
                className="px-4 py-2.5 text-xs font-semibold bg-white text-black rounded-lg hover:bg-neutral-200 transition-colors inline-flex items-center gap-2"
              >
                <LuMail className="w-4 h-4" /> Say Hello
              </a>
              <a
                href="https://drive.google.com/uc?export=download&id=1fZSwBGsNSvEkerUuPyo72ix-kWMIw0ry"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Download Subodh Galande's Resume PDF"
                className="px-4 py-2.5 text-xs font-medium text-grey hover:text-white bg-white/5 hover:bg-white/10 rounded-lg border border-white/10 transition-colors inline-flex items-center gap-2"
              >
                <FiDownload className="w-4 h-4" /> Resume
              </a>
            </div>
          </div>

          {/* Column 2: Quick Navigation */}
          <div className="flex flex-col gap-3 md:pl-8 relative z-30">
            <h3 className="text-sm font-mono uppercase tracking-wider text-white font-bold mb-1">
              Navigation
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm">
            <li>
              <button
                type="button"
                onClick={() => handleNavClick("#projects")}
                className="hover:text-white transition-colors cursor-pointer text-left py-1 text-grey block w-full"
              >
                Projects
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={() => handleNavClick("#exp")}
                className="hover:text-white transition-colors cursor-pointer text-left py-1 text-grey block w-full"
              >
                Work
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={() => handleNavClick("#connect")}
                className="hover:text-white transition-colors cursor-pointer text-left py-1 text-grey block w-full"
              >
                Connect
              </button>
            </li>
          </ul>
          </div>

          {/* Column 3: Social Profiles */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-mono uppercase tracking-wider text-white font-bold">
              Social Profiles
            </h3>
            <div className="flex flex-col gap-2">
              <a
                href="https://github.com/subodhGalande"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Subodh Galande's GitHub Profile"
                className="p-2.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/5 text-xs text-grey hover:text-white flex items-center justify-between transition-colors"
              >
                <span className="flex items-center gap-2">
                  <FaGithub className="w-4 h-4 text-white" /> GitHub
                </span>
                <span className="font-mono text-[11px] text-grey">@subodhGalande</span>
              </a>
              <a
                href="https://www.linkedin.com/in/subodh-galande/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Subodh Galande's LinkedIn Profile"
                className="p-2.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/5 text-xs text-grey hover:text-white flex items-center justify-between transition-colors"
              >
                <span className="flex items-center gap-2">
                  <FaLinkedinIn className="w-4 h-4 text-blue-400" /> LinkedIn
                </span>
                <span className="font-mono text-[11px] text-grey">subodh-galande</span>
              </a>
              <a
                href="https://x.com/sub_0dh"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Subodh Galande's X (Twitter) Profile"
                className="p-2.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/5 text-xs text-grey hover:text-white flex items-center justify-between transition-colors"
              >
                <span className="flex items-center gap-2">
                  <FaXTwitter className="w-4 h-4 text-white" /> X (Twitter)
                </span>
                <span className="font-mono text-[11px] text-grey">@sub_0dh</span>
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Footer Copyright Line */}
      <div className="w-full text-center py-10 sm:py-12 px-4 sm:px-6 relative z-10">
        <p className="text-xs sm:text-sm font-mono text-grey/70">
          © {new Date().getFullYear()} Subodh Galande. Made with too much coffee and not enough sleep.
        </p>
      </div>
    </>
  );
};

export default Footer;
