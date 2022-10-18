import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Pengzhi Yang</h2>
        <p><a href="pengzhi1998:tyypz2590477658@gmail.com">tyypz2590477658@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Pengzhi, a big fan of robotics, AI and CS.
        I am a <a href="https://www.tudelft.nl/onderwijs/opleidingen/masters/cs/msc-computer-science"> Tu Delft CS-AI</a> master student.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; PENGZHI YANG <Link to="/">pengzhi1998.github.io</Link>.</p>
    </section>
  </section>
);

export default SideBar;
