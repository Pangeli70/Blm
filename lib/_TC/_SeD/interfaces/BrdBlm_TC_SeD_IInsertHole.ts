import { A3D } from "../../../deps.ts";
import { BrdBlm_TC_SeD_eInsertHoleType } from "../enums/BrdBlm_TC_SeD_eInsertHoleType.ts";


/**
 * Caratteristiche geometriche del foro dell'inserto della chiusura tecnica
 * (oblò /griglia)
 */



export interface BrdBlm_TC_SeD_IInsertHole {

  /**
   * Tipo di foro per l'inserto
   */
  type: BrdBlm_TC_SeD_eInsertHoleType;

  /**
   * Larghezza del foro
   */
  w: number;

  /**
   * Altezza del foro
   */
  h: number;

  /**
   * Profilo speciale per fori non rettangolari
   */
  outline?: A3D.ApgA3D_IPoint2D[];
}
