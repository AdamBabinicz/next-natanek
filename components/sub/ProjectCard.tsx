import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface Props {
  src: string;
  title: string;
  description: string;
}

const ProjectCard = ({ src, title, description }: Props) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const animationDelay = 0.3;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: inView ? 1 : 0 }}
      transition={{ delay: animationDelay }}
      className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61]"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: inView ? 1 : 0 }}
        transition={{ delay: animationDelay }}
      >
        <Image
          src={src}
          alt={title}
          width={1000}
          height={1000}
          className="w-full max-h-[550px] sm:max-w-full sm:h-[650px] lg:h-[700px] object-cover"
        />
      </motion.div>
      <div className="relative p-4">
        <h2 className="font-bold sm:text-base mb-2 text-white">{title}</h2>
        <p className="mt-2 text-gray-300">{description}</p>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
