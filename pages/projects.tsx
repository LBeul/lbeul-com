import { NextPage } from 'next';
import projects from '../data/projects';
import CardsList from '../components/CardsList';
import ProjectCard from '../components/cards/ProjectCard';

const Projects: NextPage = () => {
  return (
    <CardsList>
      {projects.map((project: any, index: number) => (
        <ProjectCard project={project} key={index} />
      ))}
    </CardsList>
  );
};

export default Projects;
