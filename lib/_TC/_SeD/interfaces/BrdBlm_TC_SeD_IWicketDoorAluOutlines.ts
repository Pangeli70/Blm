import { BrdBlm_IPoint2D } from "../../../interfaces/BrdBlm_IPoint2D.ts";

/**
 * Profili di estrusione dei profili alu della porta pedonale
 *
 * DA VERIFICARE E SISTEMARE
 */



export interface BrdBlm_TC_SeD_IWicketDoorAluOutlines{
  int: BrdBlm_IPoint2D[];
  ext: BrdBlm_IPoint2D[];
  vertical: boolean;
}
