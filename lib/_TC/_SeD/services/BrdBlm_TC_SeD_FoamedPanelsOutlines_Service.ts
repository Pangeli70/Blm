/*! ---------------------------------------------------------------------------
 * @copyright Breda Sistemi industriali S.p.A., 2023 - http://bredasys.com
 * All rights reserved
 * @licence You cannot host, display, distribute or share this Work in any
 * form, both physical and digital. You cannot use this Work in any commercial
 * or non-commercial product, website or project. You cannot sell this Work
 * and you cannot mint an NFTs out of it.
 * ---------------------------------------------------------------------------
 */
/** ---------------------------------------------------------------------------
 * @module [Brd/3Dv]
 * @author [DLV] De Luca Valentina
 * @author [APG] Angeli Paolo Giusto
 * @version 0.1 DLV 20230626
 * @version 0.2 APG 20230720 Integrazione in Brd3Dv + Refactoring e documentazione
 * @version 0.3 APG 20231110 Refactoring e pulizia
 * ----------------------------------------------------------------------------
 */



import {
    Uts
} from "../../../deps.ts";
import {
    BrdBlm_IIntExtOutlines
} from "../../../interfaces/BrdBlm_IIntExtOutlines.ts";
import {
    BrdBlm_IPoint2D
} from "../../../interfaces/BrdBlm_IPoint2D.ts";
import {
    BrdBlm_TC_SeD_RULES
} from "../const/BrdBlm_TC_SeD_RULES.ts";
import {
    BrdBlm_TC_SeD_eFoamedPanelsOutline
} from "../enums/BrdBlm_TC_SeD_eFoamedPanelsOutline.ts";
import {
    BrdBlm_TC_SeD_eSectionFamily
} from "../enums/BrdBlm_TC_SeD_eSectionFamily.ts";
import {
    BrdBlm_TC_SeD_eSectionType
} from "../enums/BrdBlm_TC_SeD_eSectionType.ts";
import {
    BrdBlm_TC_SeD_ISectionParams
} from "../interfaces/BrdBlm_TC_SeD_ISectionParams.ts";
import {
    BrdBlm_TC_SeD_TSectionsOutlines_Recordset
} from "../types/BrdBlm_TC_SeD_TSectionsOutlines_Recordset.ts";




/**
 * Gestore delle sagome per l'estrusione dei pannelli schiumati dei 
 * Portoni sezionali
 */
export class BrdBlm_TC_SeD_FoamedPanelsOutlines_Service {


    private static _outlines: BrdBlm_TC_SeD_TSectionsOutlines_Recordset | null = null;
    private static _isInited = false;

    static #init() {

        if (this._isInited) return this._outlines!;

        this._outlines = {
            [BrdBlm_TC_SeD_eFoamedPanelsOutline.MALE]: this.#initMaleOutlines(),
            [BrdBlm_TC_SeD_eFoamedPanelsOutline.FEMALE]: this.#initFemaleOutlines(),
            [BrdBlm_TC_SeD_eFoamedPanelsOutline.TOP_CUT]: this.#initTopCutOutlines(),
            [BrdBlm_TC_SeD_eFoamedPanelsOutline.BOTTOM_CUT]: this.#initBottomCutOutlines(),
            [BrdBlm_TC_SeD_eFoamedPanelsOutline.STAVE]: this.#initStaveOutlines(),
        }
        this._isInited = true;

        return this._outlines!;

    }

    
    static getIntExtOutlines(aoutline: BrdBlm_TC_SeD_eFoamedPanelsOutline) { 
        const recordset = this.#init();
        return recordset[aoutline];
    }

    /**
     * Sposta con offset verticale una sequenza di punti di un profilo.
     *
     * @param apoints Elenco di punti da offsettare
     * @param adeltaY Spostamento verticale in mm
     *
     * @returns Un nuovo array, i punti vengono copiati in un nuovo oggetto
     */
    static #offsetPointsOnYAxis(
        apoints: BrdBlm_IPoint2D[],
        adeltaY: number
    ) {

        const r: BrdBlm_IPoint2D[] = [];

        for (const point of apoints) {
            const newPoint: BrdBlm_IPoint2D = { x: point.x, y: point.y + adeltaY };
            r.push(newPoint);
        }

        return r;
    }



    static #initFemaleOutlines() {

        const r: BrdBlm_IIntExtOutlines = { int: [], ext: [] };
        const W = BrdBlm_TC_SeD_RULES.PANEL_CONSTRUCTION.SECTION_WIDTH;
        const H = BrdBlm_TC_SeD_RULES.PANEL_CONSTRUCTION.MALE_FEMALE_HEIGHT;

        r.ext = [
            { x: W / 2, y: 27.5 },
            { x: 11, y: 27.5 },
            { x: 3, y: 0 },
            { x: 1, y: 0 },
            { x: 0, y: 1 },
            { x: 0, y: H },
        ];

        r.int = [
            { x: W, y: H },
            { x: W, y: 9 },
            { x: 38, y: 9 },
            { x: 30.5, y: 27.5 },
            { x: W / 2, y: 27.5 },
        ];

        return r;
    }



    static #initMaleOutlines() {
        const r: BrdBlm_IIntExtOutlines = { int: [], ext: [] };
        const W = BrdBlm_TC_SeD_RULES.PANEL_CONSTRUCTION.SECTION_WIDTH;
        const H = BrdBlm_TC_SeD_RULES.PANEL_CONSTRUCTION.MALE_FEMALE_HEIGHT;

        r.ext = [
            { x: 0, y: 0 },
            { x: 0, y: 7.5 },
            { x: 3, y: 11.5 },
            { x: 3, y: 22 },
            { x: 6, y: 25 },
            { x: 9, y: 35 },
            { x: 12, y: 40 },
            { x: 17.5, y: H },
            { x: W / 2, y: H },
        ];

        r.int = [
            { x: W / 2, y: H },
            { x: 31, y: H },
            { x: 35.5, y: 38.5 },
            { x: 35.5, y: 33.5 },
            { x: 32.5, y: 31 },
            { x: 31, y: 27 },
            { x: 32.5, y: 22.5 },
            { x: 36, y: 19.5 },
            { x: W, y: 19.5 },
            { x: W, y: 0 },
        ];
        return r;
    }



    static #initTopCutOutlines() {
        const r: BrdBlm_IIntExtOutlines = { int: [], ext: [] };
        const W = BrdBlm_TC_SeD_RULES.PANEL_CONSTRUCTION.SECTION_WIDTH;

        r.ext = [
            { x: 0, y: 0 },
            { x: W / 2, y: 0 },
        ];

        r.int = [
            { x: W / 2, y: 0 },
            { x: W, y: 0 },
        ];
        return r;
    }



    static #initBottomCutOutlines() {
        const r: BrdBlm_IIntExtOutlines = { int: [], ext: [] };
        const W = BrdBlm_TC_SeD_RULES.PANEL_CONSTRUCTION.SECTION_WIDTH;

        r.ext = [
            { x: W / 2, y: 0 },
            { x: 0, y: 0 },
        ];

        r.int = [
            { x: W, y: 0 },
            { x: W / 2, y: 0 },
        ];
        return r;
    }



    static #initStaveOutlines() {
        const r: BrdBlm_IIntExtOutlines = { int: [], ext: [] };
        const W = BrdBlm_TC_SeD_RULES.PANEL_CONSTRUCTION.SECTION_WIDTH;

        r.ext = [
            { x: 0, y: -9 },
            { x: 2, y: -7 },
            { x: 2, y: 7 },
            { x: 0, y: 9 },
        ];

        r.int = [
            { x: W, y: 9 },
            { x: 40, y: 7 },
            { x: 40, y: -7 },
            { x: W, y: -9 },
        ];
        return r;
    }



    /**
     * Determina la posizione degli interassi delle nervature dei pannelli
     * coibentati per il portone sezionale.
     *
     * @param atype Disegno sezione anche con le sue varianti alto/basso
     * @param aheight Altezza pannello in millimetri
     *
     * @returns un oggetto con gli interassi interni ed esterni delle nervature del pannello
     */
    static #getFoamedPanelsStaveCenterlinesBySectionType(
        atype: BrdBlm_TC_SeD_eSectionType,
        aheight: number
    ) {

        // Interassi esterni
        const EXT_CL = [116, 238, 360, 482];
        // Intrerassi interni
        const INT_CL = [492, 370, 248, 126];

        const r: { ext: number[]; int: number[]; } = { ext: [], int: [] };

        // esterno
        if (atype === BrdBlm_TC_SeD_eSectionType.MULTI) {
            r.ext.push(EXT_CL[0], EXT_CL[1], EXT_CL[2]);
            if (aheight !== 495) {
                r.ext.push(EXT_CL[3]);
            }
        }
        if (atype === BrdBlm_TC_SeD_eSectionType.SINGLE ||
            atype === BrdBlm_TC_SeD_eSectionType.SINGLE_L) {
            r.ext.push(EXT_CL[1]);
        }
        if (atype === BrdBlm_TC_SeD_eSectionType.SINGLE_H) {
            r.ext.push(EXT_CL[2]);
        }

        // interno
        if (aheight !== 495) {
            r.int.push(INT_CL[0]);
        }
        r.int.push(INT_CL[1], INT_CL[2], INT_CL[3]);

        return r;
    }



    /**
     * Restituisce le sequenze di punti delle porzioni verticali tra la femmina
     * ed il maschio dei profili dei pannelli schiumati in base al disegno,
     * alla altezza ed alla eventuale presenza di tagli.
     *
     * @remarks I profili restituiti sono già nella corretta sequenza:
     * dal basso verso l'alto per il profilo esterno e
     * dall'alto verso il basso per il profilo interno.
     */
    static #getFoamedPanelsVerticalOutlines(
        aparams: BrdBlm_TC_SeD_ISectionParams
    ) {

        const recordset = this.#init();

        // TODO Refactor this method is too large and complex -- APG 20230720
        const r: BrdBlm_IIntExtOutlines = { int: [], ext: [] };

        // Per i pannelli schiumati
        if (aparams.family == BrdBlm_TC_SeD_eSectionFamily.FOAMED) {

            const stavesCenterlines = this.#getFoamedPanelsStaveCenterlinesBySectionType(
                aparams.type,
                aparams.height
            );

            // Pannello intero
            if (aparams.topCut === 0 && aparams.bottomCut === 0) {
                const stave = recordset[BrdBlm_TC_SeD_eFoamedPanelsOutline.STAVE];
                //esterno
                for (const centerline of stavesCenterlines.ext) {

                    const offsettedStaveOutlineExt = this.#offsetPointsOnYAxis(
                        stave.ext,
                        centerline
                    );
                    r.ext.push(...offsettedStaveOutlineExt);
                }
                //interno
                for (const centerline of stavesCenterlines.int) {
                    const offsettedStaveOutlineInt = this.#offsetPointsOnYAxis(
                        stave.int,
                        centerline
                    );
                    r.int.push(...offsettedStaveOutlineInt);
                }
            }

            // Taglio alto
            if (aparams.topCut !== 0) {

                const stave = recordset[BrdBlm_TC_SeD_eFoamedPanelsOutline.STAVE];

                //esterno
                for (const extCenterline of stavesCenterlines.ext) {
                    const staveBegin = extCenterline - BrdBlm_TC_SeD_RULES.PANEL_CONSTRUCTION.STAVE_HALF_HEIGHT;
                    const staveEnd = extCenterline + BrdBlm_TC_SeD_RULES.PANEL_CONSTRUCTION.STAVE_HALF_HEIGHT;
                    if (aparams.topCut >= staveEnd) {
                        const offsettedStaveOutline = this.#offsetPointsOnYAxis(
                            stave.ext,
                            extCenterline
                        );
                        r.ext.push(...offsettedStaveOutline);
                        continue;
                    }
                    if (aparams.topCut >= staveBegin) {
                        r.ext.push({ x: 0, y: aparams.topCut });
                        break;
                    }
                    r.ext.push({ x: 0, y: aparams.topCut });
                    break;
                }

                //interno
                for (const centerline of stavesCenterlines.int) {
                    const staveBegin = centerline - BrdBlm_TC_SeD_RULES.PANEL_CONSTRUCTION.STAVE_HALF_HEIGHT;
                    const staveEnd = centerline + BrdBlm_TC_SeD_RULES.PANEL_CONSTRUCTION.STAVE_HALF_HEIGHT;
                    if (aparams.topCut <= staveEnd) {
                        const point = {
                            x: BrdBlm_TC_SeD_RULES.PANEL_CONSTRUCTION.SECTION_WIDTH,
                            y: aparams.topCut
                        }
                        r.int.push(
                            point
                        );
                        continue;
                    }
                    if (aparams.topCut <= staveBegin) {
                        const point = {
                            x: BrdBlm_TC_SeD_RULES.PANEL_CONSTRUCTION.SECTION_WIDTH,
                            y: aparams.topCut
                        };
                        r.int.push(point);
                        break;
                    }
                    const offsettedStaveOutline = this.#offsetPointsOnYAxis(
                        stave.int,
                        centerline
                    );
                    r.int.push(...offsettedStaveOutline);
                    continue;
                }
            }

            // Taglio basso
            Uts.BrdUts.Assert(
                aparams.bottomCut == 0,
                `Taglio basso non implementato`
            );
            // TODO Implement this -- APG 20230720
        }

        return r;
    }




    /**
     * Assembla le varie porzioni di profili e restituisce l'intero profilo
     * ESTERNO del pannello sezionale
     *
     * @param aparams Parametri di costruzione della sezione
     * @param aextVertOutline elenco dei punti del profilo verticale esterno già impostati con il disegno del pannello e nel giusto ordine dal basso verso l'alto
     */
    static #buildExtOutlineForFoamedPanel(
        aparams: BrdBlm_TC_SeD_ISectionParams,
        aextVertOutline: BrdBlm_IPoint2D[]
    ) {

        const recordset = this.#init();

        const r: BrdBlm_IPoint2D[] = [];

        let portionOfOutline: BrdBlm_IPoint2D[];

        // E' tagliato sotto selezione il profilo di taglio basso
        if (aparams.bottomCut !== 0) {
            portionOfOutline = recordset[BrdBlm_TC_SeD_eFoamedPanelsOutline.BOTTOM_CUT].ext;
        }
        // Non è tagliato sotto seleziona il profilo femmina
        else {
            portionOfOutline = recordset[BrdBlm_TC_SeD_eFoamedPanelsOutline.FEMALE].ext;
        }
        r.push(...structuredClone(portionOfOutline));

        // punti intermedi esterni (disegno flat, single, ecc.)
        r.push(...structuredClone(aextVertOutline));

        // Non è tagliato sopra seleziona il porfilo maschio alla altezza giusta
        if (aparams.topCut === 0) {
            portionOfOutline = this.#offsetPointsOnYAxis(
                recordset[BrdBlm_TC_SeD_eFoamedPanelsOutline.MALE].ext,
                aparams.height - BrdBlm_TC_SeD_RULES.PANEL_CONSTRUCTION.MALE_FEMALE_OVERLAP
            );
        }
        // E' tagliato sopra inserisce il profilo di taglio alto alla altezza giusta
        else {
            portionOfOutline = this.#offsetPointsOnYAxis(
                recordset[BrdBlm_TC_SeD_eFoamedPanelsOutline.TOP_CUT].ext,
                aparams.topCut
            );
        }
        r.push(...structuredClone(portionOfOutline));

        // A questo punto il profilo scende dritto fino a ricongiungersi alla femmina.
        return r;
    }



    /**
     * Assembla le varie porzioni di profili e restituisce l'intero profilo
     * INTERNO del pannello sezionale.
     *
     * @param aparams Parametri di costruzione della sezione
     * @param aintVertOutline Elenco dei punti del profilo verticale interno già impostati con il disegno del pannello nel giusto ordine dall'alto verso il basso
     */
    static #buildIntOutlineForFoamedPanel(
        aparams: BrdBlm_TC_SeD_ISectionParams,
        aintVertOutline: BrdBlm_IPoint2D[]
    ) {

        const recordset = this.#init();

        const r: BrdBlm_IPoint2D[] = [];

        let portionOfOutline: BrdBlm_IPoint2D[];

        // E' tagliato sotto
        if (aparams.bottomCut !== 0) {
            portionOfOutline = recordset[BrdBlm_TC_SeD_eFoamedPanelsOutline.BOTTOM_CUT].int;
        }
        // Non è tagliato sotto seleziona il profilo femmina la femmina
        else {
            portionOfOutline = recordset[BrdBlm_TC_SeD_eFoamedPanelsOutline.FEMALE].int;
        }
        r.push(...structuredClone(portionOfOutline));

        // NOTE A questo punto il profilo sale dritto fino all'inizio del maschio.

        // Non è tagliato sopra seleziona il profilo maschio alla altezza giusta
        if (aparams.topCut === 0) {
            portionOfOutline = this.#offsetPointsOnYAxis(
                recordset[BrdBlm_TC_SeD_eFoamedPanelsOutline.MALE].int,
                aparams.height - BrdBlm_TC_SeD_RULES.PANEL_CONSTRUCTION.MALE_FEMALE_OVERLAP
            );
        }
        // E' tagliato sopra seleziona il profilo di taglio alto alla altezza giusta
        else {
            portionOfOutline = this.#offsetPointsOnYAxis(
                recordset[BrdBlm_TC_SeD_eFoamedPanelsOutline.TOP_CUT].int,
                aparams.topCut
            );
        }
        r.push(...structuredClone(portionOfOutline));

        // punti intermedi interni (multi)
        r.push(...structuredClone(aintVertOutline));

        // NOTE A questo punto il profilo è già ricongiunto alla femmina.

        return r;
    }



    /**
     * Restituisce le sequenze di punti complete dei profili dei pannelli per sezionale in base
     * al disegno, alla altezza ed alla eventuale presenza di tagli.
     *
     * @param aparams Parametri di costruzione della sezione
     *
     * @remarks Vengono restituiti due profili uno per la sagoma esterna del pannello ed uno per la sagoma
     * interna. La sequenza dei punti è sempre in senso orario a partire dal basso a sinistra.
     * Lo zero sull'asse delle ascisse è sull'esterno del pannello.
     * Attualmente il pannello è diviso pefettamente a metà.
     */
    static getOutlines(aparams: BrdBlm_TC_SeD_ISectionParams) {

        this.#init();

        const verticalOutlines = this.#getFoamedPanelsVerticalOutlines(aparams);

        const r: BrdBlm_IIntExtOutlines = {
            ext: this.#buildExtOutlineForFoamedPanel(aparams, verticalOutlines.ext),
            int: this.#buildIntOutlineForFoamedPanel(aparams, verticalOutlines.int)
        };

        return r;
    }




}


