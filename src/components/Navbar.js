import React, {useEffect, useState} from "react";

const links = [
  {label: "Profile", href: "#profile"},
  {label: "Expertise", href: "#expertise"},
  {label: "Experience", href: "#experience"},
  {label: "Work", href: "#work"},
  {label: "Contact", href: "#contact"}
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, {passive: true});
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`lux-nav${scrolled ? " scrolled" : ""}`}>
      <div className="lux-nav-inner">
        <a href="#top" className="lux-logo">
          ER
        </a>
        <nav>
          <ul className="lux-nav-links">
            {links.map(l => (
              <li key={l.href}>
                <a href={l.href}>{l.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <a href="#contact" className="lux-nav-cta">
          Let's Talk
        </a>
      </div>
    </header>
  );
}
