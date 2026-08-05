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
            Hello,{" "}
            <strong className="font-base sm:text-xl font-sans font-medium text-lg text-white">
              I'm Subodh Galande!
            </strong>
          </p>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl max-w-4xl mx-auto font-bold uppercase font-heading leading-tight tracking-tight sm:tracking-normal text-grey">
            Full-Stack Engineer Building{" "}
            <strong className="text-white">Scalable Web Products</strong>.
          </h1>
          <p className="text-base sm:text-lg max-w-2xl mx-auto pb-5 sm:pb-10 leading-relaxed text-grey">
            Software Engineer with 2.5+ years of experience specializing in React, Next.js, and modern JavaScript ecosystems. Blending clean architecture with high-craft responsive UI.
          </p>
          <a
            href="/Subodh Galande.pdf"
            download="Subodh Galande - Resume"
            aria-label="Download Subodh Galande's Resume PDF"
            className="btn-primary sm:text-base sm:px-7 sm:py-3 w-fit mx-auto transition-transform hover:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            Download Resume
          </a>
        </article>
      </main>
    </>
  );
};

export default Hero;
