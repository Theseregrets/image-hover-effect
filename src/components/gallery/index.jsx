import React, { useEffect, useState, useRef, useContext } from "react";
import cn from "classname";
import "./style.scss";
import { CursorContext } from "../../custom-cursor/cursorManager";

const images = [
  "https://images.pexels.com/photos/1075776/pexels-photo-1075776.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  "https://images.pexels.com/photos/4355671/pexels-photo-4355671.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  "https://images.pexels.com/photos/2853909/pexels-photo-2853909.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  "https://images.pexels.com/photos/3828245/pexels-photo-3828245.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
];

function GalleryItem({ src }) {
  const ref = useRef(null);
  const mouseContext = useContext(CursorContext);
  const [clipMaskRadius, setClipMaskRadius] = useState(0);
  const [clipMask, setClipMask] = useState({ x: 0, y: 0 });

  const [reveal, setReveal] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setReveal(true);
    }, 100);
  }, []);

  return (
    <div
      className={cn("gallery-item-wrapper", { "is-reveal": reveal })}
      ref={ref}
      onMouseEnter={() => mouseContext.setSize("hide")}
      onMouseLeave={() => mouseContext.setSize("small")}
    >
      <div className="gallery-item">
        <div
          className="gallery-item-image sepia"
          style={{ backgroundImage: `url(${src})` }}
        ></div>
        <div className="gallery-item">
          <div
            className="gallery-item-image masked"
            style={{ backgroundImage: `url(${src})` }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default function Gallery() {
  return (
    <div className="gallery">
      {images.map(src => (
        <GalleryItem key={src} src={src} />
      ))}
    </div>
  );
}
