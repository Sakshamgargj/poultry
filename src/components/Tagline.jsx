import React from 'react';
import { useDataContext } from '../context/DataContext';

function Tagline() {
  const { tagline, loading } = useDataContext();

  const rawText = tagline?.tagline?.[0]?.line || '';
  const speed = tagline?.tagline?.[0]?.speed || 20;

  const highlightedText = rawText.replace(
    /www\.poultrydigital\.com/g,
    '<span class="text-primary">www.poultrydigital.com</span>'
  );

  return (
    <div className="select-none">
      <style>
        {`
          @keyframes marquee {
            0% {
              transform: translateX(100%);
            }
            100% {
              transform: translateX(-100%);
            }
          }

          .marquee-container {
            width: 100%;
            overflow: hidden;
            background-color: #ffffff;
            padding: 10px 0;
          }

          .marquee-text {
            display: inline-block;
            font-size: 18px;
            font-weight: bold;
            color: #404040;
            white-space: nowrap;
            animation: marquee ${speed}s linear infinite;
          }
        `}
      </style>

      <div className="marquee-container">
        <div
          className="marquee-text"
          dangerouslySetInnerHTML={{ __html: highlightedText }}
        />
      </div>
    </div>
  );
}

export default Tagline;
