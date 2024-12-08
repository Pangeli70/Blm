import { ApgA3D_IPoint2D } from "../../../../../A3D/lib/interfaces/ApgA3D_IPoint2D.ts";

/**
 * Profili di estrusione dei profili alu della porta pedonale
 *
 * DA VERIFICARE E SISTEMARE
 */



export interface BrdBlm_TC_SeD_IWicketDoorAluOutlines{
  int: ApgA3D_IPoint2D[];
  ext: ApgA3D_IPoint2D[];
  vertical: boolean;
}
