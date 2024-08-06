import Timeline from "../Timeline";

const Experience = () => {
  return (
    <>
      <div className="flex mx-auto flex-col justify-between text-grey mt-36">
        <h1 className="text-4xl text-center max-w-lg mx-auto font-bold uppercase font-heading leading-9 tracking-tight">
          SHAPED BY MY JOURNEY, NEVER FORGETTING WHERE I STARTED.
        </h1>
        <p className="text-lg leading-7 text-center pt-6">
          Designing wasn’t a linear career; these were my stepping stones.
        </p>
      </div>
      <div className="mx-auto w-10/12">
        <Timeline />
      </div>
    </>
  );
};

export default Experience;
