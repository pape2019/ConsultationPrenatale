import { FicheContraception } from "./model.fichecontraception";
import { FicheMaternelle } from "./model.fichematernelle";
import { Depistage } from "./model.depistage";
import { Suivi } from "./model.suivi";

export class Enregistrement{
    idMaternelle:number;
    prenom:string;
    nom:string;
    datenaiss:Date;
    age:number;
    adresse:string;
    fichecontraception:FicheContraception;
    fichematernelle:FicheMaternelle;
    depistage:Depistage;
    suivi:Suivi;
}