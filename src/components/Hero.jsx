const DOB = new Date("2000-08-21");

function getAge() {
  const today = new Date();
  let age = today.getFullYear() - DOB.getFullYear();

  const hasBirthdayPassed =
    today.getMonth() > DOB.getMonth() ||
    (today.getMonth() === DOB.getMonth() && today.getDate() >= DOB.getDate());

  if (!hasBirthdayPassed) {
    age--;
  }

  return age;
}

const Hero = () => {
  return (
    <>
      <main
        id="home"
        className=" h-screen w-full flex justify-center items-center"
      >
        <article className="flex sm:mt-20 gap-4 sm:gap-5 flex-col justify-between text-grey text-center">
          <p className="text-base sm:text-lg">
            Hey,{" "}
            <strong className="font-base sm:text-xl font-sans font-medium text-lg">
              I'm Subodh!
            </strong>{" "}
          </p>

          <h1 className="text-4xl  sm:text-7xl max-w-3xl mx-auto font-bold uppercase font-heading leading-9 tracking-tight sm:tracking-normal ">
            I Weave Your Dreams into
            <strong className="text-white"> Digital Wonders</strong>.
          </h1>
          <p className="text-base sm:text-lg max-w-2xl mx-auto pb-5 sm:pb-10 leading-6 ">
            I’m a {getAge()}-Year-Old Developer with a Year of Experience,
            Blending Creativity and Code to Shape Unique Web Adventures
          </p>
          <a
            href="/Subodh Galande.pdf"
            download="Subodh Galande - Resume"
            className="btn-primary sm:text-base sm:px-7 sm:py-3 w-fit mx-auto  "
          >
            Download Resume
          </a>
        </article>
      </main>
    </>
  );
};

export default Hero;
