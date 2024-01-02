import { BrdBlm_TC_SeD_eFillingType } from "../enums/BrdBlm_TC_SeD_eFillingType.ts";
import { BrdBlm_TC_SeD_eInsertHoleType } from "../enums/BrdBlm_TC_SeD_eInsertHoleType.ts";
import { BrdBlm_TC_IInsertArticle } from "../../interfaces/BrdBlm_TC_IInsertArticle.ts";

/**
 * Inserto per il pannello o per l'anta della chiusura tecnica
 * Contiene i dati per la correlazione tra i tipi di fori e gli
 * articoli nell'anagrafica
 * Definisce il codice ed il colore e finitura degli elementi
 * interni ed esterni (es: cornici oblò)
 */



export interface BrdBlm_TC_SeD_IInsert {
  holeType: BrdBlm_TC_SeD_eInsertHoleType;
  fillingType: BrdBlm_TC_SeD_eFillingType;
  articles: BrdBlm_TC_IInsertArticle[];
}
