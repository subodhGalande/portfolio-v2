const ProjectCard = () => {
  const projects = [
    {
      img: "/nft.png",
      title: "NFT landing page",
      desc: "Web3: NFT Landing page design concept",
      links: {
        github: "link",
        direct: "link",
      },
    },
    {
      img: "/nft.png",
      title: "NFT landing page",
      desc: "Web3: NFT Landing page design concept",
      links: {
        github: "link",
        direct: "link",
      },
    },
  ];

  return (
    <>
      {projects.map((project, index) => (
        <div key={index} className="h-1/2 w-full">
          <img src={project.img} className="rounded-xl aspect-video" alt="" />
          <h2 className="font-sans text-sm text-grey pt-4 ">{project.title}</h2>
          <h1 className="font-sans pt-2 leading-8 font-normal text-2xl">
            {project.desc}
          </h1>
        </div>
      ))}
    </>
  );
};

export default ProjectCard;
