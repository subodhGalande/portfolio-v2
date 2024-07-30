const Hero = () => {
  return (
    <>
      <main className=" h-screen w-full flex justify-center items-center">
        <article className="flex gap-4 flex-col justify-between text-grey text-center">
          <p className="text-base">
            Hey,{" "}
            <span className="font-base font-sans font-medium text-lg">
              I'm Subodh!
            </span>{" "}
          </p>
          <div>
            <h1 className="text-4xl max-w-lg mx-auto font-bold uppercase font-heading leading-9 tracking-tight ">
              I bring ideas to life with
              <span className="text-white"> code</span>.
            </h1>
          </div>

          <p className="text-base pb-5 leading-6 ">
            I'm a 24-year-old UI/UX designer with over 5 years of experience in
            creating and maintaining design systems.
          </p>

          <button className="btn-primary w-fit mx-auto  ">
            Download Resume
          </button>
        </article>
      </main>
    </>
  );
};

export default Hero;
