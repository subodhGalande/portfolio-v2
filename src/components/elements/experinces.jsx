import Timeline from "../Timeline";

const Experience = () => {
  const experiences = [
    {
      title: "Software Engineer",
      company: "Tech Company A",
      duration: "Jan 2020 - Present",
      description: "Developed web applications using React and Node.js.",
    },
    {
      title: "Frontend Developer",
      company: "Startup B",
      duration: "Jun 2018 - Dec 2019",
      description: "Built responsive websites with HTML, CSS, and JavaScript.",
    },
    {
      title: "Intern",
      company: "Company C",
      duration: "Jan 2018 - May 2018",
      description:
        "Assisted in the development of internal tools using Python.",
    },
  ];

  return (
    <>
      <div className="flex flex-col justify-between text-grey mt-36">
        <h1 className="text-4xl text-center max-w-lg mx-auto font-bold uppercase font-heading leading-9 tracking-tight">
          SHAPED BY MY JOURNEY, NEVER FORGETTING WHERE I STARTED.
        </h1>
        <p className="text-lg leading-7 text-center pt-6">
          Designing wasn’t a linear career; these were my stepping stones.
        </p>
      </div>
      <Timeline />
    </>
  );
};

export default Experience;
