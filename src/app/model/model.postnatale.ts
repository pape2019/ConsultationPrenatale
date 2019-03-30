import { Examen } from "./model.examen";
import { FicheMaternelle } from "./model.fichematernelle";

export class Postnatale{
    idConsPost:number;
    sucre:string;
    albumine:string;
    poids:string;
    tension:number;
    interrogatoire:string;
    examen:Examen
    fichematernelle:FicheMaternelle
}