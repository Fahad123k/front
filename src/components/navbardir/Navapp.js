import React from 'react';
import CustomNavbar from './navbar';


function Navapp () {
  const [activeKey, setActiveKey] = React.useState(null);

  return (
    <>
      <CustomNavbar activeKey={activeKey} onSelect={setActiveKey} />
 
    </>
  );
};

export default Navapp;