import { FicheContraception } from "./model.fichecontraception";
import { Enregistrement } from "./model.enregistrement";

export class Planninig{
    idConsPlan:number;
    dateConsPlan:Date;
    dateProchainRdv:Date;
    fichecontraception:FicheContraception;
    femme:Enregistrement;
}