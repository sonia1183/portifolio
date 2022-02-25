import './main.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import Slideshow from './components/slideShow';
import Navbar from './components/navbar/navbar';
function Main() {
  return (
    <div>
      <div class= 'container'>
<div class="container_content">
<div class="container_content_inner">
<div class="title">
  <h1>SONIA RANI</h1>
</div>
<div class="par">
<p>
Full stack developers are required to be proficient in front end development and back end web development, coding with HTML, CSS, and JS for the client-side and maintaining databases and infrastructure server-side.
</p>
</div>
<div class="btns">
<button class='btns_more'><a href="https://drive.google.com/file/d/1XrhSqboj40zEXpEO8c1TYcAoKpbrmlVj/view?usp=sharing">Resume <FontAwesomeIcon icon={faDownload} /></a></button>
</div>
</div>
</div>
 <div class="container_outer_img">
 <div class="img-inner">
 <Slideshow class="container_img"/>
       </div>
     </div>
  </div>
<div class="overlay"></div>
<Navbar/>
    </div>
  );
}
export default Main;
