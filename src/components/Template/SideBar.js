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
        <p><a href="pengzhi1998:P.Yang-4@student.tudelft.nl">P.Yang-4@student.tudelft.nl</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>Greetings!</h2>
      <p>I&apos;ve been always open to new things!
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/GeneralInfo') ? <Link to="/GeneralInfo" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
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
