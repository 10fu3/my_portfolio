import {LanguageSkill} from "./LanguagesSkill";
import {Language} from "../const/languages";

export interface SkillImage{
    type: 'img' | 'youtube',
    src:string,
    description: string,
}

export interface GithubSkill{
    name: string,
    pageUrl?:string,
    url?:  string,
    description: string,
    projectTitle: string,
    skillTag: Language[],
    date: string,
    image?: SkillImage[]
}