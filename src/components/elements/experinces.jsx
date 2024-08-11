import Timeline from "../Timeline";

const Experience = () => {
  return (
    <>
      <div className="flex mx-auto flex-col justify-between text-grey mt-44">
        <h1 className="heading">
          Tracing My Path, The Evolution of{" "}
          <strong className="text-white">My experience</strong> and Growth{" "}
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
