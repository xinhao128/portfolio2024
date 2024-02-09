import React, { useEffect, useState } from "react";
import "./Skills.scss";
import { Skill } from "./interfaces/Skill";
import Button, { ButtonSize } from "../common/Button";

const Skills = () => {
  const [skillData, setSkillData] = useState<Skill[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("data/skills.json", {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        });
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data: Skill[] = await response.json();
        setSkillData(data);
      } catch (error) {
        console.error("Error fetching JSON file:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="container">
      <div className="section-header-container">
        <h2 className="section-header">Skills</h2>
      </div>
      <div className="skills-grid">
        {skillData &&
          skillData.map((skill, index) => (
            <div className="skills-card" key={`${skill.category}-${index}`}>
              <h3 className="skills-category">{skill.category}</h3>
              <div className="skills-list">
                {skill.skills.map(item => (
                  <Button key={item} size={ButtonSize.SMALL} title={item} outlined={true} />
                ))}
              </div>
            </div>
          ))}
      </div>
    </section>
  );
};

export default Skills;
