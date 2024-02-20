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
import { BrdBlm_TC_SeD_eFinish } from "../enums/BrdBlm_TC_SeD_eFinish.ts";
import { BrdBlm_TC_SeD_eFinishVariant } from "../enums/BrdBlm_TC_SeD_eFinishVariant.ts";
import {
  BrdBlm_TC_SeD_eSectionFamily
} from "../enums/BrdBlm_TC_SeD_eSectionFamily.ts";
import {
  BrdBlm_TC_SeD_eSectionType
} from "../enums/BrdBlm_TC_SeD_eSectionType.ts";
import {
  BrdBlm_TC_SeD_IVisaFillingParams
} from "./BrdBlm_TC_SeD_IVisaFillingParams.ts";


export const BrdBlm_TC_SeD_ISectionParams_Signature = "BrdBlm_TC_SeD_ISectionParams_Signature_V1"


/**
 * Parametri per la estrusione e lavorazione delle sezioni delle chiusure tecniche
 */
export interface BrdBlm_TC_SeD_ISectionParams {

  /**
   * Firma di questa struttura dati
   */
  signature: "BrdBlm_TC_SeD_ISectionParams_Signature_V1";

  /**
   * Nome dei parametri. Viene usato per etichettare questo set di parametri.
   */
  name: string;

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
   * Altezza della sezione da terra per i portoni a con manto a sviluppo verticale,
   * oppure distanza orizzontale dal piano di chiusura per i portoni  
   * con manto a svlippo orizzontale.
   */
  displacement: number;

  /**
   * Rotazione della sezione in gradi sessaggesimali.
   * Nel caso dei portoni a sviluppo verticale è 0°. Per i portoni con
   * sviluppo orizzontale a senso di apertura a destra è 90° mentre per 
   * il senso di apertura a sinistra è -90°
   */
  rotationAlongZInDeg?: number;

  /**
   * Finitura esterna
   */
  extFinish: BrdBlm_TC_SeD_eFinish;

  /**
   * Finitura interna
   */
  intFinish?: BrdBlm_TC_SeD_eFinish;

  /**
   * Ral esterno se finitura RAL
   */
  extRal?: number;

  /**
   * Ral interno se finitura RAL
   */
  intRal?: number;

  /**
   * Variante della finitura
   */
  variant: BrdBlm_TC_SeD_eFinishVariant


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