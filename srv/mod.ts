

import { Edr } from "./deps.ts";

import {
    BrdBlm_Home_PageResource
} from "./resources/BrdBlm_Home_PageResource.ts";
import {
    BrdBlm_TC_Ctx_RestResource
} from "./resources/BrdBlm_TC_Ctx_RestResource.ts";
import {
    BrdBlm_TC_SeD_Se_FP_RestResource
} from "./resources/BrdBlm_TC_SeD_Se_FP_RestResource.ts";
import {
    BrdBlm_TC_SeD_V_ST_RestResource
} from "./resources/BrdBlm_TC_SeD_V_ST_RestResource.ts";


export const BrdBlm_Services: Edr.Drash.Service[] = [
    new Edr.BrdEdr_AnyRequest_Service(),
]

export const BrdBlm_Resources: typeof Edr.Drash.Resource[] = [

    Edr.BrdEdr_AnyAsset_FileResource,

    BrdBlm_Home_PageResource,

    BrdBlm_TC_Ctx_RestResource,
    BrdBlm_TC_SeD_V_ST_RestResource,
    BrdBlm_TC_SeD_Se_FP_RestResource,


];
