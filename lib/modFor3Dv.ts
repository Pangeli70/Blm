/** ---------------------------------------------------------------------------
 * @module [BrdBlm]
 * @description Business Logic module for all Breda Sys Products Export for 3Dv
 * @author [APG] Angeli Paolo Giusto
 * @version 0.1 APG 20240226
 * ----------------------------------------------------------------------------
*/

export * from "./enums/BrdBlm_eGlossRoughness.ts";
export * from "../../A3D/lib/enums/ApgA3D_eTextureType.ts";

export type { ApgA3D_IAlbedoMapDef } from "../../A3D/lib/interfaces/ApgA3D_IAlbedoMapDef.ts";
export * from "../../A3D/lib/interfaces/ApgA3D_IAlphaMapDef.ts";
export * from "../../A3D/lib/interfaces/ApgA3D_IBumpMapDef.ts";
export * from "../../A3D/lib/interfaces/ApgA3D_ICDNAsset.ts";
export * from "../../A3D/lib/interfaces/ApgA3D_IMaterialDef.ts";
export * from "../../A3D/lib/interfaces/ApgA3D_INormalMapDef.ts";
export * from "../../A3D/lib/interfaces/ApgA3D_ITextureDef.ts";

export * from "./recordsets/BrdBlm_CDNAssets_Recordset.ts";

