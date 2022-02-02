import GIF from '../preloader/preloader_gif.gif';
import Main from '../main_page/main';
import React, { useEffect, useState } from "react";
import "./preloader.css";

function PreLoader() {
  const [, setData] = useState([]);
  const [loading, setloading] = useState(undefined);
  useEffect(() => {
    setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((json) => {
          console.log(json);
          setData(json);
          setloading(true);
        });
    }, 3000);
  }, []);

  return (
    <>
          {!loading ? (
           <div className='gif spinner'>
                 <img src={GIF} alt=""/>
                 </div>
          ) : (
            <Main/>
          )}
        </>
  );
}

export default PreLoader;