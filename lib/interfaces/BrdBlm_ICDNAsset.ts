/** ---------------------------------------------------------------------------
 * @module [BrdGlb]
 * @author [APG] Angeli Paolo Giusto
 * @version 0.1 APG 20240225
 * ----------------------------------------------------------------------------
 */

import { BrdBlm_eTextureType } from "../enums/BrdBlm_eTextureType.ts";



/**
 * Dati dell'asset (solitamente una texture) salvata remotamente in un Content Delivery Network (CDN)
 */
export interface BrdBlm_ICDNAsset {

  /**
   * Identificatore del CDN Asset
   */
  CDNAssetId: string;

  /**
   * Tipo della texture
   */
  type: BrdBlm_eTextureType;

  /**
   * Percorso per l'asset locale da usare durante lo sviluppo in locale
   */
  local: string;

  /**
   * Url di riferimento per la pagina di caricamento o di riferimento dell'asset nel CDN remoto
   */
  remoteUrl_1?: string;

  /**
   * Url remoto dell'asset nel CDN. Per la distribuzione in produzione su Deno Deploy 
   * dovrebbe essere sempre definito e disponibile.
   */
  remote_1?: string;
}
