import Image from "next/image";
import React from "react";

interface Props {
  src: string;
  title: string;
  description: string;
}

const ProjectCard = ({ src, title, description }: Props) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61]">
      <Image
        src={src}
        alt={title}
        width={1000}
        height={1000}
        className="w-full max-h-[550px] sm:max-w-full sm:h-[650px] lg:h-[700px] object-cover"
        // className="w-full sm:h-[800px] max-h-[650px] object-cover"
      />
      <div className="relative p-4">
        <h2 className="sm:text-2xl text-xl font-semibold text-white">
          {title}
        </h2>
        <p className="mt-2 text-gray-300">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
