import React from "react";

function Elips(className) {
  return (
    <svg
      className={'absolute left-0 w-[300px] top-[5px] z-[-1]'}
      width="300"
      height="300"
      viewBox="0 0 822 898"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity="0.33" filter="url(#filter0_f_256_946)">
        <circle cx="326.5" cy="402.5" r="275.5" fill="#e5989b" />
      </g>
      <defs>
        <filter
          id="filter0_f_256_946"
          x="-169"
          y="-93"
          width="991"
          height="991"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="110"
            result="effect1_foregroundBlur_256_946"
          />
        </filter>
      </defs>
    </svg>
  );
}

export default Elips;
