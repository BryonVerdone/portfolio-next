import React from 'react';
import PageHeading from '../components/PageHeading';
const about = () => {
  return (
    <>
      <PageHeading title={'About'} />
      <div className='mockup-window border bg-base-300'>
        <div className='flex justify-center px-4 py-16 bg-base-200'>
          Thanks for stopping by!
        </div>
      </div>
    </>
  );
};

export default about;
