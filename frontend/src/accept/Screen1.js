import React from 'react';

import CardList from './CardList';


const Screen1 = () => {
  // Sample data for cards
 
  return (
    <div style={{ width: '100%', height: '1100px', background: 'lightgreen' }}>
      
      <CardList selectedComponent={'component1'}/>
      
      
    </div>
  );
};

export default Screen1;