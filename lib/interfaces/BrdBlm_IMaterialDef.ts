/** ---------------------------------------------------------------------------
 * @module [BrdGlb]
 * @author [APG] Angeli Paolo Giusto
 * @version 0.1 APG 20230707
 * @version 0.2 APG 20231115 Spostato nel suo file dedicato + Commenti e refactoring
 * @version 0.3 APG 20231227 Modulo BrdGlb server side
 * @version 0.4 APG 20240225 Modulo BrdBlm server side
 * @version 0.5 APG 20240309 Id + Normal maps + Signature_V2
 * ----------------------------------------------------------------------------
 */


import {
  BrdBlm_eGlossRoughness
} from "../enums/BrdBlm_eGlossRoughness.ts";
import {
  BrdBlm_IBumpMapDef
} from "./BrdBlm_IBumpMapDef.ts";
import {
  BrdBlm_INormalMapDef
} from "./BrdBlm_INormalMapDef.ts";
import {
  BrdBlm_ITextureDef
} from "./BrdBlm_ITextureDef.ts";


export const BrdBlm_IMaterialDef_Signature = "BrdBlm_IMaterialDef_Signature_V2";


/**
 * Definizione del materiale per le mesh
 */
export interface BrdBlm_IMaterialDef {

  /**
   * Firma della struttura dati
   */
  signature: "BrdBlm_IMaterialDef_Signature_V2"

  /**
   * Identificatore della definizione del materiale
   */
  id: string;

  /**
   * Nome in lingua del materiale
   */
  name?: string;

  /**
   * Colore base del materiale
   */
  color: number;

  /**
   * Riflettività del materiale
   */
  roughness: BrdBlm_eGlossRoughness;

  /**
   * Trasparenza base del materiale
   */
  trasparency?: number;

  /**
   * Il materiale ha una immagine ripetibile
   */
  albedoMap?: BrdBlm_ITextureDef;

  /**
   * Il materiale ha una mappa di rugosità
   */
  bumpMap?: BrdBlm_IBumpMapDef;

  /**
   * Il materiale ha una mappa delle normali in alternativa alla mappa di rugosità
   */
  normalMap?: BrdBlm_INormalMapDef; //@V2

  /**
   * Le texture dei materiali hanno una rotazione in radianti
   */
  textureRotation?: number; //@V2

  /**
   * Le texture dei materiali hanno una rotazione random. Questa impostazione
   * viene considerata solo se la rotazione precedente non è definita
   */
  hasRandomTextureRotation?: boolean; //@V2

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