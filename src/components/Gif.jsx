import { useState } from "react";
import { TbClipboardCheck, TbLink } from "react-icons/tb";

export default function Gif({ gif, className }) {
  const [showCopy, setShowCopy] = useState(false);
  const buttonContents = {
    default: (
      <>
        <TbLink className="text-4xl" /> Copy URL
      </>
    ),
    copied: (
      <>
        <TbClipboardCheck className="text-4xl" /> Copied!
      </>
    ),
  };
  const [buttonContent, setButtonContent] = useState(buttonContents.default);

  function handleMouseEnter() {
    setShowCopy(true);
  }
  function handleMouseLeave() {
    setShowCopy(false);
    setButtonContent(buttonContents.default);
  }
  function handleCopy(e) {
    navigator.clipboard.writeText(gif.images.original.url);
    setButtonContent(buttonContents.copied);
  }

  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="relative">
      <img
        src={gif.images.fixed_height.url}
        alt={gif.title}
        className={`cursor-pointer transition-all ${
          !showCopy ? "" : "filter blur-sm brightness-75"
        } ${className}`}
      />
      <button
        onClick={handleCopy}
        className={`top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 absolute text-white rounded flex items-center flex-col ${
          showCopy ? "" : "hidden"
        }`}
      >
        {buttonContent}
      </button>
    </div>
  );
}
