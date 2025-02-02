/** ---------------------------------------------------------------------------
 * @module [BrdBlm_TC_SeD_Se_FP]
 * @author [APG] ANGELI Paolo Giusto
 * @version 0.1 APG 20240106
 * ----------------------------------------------------------------------------
 */

import { ApgA3D_Extrudable } from "../../../../../../A3D/lib/classes/ApgA3D_Extrudable.ts";
import { Uts } from "../../../../deps.ts";
import { ApgA3D_IIntExtOutlines } from "../../../../../../A3D/lib/interfaces/ApgA3D_IIntExtOutlines.ts";
import { ApgA3D_IPoint2D } from "../../../../../../A3D/lib/interfaces/ApgA3D_IPoint2D.ts";
import { BrdBlm_TC_SeD_ISectionParams } from "../../interfaces/BrdBlm_TC_SeD_ISectionParams.ts";
import { BrdBlm_TC_SeD_FoamedPanelsOutlines_Service } from "../../services/BrdBlm_TC_SeD_FoamedPanelsOutlines_Service.ts";
import { BrdBlm_TC_SeD_HolesOutlinesService } from "../../services/BrdBlm_TC_SeD_HoleOutlinesService.ts";

const MODULE_NAME = import.meta.url;



/**
 * Pannello coibentato per i portoni sezionali
 */
export class BrdBlm_TC_SeD_FP extends ApgA3D_Extrudable {

    /**
     * Sagome di estrusione delle mesh esterna ed interna del pannello coibentato
     */
    panelOutlines: ApgA3D_IIntExtOutlines;

    /**
     * Sagome di estrusione dei fori per le operazioni booleane sul pannello coibentato
     */
    insertsOutlines: ApgA3D_IPoint2D[][] = [];

    /**
     * Stato di questo oggetto
     */
    status = new Uts.BrdUts_Result();


    /**
     * Costruttore
     */
    constructor(aparams: BrdBlm_TC_SeD_ISectionParams) {

        super();

        this.length = aparams.length;

        this.panelOutlines = BrdBlm_TC_SeD_FoamedPanelsOutlines_Service.getOutlines(aparams);

        const ry = Uts.BrdUts.RAD_90;
        this.addRotateYOp(ry, false);

        const tz = -aparams.length / 2;
        this.addTranslateZOp(tz, false);

        const ty = aparams.displacement;
        this.addTranslateYOp(ty, false);

        const nr = this.#getInsertsHolesOutlines(aparams);
        if (!nr.ok) {
            this.status = nr;
            return;
        }
        this.insertsOutlines = nr.payload as ApgA3D_IPoint2D[][];
    }



    #getInsertsHolesOutlines(aparams: BrdBlm_TC_SeD_ISectionParams) {

        let r = new Uts.BrdUts_Result();

        const outlines: ApgA3D_IPoint2D[][] = [];
        if (!aparams.inserts) {
            r.setPayload(outlines, "");
            return r;
        }

        for (const insert of aparams.inserts) {

            const nr = BrdBlm_TC_SeD_HolesOutlinesService.getOutlineByInsertCode(
                insert.code,
                insert.position
            )
            if (!nr.ok) {
                r = nr;
                return r;
            }
            else {
                outlines.push(nr.payload as ApgA3D_IPoint2D[]);
            }
        }

        r.setPayload(outlines, "");

        return r;
    }

}

