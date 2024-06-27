import process1 from "../assets/process1.jpeg";
import process2 from "../assets/process2.jpeg";
import process3 from "../assets/process3.jpeg";
import process4 from "../assets/process4.jpeg";
import process5 from "../assets/process5.jpeg";

const Process = () => {
  const items = [
    {
      id: 1,
      title: "Research",
      description:
        "The pursuit of research is fundamental to human advancement. It is through research that we uncover the unknown, solve pressing problems, and lay the groundwork for future innovations.",
      src: process1,
    },
    {
      id: 2,
      title: "Analysis",
      description:
        "A comprehensive design analysis can identify strengths, weaknesses, and opportunities for improvement, leading to more effective and impactful designs.",
      src: process2,
    },
    {
      id: 3,
      title: "Design",
      description:
        "Develop detailed designs and specifications. This can include digital renderings, technical drawings, and 3D models.",
      src: process3,
    },
    {
      id: 4,
      title: "Development",
      description:
        "Begin the production or development process. This may involve working with manufacturers, developers, or other professionals to bring the design to life.",
      src: process4,
    },
    {
      id: 5,
      title: "Implementation",
      description:
        "Implementation is a complex and dynamic process that re- quires careful planning, coordination, and execution to ensure that the final product meets all design specifications and user needs. Effective implementation involves collaboration among various teams and stakeholders, continuous monitoring, and a commitment to quality and improvement.",
      src: process5,
    },
  ];
  return (
    <div>
      <div className="flex items-center justify-center">
        <h2 className="rounded-b-full text-center text-3xl font-bold md:text-6xl mb-10 ">
          Our Processes
        </h2>
      </div>
      <div className="flex flex-wrap justify-center gap-5  w-100% ">
        {items.map((item) => (
          <div key={item.id} className="flex flex-col gap-2 justify-center w-96 text-white items-center p-5 border-2 hover:scale-105 hover:cursor-pointer duration-150">
            <img src={item.src} alt="" className="w-40"/>
            <div className="bg-[#3A3F57] py-2">
              <h3 className="text-2xl text-orange-500 text-center">{item.title}</h3>
              <p className="text-center ">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Process;
