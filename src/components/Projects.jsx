import ProjectCard from "./elements/ProjectCard";

const Projects = () => {
  return (
    <>
      <div className="flex flex-col justify-between text-grey">
        <h1 className="text-4xl text-center max-w-lg mx-auto font-bold uppercase font-heading leading-9 tracking-tight">
          I WISH I HAD DOCUMENTED ALL MY PROJECTS LIKE THIS.
        </h1>
        <p className="text-lg leading-7 text-center pt-6">
          Here are few of my projects, feel free to share your feedbacks.
        </p>
      </div>
      <div className="mt-11 flex flex-col gap-10">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </>
  );
};

export default Projects;
