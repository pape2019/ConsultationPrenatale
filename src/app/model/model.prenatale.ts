import { Examen } from "./model.examen";
import { FicheMaternelle } from "./model.fichematernelle";
export class Prenatale{
    idConsPren:number;
    dateConsPren:Date;
    dateDernierReg:Date;
    dateAccouchePrevu:Date;
    dateProchaineRdv:Date;
    examen:Examen;
    fichematernelle:FicheMaternelle;
}