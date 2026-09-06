"use client";
import { useEffect, useState } from "react";

export default function MobileFAB() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const check = () => {
      const narrow = window.matchMedia("(max-width: 767px)").matches;
      setShow(narrow && window.scrollY > 400);
    };
    check();
    window.addEventListener("scroll", check, { passive: true });
    window.addEventListener("resize", check);
    return () => {
      window.removeEventListener("scroll", check);
      window.removeEventListener("resize", check);
    };
  }, []);
  if (!show) return null;
  return (
    <a
      href="#contact"
      style={{
        position: "fixed",
        bottom: 16,
        left: 16,
        right: 16,
        zIndex: 40,
        display: "flex",
        justifyContent: "center",
        padding: 14,
        background: "var(--steel)",
        color: "#ffffff",
        fontFamily: "var(--font-heading)",
        fontSize: 16,
        textDecoration: "none",
        border: "1px solid var(--steel)",
      }}
    >
      Start a project
    </a>
  );
}
