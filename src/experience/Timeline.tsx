import React, { Fragment, RefObject, useEffect, useState } from "react";
import "./Timeline.scss";
import { Experience } from "./interfaces/Experience";

type TimelineProps = {
  id: string;
  innerRef: RefObject<HTMLElement>
}

const Timeline = ({ id, innerRef }: TimelineProps) => {
  const [experienceData, setExperienceData] = useState<Experience[] | null>(
    null
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("data/experiences.json", {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        });
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data: Experience[] = await response.json();
        setExperienceData(data);
      } catch (error) {
        console.error("Error fetching JSON file:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="container" id={id} ref={innerRef}>
      <div className="section-header-container">
        <h2 className="section-header">Experience</h2>
      </div>
      <div className="timeline-grid">
        {experienceData &&
          experienceData.map((experience, index) => (
            <Fragment key={experience.company}>
              {index % 2 === 0 ? (
                <div className="timeline-experience justify-right">
                  <h3 className="timeline-experience-title">
                    {experience.title}
                  </h3>
                  <span className="timeline-experience-company">
                    {experience.company}
                  </span>
                  <p className="timeline-experience-description">
                    {experience.description}
                  </p>
                </div>
              ) : (
                <div className="timeline-date justify-right">
                  {experience.startDate}
                </div>
              )}
              <div className="timeline-bar">
                <div className="timeline-circle"></div>
                {index === experienceData.length - 1 && (
                  <div className="timeline-circle timeline-bottom"></div>
                )}
              </div>
              {index % 2 === 0 ? (
                <div className="timeline-date">{experience.startDate}</div>
              ) : (
                <div className="timeline-experience">
                  <h3 className="timeline-experience-title">
                    {experience.title}
                  </h3>
                  <span className="timeline-experience-company">
                    {experience.company}
                  </span>
                  <p className="timeline-experience-description">
                    {experience.description}
                  </p>
                </div>
              )}
            </Fragment>
          ))}
      </div>
    </section>
  );
};

export default Timeline;
