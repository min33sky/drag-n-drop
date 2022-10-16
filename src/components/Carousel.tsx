import React, { useState } from 'react';

const imageList = [
  'https://blog.kakaocdn.net/dn/dpxiAT/btqUBv6Fvpn/E8xUMncq7AVuDeOim0LrMk/img.jpg',
  'https://blog.kakaocdn.net/dn/BGT7X/btqUzvTqi5h/flp39GdJH0GU6mo7cTbbhk/img.jpg',
  'https://blog.kakaocdn.net/dn/bWnmfv/btqUBwqZvwA/3CiXGt3SR0TXoOveRJxV91/img.jpg',
  'https://blog.kakaocdn.net/dn/XsLCO/btqUL8PQLwp/NZWCU2jAYKkKSXwcohBKTK/img.jpg',
  'https://blog.kakaocdn.net/dn/bG3iVL/btqUvCZPaRL/ofIjkNWJP1mj2bOG9fie51/img.jpg',
];

const SLIDER_WIDTH = 400;
const SLIDER_HEIGHT = 400;

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [transX, setTransX] = useState(0);

  return (
    <>
      {/* Viewer */}
      <div
        className=""
        style={{
          width: SLIDER_WIDTH,
          height: SLIDER_HEIGHT,
        }}
      >
        {/* Slider */}
        <div
          className="flex"
          style={{
            transform: `translateX(${-currentIndex * SLIDER_WIDTH + transX}px)`,
          }}
        >
          {/* Slide */}
          {imageList.map((url, i) => (
            <div key={i} className="flex-shrink-0">
              <img src={url} alt="img" width={SLIDER_WIDTH} draggable={false} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
