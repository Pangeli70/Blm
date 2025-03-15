/** ---------------------------------------------------------------------------
 * @module [Apg3Dv]
 * @author [APG] ANGELI Paolo Giusto
 * @version 1.0.0 [APG 2025/03/09]
 * ----------------------------------------------------------------------------
 */


import { Edr } from "../deps.ts";

import { BrdBlm_Home_PageResource } from "../resources/BrdBlm_Home_PageResource.ts";
import { BrdBlm_TC_Ctx_RestResource } from "../resources/BrdBlm_TC_Ctx_RestResource.ts";
import { BrdBlm_TC_SeD_Se_FP_RestResource } from "../resources/BrdBlm_TC_SeD_Se_FP_RestResource.ts";
import { BrdBlm_TC_SeD_V_ST_RestResource } from "../resources/BrdBlm_TC_SeD_V_ST_RestResource.ts";




export const BrdBlm_Resources: typeof Edr.Drash.Resource[] = [

    ...Edr.ApgEdr_Resources_Shared,

    BrdBlm_Home_PageResource,

    BrdBlm_TC_Ctx_RestResource,
    BrdBlm_TC_SeD_V_ST_RestResource,
    BrdBlm_TC_SeD_Se_FP_RestResource,


];













