import { FicheContraception } from "./model.fichecontraception";
import { FicheMaternelle } from "./model.fichematernelle";
import { Depistage } from "./model.depistage";
import { Suivi } from "./model.suivi";
import { Prenatale } from "./model.prenatale";
import { Planninig } from "./model.planning";
import { MethodeContraception } from "./model.methodecontraception";


export class Enregistrement{
    numMat:number;
    prenom:string;
    nom:string;
    datenaiss:Date;
    age:number;
    adresse:string;
    methodecontraception:MethodeContraception;
    fichescontraception:FicheContraception[];
    fichematernelle:FicheMaternelle;
    depistage:Depistage;
    consultationprenatales:Prenatale[];
    consultationplannings:Planninig[];
    suiviseropositives:Suivi;
}