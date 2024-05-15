import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  const style = {
    background: "linear-gradient(to right, #9F7AEA, #00F3FF)",
    WebkitBackgroundClip: "text",
    color: "transparent",
  };

  return (
    <div className="flex flex-col items-center justify-center" id="fototeka">
      <h2 className="text-[40px] font-semibold relative py-10" style={style}>
        Fototeka
      </h2>
      <div className="h-full w-full grid grid-cols-1 md:grid-cols-3 gap-10 px-10">
        <ProjectCard
          src="/assets/8.webp"
          title="Przed domem"
          description="05.05.2024'."
        />
        <ProjectCard
          src="/assets/7.jpg"
          title="Chwila zadumy"
          description="09.04.2024'."
        />
        <ProjectCard
          src="/assets/6.jpg"
          title="Na siłce w&nbsp;pokoju dla dzieci"
          description="05.04.2024'."
        />
        <ProjectCard
          src="/assets/5.jpg"
          title="Natanek lubi kabanoski i&nbsp;pomidorki"
          description="21.03.2024'."
        />
        <ProjectCard
          src="/assets/4.jpg"
          title="Natanek gotuje obiadek"
          description="16.03.2024'."
        />
        <ProjectCard
          src="/assets/3.jpg"
          title="Pełne oprzyrządowanie do kąpieli"
          description="05.02.2024'."
        />
      </div>
    </div>
  );
};

export default Projects;
