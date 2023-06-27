import React from 'react';
import { useSearchParams } from 'react-router-dom';

function UseSearchPharams() {
  let [searchParams, setSearchParams] = useSearchParams({});

  const handleButtonClick = (type) => {
    setSearchParams({ type });
  };

  return (
    <div className='d-flex justify-content-center mt-5 '>
      <button className="btn btn-outline-primary me-5"  onClick={() => handleButtonClick('A')}>A</button>
      <button className="btn btn-outline-warning me-5" onClick={() => handleButtonClick('B')}>B</button>
      <button className="btn btn-outline-info me-5"onClick={() => setSearchParams({})}>C</button>
    </div>
  );
}

export default UseSearchPharams;
