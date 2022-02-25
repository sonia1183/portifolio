import React from "react";
import './navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubAlt, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faCode, faCodeFork } from "@fortawesome/free-solid-svg-icons";

function Navbar(){
    return(<>
    <div class="mainbox">
  <input type="checkbox" id="check"/>
  <label for="check">S</label>
  <div class="media-icons">
    <div className="icon"><a href="https://github.com/sonia1183"><FontAwesomeIcon icon={faGithubAlt}/></a></div>
    <div className="icon"><a href="https://www.linkedin.com/in/sonia-rani-0b0b07201/"><FontAwesomeIcon icon={faLinkedinIn}/></a></div>
    <div className="icon"><a href="https://leetcode.com/sonia2002/"><FontAwesomeIcon icon={faCode}/></a></div>
    <div className="icon"><a href="#"><FontAwesomeIcon icon={faCodeFork}/></a></div>
  </div>
</div>
    </>);
}
export default Navbar;