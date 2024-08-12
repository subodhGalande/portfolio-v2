import Timeline from "./elements/Timeline";

const Experience = () => {
  return (
    <>
      <div
        id="exp"
        className=" scroll-m-44 flex mx-auto flex-col justify-between text-grey mt-44"
      >
        <h1 className="heading">
          Tracing My Path, The Evolution of{" "}
          <strong className="text-white">My experience</strong> and Growth{" "}
        </h1>
        <p className="subheading">
          Development wasn’t a linear career; these were my stepping stones.
        </p>
      </div>
      <div className="mx-auto w-full sm:flex sm:justify-center">
        <Timeline />
      </div>
    </>
  );
};

export default Experience;
