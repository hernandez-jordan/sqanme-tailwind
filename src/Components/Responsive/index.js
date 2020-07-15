import React from 'react';

const screens = {
  screens: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
  }
}
const screen_sm = 640;
const screen_md = 768;
const screen_lg = 1024;
const screen_xl = 1280;



const Responsive = () => {
  return (
    <div>
      {children}
    </div>
  )
}

export default Response