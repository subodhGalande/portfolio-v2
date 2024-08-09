import ProjectCard from "./elements/ProjectCard";

const Projects = () => {
  return (
    <>
      <div className="flex flex-col justify-between mt-44 text-grey">
        <h1 className="heading">
          I WISH I HAD DOCUMENTED ALL{" "}
          <strong className="text-white">MY PROJECTS</strong> LIKE THIS.
        </h1>
        <p className="subheading">
          Here are few of my projects, feel free to share your feedbacks.
        </p>
      </div>

      <ProjectCard />
    </>
  );
};

export default Projects;
