/** ---------------------------------------------------------------------------
 * @module [BrdBlm]
 * @description Business Logic module for all Breda Products
 * @author [APG] Angeli Paolo Giusto
 * @version 0.1 APG 20220620
 * @version 0.2 APG 20230622
 * @version 0.3 APG 20231226 Ristrutturato tutta la libreria TC
 * ----------------------------------------------------------------------------
 */


export * from "./classes/BrdBlm_Extrudable.ts";

export * from "./enums/BrdBlm_eBrand.ts";
export * from "./enums/BrdBlm_eGlossRoughness.ts";
export * from "./enums/BrdBlm_eMicaceousFinish.ts";
export * from "./enums/BrdBlm_ePlacementOperation.ts";
export * from "./enums/BrdBlm_eProductType.ts";
export * from "./enums/BrdBlm_eTextureType.ts";

export * from "./interfaces/BrdBlm_IBumpMapDef.ts";
export * from "./interfaces/BrdBlm_ICDNAsset.ts";
export * from "./interfaces/BrdBlm_IIntExtMaterialDef.ts";
export * from "./interfaces/BrdBlm_IIntExtOutlines.ts";
export * from "./interfaces/BrdBlm_IIntExtOutlinesGroups.ts";
export * from "./interfaces/BrdBlm_IMaterialDef.ts";
export * from "./interfaces/BrdBlm_IMultilanguage.ts";
export * from "./interfaces/BrdBlm_IPlacementOperation.ts";
export * from "./interfaces/BrdBlm_IPoint2D.ts";
export * from "./interfaces/BrdBlm_IPoint3D.ts";
export * from "./interfaces/BrdBlm_IRalColorDef.ts";
export * from "./interfaces/BrdBlm_IRectangle.ts";
export * from "./interfaces/BrdBlm_ITextureDef.ts";


export * from "./recordsets/BrdBlm_CDNAssets_Recordset.ts";
export * from "./recordsets/BrdBlm_MicaeousFinishes_MultilangRecordset.ts";

export * from "./services/BrdBlm_RalColorsService.ts";


export * as TC from "./_TC/mod.ts";

