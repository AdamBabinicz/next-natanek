import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div className="flex flex-col items-center justify-center " id="fototeka">
      <h2 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        Fototeka
      </h2>
      <div className="h-full w-full grid grid-cols-1 md:grid-cols-3 gap-10 px-10">
        <ProjectCard
          src="/assets/2.jpg"
          title="W domu"
          description="22.11.2023'."
        />
        <ProjectCard
          src="/assets/3.jpg"
          title="Pełne oprzyrządowanie do kąpieli"
          description="05.02.2024'."
        />
        <ProjectCard
          src="/assets/4.jpg"
          title="Natanek gotuje obiadek"
          description="16.03.2024'."
        />
        <ProjectCard
          src="/assets/5.jpg"
          title="Natanek lubi kabanoski i pomidorki"
          description="21.03.2024'."
        />
        <ProjectCard
          src="/assets/6.jpg"
          title="Na siłce w pokoju dla dzieci"
          description="05.04.2024'."
        />
        <ProjectCard
          src="/assets/7.jpg"
          title="Chwila zadumy"
          description="09.04.2024'."
        />
      </div>
    </div>
  );
};

export default Projects;
