import ProjectCard from "./elements/ProjectCard";

const Projects = () => {
  return (
    <>
      <div className="flex flex-col justify-between text-grey">
        <h1 className="text-4xl text-center  sm:text-7xl max-w-5xl mx-auto font-bold uppercase font-heading leading-9 tracking-tight sm:tracking-normal">
          I WISH I HAD DOCUMENTED ALL{" "}
          <strong className="text-white">MY PROJECTS</strong> LIKE THIS.
        </h1>
        <p className="text-lg leading-7 sm:text-2xl text-center pt-6">
          Here are few of my projects, feel free to share your feedbacks.
        </p>
      </div>

      <ProjectCard />
    </>
  );
};

export default Projects;
