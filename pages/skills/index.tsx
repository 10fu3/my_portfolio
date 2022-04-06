import {NextPage} from "next";
import {AllSkills} from "../../const/skills";
import SkillsPageComponent from "../../component/SkillsPageComponent";
import SkillsComponent from "../../component/SkillListComponent";
import React from "react";

const SkillsPage:NextPage = ()=>{

    return <SkillsPageComponent>
        <SkillsComponent skills={AllSkills}/>
    </SkillsPageComponent>
}

export default SkillsPage