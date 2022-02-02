import GIF from '../preloader/preloader_gif.gif';
import '../preloader/preloader.css'
import React from "react";
function PreLoader() {
  return (
    <div className='gif'>
      <img src={GIF} alt=""/>
      </div>
  );
}

export default PreLoader;
