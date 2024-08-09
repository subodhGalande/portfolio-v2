import Timeline from "../Timeline";

const Experience = () => {
  return (
    <>
      <div className="flex mx-auto flex-col justify-between text-grey mt-44">
        <h1 className="heading">
          SHAPED BY <strong className="text-white">MY JOURNEY</strong>, NEVER
          FORGETTING WHERE I STARTED.
        </h1>
        <p className="subheading">
          Designing wasn’t a linear career; these were my stepping stones.
        </p>
      </div>
      <div className="mx-auto w-full sm:flex sm:justify-center">
        <Timeline />
      </div>
    </>
  );
};

export default Experience;
