import { createBrowserRouter } from "react-router";
import Route from "./Route";
import About from "../pages/About";
import Home from "../pages/Home";
import Projects from "../pages/Projects";
import Skills from "../pages/Skills";
import Contact from "../pages/Contact";
import Resume from "../cv/Resume";
import CoverLetter from "../cv/CoverLetter";
import AboutPro from "../pages/projectDemo/AboutPro";
import LostAndFound from "../pages/projectDemo/LostAndFound";
import ProjectOverview from "../pages/projectDemo/ProjectReview";
import RidexDetails from "../pages/RidexDetails";


export const router = createBrowserRouter([
 {
    path:'/',
   Component:Route,
   children:[
    {
   index:true,
   Component:Home
    },
    {
        path:'about',
        Component:About
    },
    {
        path:'project',
        Component:Projects
    },
    {
        path:'skills',
        Component:Skills
    },
    {
        path:'contact',
        Component:Contact
    },
    {
        path:'cv',
        Component:Resume
    },{
        path:'coverletter',
        Component:CoverLetter
    },{
        path:'hubbyhubDetails',
        Component:AboutPro
    },{
        path:'lostAndFoundDetails',
        Component:LostAndFound
    },{
        path:'medicalcamp',
        Component:ProjectOverview
    },
    
    {
        path:'ridexDetails',
        Component:RidexDetails
    }

   ]
 }
 
]);
