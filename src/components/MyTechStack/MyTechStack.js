import "./MyTechStack.css"
import AzureIcon from './Icons/AzureIcon.png'
import JavaIcon from './Icons/JavaIcon.png'
import ReactIcon from './Icons/ReactIcon.png'
import CSSIcon from './Icons/CSSIcon.png'
import GitHubIcon from './Icons/GitHubIcon.png'
import HTMLIcon from './Icons/HTMLIcon.png'
import JavaScriptIcon from './Icons/JavaScriptIcon.png'
import JiraIcon from './Icons/JiraIcon.png'
import LinuxIcon from './Icons/LinuxIcon.png'
import MySqlIcon from './Icons/MySqlIcon.png'
import JavaSpringIcon from './Icons/JavaSpringIcon.png'
import PostManIcon from './Icons/PostManIcon.png'
import {Divider} from "@mui/material";
import React from "react";

function MyTechStack() {
    return (
        <div className="myTechStackComponent">
            <h1 className="techStackTitle">
                Technologies
            </h1>
            <div id="img-wrapper">
                <div className="icon" data-mdb-toggle="tooltip" title="Java"><img src={JavaIcon} id="img"/></div>
                <div className="icon" data-mdb-toggle="tooltip" title="JavaScript"><img src={JavaScriptIcon} id="img"/></div>
                <div className="icon" data-mdb-toggle="tooltip" title="React.js"><img src={ReactIcon} id="img"/></div>
                <div className="icon" data-mdb-toggle="tooltip" title="CSS(Cascading Style Sheets"><img src={CSSIcon} id="img"/></div>
                <div className="icon" data-mdb-toggle="tooltip" title="HTML5"><img src={HTMLIcon} id="img"/></div>
                <div className="icon" data-mdb-toggle="tooltip" title="Spring"><img src={JavaSpringIcon} id="img"/></div>
                <div className="icon" data-mdb-toggle="tooltip" title="Jira"><img src={JiraIcon} id="img"/></div>
                <div className="icon" data-mdb-toggle="tooltip" title="Github"><img src={GitHubIcon} id="img"/></div>
                <div className="icon" data-mdb-toggle="tooltip" title="Linux"><img src={LinuxIcon} id="img"/></div>
                <div className="icon" data-mdb-toggle="tooltip" title="Microsoft Azure"><img src={AzureIcon} id="img"/></div>
                <div className="icon" data-mdb-toggle="tooltip" title="MySql"><img src={MySqlIcon} id="img"/></div>
                <div className="icon" data-mdb-toggle="tooltip" title="Postman"><img src={PostManIcon} id="img"/></div>
            </div>
            <Divider variant="middle" className="divider"/>
        </div>
    );
}

export default MyTechStack;