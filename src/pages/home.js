import React from 'react';

import SiteWrapper from '../components/sites.js';

function Home() {
  return (
    <div id='home'>
      <header>
        <h1>All the best apps,<br />all in one place.</h1>
        <img src='assets/images/hero.png' />
      </header>
      <SiteWrapper id="Utility"/>
    </div>
  );
}

export default Home;