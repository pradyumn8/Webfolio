import {
  ExternalLink,
  Facebook,
  Github,
  Instagram,
  Linkedin,
} from "lucide-react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const [user, setUser] = useState({});

  return (
    <div className="w-full">
      <div className="flex items-center gap-2 mb-2">
        <span className="bg-green-400 rounded-full h-2 w-2"></span>
        <p>Available</p>
      </div>
      <h1 className="overflow-x-hidden text-[1.3rem] sm:text-[1.75rem] 
      md:text-[2.2rem] lg:text-[2.8rem] tracking-[2px] mb-4">
        Hey, I'm Pradyumna
      </h1>
      <h1 className="text-tubeLight-effect overflow-x-hidden text-[1.3rem] 
      sm:text-[1.75rem] md:text-[2.2rem] lg:text-[2.8rem] tracking-[15px]">
        <Typewriter
          words={["DATABASE DEVELOPER", "REACT DEVELOPER", "STUDENT"]}
          loop={50}
          cursor
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </h1>
      <div className="w-fit px-5 py-2 bg-slate-50 rounded-[20px] flex gap-5 
      items-center mt-4 md:mt-8 lg:mt-10">
        <Link to={'https://www.linkedin.com/in/pradyumna-web-developer/'} target="_blank">
          <Linkedin className="text-sky-500 w-7 h-7" />
        </Link>
        <Link to={'https://www.instagram.com/firebrand121/'} target="_blank">
          <Instagram className="text-pink-500 w-7 h-7" />
        </Link>

        <Link to={'https://www.facebook.com/vishwakarma.pradyumn.1/'} target="_blank">
          <Facebook className="text-blue-800 w-7 h-7" />
        </Link>

      </div>
      <div className="mt-4 md:mt-8 lg:mt-10  flex gap-3">
        <Link to={'https://github.com/pradyumn8/'} target="_blank">
          <Button className="rounded-[30px] flex items-center gap-2 flex-row">
            <span>
              <Github />
            </span>
            <span>Github</span>
          </Button>
        </Link>
        <Link to={'https://drive.google.com/file/d/14OPcYmsK23-2e8z1_n3wlCJp8iCa2lu2/view?usp=sharing'} target="_blank">
          <Button className="rounded-[30px] flex items-center gap-2 flex-row">
            <span>
              <ExternalLink />
            </span>
            <span>Resume </span>
          </Button>
        </Link>
      </div>
      <p className="mt-8 text-xl tracking-[2px]">
        Passionate React and Database Developer with a love for coding and continuous learning.</p>
      <hr className="my-8 md::my-10 " />
    </div>
  );
};

export default Hero;
