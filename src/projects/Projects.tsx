import { RefObject, useEffect, useState } from "react";

import "./Projects.scss";
import ImageSlider from "./ImageSlider";
import { Project } from "./interfaces/Project";
import Button, { ButtonSize } from "../common/Button";
import { ReactComponent as GithubIcon } from "../resources/assets/github.svg";

type ProjectsProps = {
  id: string;
  innerRef: RefObject<HTMLElement>
}

const Projects = ({ id, innerRef }: ProjectsProps) => {
  const [projectData, setProjectData] = useState<Project[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("data/projects.json", {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        });
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data: Project[] = await response.json();
        setProjectData(data);
      } catch (error) {
        console.error("Error fetching JSON file:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="container" id={id} ref={innerRef}>
      <div className="section-header-container">
        <h2 className="section-header">Projects</h2>
      </div>
      <div className="project-flex">
        {projectData &&
          projectData.map((project) => (
            <div className="project-card" key={project.name}>
              <div className="project-image">
                <ImageSlider
                  imageUrls={project.imageSlides}
                  productType={project.productType}
                />
              </div>
              <div className="project-content">
                <div className="project-title">{project.name}</div>
                <div className="project-date">
                  {project.startDate} - {project.endDate}
                </div>
                {project.location && project.location.length > 0 && (
                  <div className="project-address">{project.location}</div>
                )}
                {project.advisor && project.advisor.length > 0 && (
                  <div className="project-advisor">
                    Adivsor: {project.advisor}
                  </div>
                )}
                <div className="project-links">
                  {project.references &&
                    project.references.length > 0 &&
                    project.references.map((ref) => (
                      <a
                        key={ref.link}
                        className="svg-wrapper"
                        href={ref.link}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {ref.media === "Github" && (
                          <GithubIcon className="svg-icon" />
                        )}
                      </a>
                    ))}
                </div>
                <div className="project-description" dangerouslySetInnerHTML={{__html: project.description}}></div>
              </div>
              <div className="project-skills">
                {project.devTools.map((skill) => (
                  <Button
                    key={skill}
                    size={ButtonSize.SMALL}
                    title={skill}
                    outlined={true}
                  />
                ))}
                <div className="rounded-border-wrapper">
                  <div className="rounded-border"></div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
};

export default Projects;
