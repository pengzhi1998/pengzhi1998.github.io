import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={"Pengzhi Yang's personal website. New York based Stanford ICME graduate, "
    + 'co-founder and CTO of Arthena, and YC Alumni.'}
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/">What do I believe in?</Link></h2>
          <p>
            To live is to risk it all -- Rick and Morty
          </p>
        </div>
      </header>
      <p> Hi Amigo! Happy to see you here! </p>
      <p>
        I&apos;m Pengzhi, a big fan of robotics, AI and CS. I&apos;m currently a <a href="https://www.tudelft.nl/onderwijs/opleidingen/masters/cs/msc-computer-science"> Tu Delft CS-AI</a> master student. Please feel free to read more <Link to="/about">about me</Link>,
        or you can check out my {' '}
        <Link to="/resume">resume</Link>, {' '}
        <Link to="/projects">projects</Link>, {' '}
        view <Link to="/stats">site statistics</Link>, {' '}
        or <Link to="/contact">contact</Link> me.
      </p>
      <p> My detailed CV could be found <a href="/files/CV-Pengzhi_Yang.pdf"> here</a>. </p>
    </article>
  </Main>
);

export default Index;
