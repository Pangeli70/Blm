/** ---------------------------------------------------------------------------
 * @module [BrdBlm_TC_SeD]
 * @author [APG] Angeli Paolo Giusto
 * @version 0.1 APG 20230707
 * @version 0.2 APG 20231115 Spostato nel suo file dedicato + Commenti e refactoring
 * @version 0.3 APG 20231227 Modulo BrdBlm server side
 * ----------------------------------------------------------------------------
 */


import {
  BrdBlm_TC_IInsertParams
} from "../../interfaces/BrdBlm_TC_IInsertParams.ts";
import {
  BrdBlm_TC_SeD_eSectionFamily
} from "../enums/BrdBlm_TC_SeD_eSectionFamily.ts";
import {
  BrdBlm_TC_SeD_eSectionType
} from "../enums/BrdBlm_TC_SeD_eSectionType.ts";
import {
  BrdBlm_TC_SeD_IVisaFillingParams
} from "./BrdBlm_TC_SeD_IVisaFillingParams.ts";


/**
 * Parametri per la estrusione e lavorazione delle sezioni delle chiusure tecniche
 */
export interface BrdBlm_TC_SeD_ISectionParams {

  /**
   * Numero di sequenza della sezione a partire dal basso
   */
  sequence: number;

  /**
   * Famiglia del tipo di sezione
   */
  family: BrdBlm_TC_SeD_eSectionFamily;

  /**
   * Tipo di sezione.
   * Per il pannello coibentato è il disegno (es.: FLAT, SINGLE ecc.)
   * con le sue varianti (es. single alta, bassa, ecc.). Per le sezioni VISA è
   * il tipo (es.: LUXOR, LUX, ecc.) e varianti ( base, intermedio, alto).
   */
  type: BrdBlm_TC_SeD_eSectionType;

  /**
   * Lunghezza della sezione in mm
   */
  length: number;

  /**
   * Altezza della sezione prima dell'eventuale taglio in mm
   */
  height: number;

  /**
   * Altezza del taglio dal lato del maschio in mm per la sezione
   * Anche per VISA Alto, Phenix, Swing ecc.
   */
  topCut: number;

  /**
   * Altezza del taglio dal lato della femmina in mm per la sezione
   * Anche per VISA Base, Cassettato base giuntato, Phenix, Swing ecc.
   */
  bottomCut: number;

  /**
   * Altezza da terra
   */
  yDisplacement: number;


  /**
   * Tutti gli inserti presenti nella sezione
   * Ad esempio, maniglie, sblocchi, oblò e griglie
   */
  inserts?: BrdBlm_TC_IInsertParams[];

  /**
   * Tutti i tamponamenti della sezione se si tratta di una VISA
   */
  visaFillings?: BrdBlm_TC_SeD_IVisaFillingParams[];
}

/*! ---------------------------------------------------------------------------
 * @copyright Breda Sistemi industriali S.p.A., 2023 - http://bredasys.com
 * All rights reserved
 * @licence You cannot host, display, distribute or share this Work in any
 * form, both physical and digital. You cannot use this Work in any commercial
 * or non-commercial product, website or project. You cannot sell this Work
 * and you cannot mint an NFTs out of it.
 * ---------------------------------------------------------------------------
 */