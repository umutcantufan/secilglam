import React from 'react';

const PageContainer = ({ children }) => {
  return (
    <div className='w-10/12 m-auto pb-24'>
      {children}
    </div>
  );
}

export default PageContainer;
