

import { Edr } from "./deps.ts";

import { BrdBlm_Home_PageResource } from "./resources/BrdBlm_Home_PageResource.ts";
import { BrdBlm_TC_SeD_V_ST_RestResource } from "./resources/BrdBlm_TC_SeD_V_ST_RestResource.ts";


export const BrdBlm_Services: Edr.Drash.Service[] = [
    new Edr.BrdEdrAnyRequestService(),
]

export const BrdBlm_Resources: typeof Edr.Drash.Resource[] = [

    Edr.BrdEdrAnyAssetResource,

    BrdBlm_Home_PageResource,

    BrdBlm_TC_SeD_V_ST_RestResource,


];
