import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import React, { useState } from "react";
import { Link } from "react-router-dom";

// Importing project images from assets folder
import project1 from "../../img/project1.png";
import project2 from "../../img/project2.png";
import project3 from "../../img/project3.png";
import project4 from "../../img/project4.png";
import project5 from "../../img/project5.png";
import project6 from "../../img/project6.png";
import project7 from "../../img/project7.png";
import project8 from "../../img/project8.png";
import project9 from "../../img/project9.png";
import project10 from "../../img/project10.png";
import project11 from "../../img/project11.png";
import project12 from "../../img/project12.png";
import project13 from "../../img/project13.png";
import project14 from "../../img/project14.png";
import project15 from "../../img/project15.png";
import project16 from "../../img/project16.png";
import project17 from "../../img/project17.png";
import project18 from "../../img/project18.png";
import project19 from "../../img/project19.png";
import project20 from "../../img/project20.png";
import project21 from "../../img/project21.png";
import project22 from "../../img/project22.png";
import project23 from "../../img/project23.png";
import project24 from "../../img/project24.png";
import project25 from "../../img/project25.png";
import project26 from "../../img/project26.png";
import project27 from "../../img/project27.png";
import project28 from "../../img/project28.png";
import project29 from "../../img/project29.png";
import project30 from "../../img/project30.png";
import project31 from "../../img/project31.png";
import project32 from "../../img/project32.png";
import project33 from "../../img/project33.png";
import project34 from "../../img/project34.png";
import project35 from "../../img/project35.png";
import project36 from "../../img/project36.png";
import project37 from "../../img/project37.png";
import project38 from "../../img/project38.png";
import project39 from "../../img/project39.png";
import project40 from "../../img/project40.png";
import project41 from "../../img/project41.png";
import project42 from "../../img/project42.png";
import project43 from "../../img/project43.png";
import project44 from "../../img/project44.png";
import project45 from "../../img/project45.png";
import project46 from "../../img/project46.png";
import project47 from "../../img/project47.png";
import project48 from "../../img/project48.png";
import project49 from "../../img/project49.png";
import project50 from "../../img/project50.png";
import project51 from "../../img/project51.png";
import project52 from "../../img/project52.png";
import project53 from "../../img/project53.png";
import project54 from "../../img/project54.png";
import project55 from "../../img/project55.png";
import project56 from "../../img/project56.png";
import project57 from "../../img/project57.png";
import project58 from "../../img/project58.png";
import project59 from "../../img/project59.png";
import project60 from "../../img/project60.png";
import project61 from "../../img/project61.png";
import project62 from "../../img/project62.png";
import project63 from "../../img/project63.png";
import project64 from "../../img/project64.png";
import project65 from "../../img/project65.png";
import project66 from "../../img/project66.png";
import project67 from "../../img/project67.png";
import project68 from "../../img/project68.png";
import project69 from "../../img/project69.png";
import project70 from "../../img/project70.png";
import project71 from "../../img/project71.png";
import project72 from "../../img/project72.png";
import project73 from "../../img/project73.png";
import project74 from "../../img/project74.png";
import project75 from "../../img/project75.png";
import project76 from "../../img/project76.png";
import project77 from "../../img/project77.png";
import project78 from "../../img/project78.png";
import project79 from "../../img/project79.png";
import project80 from "../../img/project80.png";
import project81 from "../../img/project81.png";
import project82 from "../../img/project82.png";
import project83 from "../../img/project83.png";
import project84 from "../../img/project84.png";
import project85 from "../../img/project85.png";
import project86 from "../../img/project86.png";


const Portfolio = () => {
  const [viewAll, setViewAll] = useState(false);

  const projects = [
    { _id: "1", title: "Project 1", projectBanner: project1, codeLink: "https://github.com/pradyumn8/60DaysChallengewithVanilaJS/tree/923c60dfd089dc4cb17b04fb2c78a283b34634ce/ProjectDay1", liveLink: "https://eventskeycode.netlify.app/" },
    { _id: "2", title: "Project 2", projectBanner: project2, codeLink: "https://github.com/pradyumn8/60DaysChallengewithVanilaJS/tree/a5c20198507e0cb5890cb20218ec209bc8ad4e92/ProjectDay2", liveLink: "https://counter-number-application.netlify.app/" },
    { _id: "3", title: "Project 3", projectBanner: project3, codeLink: "https://github.com/pradyumn8/60DaysChallengewithVanilaJS/tree/923c60dfd089dc4cb17b04fb2c78a283b34634ce/ProjectDay3", liveLink: "https://palindrimechecker.netlify.app/" },
    { _id: "4", title: "Project 4", projectBanner: project4, codeLink: "https://github.com/pradyumn8/60DaysChallengewithVanilaJS/tree/923c60dfd089dc4cb17b04fb2c78a283b34634ce/ProjectDay4", liveLink: "https://rgbcolor-generator.netlify.app/" },
    { _id: "5", title: "Project 5", projectBanner: project5, codeLink: "https://github.com/pradyumn8/60DaysChallengewithVanilaJS/tree/923c60dfd089dc4cb17b04fb2c78a283b34634ce/ProjectDay5", liveLink: "https://asciiandunicodedetector.netlify.app/" },
    { _id: "6", title: "Project 6", projectBanner: project6, codeLink: "https://networkstrength.netlify.app/", liveLink: "https://github.com/pradyumn8/60DaysChallengewithVanilaJS/tree/923c60dfd089dc4cb17b04fb2c78a283b34634ce/ProjectDay6" },
    { _id: "7", title: "Project 7", projectBanner: project7, codeLink: "https://github.com/pradyumn8/60DaysChallengewithVanilaJS/tree/923c60dfd089dc4cb17b04fb2c78a283b34634ce/ProjectDay7", liveLink: "https://loan-generator.netlify.app/" },
    { _id: "8", title: "Project 8", projectBanner: project8, codeLink: "https://github.com/pradyumn8/60DaysChallengewithVanilaJS/tree/923c60dfd089dc4cb17b04fb2c78a283b34634ce/ProjectDay8", liveLink: "https://dateandtimewidget.netlify.app/" },
    { _id: "9", title: "Project 9", projectBanner: project9, codeLink: "https://github.com/pradyumn8/60DaysChallengewithVanilaJS/tree/923c60dfd089dc4cb17b04fb2c78a283b34634ce/ProjectDay9", liveLink: "https://anologclockapplication.netlify.app/" },
    { _id: "10", title: "Project 10", projectBanner: project10, codeLink: "https://github.com/pradyumn8/60DaysChallengewithVanilaJS/tree/923c60dfd089dc4cb17b04fb2c78a283b34634ce/ProjectDay10", liveLink: "https://themeanddigtal-clock.netlify.app/" },
    { _id: "11", title: "Project 11", projectBanner: project11, codeLink: "https://github.com/pradyumn8/60DaysChallengewithVanilaJS/tree/923c60dfd089dc4cb17b04fb2c78a283b34634ce/ProjectDay11", liveLink: "https://agecalculations.netlify.app/" },
    { _id: "12", title: "Project 12", projectBanner: project12, codeLink: "https://github.com/pradyumn8/60DaysChallengewithVanilaJS/tree/923c60dfd089dc4cb17b04fb2c78a283b34634ce/ProjectDay12", liveLink: "https://to-donote.netlify.app/  " },
    { _id: "13", title: "Project 13", projectBanner: project13, codeLink: "https://github.com/pradyumn8/60DaysChallengewithVanilaJS/tree/923c60dfd089dc4cb17b04fb2c78a283b34634ce/ProjectDay13", liveLink: "https://note-vista.netlify.app/" },
    { _id: "14", title: "Project 14", projectBanner: project14, codeLink: "https://github.com/pradyumn8/60DaysChallengewithVanilaJS/tree/923c60dfd089dc4cb17b04fb2c78a283b34634ce/ProjectDay14", liveLink: "https://pwdgenerators.netlify.app/" },
    { _id: "15", title: "Project 15", projectBanner: project15, codeLink: "https://github.com/pradyumn8/60DaysChallengewithVanilaJS/tree/923c60dfd089dc4cb17b04fb2c78a283b34634ce/ProjectDay15", liveLink: "https://magnetparagenerator.netlify.app/" },
    { _id: "16", title: "Project 16", projectBanner: project16, codeLink: "https://github.com/pradyumn8/60DaysChallengewithVanilaJS/tree/923c60dfd089dc4cb17b04fb2c78a283b34634ce/ProjectDay16", liveLink: "https://vowelschecker.netlify.app/" },
    { _id: "17", title: "Project 17", projectBanner: project17, codeLink: "https://github.com/pradyumn8/60DaysChallengewithVanilaJS/tree/923c60dfd089dc4cb17b04fb2c78a283b34634ce/ProjectDay17", liveLink: "https://reviewscard.netlify.app/" },
    { _id: "18", title: "Project 18", projectBanner: project18, codeLink: "https://github.com/pradyumn8/60DaysChallengewithVanilaJS/tree/923c60dfd089dc4cb17b04fb2c78a283b34634ce/ProjectDay18", liveLink: "https://dynamicstylingplayground.netlify.app/" },
    { _id: "19", title: "Project 19", projectBanner: project19, codeLink: "https://github.com/pradyumn8/60DaysChallengewithVanilaJS/tree/923c60dfd089dc4cb17b04fb2c78a283b34634ce/ProjectDay19", liveLink: "https://html-videoplayer.netlify.app/" },
    { _id: "20", title: "Project 20", projectBanner: project20, codeLink: "https://github.com/pradyumn8/60DaysChallengewithVanilaJS/tree/923c60dfd089dc4cb17b04fb2c78a283b34634ce/ProjectDay20", liveLink: "https://debouncerpage.netlify.app/" },
    { _id: "21", title: "Project 21", projectBanner: project21, codeLink: "https://github.com/pradyumn8/60DaysChallengewithVanilaJS/tree/923c60dfd089dc4cb17b04fb2c78a283b34634ce/ProjectDay21", liveLink: "https://flexs-panels.netlify.app/" },
    { _id: "22", title: "Project 22", projectBanner: project22, codeLink: "https://github.com/pradyumn8/60DaysChallengewithVanilaJS/tree/923c60dfd089dc4cb17b04fb2c78a283b34634ce/ProjectDay22", liveLink: "https://click-and-drags.netlify.app/" },
    { _id: "23", title: "Project 23", projectBanner: project23, codeLink: "https://github.com/pradyumn8/60DaysChallengewithVanilaJS/tree/923c60dfd089dc4cb17b04fb2c78a283b34634ce/ProjectDay23", liveLink: "https://elegantslider.netlify.app/" },
    { _id: "24", title: "Project 24", projectBanner: project24, codeLink: "https://github.com/pradyumn8/60DaysChallengewithVanilaJS/tree/923c60dfd089dc4cb17b04fb2c78a283b34634ce/ProjectDay24", liveLink: "https://dynamicbackgroundslider.netlify.app/" },
    { _id: "25", title: "Project 25", projectBanner: project25, codeLink: "https://github.com/pradyumn8/60DaysChallengewithVanilaJS/tree/923c60dfd089dc4cb17b04fb2c78a283b34634ce/ProjectDay25", liveLink: "https://serentitylandingpage.netlify.app/" },
    { _id: "26", title: "Project 26", projectBanner: project26, codeLink: "https://github.com/pradyumn8/60DaysChallengewithVanilaJS/tree/923c60dfd089dc4cb17b04fb2c78a283b34634ce/ProjectDay26", liveLink: "https://drags-and-drop.netlify.app/" },
    { _id: "27", title: "Project 27", projectBanner: project27, codeLink: "https://github.com/pradyumn8/60DaysChallengewithVanilaJS/tree/923c60dfd089dc4cb17b04fb2c78a283b34634ce/ProjectDay27", liveLink: "https://tabmobinav.netlify.app/" },
    { _id: "28", title: "Project 28", projectBanner: project28, codeLink: "https://github.com/pradyumn8/60DaysChallengewithVanilaJS/tree/923c60dfd089dc4cb17b04fb2c78a283b34634ce/ProjectDay28", liveLink: "https://doubletaplove.netlify.app/" },
    { _id: "29", title: "Project 29", projectBanner: project29, codeLink: "https://github.com/pradyumn8/60DaysChallengewithVanilaJS/tree/923c60dfd089dc4cb17b04fb2c78a283b34634ce/ProjectDay29", liveLink: "https://images-carousel.netlify.app/" },
    { _id: "30", title: "Project 30", projectBanner: project30, codeLink: "https://github.com/pradyumn8/60DaysChallengewithVanilaJS/tree/923c60dfd089dc4cb17b04fb2c78a283b34634ce/ProjectDay30", liveLink: "https://mouse-shadow-contenteditable.netlify.app/" },
    { _id: "31", title: "Project 31", projectBanner: project31, codeLink: "https://github.com/pradyumn8/60DaysChallengewithVanilaJS/tree/923c60dfd089dc4cb17b04fb2c78a283b34634ce/ProjectDay31", liveLink: "https://speechs-synthesis.netlify.app/" },
    { _id: "32", title: "Project 32", projectBanner: project32, codeLink: "https://github.com/pradyumn8/60DaysChallengewithVanilaJS/tree/923c60dfd089dc4cb17b04fb2c78a283b34634ce/ProjectDay32", liveLink: "https://drum-kit-web-application.netlify.app/" },
    { _id: "33", title: "Project 33", projectBanner: project33, codeLink: "https://github.com/pradyumn8/60DaysChallengewithVanilaJS/tree/923c60dfd089dc4cb17b04fb2c78a283b34634ce/ProjectDay33", liveLink: "https://3d-boxes-playgrround.netlify.app/" },
    { _id: "34", title: "Project 34", projectBanner: project34, codeLink: "https://github.com/pradyumn8/60DaysChallengewithVanilaJS/tree/923c60dfd089dc4cb17b04fb2c78a283b34634ce/ProjectDay34", liveLink: "https://countdownanimation.netlify.app/" },
    { _id: "35", title: "Project 35", projectBanner: project35, codeLink: "https://github.com/pradyumn8/60DaysChallengewithVanilaJS/tree/923c60dfd089dc4cb17b04fb2c78a283b34634ce/ProjectDay35", liveLink: "https://voice-detection.netlify.app/" },
    { _id: "36", title: "Project 36", projectBanner: project36, codeLink: "https://github.com/pradyumn8/60DaysChallengewithVanilaJS/tree/923c60dfd089dc4cb17b04fb2c78a283b34634ce/ProjectDay36", liveLink: "https://animated-navigation-menu.netlify.app/" },
    { _id: "37", title: "Project 37", projectBanner: project37, codeLink: "https://github.com/pradyumn8/60DaysChallengewithVanilaJS/tree/923c60dfd089dc4cb17b04fb2c78a283b34634ce/ProjectDay37", liveLink: "https://autotext-effect-webapp.netlify.app/" },
    { _id: "38", title: "Project 38", projectBanner: project38, codeLink: "https://github.com/pradyumn8/60DaysChallengewithVanilaJS/tree/923c60dfd089dc4cb17b04fb2c78a283b34634ce/ProjectDay38", liveLink: "https://loading-bgimage.netlify.app/" },
    { _id: "39", title: "Project 39", projectBanner: project39, codeLink: "https://github.com/pradyumn8/60DaysChallengewithVanilaJS/tree/923c60dfd089dc4cb17b04fb2c78a283b34634ce/ProjectDay39", liveLink: "https://dad-jokes-webapp.netlify.app/" },
    { _id: "40", title: "Project 40", projectBanner: project40, codeLink: "https://github.com/pradyumn8/60DaysChallengewithVanilaJS/tree/923c60dfd089dc4cb17b04fb2c78a283b34634ce/ProjectDay40", liveLink: "https://dynamic-content-placeholder.netlify.app/" },
    { _id: "41", title: "Project 41", projectBanner: project41, codeLink: "https://github.com/pradyumn8/60DaysChallengewithVanilaJS/tree/923c60dfd089dc4cb17b04fb2c78a283b34634ce/ProjectDay41", liveLink: "https://canvascreation.netlify.app/" },
    { _id: "42", title: "Project 42", projectBanner: project42, codeLink: "https://github.com/pradyumn8/60DaysChallengewithVanilaJS/tree/923c60dfd089dc4cb17b04fb2c78a283b34634ce/ProjectDay42", liveLink: "https://drink-water-webapp.netlify.app/" },
    { _id: "43", title: "Project 43", projectBanner: project43, codeLink: "https://github.com/pradyumn8/60DaysChallengewithVanilaJS/tree/923c60dfd089dc4cb17b04fb2c78a283b34634ce/ProjectDay43", liveLink: "https://feedback-f0rm.netlify.app/" },
    { _id: "44", title: "Project 44", projectBanner: project44, codeLink: "https://github.com/pradyumn8/60DaysChallengewithVanilaJS/tree/923c60dfd089dc4cb17b04fb2c78a283b34634ce/ProjectDay44", liveLink: "https://wave-login-form.netlify.app/" },
    { _id: "45", title: "Project 45", projectBanner: project45, codeLink: "https://github.com/pradyumn8/60DaysChallengewithVanilaJS/tree/923c60dfd089dc4cb17b04fb2c78a283b34634ce/ProjectDay45", liveLink: "https://custom-faq.netlify.app/" },
    { _id: "46", title: "Project 46", projectBanner: project46, codeLink: "https://github.com/pradyumn8/60DaysChallengewithVanilaJS/tree/923c60dfd089dc4cb17b04fb2c78a283b34634ce/ProjectDay46", liveLink: "https://search-for-github-profile.netlify.app/" },
    { _id: "47", title: "Project 47", projectBanner: project47, codeLink: "https://github.com/pradyumn8/60DaysChallengewithVanilaJS/tree/923c60dfd089dc4cb17b04fb2c78a283b34634ce/ProjectDay47", liveLink: "https://hoverboard-webapp.netlify.app/" },
    { _id: "48", title: "Project 48", projectBanner: project48, codeLink: "https://github.com/pradyumn8/60DaysChallengewithVanilaJS/tree/923c60dfd089dc4cb17b04fb2c78a283b34634ce/ProjectDay48", liveLink: "https://increment-counter-webapp.netlify.app/" },
    { _id: "49", title: "Project 49", projectBanner: project49, codeLink: "https://github.com/pradyumn8/60DaysChallengewithVanilaJS/tree/923c60dfd089dc4cb17b04fb2c78a283b34634ce/ProjectDay49", liveLink: "https://netliflix-navigations.netlify.app/" },
    { _id: "50", title: "Project 50", projectBanner: project50, codeLink: "#\https://github.com/pradyumn8/60DaysChallengewithVanilaJS/tree/923c60dfd089dc4cb17b04fb2c78a283b34634ce/ProjectDay50", liveLink: "https://reviving-password-strength.netlify.app/" },
    { _id: "51", title: "Project 51", projectBanner: project51, codeLink: "https://github.com/pradyumn8/60DaysChallengewithVanilaJS/tree/923c60dfd089dc4cb17b04fb2c78a283b34634ce/ProjectDay51", liveLink: "https://rotating-panel.netlify.app/" },
    { _id: "52", title: "Project 52", projectBanner: project52, codeLink: "https://github.com/pradyumn8/60DaysChallengewithVanilaJS/tree/923c60dfd089dc4cb17b04fb2c78a283b34634ce/ProjectDay52", liveLink: "https://scrollscape-webapp.netlify.app/" },
    { _id: "53", title: "Project 53", projectBanner: project53, codeLink: "https://github.com/pradyumn8/60DaysChallengewithVanilaJS/tree/923c60dfd089dc4cb17b04fb2c78a283b34634ce/ProjectDay53", liveLink: "https://qr-code-express.netlify.app/" },
    { _id: "54", title: "Project 54", projectBanner: project54, codeLink: "https://github.com/pradyumn8/60DaysChallengewithVanilaJS/tree/923c60dfd089dc4cb17b04fb2c78a283b34634ce/ProjectDay54", liveLink: "https://dark-light-theme-calculator.netlify.app/" },
    { _id: "55", title: "Project 55", projectBanner: project55, codeLink: "https://github.com/pradyumn8/60DaysChallengewithVanilaJS/tree/923c60dfd089dc4cb17b04fb2c78a283b34634ce/ProjectDay55", liveLink: "https://wishing-card-diwali.netlify.app/" },
    { _id: "56", title: "Project 56", projectBanner: project56, codeLink: "https://github.com/pradyumn8/60DaysChallengewithVanilaJS/tree/923c60dfd089dc4cb17b04fb2c78a283b34634ce/ProjectDay56", liveLink: "https://random-elegance-generator.netlify.app/" },
    { _id: "57", title: "Project 57", projectBanner: project57, codeLink: "https://github.com/pradyumn8/60DaysChallengewithVanilaJS/tree/923c60dfd089dc4cb17b04fb2c78a283b34634ce/ProjectDay57", liveLink: "https://image-impression.netlify.app/" },
    { _id: "58", title: "Project 58", projectBanner: project58, codeLink: "https://github.com/pradyumn8/60DaysChallengewithVanilaJS/tree/923c60dfd089dc4cb17b04fb2c78a283b34634ce/ProjectDay58", liveLink: "https://pokedex-panel.netlify.app/" },
    { _id: "59", title: "Project 59", projectBanner: project59, codeLink: "https://github.com/pradyumn8/60DaysChallengewithVanilaJS/tree/923c60dfd089dc4cb17b04fb2c78a283b34634ce/ProjectDay59", liveLink: "https://moviemania-hub.netlify.app/" },
    { _id: "60", title: "Project 60", projectBanner: project60, codeLink: "https://github.com/pradyumn8/60DaysChallengewithVanilaJS/tree/923c60dfd089dc4cb17b04fb2c78a283b34634ce/ProjectDay60", liveLink: "https://bug-hunt-blitz.netlify.app/" },
    { _id: "61", title: "Project 61", projectBanner: project61, codeLink: "#", liveLink: "#" },
    { _id: "62", title: "Project 62", projectBanner: project62, codeLink: "#", liveLink: "#" },
    { _id: "63", title: "Project 63", projectBanner: project63, codeLink: "#", liveLink: "#" },
    { _id: "64", title: "Project 64", projectBanner: project64, codeLink: "#", liveLink: "#" },
    { _id: "65", title: "Project 65", projectBanner: project65, codeLink: "#", liveLink: "#" },
    { _id: "66", title: "Project 66", projectBanner: project66, codeLink: "#", liveLink: "#" },
    { _id: "67", title: "Project 67", projectBanner: project67, codeLink: "#", liveLink: "#" },
    { _id: "68", title: "Project 68", projectBanner: project68, codeLink: "#", liveLink: "#" },
    { _id: "69", title: "Project 69", projectBanner: project69, codeLink: "#", liveLink: "#" },
    { _id: "70", title: "Project 70", projectBanner: project70, codeLink: "#", liveLink: "#" },
    { _id: "71", title: "Project 71", projectBanner: project71, codeLink: "#", liveLink: "#" },
    { _id: "72", title: "Project 72", projectBanner: project72, codeLink: "#", liveLink: "#" },
    { _id: "73", title: "Project 73", projectBanner: project73, codeLink: "#", liveLink: "#" },
    { _id: "74", title: "Project 74", projectBanner: project74, codeLink: "#", liveLink: "#" },
    { _id: "75", title: "Project 75", projectBanner: project75, codeLink: "#", liveLink: "#" },
    { _id: "76", title: "Project 76", projectBanner: project76, codeLink: "#", liveLink: "#" },
    { _id: "77", title: "Project 77", projectBanner: project77, codeLink: "#", liveLink: "#" },
    { _id: "78", title: "Project 78", projectBanner: project78, codeLink: "#", liveLink: "#" },
    { _id: "79", title: "Project 79", projectBanner: project79, codeLink: "#", liveLink: "#" },
    { _id: "80", title: "Project 80", projectBanner: project80, codeLink: "#", liveLink: "#" },
    { _id: "81", title: "Project 81", projectBanner: project81, codeLink: "#", liveLink: "#" },
    { _id: "82", title: "Project 82", projectBanner: project82, codeLink: "#", liveLink: "#" },
    { _id: "83", title: "Project 83", projectBanner: project83, codeLink: "#", liveLink: "#" },
    { _id: "84", title: "Project 84", projectBanner: project84, codeLink: "#", liveLink: "#" },
    { _id: "85", title: "Project 85", projectBanner: project85, codeLink: "#", liveLink: "#" },
    { _id: "86", title: "Project 86", projectBanner: project86, codeLink: "#", liveLink: "#" }
  ];
  

  return (
    <div>
      <div className="relative mb-12">
        <h1
          className="hidden sm:flex gap-4 items-center text-[2rem] sm:text-[2.75rem] md:text-[3rem] 
          lg:text-[3.8rem] leading-[56px] md:leading-[67px] lg:leading-[90px] tracking-[15px] 
          mx-auto w-fit font-extrabold about-h1"
          style={{
            background: "hsl(222.2 84% 4.9%)",
          }}
        >
          MY{" "}
          <span className="text-tubeLight-effect font-extrabold">
            PORTFOLIO
          </span>
        </h1>
        <h1
          className="flex sm:hidden gap-4 items-center text-[2rem] sm:text-[2.75rem] 
          md:text-[3rem] lg:text-[3.8rem] leading-[56px] md:leading-[67px] lg:leading-[90px] 
          tracking-[15px] mx-auto w-fit font-extrabold about-h1"
          style={{
            background: "hsl(222.2 84% 4.9%)",
          }}
        >
          MY <span className="text-tubeLight-effect font-extrabold">WORK</span>
        </h1>
        <span className="absolute w-full h-1 top-7 sm:top-7 md:top-8 lg:top-11 z-[-1] bg-slate-200"></span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {viewAll
          ? projects.map((element) => {
              return (
                <div key={element._id} className="relative group">
                  <img
                    src={element.projectBanner}
                    alt={element.title}
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-gray-800 bg-opacity-70 text-white transition-opacity duration-300">
                    <div className="flex flex-col items-center gap-2">
                      <a href={element.codeLink} target="_blank" rel="noopener noreferrer" className="bg-blue-500 px-4 py-2 rounded">
                        Code
                      </a>
                      <a href={element.liveLink} target="_blank" rel="noopener noreferrer" className="bg-green-500 px-4 py-2 rounded">
                        Live
                      </a>
                    </div>
                  </div>
                </div>
              );
            })
          : projects.slice(0, 9).map((element) => {
              return (
                <div key={element._id} className="relative group">
                  <img
                    src={element.projectBanner}
                    alt={element.title}
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-gray-800 bg-opacity-70 text-white transition-opacity duration-300">
                    <div className="flex flex-col items-center gap-2">
                      <a href={element.codeLink} target="_blank" rel="noopener noreferrer" className="bg-blue-500 px-4 py-2 rounded">
                        Code
                      </a>
                      <a href={element.liveLink} target="_blank" rel="noopener noreferrer" className="bg-green-500 px-4 py-2 rounded">
                        Live
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
      </div>
      {projects.length > 9 && (
        <div className="w-full text-center my-9">
          <Button className="w-52" onClick={() => setViewAll(!viewAll)}>
            {viewAll ? "Show Less" : "Show More"}
          </Button>
        </div>
      )}
    </div>
  );
};

export default Portfolio;