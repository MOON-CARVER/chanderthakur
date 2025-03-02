"use client";
import { useState, useEffect } from "react";
import { InstagramEmbed } from 'react-social-media-embed';
import React from 'react';

export default function Instagram({ containerStyle }: { containerStyle?: React.CSSProperties }) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      {isClient && (
        <div style={containerStyle} className="custom-instagram-embed">
          <InstagramEmbed url="https://www.instagram.com/p/CXqBaawsX2c/" width={328} />
        </div>
      )}
    </div>
  );
}
