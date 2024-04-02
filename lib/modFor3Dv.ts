/** ---------------------------------------------------------------------------
 * @module [BrdBlm]
 * @description Business Logic module for all Breda Sys Products Export for 3Dv
 * @author [APG] Angeli Paolo Giusto
 * @version 0.1 APG 20240226
 * ----------------------------------------------------------------------------
*/

export * from "./enums/BrdBlm_eGlossRoughness.ts";
export * from "./enums/BrdBlm_eTextureType.ts";

export type { BrdBlm_IAlbedoMapDef } from "./interfaces/BrdBlm_IAlbedoMapDef.ts";
export * from "./interfaces/BrdBlm_IAlphaMapDef.ts";
export * from "./interfaces/BrdBlm_IBumpMapDef.ts";
export * from "./interfaces/BrdBlm_ICDNAsset.ts";
export * from "./interfaces/BrdBlm_IMaterialDef.ts";
export * from "./interfaces/BrdBlm_INormalMapDef.ts";
export * from "./interfaces/BrdBlm_ITextureDef.ts";

export * from "./recordsets/BrdBlm_CDNAssets_Recordset.ts";

