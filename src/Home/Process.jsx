import { Chrono } from "react-chrono";

const Process = () => {
  const items = [
    {
      cardTitle: "Research",
      cardSubtitle:
        "The pursuit of research is fundamental to human advancement. It is through research that we uncover the unknown, solve pressing problems, and lay the groundwork for future innovations.",
      media: {
        type: "IMAGE",
        source: {
          url: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT5iCrtK2yN_XyKjPNCInDukXVquQcI96bWJSQ6zcY2gvbQf8SC",
        },
      },
    },
    {
      cardTitle: "Analysis",
      cardSubtitle:
        "A comprehensive design analysis can identify strengths, weaknesses, and opportunities for improvement, leading to more effective and impactful designs.",
      media: {
        type: "IMAGE",
        source: {
          url: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSRh32Eu6o5HC_6Do2NhJjJCvHwqgH7jgl3ttPNBBTiZng1hsOj",
        },
      },
    },
    {
      cardTitle: "Design",
      cardSubtitle:
        "Develop detailed designs and specifications. This can include digital renderings, technical drawings, and 3D models.",
      media: {
        type: "IMAGE",
        source: {
          url: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcS2MUwUEB1P4lm8_seq6nqC-juv6nOdSGWTyu3tLYGgxGe8jGC6",
        },
      },
    },
    {
      cardTitle: "Development",
      cardSubtitle:
        "Begin the production or development process. This may involve working with manufacturers, developers, or other professionals to bring the design to life.",
      media: {
        type: "IMAGE",
        source: {
          url: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQndbBRNu-_eNuo3s2UOJiXxCpzo8C3r3YlqUxiIrAsQApV17e1",
        },
      },
    },
    {
      cardTitle: "Implementation",
      cardSubtitle:
        "Implementation is a complex and dynamic process that re- quires careful planning, coordination, and execution to ensure that the final product meets all design specifications and user needs. Effective implementation involves collaboration among various teams and stakeholders, continuous monitoring, and a commitment to quality and improvement.",
      media: {
        type: "IMAGE",
        source: {
          url: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQOy_MNYWQz6yMToRJHiEcIc8uVAZm1J5ec3WrNh08Uthz6K_w-",
        },
      },
    },
  ];
  return (
    <div>
      <div className="flex justify-center items-center">
      <h2 className="text-center text-6xl font-bold lg:p-32 lg:bg-orange-500 rounded-b-full">Our Processes</h2></div>
      <div>
        <Chrono
          items={items}
          disableToolbar="true"
          highlightCardsOnHover="true"
          fontSizes={{
            cardTitle: "2rem",
            title: "1rem",
            cardSubtitle: "1.25rem",
            cardText: "50rem",
          }}
          theme={{
            primary: "orange",
            secondary: "yellow",
            titleColor: "black",
          }}
          mode="VERTICAL_ALTERNATING"
          mediaHeight="500"
          itemWidth="100"
        />
      </div>
    </div>
  );
};

export default Process;
