import { Card } from "@/components/ui/card";
import React, { useState } from "react";

// Importing images from assets folder
import html_icon from "../../assets/html.png";
import css_icon from "../../assets/css.jpeg";
import js_icon from "../../assets/js.jpeg";
import mysql_icon from "../../assets/mysql.jpg";
import mssql_icon from "../../assets/mssql.png";
import mongo_icon from "../../assets/mongodb.png";
import react_icon from "../../assets/react.jpeg";

const Skills = () => {
  const [skills] = useState([
    { _id: "1", title: "HTML", svg: html_icon },
    { _id: "2", title: "CSS", svg: css_icon },
    { _id: "3", title: "JavaScript", svg: js_icon },
    { _id: "4", title: "React", svg: react_icon },
    { _id: "5", title: "MySQL", svg: mysql_icon },
    { _id: "6", title: "MS SQL", svg: mssql_icon },
    { _id: "7", title: "MongoDB", svg: mongo_icon },
  
  ]);

  return (
    <div className="w-full flex flex-col gap-8 sm:gap-12">
      <h1 className="text-tubeLight-effect text-[2rem] sm:text-[2.75rem] md:text-[3rem] 
      lg:text-[3.8rem] tracking-[15px] dancing_text mx-auto w-fit">
        SKILLS
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {skills &&
          skills.map((element) => (
            <Card className="h-fit p-7 flex flex-col justify-center items-center gap-3" key={element._id}>
              <img
                src={element.svg}
                alt={element.title}
                className="h-12 sm:h-24 w-auto"
              />
              <p className="text-muted-foreground text-center">
                {element.title}
              </p>
            </Card>
          ))}
      </div>
    </div>
  );
};

export default Skills;
