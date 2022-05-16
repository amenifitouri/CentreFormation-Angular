import * as internal from "stream";

export class Session {
   id:number ;
   date_debut:Date;
   date_fin:Date;
   lieu:String;
   nb_participant:internal;
   formateur_id	:number;
   formation_id	:number;
   organisme_id:number; 
}
