/** ---------------------------------------------------------------------------
 * @module [BrdBlm_TC_SeD]
 * @author [APG] Angeli Paolo Giusto
 * @author [DLV] De Luca Valentina
 * @version 0.1 DLV+APG 20230801
 * @version 0.2 DLV 20231013 - fori Oblò, Maniglia, Griglie di Ventilazione ed eventuali tamponamenti
 * @version 0.3 APG 20231110 - Refactoring e semplificazione
 * ----------------------------------------------------------------------------
 */

import {
    Uts
} from "../../../deps.ts";
import {
    BrdBlm_IPoint2D
} from "../../../interfaces/BrdBlm_IPoint2D.ts";
import {
    BrdBlm_TC_SeD_InsertHoleDimensions_Table
} from "../data/tables/BrdBlm_TC_SeD_InsertHoleDimensions_Table.ts";
import {
    BrdBlm_TC_SeD_Inserts_Table
} from "../data/tables/BrdBlm_TC_SeD_Inserts_Table.ts";
import {
    BrdBlm_TC_SeD_eInsertHoleType
} from "../enums/BrdBlm_TC_SeD_eInsertHoleType.ts";




/**
 * Generatore di geometrie per operazioni booleane di sottrazione
 * Utilizzato per fare i fori degli inserti sui pannelli sia delle sezioni che delle ante.
 */
export class BrdBlm_TC_SeD_HoleOutlinesService {


    /**
     *  Ricerca il tipo di inserto dal priprio codice di anagrafica
     */
    static #getInsertHoleTypeByArticleCode(acode: string) {

        let r = BrdBlm_TC_SeD_eInsertHoleType.ERROR;

        for (const insert of BrdBlm_TC_SeD_Inserts_Table) {
            if (insert.articles.findIndex((a) => a.code == acode) !== -1) {
                r = insert.holeType;
                break;
            }
        }

        return r;

    }



    /**
     * Sposta il profilo nella posizione indicata
     */
    static #moveHole(
        aoutline: BrdBlm_IPoint2D[],
        aposition: BrdBlm_IPoint2D,
    ) {

        const r: BrdBlm_IPoint2D[] = [];

        for (const point of aoutline) {
            const newPoint: BrdBlm_IPoint2D = {
                x: point.x + aposition.x,
                y: point.y + aposition.y,
            };
            r.push(newPoint);
        }

        return r;

    }



    /**
     * Ottiene il profilo di estrusione nella posizione indicata per 
     * realizzare il foro dell'inserto identificato con il codice articolo 
     */
    static getOutlineByInsertCode(
        ainsertCode: string,
        aposition: BrdBlm_IPoint2D
    ) {

        let r: BrdBlm_IPoint2D[] = [];

        const insertHoleType = this.#getInsertHoleTypeByArticleCode(ainsertCode);
        // TODO remove asserts from server side. -- APG 20231231
        Uts.BrdUts.Assert(
            insertHoleType !== BrdBlm_TC_SeD_eInsertHoleType.ERROR,
            `Codice inserto [${ainsertCode}] non trovato`
        );

        const index = BrdBlm_TC_SeD_InsertHoleDimensions_Table.findIndex(
            (a) => a.type == insertHoleType
        );
        Uts.BrdUts.Assert(
            index === -1,
            `Dati foro per inserto non trovati per tipo foro [${insertHoleType}]`
        );

        const holeData = BrdBlm_TC_SeD_InsertHoleDimensions_Table[index];

        // Se ha una sagoma speciale
        if (holeData.outline != undefined) {
            r = [...structuredClone(holeData.outline)];
        }
        // Se è un foro rettangolare
        else {
            r = [
                { x: 0, y: 0 },
                { x: 0, y: holeData.h },
                { x: holeData.w, y: holeData.h },
                { x: holeData.w, y: 0 },
            ];
        }
        r = this.#moveHole(r, aposition);

        return r;

    }




}

