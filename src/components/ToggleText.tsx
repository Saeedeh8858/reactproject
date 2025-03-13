import { useState, useRef } from "react";

export const ToggleText = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const toggleText = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <div className="container">
<div className="p-3 my-md-5 my-2 border rounded-1">
      {/* Dynamic height using ref */}
      <div
        className="toggle-text overflow-hidden position-relative"
        style={{
          maxHeight: isExpanded ? `${contentRef.current?.scrollHeight}px` : "100px",
          transition: "max-height 0.4s ease-in-out"
        }}
      >
        <div ref={contentRef}>
          <p className="style-17-lh35 --gray8 mb-0">
          Discover a world of style at DAYANSHOP! From trendy women’s clothing to stylish men’s wear and must-have accessories,
           we bring you the latest fashion at unbeatable prices. Enjoy hassle-free shopping, exclusive discounts, and fast delivery
            right to your doorstep. Shop now and elevate your wardrobe with just a click!
            Discover a world of style at DAYANSHOP! From trendy women’s clothing to stylish men’s wear and must-have accessories,
           we bring you the latest fashion at unbeatable prices. Enjoy hassle-free shopping, exclusive discounts, and fast delivery
            right to your doorstep. Shop now and elevate your wardrobe with just a click!
            Discover a world of style at DAYANSHOP! From trendy women’s clothing to stylish men’s wear and must-have accessories,
           we bring you the latest fashion at unbeatable prices. Enjoy hassle-free shopping, exclusive discounts, and fast delivery
            right to your doorstep. Shop now and elevate your wardrobe with just a click!
            Discover a world of style at DAYANSHOP! From trendy women’s clothing to stylish men’s wear and must-have accessories,
           we bring you the latest fashion at unbeatable prices. Enjoy hassle-free shopping, exclusive discounts, and fast delivery
            right to your doorstep. Shop now and elevate your wardrobe with just a click!
          </p>
        </div>
      </div>

      {/* Toggle Button */}
      <button
        className="mt-1 w-100 border rounded-1 p-4 text-9e btn-toggle-text bg-f5 style-17-lh35"
        onClick={toggleText}
      >
        {isExpanded ? "Less" : "More"}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`iconSvg gray ${isExpanded ? "rotate" : ""}`}
          stroke="currentColor"
          width="10.828"
          height="6.828"
          viewBox="0 0 10.828 6.828"
        >
          <path d="M8,4,4,0,0,4" transform="translate(9.414 5.414) rotate(180)" />
        </svg>
      </button>
    </div>
    </div>
    
  );
};
