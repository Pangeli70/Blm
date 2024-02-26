
import { Uts } from "../../../deps.ts";
import { BrdBlm_IMaterialDef } from "../../../interfaces/BrdBlm_IMaterialDef.ts";
import { BrdBlm_IPoint2D } from "../../../interfaces/BrdBlm_IPoint2D.ts";
import { BrdBlm_TC_Ctx_Component } from "../classes/BrdBlm_TC_Ctx_Component.ts";
import { BrdBlm_TC_Ctx_eFacadeColor } from "../enums/BrdBlm_TC_Ctx_eFacadeColor.ts";
import { BrdBlm_TC_Ctx_eFacadeFinish } from "../enums/BrdBlm_TC_Ctx_eFacadeFinish.ts";
import { BrdBlm_TC_Ctx_eFloorColor } from "../enums/BrdBlm_TC_Ctx_eFloorColor.ts";
import { BrdBlm_TC_Ctx_eFloorFinish } from "../enums/BrdBlm_TC_Ctx_eFloorFinish.ts";
import { BrdBlm_TC_Ctx_ePartName } from "../enums/BrdBlm_TC_Ctx_ePartName.ts";
import { BrdBlm_TC_Ctx_ePavementColor } from "../enums/BrdBlm_TC_Ctx_ePavementColor.ts";
import { BrdBlm_TC_Ctx_ePavementFinish } from "../enums/BrdBlm_TC_Ctx_ePavementFinish.ts";
import { BrdBlm_TC_Ctx_eThresholdColor } from "../enums/BrdBlm_TC_Ctx_eThresholdColor.ts";
import { BrdBlm_TC_Ctx_eThresholdFinish } from "../enums/BrdBlm_TC_Ctx_eThresholdFinish.ts";
import { BrdBlm_TC_Ctx_eWallColor } from "../enums/BrdBlm_TC_Ctx_eWallColor.ts";
import { BrdBlm_TC_Ctx_eWallFinish } from "../enums/BrdBlm_TC_Ctx_eWallFinish.ts";
import { BrdBlm_TC_Ctx_IParams, BrdBlm_TC_Ctx_IParams_Signature } from "../interfaces/BrdBlm_TC_Ctx_IParams.ts";
import { BrdBlm_TC_Ctx_FacadeFinishRecordset } from "../recordsets/BrdBlm_TC_Ctx_FacadeFinishRecordset.ts";
import { BrdBlm_TC_Ctx_PavementFinishRecordset } from "../recordsets/BrdBlm_TC_Ctx_PavementFinishRecordset.ts";
import { BrdBlm_TC_Ctx_FloorFinishRecordset } from "../recordsets/BrdBlm_TC_Ctx_FloorFinishRecordset.ts";
import { BrdBlm_TC_Ctx_ThresholdFinishRecordset } from "../recordsets/BrdBlm_TC_Ctx_ThresholdFinishRecordset.ts";
import { BrdBlm_TC_Ctx_WallFinishRecordset } from "../recordsets/BrdBlm_TC_Ctx_WallFinishRecordset.ts";
import { BrdBlm_TC_Ctx_TMaterialRecordset } from "../types/BrdBlm_TC_Ctx_TMaterialRecordset.ts";
import { BrdBlm_TC_Ctx_TRecordset } from "../types/BrdBlm_TC_Ctx_TRecordset.ts";


export const BrdBlm_TC_Ctx_Defaults = {

    /**
     * Spazio laterale aggiuntivo sulla facciata in mm
     */
    EXTRA_LATERAL_SPACE: 1000,

    /**
     * Spazio superiore aggintivo sulla facciata in mm
     */
    EXTRA_UPPER_SPACE: 1000,

    /**
     * Spessore del muro della facciata in mm
     */
    FACADE_THICKNESS: 300,

    /**
     * Lunghezza della pavimentazione esterna in mm
     */
    PAVEMENT_DEPTH: 5000,

    /**
     * Spessore della pavimentazione esterna in mm
     */
    PAVEMENT_THICKNESS: 40,


    /**
     * Probabilità di avere la soglia
     */
    HAS_THRESHOLD_CHANCE: 0.7,


    /**
     * Probabilità di avere la lo zoccolo esterno
     */
    HAS_EXTERN_BASEBOARD_CHANCE: 0.7,

    /**
     * Altezza massima battiscopa esterno in mm
     */
    EXTERN_BASEBOARD_MAX_HEIGHT: 250,

    /**
     * Spessore del battiscopa esterno in mm
     */
    EXTERN_BASEBOARD_THICKNESS: 15,

    /**
     * Probabilità di avere il marciapiede esterno
     */
    HAS_EXTERN_SIDEWALK_CHANCE: 0.5,

    /**
     * Profondità massima dei marciapiede in mm
     */
    EXTERN_SIDEWALK_MAX_DEPTH: 800,

    /**
     * Altezza del marciapiede in mm
     */
    EXTERN_SIDEWALK_HEIGHT: 150,

    /**
     * Probabilità di avere la cornice
     */
    HAS_EXTERN_FRAME_CHANCE: 0.7,

    /**
     * Larghezza massima della cornice in mm
     */
    EXTERN_FRAME_MAX_WIDTH: 150,

    /**
     * Spessore massimo della cornice in mm
     */
    EXTERN_FRAME_MAX_THICKNESS: 30,

    /**
     * Dimensione della spalletta interna in mm
     */
    EMBRASURE: 200,

    /**
     * Fattore di incremento della profondità interna della stanza rispetto 
     * all'altezza del foro in mm
     */
    ROOM_DEPTH_INCREMENT: 1000,


    /**
     * Spessore della pavimentazione interna in mm
     */
    FLOOR_THICKNESS: 50,


    /**
     * Probabilità di avere la lo zoccolo interno
     */
    HAS_INTERN_BASEBOARD_CHANCE: 0.7,

    /**
     * Altezza massima battiscopa interno in mm
     */
    INTERN_BASEBOARD_MAX_HEIGHT: 150,

    /**
     * Spessore del battiscopa interno in mm
     */
    INTERN_BASEBOARD_THICKNESS: 10,



    /**
     * Spessore del soffitto in mm
     */
    CEILING_THICKNESS: 250,

    /**
     * Spessore delle pareti in mm
     */
    WALLS_THICKNESS: 200,


} as const;


const MODULE_NAME = "BrdBlm_TC_Ctx_Service";


export class BrdBlm_TC_Ctx_Service {


    //--------------------------------------------------------------------------
    // #region Params validation


    static ValidateParams(
        acontext: BrdBlm_TC_Ctx_IParams
    ) {

        const r = new Uts.BrdUts_Result();

        const aparams = structuredClone(acontext) as BrdBlm_TC_Ctx_IParams;

        this.#validateFacade(aparams);

        this.#validateExternFrame(aparams);

        this.#validatePavement(aparams);

        this.#validateThreshold(aparams);

        this.#validateExternBaseBoard(aparams);

        this.#validateSidewalk(aparams);

        this.#validateHoleTopOutline(aparams, r);

        this.#validateAdditionalLintel(aparams, r);

        this.#validateEmbrasures(aparams);

        this.#validateFloor(aparams);

        this.#validateInternBaseBoard(aparams);

        this.#validateCeiling(aparams, r);

        this.#validateWalls(aparams, r);

        this.#validateBeams(aparams);

        this.#validateColumns(aparams);

        r.setPayload(aparams, BrdBlm_TC_Ctx_IParams_Signature);

        return r;
    }




    static #validateFacade(aparams: BrdBlm_TC_Ctx_IParams) {

        if (!aparams.facadeLeft) {
            aparams.facadeLeft = BrdBlm_TC_Ctx_Defaults.EXTRA_LATERAL_SPACE;
        }
        if (!aparams.facadeRight) {
            aparams.facadeRight = BrdBlm_TC_Ctx_Defaults.EXTRA_LATERAL_SPACE;
        }
        if (!aparams.facadeTop) {
            aparams.facadeTop = BrdBlm_TC_Ctx_Defaults.EXTRA_UPPER_SPACE;
        }
        if (!aparams.facadeThickness) {
            aparams.facadeThickness = BrdBlm_TC_Ctx_Defaults.FACADE_THICKNESS;
        }
        if (!aparams.facadeColor) {
            aparams.facadeColor = Uts.BrdUts.GetRandomFromEnum<BrdBlm_TC_Ctx_eFacadeColor>(BrdBlm_TC_Ctx_eFacadeColor);
        }
        if (!aparams.facadeFinish) {
            aparams.facadeFinish = Uts.BrdUts.GetRandomFromEnum<BrdBlm_TC_Ctx_eFacadeFinish>(BrdBlm_TC_Ctx_eFacadeFinish);
        }

    }



    static #validateExternFrame(aparams: BrdBlm_TC_Ctx_IParams) {

        if (aparams.hasExternFrame == undefined) {
            aparams.hasExternFrame = Math.random() < BrdBlm_TC_Ctx_Defaults.HAS_EXTERN_FRAME_CHANCE;
        }

        if (aparams.hasExternFrame) {
            if (!aparams.externFrameWidth) {
                const k = Uts.BrdUts.GetRandomInRange(0.5, 1, 1);
                aparams.externFrameWidth = k * BrdBlm_TC_Ctx_Defaults.EXTERN_FRAME_MAX_WIDTH;
            }

            if (!aparams.externFrameThickness) {
                const k = Uts.BrdUts.GetRandomInRange(0.5, 1, 1);
                aparams.externFrameThickness = k * BrdBlm_TC_Ctx_Defaults.EXTERN_FRAME_MAX_THICKNESS;
            }

            if (!aparams.externFrameColor) {
                aparams.externFrameColor = Uts.BrdUts.GetRandomFromEnum<BrdBlm_TC_Ctx_eFacadeColor>(BrdBlm_TC_Ctx_eFacadeColor);
            }

            if (!aparams.externFrameFinish) {
                aparams.externFrameFinish = Uts.BrdUts.GetRandomFromEnum<BrdBlm_TC_Ctx_eFacadeFinish>(BrdBlm_TC_Ctx_eFacadeFinish);
            }
        }
    }



    static #validatePavement(aparams: BrdBlm_TC_Ctx_IParams) {

        if (!aparams.pavementDepth) {
            aparams.pavementDepth = BrdBlm_TC_Ctx_Defaults.PAVEMENT_DEPTH;
        }
        if (!aparams.pavementThickness) {
            aparams.pavementThickness = BrdBlm_TC_Ctx_Defaults.PAVEMENT_THICKNESS;
        }
        if (!aparams.pavementColor) {
            aparams.pavementColor = Uts.BrdUts.GetRandomFromEnum<BrdBlm_TC_Ctx_ePavementColor>(BrdBlm_TC_Ctx_ePavementColor);
        }
        if (!aparams.pavementFinish) {
            aparams.pavementFinish = Uts.BrdUts.GetRandomFromEnum<BrdBlm_TC_Ctx_ePavementFinish>(BrdBlm_TC_Ctx_ePavementFinish);
        }
    }



    static #validateThreshold(aparams: BrdBlm_TC_Ctx_IParams) {

        if (aparams.hasThreshold == undefined) {
            aparams.hasThreshold = Math.random() < BrdBlm_TC_Ctx_Defaults.HAS_THRESHOLD_CHANCE;
        }

        if (aparams.hasThreshold) {

            if (!aparams.thresholdDepth) {
                const k = Uts.BrdUts.GetRandomInRange(0.5, 1, 1);
                aparams.thresholdDepth = k * aparams.facadeThickness!;
            }
            if (!aparams.thresholdColor) {
                aparams.thresholdColor = Uts.BrdUts.GetRandomFromEnum<BrdBlm_TC_Ctx_eThresholdColor>(BrdBlm_TC_Ctx_eThresholdColor);
            }
            if (!aparams.thresholdFinish) {
                aparams.thresholdFinish = Uts.BrdUts.GetRandomFromEnum<BrdBlm_TC_Ctx_eThresholdFinish>(BrdBlm_TC_Ctx_eThresholdFinish);
            }
        }
    }



    static #validateExternBaseBoard(aparams: BrdBlm_TC_Ctx_IParams) {

        if (aparams.hasExternBaseBoard == undefined) {
            aparams.hasExternBaseBoard = Math.random() < BrdBlm_TC_Ctx_Defaults.HAS_EXTERN_BASEBOARD_CHANCE;
        }

        if (aparams.hasExternBaseBoard) {

            if (!aparams.externBaseboardHeight) {
                const k = Uts.BrdUts.GetRandomInRange(0.5, 1, 1);
                aparams.externBaseboardHeight = k * BrdBlm_TC_Ctx_Defaults.EXTERN_BASEBOARD_MAX_HEIGHT;
            }
            if (!aparams.externBaseboardThickness) {
                aparams.externBaseboardThickness = BrdBlm_TC_Ctx_Defaults.EXTERN_BASEBOARD_THICKNESS;
            }
            if (!aparams.externBaseboardColor) {
                aparams.externBaseboardColor = Uts.BrdUts.GetRandomFromEnum<BrdBlm_TC_Ctx_eFacadeColor>(BrdBlm_TC_Ctx_eFacadeColor);
            }
            if (!aparams.externBaseboardFinish) {
                aparams.externBaseboardFinish = Uts.BrdUts.GetRandomFromEnum<BrdBlm_TC_Ctx_eFacadeFinish>(BrdBlm_TC_Ctx_eFacadeFinish);
            }
        }
    }



    static #validateSidewalk(aparams: BrdBlm_TC_Ctx_IParams) {

        if (aparams.hasSidewalk == undefined) {
            aparams.hasSidewalk = Math.random() < BrdBlm_TC_Ctx_Defaults.HAS_EXTERN_SIDEWALK_CHANCE;
        }

        if (aparams.hasSidewalk) {

            if (!aparams.sidewalkDepth) {
                const k = Uts.BrdUts.GetRandomInRange(0.5, 1, 1);
                aparams.sidewalkDepth = k * BrdBlm_TC_Ctx_Defaults.EXTERN_SIDEWALK_MAX_DEPTH;
            }
            if (!aparams.sidewalkHeight) {
                aparams.sidewalkHeight = BrdBlm_TC_Ctx_Defaults.EXTERN_SIDEWALK_HEIGHT;
            }
            if (!aparams.sidewalkColor) {
                aparams.sidewalkColor = Uts.BrdUts.GetRandomFromEnum<BrdBlm_TC_Ctx_ePavementColor>(BrdBlm_TC_Ctx_ePavementColor);
            }
            if (!aparams.sidewalkFinish) {
                aparams.sidewalkFinish = Uts.BrdUts.GetRandomFromEnum<BrdBlm_TC_Ctx_ePavementFinish>(BrdBlm_TC_Ctx_ePavementFinish);
            }
        }
    }



    static #validateHoleTopOutline(
        aparams: BrdBlm_TC_Ctx_IParams,
        ar: Uts.BrdUts_Result
    ) {

        if (!aparams.holeTopOutline) {
            aparams.holeTopOutline = [
                { x: -aparams.holeWidth / 2, y: aparams.holeHeight },
                { x: 0, y: aparams.holeHeight },
                { x: aparams.holeWidth / 2, y: aparams.holeHeight },
            ];
        }
        else {
            // TODO Check for points consistency at least left to right -- APG 20240224
        }
    }



    static #validateAdditionalLintel(
        aparams: BrdBlm_TC_Ctx_IParams,
        ar: Uts.BrdUts_Result
    ) {
        if (!aparams.lintelAdditionalHeight) {
            aparams.lintelAdditionalHeight = 0;
        }
        if (!aparams.lintelAdditionalDepth) {
            aparams.lintelAdditionalDepth = 0;
        }
    }



    static #validateEmbrasures(aparams: BrdBlm_TC_Ctx_IParams) {

        if (!aparams.embrasureRight) {
            aparams.embrasureRight = BrdBlm_TC_Ctx_Defaults.EMBRASURE;
        }
        if (!aparams.embrasureLeft) {
            aparams.embrasureLeft = BrdBlm_TC_Ctx_Defaults.EMBRASURE;
        }
    }



    static #validateFloor(aparams: BrdBlm_TC_Ctx_IParams) {

        if (!aparams.roomDepth) {
            aparams.roomDepth = aparams.holeHeight + BrdBlm_TC_Ctx_Defaults.ROOM_DEPTH_INCREMENT;
        }

        if (!aparams.floorThickness) {
            aparams.floorThickness = BrdBlm_TC_Ctx_Defaults.FLOOR_THICKNESS;
        }
        if (!aparams.floorColor) {
            aparams.floorColor = Uts.BrdUts.GetRandomFromEnum<BrdBlm_TC_Ctx_eFloorColor>(BrdBlm_TC_Ctx_eFloorColor);
        }
        if (!aparams.floorFinish) {
            aparams.floorFinish = Uts.BrdUts.GetRandomFromEnum<BrdBlm_TC_Ctx_eFloorFinish>(BrdBlm_TC_Ctx_eFloorFinish);
        }

    }



    static #validateInternBaseBoard(aparams: BrdBlm_TC_Ctx_IParams) {

        if (aparams.hasInternBaseBoard == undefined) {
            aparams.hasInternBaseBoard = Math.random() < BrdBlm_TC_Ctx_Defaults.HAS_INTERN_BASEBOARD_CHANCE;
        }

        if (aparams.hasInternBaseBoard) {

            if (!aparams.internBaseboardHeight) {
                const k = Uts.BrdUts.GetRandomInRange(0.7, 1, 1);
                aparams.internBaseboardHeight = k * BrdBlm_TC_Ctx_Defaults.INTERN_BASEBOARD_MAX_HEIGHT;
            }
            if (!aparams.internBaseboardThickness) {
                aparams.internBaseboardThickness = BrdBlm_TC_Ctx_Defaults.INTERN_BASEBOARD_THICKNESS;
            }
            if (!aparams.internBaseboardColor) {
                aparams.internBaseboardColor = Uts.BrdUts.GetRandomFromEnum<BrdBlm_TC_Ctx_eFloorColor>(BrdBlm_TC_Ctx_eFloorColor);
            }
            if (!aparams.internBaseboardFinish) {
                aparams.internBaseboardFinish = Uts.BrdUts.GetRandomFromEnum<BrdBlm_TC_Ctx_eFloorFinish>(BrdBlm_TC_Ctx_eFloorFinish);
            }
        }
    }



    static #validateCeiling(
        aparams: BrdBlm_TC_Ctx_IParams,
        ar: Uts.BrdUts_Result
    ) {

        if (!aparams.ceilingOutline) {

            const totalHeight = aparams.holeHeight + aparams.lintel + aparams.lintelAdditionalHeight!;
            aparams.ceilingOutline = [
                { x: 0, y: totalHeight },
                { x: aparams.roomDepth!, y: totalHeight }
            ];

        }
        else {
            // TODO Check for points consistency at least left to right -- APG 20240224
        }

        if (!aparams.ceilingThickness) {
            aparams.ceilingThickness = BrdBlm_TC_Ctx_Defaults.CEILING_THICKNESS;
        }

        if (!aparams.ceilingColor) {
            aparams.ceilingColor = Uts.BrdUts.GetRandomFromEnum<BrdBlm_TC_Ctx_eWallColor>(BrdBlm_TC_Ctx_eWallColor);
        }
        if (!aparams.ceilingFinish) {
            aparams.ceilingFinish = Uts.BrdUts.GetRandomFromEnum<BrdBlm_TC_Ctx_eWallFinish>(BrdBlm_TC_Ctx_eWallFinish);
        }
    }



    static #validateWalls(
        aparams: BrdBlm_TC_Ctx_IParams,
        ar: Uts.BrdUts_Result
    ) {

        if (!aparams.wallRightOutline) {
            const totalRight = -aparams.holeWidth / 2 - aparams.embrasureRight!;
            aparams.wallRightOutline = [
                { x: totalRight, y: 0 },
                { x: totalRight, y: aparams.roomDepth! }
            ];
        }
        else {
            // TODO Check for points consistency at least left to right -- APG 20240224
        }


        if (!aparams.wallLeftOutline) {
            const totalLeft = aparams.holeWidth / 2 - aparams.embrasureLeft!;
            aparams.wallLeftOutline = [
                { x: totalLeft, y: 0 },
                { x: totalLeft, y: aparams.roomDepth! }
            ];
        }
        else {
            // TODO Check for points consistency at least left to right -- APG 20240224
        }

        if (!aparams.wallThickness) {
            aparams.wallThickness = BrdBlm_TC_Ctx_Defaults.WALLS_THICKNESS;
        }

        if (!aparams.wallColor) {
            aparams.wallColor = Uts.BrdUts.GetRandomFromEnum<BrdBlm_TC_Ctx_eWallColor>(BrdBlm_TC_Ctx_eWallColor);
        }

        if (!aparams.wallFinish) {
            aparams.wallFinish = Uts.BrdUts.GetRandomFromEnum<BrdBlm_TC_Ctx_eWallFinish>(BrdBlm_TC_Ctx_eWallFinish);
        }

    }



    static #validateBeams(aparams: BrdBlm_TC_Ctx_IParams) {

        if (!aparams.trasversalBeams) {
            aparams.trasversalBeams = [];
        }

        if (aparams.lintelAdditionalHeight != 0 && aparams.lintelAdditionalDepth != 0) {
            aparams.trasversalBeams.push({
                x: 0,
                y: aparams.holeHeight + aparams.lintel,
                w: aparams.lintelAdditionalDepth!,
                h: aparams.lintelAdditionalHeight!
            });
        }

    }



    static #validateColumns(aparams: BrdBlm_TC_Ctx_IParams) {
        if (!aparams.columns) {
            aparams.columns = [];
        }
    }


    // #endregion
    //--------------------------------------------------------------------------



    //--------------------------------------------------------------------------
    // #region Components 


    static GetComponents(
        acontext: BrdBlm_TC_Ctx_IParams
    ) {


        const facade = this.#getFacade(acontext);
        const pavement = this.#getPavement(acontext);
        const threshold = this.#getThreshold(acontext);
        const extBaseboards = this.#getExternBaseboards(acontext);
        const leftWall = this.#getInternLeftWall(acontext);
        const rightWall = this.#getInternRightWall(acontext);
        const ceiling = this.#getCeiling(acontext);
        const floor = this.#getFloor(acontext);


        const r: BrdBlm_TC_Ctx_TRecordset = {
            [BrdBlm_TC_Ctx_ePartName.EXTERN_FACADE]: facade,
            [BrdBlm_TC_Ctx_ePartName.EXTERN_PAVEMENT]: pavement,
            [BrdBlm_TC_Ctx_ePartName.EXTERN_THRESHOLD]: threshold,
            [BrdBlm_TC_Ctx_ePartName.EXTERN_LEFT_BASEBOARD]: extBaseboards[0],
            [BrdBlm_TC_Ctx_ePartName.EXTERN_RIGHT_BASEBOARD]: extBaseboards[1],
            [BrdBlm_TC_Ctx_ePartName.EXTERN_LEFT_SIDEWALK]: null,
            [BrdBlm_TC_Ctx_ePartName.EXTERN_RIGHT_SIDEWALK]: null,
            [BrdBlm_TC_Ctx_ePartName.EXTERN_FRAME]: null,
            [BrdBlm_TC_Ctx_ePartName.EXTERN_CANOPY]: null,
            [BrdBlm_TC_Ctx_ePartName.EXTERN_ROOF]: null,
            [BrdBlm_TC_Ctx_ePartName.EXTERN_LEFT_LAMP]: null,
            [BrdBlm_TC_Ctx_ePartName.EXTERN_RIGHT_LAMP]: null,
            [BrdBlm_TC_Ctx_ePartName.INTERN_RIGHT_WALL]: rightWall,
            [BrdBlm_TC_Ctx_ePartName.INTERN_LEFT_WALL]: leftWall,
            [BrdBlm_TC_Ctx_ePartName.INTERN_CEILING]: ceiling,
            [BrdBlm_TC_Ctx_ePartName.INTERN_FLOOR]: floor,
            [BrdBlm_TC_Ctx_ePartName.INTERN_LEFT_BASEBOARD]: null,
            [BrdBlm_TC_Ctx_ePartName.INTERN_RIGHT_BASEBOARD]: null,
            [BrdBlm_TC_Ctx_ePartName.INTERN_COLUMN]: null,
            [BrdBlm_TC_Ctx_ePartName.INTERN_BEAM]: null,
        };
        return r;

    }



    static #getFacade(
        acontext: BrdBlm_TC_Ctx_IParams
    ) {

        const r = new BrdBlm_TC_Ctx_Component(
            BrdBlm_TC_Ctx_ePartName.EXTERN_FACADE
        );

        const halfWidth = acontext.holeWidth / 2;

        const totalRightExternal = halfWidth
            + acontext.embrasureLeft!
            + acontext.wallThickness!
            + acontext.facadeRight!;

        const totalLeftExternal = -(
            halfWidth
            + acontext.embrasureRight!
            + acontext.wallThickness!
            + acontext.facadeLeft!
        );

        const totalHeight = acontext.holeHeight
            + acontext.lintel
            + acontext.lintelAdditionalHeight!
            + acontext.ceilingThickness!
            + acontext.facadeTop!;

        r.outline = [
            { x: -halfWidth, y: -acontext.floorThickness! },
            ...acontext.holeTopOutline!,
            { x: halfWidth, y: -acontext.floorThickness! },
            { x: totalRightExternal, y: -acontext.floorThickness! },
            { x: totalRightExternal, y: totalHeight, },
            { x: totalLeftExternal, y: totalHeight, },
            { x: totalLeftExternal, y: -acontext.floorThickness! },
        ];

        r.length = acontext.facadeThickness!;

        return r;
    }



    static #getPavement(
        acontext: BrdBlm_TC_Ctx_IParams
    ) {

        const r = new BrdBlm_TC_Ctx_Component(
            BrdBlm_TC_Ctx_ePartName.EXTERN_PAVEMENT
        );

        const halfWidth = acontext.holeWidth / 2;

        const totalLeftExternal = -(
            halfWidth
            + acontext.externFrameWidth!
        );

        const totalRightExternal =
            halfWidth
            + acontext.externFrameWidth!

        const zero = -acontext.floorThickness!;

        r.outline = [
            { x: totalLeftExternal, y: zero },
            { x: totalLeftExternal, y: zero + acontext.pavementThickness! },
            { x: totalRightExternal, y: zero + acontext.pavementThickness! },
            { x: totalRightExternal, y: zero },
        ];

        r.length = acontext.pavementDepth!;

        return r;
    }



    static #getThreshold(
        acontext: BrdBlm_TC_Ctx_IParams
    ) {

        const r = new BrdBlm_TC_Ctx_Component(
            BrdBlm_TC_Ctx_ePartName.EXTERN_THRESHOLD
        );

        const halfWidth = acontext.holeWidth / 2;

        const holeLeftExternal = -halfWidth;
        const holeRightExternal = halfWidth;

        r.outline = [
            { x: holeLeftExternal, y: -acontext.floorThickness! },
            { x: holeLeftExternal, y: 0 },
            { x: holeRightExternal, y: 0 },
            { x: holeRightExternal, y: -acontext.floorThickness! },
        ];

        r.length = acontext.thresholdDepth!;

        return r;

    }



    static #getExternBaseboards(
        acontext: BrdBlm_TC_Ctx_IParams
    ) {

        const r = [
            new BrdBlm_TC_Ctx_Component(
                BrdBlm_TC_Ctx_ePartName.EXTERN_LEFT_BASEBOARD
            ),
            new BrdBlm_TC_Ctx_Component(
                BrdBlm_TC_Ctx_ePartName.EXTERN_RIGHT_BASEBOARD
            ),
        ];

        const halfWidth = acontext.holeWidth / 2;

        const totalLeftExternal = -(
            halfWidth
            + acontext.embrasureRight!
            + acontext.wallThickness!
            + acontext.facadeLeft!
        );

        const totalRightExternal =
            halfWidth
            + acontext.embrasureLeft!
            + acontext.wallThickness!
            + acontext.facadeRight!

        const bbtkns = acontext.externBaseboardThickness!;
        const wtkns = acontext.wallThickness!;

        r[0].outline = [
            { x: -halfWidth, y: 0 },
            { x: -halfWidth + bbtkns, y: 0 },
            { x: -halfWidth + bbtkns, y: -wtkns - bbtkns },
            { x: totalLeftExternal, y: -wtkns - bbtkns },
            { x: totalLeftExternal, y: -wtkns },
            { x: -halfWidth, y: -wtkns },
        ];

        r[1].outline = [
            { x: halfWidth, y: 0 },
            { x: halfWidth - bbtkns, y: 0 },
            { x: halfWidth - bbtkns, y: -wtkns - bbtkns },
            { x: totalRightExternal, y: -wtkns - bbtkns },
            { x: totalRightExternal, y: -wtkns },
            { x: halfWidth, y: -wtkns },
        ];

        r[0].length = acontext.externBaseboardHeight!;
        r[0].addRotateXOp(Uts.BrdUts.RAD_90, false);

        r[1].length = acontext.externBaseboardHeight!;
        r[1].addRotateXOp(Uts.BrdUts.RAD_90, false);

        return r;
    }


    static #getInternLeftWall(
        acontext: BrdBlm_TC_Ctx_IParams
    ) {

        const r = new BrdBlm_TC_Ctx_Component(
            BrdBlm_TC_Ctx_ePartName.INTERN_LEFT_WALL
        );

        const lwo = acontext.wallLeftOutline!;

        r.outline = [];
        for (const p of lwo) {
            r.outline.push({ x: p.x, y: p.y })
        }

        for (let i = lwo.length - 1; i > 0; i--) {
            const p = lwo[i];
            r.outline.push({ x: p.x + acontext.wallThickness!, y: p.y })
        }

        r.length = this.#getMaxY(acontext.ceilingOutline!);

        r.addRotateXOp(Uts.BrdUts.RAD_90, false);

        return r;
    }



    static #getInternRightWall(
        acontext: BrdBlm_TC_Ctx_IParams
    ) {

        const r = new BrdBlm_TC_Ctx_Component(
            BrdBlm_TC_Ctx_ePartName.INTERN_RIGHT_WALL
        );

        const rwo = acontext.wallRightOutline!;

        r.outline = [];

        for (const p of rwo) {
            r.outline.push({ x: p.x - acontext.wallThickness!, y: p.y })
        }

        for (let i = rwo.length - 1; i > 0; i--) {
            const p = rwo[i];
            r.outline.push({ x: p.x, y: p.y })
        }

        r.length = this.#getMaxY(acontext.ceilingOutline!);

        r.addRotateXOp(Uts.BrdUts.RAD_90, false);

        return r;
    }



    static #getCeiling(
        acontext: BrdBlm_TC_Ctx_IParams
    ) {

        const r = new BrdBlm_TC_Ctx_Component(
            BrdBlm_TC_Ctx_ePartName.INTERN_CEILING
        );

        const co = acontext.ceilingOutline!;

        r.outline = [];

        for (const p of co) {
            r.outline.push({ x: p.x, y: p.y + acontext.ceilingThickness! })
        }

        for (let i = co.length - 1; i > 0; i--) {
            const p = co[i];
            r.outline.push({ x: p.x, y: p.y })
        }

        r.length = this.#getMaxY(acontext.ceilingOutline!);

        r.addRotateXOp(Uts.BrdUts.RAD_90, false);

        return r;

    }



    static #getFloor(
        acontext: BrdBlm_TC_Ctx_IParams
    ) {

        const r = new BrdBlm_TC_Ctx_Component(
            BrdBlm_TC_Ctx_ePartName.INTERN_FLOOR
        );

        const wro = acontext.wallRightOutline!;
        const wlo = acontext.wallLeftOutline!;

        r.outline = [];

        for (const p of wro) {
            r.outline.push({ x: p.x, y: p.y })
        }

        for (let i = wlo.length - 1; i > 0; i--) {
            const p = wlo[i];
            r.outline.push({ x: p.x, y: p.y })
        }

        r.length = acontext.floorThickness!;

        r.addRotateXOp(Uts.BrdUts.RAD_90, false);

        return r;

    }


    // #endregion
    //--------------------------------------------------------------------------



    //--------------------------------------------------------------------------
    // #region Context Materials

    static GetMaterials(
        acontext: BrdBlm_TC_Ctx_IParams
    ) {

        const facade = this.#getFacadeMaterial(acontext);
        const pavement = this.#getPavementMaterial(acontext);
        const threshold = this.#getThresholdMaterial(acontext);
        const floor = this.#getFloorMaterial(acontext);
        const wall = this.#getWallMaterial(acontext);
        const ceiling = this.#getCeilingMaterial(acontext);

        const r: BrdBlm_TC_Ctx_TMaterialRecordset = {
            [BrdBlm_TC_Ctx_ePartName.EXTERN_FACADE]: facade,
            [BrdBlm_TC_Ctx_ePartName.EXTERN_PAVEMENT]: pavement,
            [BrdBlm_TC_Ctx_ePartName.EXTERN_THRESHOLD]: threshold,
            [BrdBlm_TC_Ctx_ePartName.EXTERN_LEFT_BASEBOARD]: null,
            [BrdBlm_TC_Ctx_ePartName.EXTERN_RIGHT_BASEBOARD]: null,
            [BrdBlm_TC_Ctx_ePartName.EXTERN_LEFT_SIDEWALK]: null,
            [BrdBlm_TC_Ctx_ePartName.EXTERN_RIGHT_SIDEWALK]: null,
            [BrdBlm_TC_Ctx_ePartName.EXTERN_FRAME]: null,
            [BrdBlm_TC_Ctx_ePartName.EXTERN_CANOPY]: null,
            [BrdBlm_TC_Ctx_ePartName.EXTERN_ROOF]: null,
            [BrdBlm_TC_Ctx_ePartName.EXTERN_LEFT_LAMP]: null,
            [BrdBlm_TC_Ctx_ePartName.EXTERN_RIGHT_LAMP]: null,
            [BrdBlm_TC_Ctx_ePartName.INTERN_RIGHT_WALL]: wall,
            [BrdBlm_TC_Ctx_ePartName.INTERN_LEFT_WALL]: wall,
            [BrdBlm_TC_Ctx_ePartName.INTERN_CEILING]: ceiling,
            [BrdBlm_TC_Ctx_ePartName.INTERN_FLOOR]: floor,
            [BrdBlm_TC_Ctx_ePartName.INTERN_LEFT_BASEBOARD]: null,
            [BrdBlm_TC_Ctx_ePartName.INTERN_RIGHT_BASEBOARD]: null,
            [BrdBlm_TC_Ctx_ePartName.INTERN_COLUMN]: wall,
            [BrdBlm_TC_Ctx_ePartName.INTERN_BEAM]: ceiling,
        };
        return r;

    }


    static #getColor(ahexString: string) {
        const t = ahexString.replaceAll("#", "");
        return parseInt(t, 16);
    }

    static #getFacadeMaterial(
        acontext: BrdBlm_TC_Ctx_IParams
    ) {
        const finish = acontext.facadeFinish! as BrdBlm_TC_Ctx_eFacadeFinish
        const r: BrdBlm_IMaterialDef = structuredClone(
            BrdBlm_TC_Ctx_FacadeFinishRecordset[finish]
        )
        r.color = this.#getColor(acontext.facadeColor!);
        return r;
    }



    static #getPavementMaterial(
        acontext: BrdBlm_TC_Ctx_IParams
    ) {
        const finish = acontext.pavementFinish! as BrdBlm_TC_Ctx_ePavementFinish
        const r: BrdBlm_IMaterialDef = structuredClone(
            BrdBlm_TC_Ctx_PavementFinishRecordset[finish]
        )
        r.color = this.#getColor(acontext.pavementColor!);
        return r;
    }



    static #getThresholdMaterial(
        acontext: BrdBlm_TC_Ctx_IParams
    ) {
        const finish = acontext.thresholdFinish! as BrdBlm_TC_Ctx_eThresholdFinish
        const r: BrdBlm_IMaterialDef = structuredClone(
            BrdBlm_TC_Ctx_ThresholdFinishRecordset[finish]
        )
        r.color = this.#getColor(acontext.thresholdColor!);
        return r;
    }



    static #getFloorMaterial(
        acontext: BrdBlm_TC_Ctx_IParams
    ) {
        const finish = acontext.floorFinish! as BrdBlm_TC_Ctx_eFloorFinish
        const r: BrdBlm_IMaterialDef = structuredClone(
            BrdBlm_TC_Ctx_FloorFinishRecordset[finish]
        )
        r.color = this.#getColor(acontext.floorColor!);
        return r;
    }



    static #getWallMaterial(
        acontext: BrdBlm_TC_Ctx_IParams
    ) {
        const finish = acontext.wallFinish! as BrdBlm_TC_Ctx_eWallFinish
        const r: BrdBlm_IMaterialDef = structuredClone(
            BrdBlm_TC_Ctx_WallFinishRecordset[finish]
        )
        r.color = this.#getColor(acontext.wallColor!);
        return r;
    }



    static #getCeilingMaterial(
        acontext: BrdBlm_TC_Ctx_IParams
    ) {
        const finish = acontext.ceilingFinish! as BrdBlm_TC_Ctx_eWallFinish
        const r: BrdBlm_IMaterialDef = structuredClone(
            BrdBlm_TC_Ctx_WallFinishRecordset[finish]
        )
        r.color = this.#getColor(acontext.ceilingColor!);
        return r;
    }

    // #endregion
    //--------------------------------------------------------------------------

    static #getMaxY(aoutline: BrdBlm_IPoint2D[]) {
        let r = 0;
        for (const p of aoutline) {
            if (r < p.y) {
                r = p.y
            }
        }
        return r;
    }

    static #getMaxX(aoutline: BrdBlm_IPoint2D[]) {
        let r = 0;
        for (const p of aoutline) {
            if (r < p.x) {
                r = p.x
            }
        }
        return r;
    }

    static #getMinX(aoutline: BrdBlm_IPoint2D[]) {
        let r = 0;
        for (const p of aoutline) {
            if (r > p.x) {
                r = p.x
            }
        }
        return r;
    }

}
