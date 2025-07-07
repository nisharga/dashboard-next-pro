"use client";
import { useEffect, useState } from "react";

const ScrollToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > window.innerHeight * 1.5); // show after scrolling 300px
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    showButton && (
      <button
        onClick={scrollToTop}
        style={{
          position: "fixed",
          bottom: "30px",
          right: "30px",
          backgroundColor: "#fff",
          border: "none",
          borderRadius: "50%",
          padding: "12px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
          cursor: "pointer",
          zIndex: 1000,
          transition: "opacity 0.3s ease-in-out",
        }}
        aria-label="Scroll to top"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 8 10"
          fill="#ff0000"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.39863 4.99299L7.58613 8.18049C7.80645 8.40081 7.80645 8.75706 7.58613 8.97503L7.05645 9.50471C6.83613 9.72503 6.47988 9.72503 6.26191 9.50471L4.0002 7.24768L1.74082 9.50706C1.52051 9.72737 1.16426 9.72737 0.946289 9.50706L0.414258 8.97737C0.193945 8.75706 0.193945 8.40081 0.414258 8.18284L3.60176 4.99534C3.82207 4.77268 4.17832 4.77268 4.39863 4.99299ZM3.60176 0.492993L0.414258 3.68049C0.193945 3.90081 0.193945 4.25706 0.414258 4.47502L0.943945 5.00471C1.16426 5.22502 1.52051 5.22502 1.73848 5.00471L3.99785 2.74534L6.25723 5.00471C6.47754 5.22502 6.83379 5.22502 7.05176 5.00471L7.58144 4.47502C7.80176 4.25471 7.80176 3.89846 7.58144 3.68049L4.39395 0.492993C4.17832 0.272681 3.82207 0.272681 3.60176 0.492993Z"
            fill="#ff0000"
          />
        </svg>
      </button>
    )
  );
};

export default ScrollToTopButton;
