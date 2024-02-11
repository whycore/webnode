import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        Portfolio
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/celestia.png"
          title="Celestia"
          description=" We has proudly assumed the roles of validator and node runner in the Celestia project. 
                        Leveraging our expertise in blockchain validation and node management, we have seamlessly integrated into the Celestia ecosystem to ensure its reliability and security."
        />
        <ProjectCard
          src="/dymension.png"
          title="Dymension"
          description="We proudly serves as both a validator and a node runner within the Dymension project. 
          Our team's expertise in blockchain validation and node management ensures the seamless operation and security of the Dymension network. "
        />
        <ProjectCard
          src="/wormhole.png"
          title="Wormhole"
          description=" LucasiNode proudly serves as a validator and node runner in the ambitious Wormhole project. 
          With our deep expertise in blockchain validation and node management, we ensure the reliability and security of the Celestia network. "
        />
      </div>
    </div>
  );
};

export default Projects;
