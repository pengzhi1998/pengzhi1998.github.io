import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Education from '../components/GeneralInfo/Education';
import Experience from '../components/GeneralInfo/Experience';
// import Skills from '../components/GeneralInfo/Skills';
// import Courses from '../components/GeneralInfo/Courses';
// import References from '../components/GeneralInfo/References';

// import courses from '../data/GeneralInfo/courses';
import degrees from '../data/GeneralInfo/degrees';
import positions from '../data/GeneralInfo/positions';

const sections = [
  'Education',
  'Experience',
  'Skills',
  'Courses',
  'References',
];

const GeneralInfo = () => (
  <Main
    title="GeneralInfo"
    description="Pengzhi Yang's GeneralInfo."
  >
    <article className="post" id="GeneralInfo">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="GeneralInfo">General Info</Link></h2>
          <div className="link-container">
            {sections.map((sec) => (
              <h4 key={sec}>
                <a href={`#${sec.toLowerCase()}`}>{sec}</a>
              </h4>))}
          </div>

        </div>
      </header>
      <Education data={degrees} />
      <Experience data={positions} />

    </article>
  </Main>
);

export default GeneralInfo;
