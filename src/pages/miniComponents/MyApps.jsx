import { Card } from "@/components/ui/card";
import React, { useState } from "react";

// Importing app images from assets folder
import vscode from "../../assets/vscode.jpeg"; 
import intellij from "../../assets/intellijIdea.jpeg";
import versionControl from "../../assets/git.jpg";
import postman from "../../assets/postman.png";
import msWord from "../../assets/word.png";
import msExcel from "../../assets/excel.png";
import msPowerpoint from "../../assets/powerpnt.png";
import photoshop from "../../assets/photoshop.png";

const MyApps = () => {
  const [apps] = useState([
    { _id: "1", name: "VS Code", svg: vscode },
    { _id: "2", name: "IntelliJ IDEA", svg: intellij },
    { _id: "3", name: "Version Control", svg: versionControl },
    { _id: "4", name: "Postman", svg: postman },
    { _id: "5", name: "MS Word", svg: msWord },
    { _id: "6", name: "MS Excel", svg: msExcel },
    { _id: "7", name: "MS Powerpoint", svg: msPowerpoint },
    { _id: "8", name: "Photoshop", svg: photoshop },
  ]);

  return (
    <div className="w-full flex flex-col gap-8 sm:gap-12">
      <h1 className="text-tubeLight-effect text-[2rem] sm:text-[2.75rem] md:text-[3rem] lg:text-[3.8rem] tracking-[15px] dancing_text mx-auto w-fit">
        MY APPS
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {apps &&
          apps.map((element) => (
            <Card className="h-fit p-7 flex flex-col justify-center items-center gap-3" key={element._id}>
              <img
                src={element.svg}
                alt={element.name}
                className="h-12 sm:h-24 w-auto"
              />
              <p className="text-muted-foreground text-center">
                {element.name}
              </p>
            </Card>
          ))}
      </div>
    </div>
  );
};

export default MyApps;
