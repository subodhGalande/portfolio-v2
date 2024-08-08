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
      <div className="mt-11 w-full max-w-7xl flex mx-auto flex-col justify-center gap-10 sm:gap-y-16 sm:flex-row sm:flex flex-wrap sm:mt-20 sm:w-3/4 sm:h-screen">
        {" "}
        {projects.map((project, index) => (
          <div
            key={index}
            className="h-1/2 w-full gap-y-4 flex flex-col sm:w-[38rem] sm:h-auto"
          >
            <img
              src={project.img}
              className="rounded-xl sm:rounded-3xl"
              alt=""
            />
            <h2 className="font-sans text-sm text-grey sm:text-lg ">
              {project.title}
            </h2>
            <h1 className="font-sans leading-8 -mt-2 font-normal text-2xl sm:text-3xl">
              {project.desc}
            </h1>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProjectCard;
