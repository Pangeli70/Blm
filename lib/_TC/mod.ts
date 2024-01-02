/** ---------------------------------------------------------------------------
 * @module [BrdBlm_TC]
 * @description Business Logic module for Breda Technical Closures Products
 * @author [APG] Angeli Paolo Giusto
 * @version 0.1 APG 20220620
 * @version 0.2 APG 20230622
 * @version 0.3 APG 20231226 Ristrutturato tutta la libreria TC
 * ----------------------------------------------------------------------------
 */

export * from "./enums/BrdGlb_TC_eFillingColor.ts"
export * from "./enums/BrdGlb_TC_eFillingTransparency.ts"

export * from "./interfaces/BrdBlm_TC_IAccessoryConfig.ts"
export * from "./interfaces/BrdBlm_TC_IInsertArticle.ts"
export * from "./interfaces/BrdBlm_TC_IInsertParams.ts"


export * as Ctx from "./_Ctx/mod.ts"
export * as SeD from "./_SeD/mod.ts"