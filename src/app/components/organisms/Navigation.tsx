import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "../atoms/ThemeToggle";

const navItems = [
  { label: "Home", href: "#" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Certificates", href: "#certificates" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const sectionIds = navItems.map((item) => item.href.replace("#", "")).filter(Boolean);

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const scrollTimeoutRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    const handleScroll = () => {
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
      scrollTimeoutRef.current = setTimeout(() => {
        setIsScrolled(window.scrollY > 50);
      }, 10);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    };
  }, []);

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    const REFERENCE_Y = 140; // px from top of viewport, below the floating nav
    let ticking = false;

    const updateActiveSection = () => {
      ticking = false;
      let current = "";
      for (const el of sections) {
        if (el.getBoundingClientRect().top <= REFERENCE_Y) {
          current = el.id;
        } else {
          break;
        }
      }
      setActiveSection(current);
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(updateActiveSection);
    };

    updateActiveSection();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const scrollToSection = useCallback((href: string) => {
    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setActiveSection("");
    } else {
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  }, []);

  const isActive = (href: string) =>
    href === "#" ? activeSection === "" && !isScrolled : activeSection === href.replace("#", "");

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-3 sm:top-4 inset-x-0 mx-auto z-50 w-[calc(100%-1.5rem)] sm:w-fit max-w-6xl"
      >
        <div
          className={`flex items-center justify-between gap-2 sm:gap-6 rounded-full border transition-all duration-300 ${
            isScrolled
              ? "bg-glass-bg backdrop-blur-xl border-glass-border shadow-lg px-3 py-2 sm:px-5 sm:py-2.5"
              : "bg-glass-bg/70 backdrop-blur-md border-transparent px-4 py-3 sm:px-6 sm:py-3.5"
          }`}
        >
          {/* Logo */}
          <button
            onClick={() => scrollToSection("#")}
            className="shrink-0 hover:scale-105 transition-transform duration-200 focus-visible:outline-2 focus-visible:outline-ring rounded-full"
            aria-label="Scroll to top"
          >
            <img
              src="/images/Rajakarungan1.png"
              alt="Logo"
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full object-cover shadow-lg border-2 border-primary/60"
            />
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className={`relative px-3.5 py-2 text-sm font-medium rounded-full transition-colors duration-200 ${
                  isActive(item.href)
                    ? "text-primary-foreground"
                    : "text-foreground/80 hover:text-primary"
                }`}
              >
                {isActive(item.href) && (
                  <motion.span
                    layoutId="nav-active-pill"
                    className="absolute inset-0 rounded-full bg-primary -z-10"
                    transition={{ type: "spring", stiffness: 400, damping: 32 }}
                  />
                )}
                {item.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <ThemeToggle className="hidden sm:flex" />

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-secondary text-foreground shadow-sm hover:scale-105 transition-transform"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-card shadow-2xl z-40 md:hidden border-l border-border"
          >
            <div className="flex flex-col p-8 pt-24 gap-6">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className={`text-2xl font-display font-semibold text-left transition-colors ${
                    isActive(item.href) ? "text-primary" : "text-foreground/80 hover:text-primary"
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-6 border-t border-border flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Theme</span>
                <ThemeToggle />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu Backdrop */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsMobileMenuOpen(false)}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-30 md:hidden"
          />
        )}
      </AnimatePresence>
    </>
  );
}
