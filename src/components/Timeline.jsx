// eslint-disable-next-line react/prop-types

const experiences = [
  {
    role: "Design Lead",
    orgName: "NFT Project",
    duration: "(Jan '24 - Mar '24)",
    desc: "Surrounded with Web 3 people, excited to work in same domain. If Web 2, remote opportunities with product-focused teams makes me smile.",
  },
  {
    role: "Design Lead",
    orgName: "NFT Project",
    duration: "(Jan '24 - Mar '24)",
    desc: "Surrounded with Web 3 people, excited to work in same domain. If Web 2, remote opportunities with product-focused teams makes me smile.",
  },
];

const Timeline = () => {
  return (
    <>
      <div className="ml-4 mt-10">
        {/* <ol className=" relative flex flex-col w-10/12 justify-between items-center mx-auto border-s px-4 mt-10 border-grey/10">
          <li className="mb-10 ms-6   ">
            <span className=" absolute flex items-center justify-center w-4 h-4 bg-grey brightness-50  rounded-full -start-2 ring-black "></span>

            <span className=" relative -top-2 flex flex-col gap-4">
              <h3 className="flex items-center font-sans font-medium text-3xl text-white">
                Open to work
              </h3>
              <div className="flex flex-row items-center gap-2 mb-2">
                <button className=" btn-primary self-stretch "> Resume </button>
                <button className=" btn-icon bg-grey ">
                  <svg
                    className="w-7 h-7 text-black"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    height="10"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z"
                      clipRule="evenodd"
                    />
                    <path d="M7.2 8.809H4V19.5h3.2V8.809Z" />
                  </svg>
                </button>
              </div>
              <p className=" font-sans text-lg  text-grey">
                Surrounded with Web 3 people, excited to work in same domain. If
                Web 2, remote opportunities with product-focused teams makes me
                smile.
              </p>
            </span>
          </li>

          {experiences.map((exp, index) => (
            <li key={index} className="mb-10 ms-6">
              <span className=" absolute flex items-center justify-center w-4 h-4 bg-grey brightness-50 rounded-full -start-2"></span>
              <span className=" relative -top-2 flex flex-col gap-2">
                <h3 className="flex items-center font-sans font-medium text-3xl text-white">
                  {exp.role}
                </h3>

                <h2 className="pb-2 font-sans text-grey font-medium text-xl">
                  {exp.orgName} {exp.duration}
                </h2>
                <p className=" font-sans text-lg  text-grey">{exp.desc}</p>
              </span>
            </li>
          ))}
        </ol> */}
        <ul className="flex flex-col items-center mx-auto">
          <li className=" relative px-36 border-l self-end border-white/20 gap-10 w-1/2 flex justify-between  ">
            <div className=" absolute mt-2 flex items-center justify-center w-4 h-4 bg-white brightness-50  rounded-full -start-2 ring-black ring-8 "></div>{" "}
            <div className="flex flex-col gap-4">
              <h3 className=" font-sans font-medium text-3xl text-white">
                Open to work
              </h3>
              <div className="flex flex-row items-center gap-2 mb-2">
                <button className=" btn-primary self-stretch "> Resume </button>
                <button className=" btn-icon bg-grey ">
                  <svg
                    className="w-7 h-7 text-black"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    height="10"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z"
                      clipRule="evenodd"
                    />
                    <path d="M7.2 8.809H4V19.5h3.2V8.809Z" />
                  </svg>
                </button>
              </div>
              <p className=" font-sans text-lg  text-grey">
                Surrounded with Web 3 people, excited to work in same domain. If
                Web 2, remote opportunities with product-focused teams makes me
                smile.
              </p>
            </div>
          </li>
          {experiences.map((exp, index) => (
            <li
              key={index}
              className=" relative px-36 border-r self-start border-white/20 gap-10 w-1/2 mb-10 justify-between "
            >
              <div className=" absolute mt-2 items-center justify-center w-4 h-4 bg-white brightness-50  rounded-full -end-2 ring-black ring-8 "></div>{" "}
              <div className="flex flex-col gap-4 text-right">
                <h3 className=" font-sans font-medium text-3xl text-white">
                  Open to work
                </h3>
                <div className="flex flex-row items-center gap-2 mb-2">
                  <button className=" btn-primary self-stretch ">
                    {" "}
                    Resume{" "}
                  </button>
                  <button className=" btn-icon bg-grey ">
                    <svg
                      className="w-7 h-7 text-black"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="10"
                      height="10"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z"
                        clipRule="evenodd"
                      />
                      <path d="M7.2 8.809H4V19.5h3.2V8.809Z" />
                    </svg>
                  </button>
                </div>
                <p className=" font-sans text-lg  text-grey">
                  Surrounded with Web 3 people, excited to work in same domain.
                  If Web 2, remote opportunities with product-focused teams
                  makes me smile.
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Timeline;