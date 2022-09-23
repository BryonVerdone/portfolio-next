import React from 'react';
import ProjectCard from '../components/ProjectCard';
import PageHeading from '../components/PageHeading';
const projects = () => {
  return (
    <>
      <PageHeading title={'Projects'} />
      <section className='mx-auto flex gap-3 flex-wrap justify-center px-2'>
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </section>
    </>
  );
};

export default projects;
