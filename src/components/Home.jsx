import React from 'react';
import Description from './Description';
import Screenshots from './Screenshots';
import Events from './Events';
import './styledComponents/Home.scss';

function Home() {
  return (
    <div className="container">
      <Description />
      <Screenshots />
      <Events />
    </div>
  );
}
export default Home;
