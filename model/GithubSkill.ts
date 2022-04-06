import {LanguageSkill} from "./LanguagesSkill";
import {Language} from "../const/languages";

export interface GithubSkill{
    name: string,
    pageUrl?:string,
    url?:  string,
    description: string,
    projectTitle: string,
    skillTag: Language[],
    date: string
}