import Timeline from "./elements/Timeline";

const Experience = () => {
  return (
    <section id="exp" className="scroll-m-44 pt-28 sm:pt-32 text-grey max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="heading">
          Where I've Been Paid to{" "}
          <span className="relative inline-block group/break cursor-pointer text-white">
            <span className="inline-block origin-bottom-left snap-break-word">
              Break
            </span>{" "}
            & Fix Things
          </span>
          .
        </h2>
        <p className="subheading">
          Capgemini. Client work. Freelance builds. Two years of shipping things that had to work.
        </p>
      </div>

      <div className="mx-auto w-full">
        <Timeline />
      </div>
    </section>
  );
};

export default Experience;
