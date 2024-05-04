import React from "react";
import {
  Frontend_skill,
  Backend_skill,
  Full_stack,
  Other_skill,
  Skill_data,
} from "@/constants";
import SkillDataProvider from "../sub/SkillDataProvider";
import SkillText from "../sub/SkillText";

const Skills = () => {
  return (
    <section
      id="filmy"
      className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden sm:pb-20"
      style={{ transform: "scale(0.9)" }}
    >
      <SkillText />
      <div
        className="flex flex-row justify-center flex-wrap mt-4 gap-5 items-center"
        style={{
          display: "flex",
          alignItems: "flex-start",
          margin: 0,
          padding: 0,
        }}
      >
        {Skill_data.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>
      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {Frontend_skill.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>
      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {Backend_skill.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>
      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {Full_stack.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>
      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {Other_skill.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>
      <div className="w-full h-full absolute">
        <div className="w-full h-full z-[-10] opacity-70 absolute flex items-center justify-center bg-cover">
          <video
            className="h-[700px] w-full sm:w-[780px] sm:h-[800px] object-cover"
            preload="false"
            playsInline
            loop
            muted
            autoPlay
            src="/assets/2.mp4"
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
