import {NextPage} from "next";
import {Box} from "@chakra-ui/react";
import {useRouter} from "next/router";
import SkillsComponent from "../../component/SkillListComponent";
import {AllSkills} from "../../const/skills";
import SkillsPageComponent from "../../component/SkillsPageComponent";
import React from "react";
import Languages, {Language} from "../../const/languages";

const LangSkillPage:NextPage = ()=>{
    const lang = String(useRouter().query['lang']);

    return <SkillsPageComponent>
        <SkillsComponent skills={AllSkills.filter(i=>{
            return i.skillTag.includes(lang as Language)
        })}/>
    </SkillsPageComponent>
}

export default LangSkillPage