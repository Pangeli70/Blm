/** ---------------------------------------------------------------------------
 * @module [BrdBlm]
 * @description Business Logic module for all Breda Products
 * @author [APG] ANGELI Paolo Giusto
 * @version 0.1 APG 20220620
 * @version 0.2 APG 20230622
 * @version 0.3 APG 20231226 Ristrutturato tutta la libreria TC
 * ----------------------------------------------------------------------------
 */


export * from "../../A3D/lib/classes/ApgA3D_Extrudable.ts";

export * from "./enums/BrdBlm_eBrand.ts";
export * from "./enums/BrdBlm_eGlossRoughness.ts";
export * from "./enums/BrdBlm_eMicaceousFinish.ts";
export * from "../../A3D/lib/enums/ApgA3D_ePlacementOperation.ts";
export * from "./enums/BrdBlm_eProductType.ts";
export * from "../../A3D/lib/enums/ApgA3D_eTextureType.ts";

export * from "../../A3D/lib/interfaces/ApgA3D_IBumpMapDef.ts";
export * from "../../A3D/lib/interfaces/ApgA3D_ICDNAsset.ts";
export * from "./interfaces/BrdBlm_IIntExtMaterialDef.ts";
export * from "./interfaces/BrdBlm_IIntExtOutlines.ts";
export * from "./interfaces/BrdBlm_IIntExtOutlinesGroups.ts";
export * from "../../A3D/lib/interfaces/ApgA3D_IMaterialDef.ts";
export * from "./interfaces/BrdBlm_IMultilanguage.ts";
export * from "../../A3D/lib/interfaces/ApgA3D_IPlacementOperation.ts";
export * from "../../A3D/lib/interfaces/ApgA3D_IPoint2D.ts";
export * from "../../A3D/lib/interfaces/ApgA3D_IPoint3D.ts";
export * from "../../A3D/lib/interfaces/ApgA3D_IRalColorDef.ts";
export * from "../../A3D/lib/interfaces/ApgA3D_IRectangle.ts";
export * from "../../A3D/lib/mod.ts";


export * from "./recordsets/BrdBlm_CDNAssets_Recordset.ts";
export * from "./recordsets/BrdBlm_MicaeousFinishes_MultilangRecordset.ts";

export * from "../../A3D/lib/services/ApgA3D_RalColors_Service.ts";


export * as TC from "./_TC/mod.ts";

