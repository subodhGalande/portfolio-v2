import ProjectCard from "./elements/ProjectCard";

const Projects = () => {
  return (
    <>
      <div
        id="projects"
        className="flex scroll-m-40 flex-col justify-between mt-44 text-grey"
      >
        <h1 className="heading">
          Unveiling <strong className="text-white"> My Projects,</strong> The
          Playful Journey of Innovation and Fun.
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
