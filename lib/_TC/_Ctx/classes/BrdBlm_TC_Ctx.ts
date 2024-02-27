/** ---------------------------------------------------------------------------
 * @module [BrdBlm_TC_Ctx]
 * @author [APG] Angeli Paolo Giusto 
 * @version 0.1 APG 20240225
 * ----------------------------------------------------------------------------
 */


import {
    Uts
} from "../../../deps.ts";
import {
    BrdBlm_TC_Ctx_IParams
} from "../interfaces/BrdBlm_TC_Ctx_IParams.ts";
import {
    BrdBlm_TC_Ctx_Service
} from "../../interfaces/services/BrdBlm_TC_Ctx_Service.ts";
import {
    BrdBlm_TC_Ctx_TMaterialDefRecordset
} from "../types/BrdBlm_TC_Ctx_TMaterialDefRecordset.ts";
import {
    BrdBlm_TC_Ctx_TComponentRecordset
} from "../types/BrdBlm_TC_Ctx_TComponentRecordset.ts";



export const BrdBlm_TC_Ctx_Signature = "BrdBlm_TC_Ctx_Signature_V1"



/**
 * Contesto di installazione per una chiusura tecnica
 */
export class BrdBlm_TC_Ctx {

    readonly signature = BrdBlm_TC_Ctx_Signature;

    status = new Uts.BrdUts_Result();

    params?: BrdBlm_TC_Ctx_IParams

    components?: BrdBlm_TC_Ctx_TComponentRecordset;

    materialDefs?: BrdBlm_TC_Ctx_TMaterialDefRecordset


    constructor(
        aparams: BrdBlm_TC_Ctx_IParams
    ) {

        this.status = BrdBlm_TC_Ctx_Service.ValidateParams(aparams)

        if (this.status.ok) {
            this.params = this.status.payload as BrdBlm_TC_Ctx_IParams;
            this.components = BrdBlm_TC_Ctx_Service.GetComponents(this.params);
            this.materialDefs = BrdBlm_TC_Ctx_Service.GetMaterials(this.params);
            this.status.setPayload(undefined, "")
        }


    }

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
