
import { Uts, A3D } from "../deps.ts";
import { BrdBlm_TC_Ctx_Component } from "../classes/BrdBlm_TC_Ctx_Component.ts";
import { BrdBlm_TC_Ctx_DEFAULTS } from "../const/BrdBlm_TC_Ctx_DEFAULTS.ts";
import { BrdBlm_TC_Ctx_eExternBaseboardColor } from "../enums/BrdBlm_TC_Ctx_eExternBaseboardColor.ts";
import { BrdBlm_TC_Ctx_eExternBaseboardFinish } from "../enums/BrdBlm_TC_Ctx_eExternBaseboardFinish.ts";
import { BrdBlm_TC_Ctx_eFacadeColor } from "../enums/BrdBlm_TC_Ctx_eFacadeColor.ts";
import { BrdBlm_TC_Ctx_eFacadeFinish } from "../enums/BrdBlm_TC_Ctx_eFacadeFinish.ts";
import { BrdBlm_TC_Ctx_eFloorColor } from "../enums/BrdBlm_TC_Ctx_eFloorColor.ts";
import { BrdBlm_TC_Ctx_eFloorFinish } from "../enums/BrdBlm_TC_Ctx_eFloorFinish.ts";
import { BrdBlm_TC_Ctx_eInternBaseboardColor } from "../enums/BrdBlm_TC_Ctx_eInternBaseboardColor.ts";
import { BrdBlm_TC_Ctx_eInternBaseboardFinish } from "../enums/BrdBlm_TC_Ctx_eInternBaseboardFinish.ts";
import { BrdBlm_TC_Ctx_ePartName } from "../enums/BrdBlm_TC_Ctx_ePartName.ts";
import { BrdBlm_TC_Ctx_ePavementColor } from "../enums/BrdBlm_TC_Ctx_ePavementColor.ts";
import { BrdBlm_TC_Ctx_ePavementFinish } from "../enums/BrdBlm_TC_Ctx_ePavementFinish.ts";
import { BrdBlm_TC_Ctx_eSidewalkColor } from "../enums/BrdBlm_TC_Ctx_eSidewalkColor.ts";
import { BrdBlm_TC_Ctx_eSidewalkFinish } from "../enums/BrdBlm_TC_Ctx_eSidewalkFinish.ts";
import { BrdBlm_TC_Ctx_eThresholdColor } from "../enums/BrdBlm_TC_Ctx_eThresholdColor.ts";
import { BrdBlm_TC_Ctx_eThresholdFinish } from "../enums/BrdBlm_TC_Ctx_eThresholdFinish.ts";
import { BrdBlm_TC_Ctx_eWallColor } from "../enums/BrdBlm_TC_Ctx_eWallColor.ts";
import { BrdBlm_TC_Ctx_eWallFinish } from "../enums/BrdBlm_TC_Ctx_eWallFinish.ts";
import { BrdBlm_TC_Ctx_IParams, BrdBlm_TC_Ctx_IParams_Signature } from "../interfaces/BrdBlm_TC_Ctx_IParams.ts";
import { BrdBlm_TC_Ctx_FacadeFinishRecordset } from "../recordsets/BrdBlm_TC_Ctx_FacadeFinishRecordset.ts";
import { BrdBlm_TC_Ctx_FloorFinishRecordset } from "../recordsets/BrdBlm_TC_Ctx_FloorFinishRecordset.ts";
import { BrdBlm_TC_Ctx_PavementFinishRecordset } from "../recordsets/BrdBlm_TC_Ctx_PavementFinishRecordset.ts";
import { BrdBlm_TC_Ctx_ThresholdFinishRecordset } from "../recordsets/BrdBlm_TC_Ctx_ThresholdFinishRecordset.ts";
import { BrdBlm_TC_Ctx_WallFinishRecordset } from "../recordsets/BrdBlm_TC_Ctx_WallFinishRecordset.ts";
import { BrdBlm_TC_Ctx_TComponentRecordset } from "../types/BrdBlm_TC_Ctx_TComponentRecordset.ts";
import { BrdBlm_TC_Ctx_TMaterialDefRecordset } from "../types/BrdBlm_TC_Ctx_TMaterialDefRecordset.ts";




export class BrdBlm_TC_Ctx_Service {


    //--------------------------------------------------------------------------
    // #region Params validation


    static ValidateParams(
        acontext: BrdBlm_TC_Ctx_IParams
    ) {

        const r = new Uts.ApgUts_Result<BrdBlm_TC_Ctx_IParams>();

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
            aparams.facadeLeft = BrdBlm_TC_Ctx_DEFAULTS.EXTRA_LATERAL_SPACE;
        }
        if (!aparams.facadeRight) {
            aparams.facadeRight = BrdBlm_TC_Ctx_DEFAULTS.EXTRA_LATERAL_SPACE;
        }
        if (!aparams.facadeTop) {
            aparams.facadeTop = BrdBlm_TC_Ctx_DEFAULTS.EXTRA_UPPER_SPACE;
        }
        if (!aparams.facadeThickness) {
            aparams.facadeThickness = BrdBlm_TC_Ctx_DEFAULTS.FACADE_THICKNESS;
        }
        if (!aparams.facadeColor) {
            aparams.facadeColor = Uts.ApgUts_Enum.GetRandom<BrdBlm_TC_Ctx_eFacadeColor>(BrdBlm_TC_Ctx_eFacadeColor);
        }
        if (!aparams.facadeFinish) {
            aparams.facadeFinish = Uts.ApgUts_Enum.GetRandom<BrdBlm_TC_Ctx_eFacadeFinish>(BrdBlm_TC_Ctx_eFacadeFinish);
        }

    }



    static #validateExternFrame(aparams: BrdBlm_TC_Ctx_IParams) {

        if (aparams.hasExternFrame == undefined) {
            aparams.hasExternFrame = Math.random() < BrdBlm_TC_Ctx_DEFAULTS.HAS_EXTERN_FRAME_CHANCE;
        }

        if (aparams.hasExternFrame) {
            if (!aparams.externFrameWidth) {
                const k = Uts.ApgUts_Math.GetRandomInRange(0.5, 1, 1);
                aparams.externFrameWidth = k * BrdBlm_TC_Ctx_DEFAULTS.EXTERN_FRAME_MAX_WIDTH;
            }

            if (!aparams.externFrameThickness) {
                const k = Uts.ApgUts_Math.GetRandomInRange(0.5, 1, 1);
                aparams.externFrameThickness = k * BrdBlm_TC_Ctx_DEFAULTS.EXTERN_FRAME_MAX_THICKNESS;
            }

            if (!aparams.externFrameColor) {
                aparams.externFrameColor = Uts.ApgUts_Enum.GetRandom<BrdBlm_TC_Ctx_eFacadeColor>(BrdBlm_TC_Ctx_eFacadeColor);
            }

            if (!aparams.externFrameFinish) {
                aparams.externFrameFinish = Uts.ApgUts_Enum.GetRandom<BrdBlm_TC_Ctx_eFacadeFinish>(BrdBlm_TC_Ctx_eFacadeFinish);
            }
        }
    }



    static #validatePavement(aparams: BrdBlm_TC_Ctx_IParams) {

        if (!aparams.pavementDepth) {
            aparams.pavementDepth = BrdBlm_TC_Ctx_DEFAULTS.PAVEMENT_DEPTH;
        }
        if (!aparams.pavementThickness) {
            aparams.pavementThickness = BrdBlm_TC_Ctx_DEFAULTS.PAVEMENT_THICKNESS;
        }
        if (!aparams.pavementColor) {
            aparams.pavementColor = Uts.ApgUts_Enum.GetRandom<BrdBlm_TC_Ctx_ePavementColor>(BrdBlm_TC_Ctx_ePavementColor);
        }
        if (!aparams.pavementFinish) {
            aparams.pavementFinish = Uts.ApgUts_Enum.GetRandom<BrdBlm_TC_Ctx_ePavementFinish>(BrdBlm_TC_Ctx_ePavementFinish);
        }
    }



    static #validateThreshold(aparams: BrdBlm_TC_Ctx_IParams) {

        if (aparams.hasThreshold == undefined) {
            aparams.hasThreshold = Math.random() < BrdBlm_TC_Ctx_DEFAULTS.HAS_THRESHOLD_CHANCE;
        }

        if (aparams.hasThreshold) {

            if (!aparams.thresholdDepth) {
                const k = Uts.ApgUts_Math.GetRandomInRange(0.5, 1, 1);
                aparams.thresholdDepth = k * aparams.facadeThickness!;
            }
            if (!aparams.thresholdColor) {
                aparams.thresholdColor = Uts.ApgUts_Enum.GetRandom<BrdBlm_TC_Ctx_eThresholdColor>(BrdBlm_TC_Ctx_eThresholdColor);
            }
            if (!aparams.thresholdFinish) {
                aparams.thresholdFinish = Uts.ApgUts_Enum.GetRandom<BrdBlm_TC_Ctx_eThresholdFinish>(BrdBlm_TC_Ctx_eThresholdFinish);
            }
        }
    }



    static #validateExternBaseBoard(aparams: BrdBlm_TC_Ctx_IParams) {

        if (aparams.hasExternBaseBoard == undefined) {
            aparams.hasExternBaseBoard = Math.random() < BrdBlm_TC_Ctx_DEFAULTS.HAS_EXTERN_BASEBOARD_CHANCE;
        }

        if (aparams.hasExternBaseBoard) {

            if (!aparams.externBaseboardHeight) {
                const k = Uts.ApgUts_Math.GetRandomInRange(0.5, 1, 1);
                aparams.externBaseboardHeight = k * BrdBlm_TC_Ctx_DEFAULTS.EXTERN_BASEBOARD_MAX_HEIGHT;
            }
            if (!aparams.externBaseboardThickness) {
                aparams.externBaseboardThickness = BrdBlm_TC_Ctx_DEFAULTS.EXTERN_BASEBOARD_THICKNESS;
            }
            if (!aparams.externBaseboardColor) {
                aparams.externBaseboardColor = Uts.ApgUts_Enum.GetRandom<BrdBlm_TC_Ctx_eExternBaseboardColor>(BrdBlm_TC_Ctx_eExternBaseboardColor);
            }
            if (!aparams.externBaseboardFinish) {
                aparams.externBaseboardFinish = Uts.ApgUts_Enum.GetRandom<BrdBlm_TC_Ctx_eExternBaseboardFinish>(BrdBlm_TC_Ctx_eExternBaseboardFinish);
            }
        }
    }



    static #validateSidewalk(aparams: BrdBlm_TC_Ctx_IParams) {

        if (aparams.hasSidewalk == undefined) {
            aparams.hasSidewalk = Math.random() < BrdBlm_TC_Ctx_DEFAULTS.HAS_EXTERN_SIDEWALK_CHANCE;
        }

        if (aparams.hasSidewalk) {

            if (!aparams.sidewalkDepth) {
                const k = Uts.ApgUts_Math.GetRandomInRange(0.5, 1, 1);
                aparams.sidewalkDepth = k * BrdBlm_TC_Ctx_DEFAULTS.EXTERN_SIDEWALK_MAX_DEPTH;
            }
            if (!aparams.sidewalkHeight) {
                aparams.sidewalkHeight = BrdBlm_TC_Ctx_DEFAULTS.EXTERN_SIDEWALK_HEIGHT;
            }
            if (!aparams.sidewalkColor) {
                aparams.sidewalkColor = Uts.ApgUts_Enum.GetRandom<BrdBlm_TC_Ctx_eSidewalkColor>(BrdBlm_TC_Ctx_eSidewalkColor);
            }
            if (!aparams.sidewalkFinish) {
                aparams.sidewalkFinish = Uts.ApgUts_Enum.GetRandom<BrdBlm_TC_Ctx_eSidewalkFinish>(BrdBlm_TC_Ctx_eSidewalkFinish);
            }
        }
    }



    static #validateHoleTopOutline(
        aparams: BrdBlm_TC_Ctx_IParams,
        ar: Uts.ApgUts_Result<BrdBlm_TC_Ctx_IParams>
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
        ar: Uts.ApgUts_Result<BrdBlm_TC_Ctx_IParams>
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
            aparams.embrasureRight = BrdBlm_TC_Ctx_DEFAULTS.EMBRASURE;
        }
        if (!aparams.embrasureLeft) {
            aparams.embrasureLeft = BrdBlm_TC_Ctx_DEFAULTS.EMBRASURE;
        }
    }



    static #validateFloor(aparams: BrdBlm_TC_Ctx_IParams) {

        if (!aparams.roomDepth) {
            aparams.roomDepth = BrdBlm_TC_Ctx_DEFAULTS.ROOM_DEPTH;
        }

        if (!aparams.floorThickness) {
            aparams.floorThickness = BrdBlm_TC_Ctx_DEFAULTS.FLOOR_THICKNESS;
        }
        if (!aparams.floorColor) {
            aparams.floorColor = Uts.ApgUts_Enum.GetRandom<BrdBlm_TC_Ctx_eFloorColor>(BrdBlm_TC_Ctx_eFloorColor);
        }
        if (!aparams.floorFinish) {
            aparams.floorFinish = Uts.ApgUts_Enum.GetRandom<BrdBlm_TC_Ctx_eFloorFinish>(BrdBlm_TC_Ctx_eFloorFinish);
        }

    }



    static #validateInternBaseBoard(aparams: BrdBlm_TC_Ctx_IParams) {

        if (aparams.hasInternBaseBoard == undefined) {
            aparams.hasInternBaseBoard = Math.random() < BrdBlm_TC_Ctx_DEFAULTS.HAS_INTERN_BASEBOARD_CHANCE;
        }

        if (aparams.hasInternBaseBoard) {

            if (!aparams.internBaseboardHeight) {
                const k = Uts.ApgUts_Math.GetRandomInRange(0.7, 1, 1);
                aparams.internBaseboardHeight = k * BrdBlm_TC_Ctx_DEFAULTS.INTERN_BASEBOARD_MAX_HEIGHT;
            }
            if (!aparams.internBaseboardThickness) {
                aparams.internBaseboardThickness = BrdBlm_TC_Ctx_DEFAULTS.INTERN_BASEBOARD_THICKNESS;
            }
            if (!aparams.internBaseboardColor) {
                aparams.internBaseboardColor = Uts.ApgUts_Enum.GetRandom<BrdBlm_TC_Ctx_eInternBaseboardColor>(BrdBlm_TC_Ctx_eInternBaseboardColor);
            }
            if (!aparams.internBaseboardFinish) {
                aparams.internBaseboardFinish = Uts.ApgUts_Enum.GetRandom<BrdBlm_TC_Ctx_eInternBaseboardFinish>(BrdBlm_TC_Ctx_eInternBaseboardFinish);
            }
        }
    }



    static #validateCeiling(
        aparams: BrdBlm_TC_Ctx_IParams,
        ar: Uts.ApgUts_Result<BrdBlm_TC_Ctx_IParams>
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
            aparams.ceilingThickness = BrdBlm_TC_Ctx_DEFAULTS.CEILING_THICKNESS;
        }

        if (!aparams.ceilingColor) {
            aparams.ceilingColor = Uts.ApgUts_Enum.GetRandom<BrdBlm_TC_Ctx_eWallColor>(BrdBlm_TC_Ctx_eWallColor);
        }
        if (!aparams.ceilingFinish) {
            aparams.ceilingFinish = Uts.ApgUts_Enum.GetRandom<BrdBlm_TC_Ctx_eWallFinish>(BrdBlm_TC_Ctx_eWallFinish);
        }
    }



    static #validateWalls(
        aparams: BrdBlm_TC_Ctx_IParams,
        ar: Uts.ApgUts_Result<BrdBlm_TC_Ctx_IParams>
    ) {

        // NOTE Qui stianmo lavorando per l'estrusione su XY quindi
        // siamo in vista in pianta con lato esterno verso il basso
        // -- APG 20240227

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
            const totalLeft = aparams.holeWidth / 2 + aparams.embrasureLeft!;
            aparams.wallLeftOutline = [
                { x: totalLeft, y: 0 },
                { x: totalLeft, y: aparams.roomDepth! }
            ];
        }
        else {
            // TODO Check for points consistency at least left to right -- APG 20240224
        }

        if (!aparams.wallThickness) {
            aparams.wallThickness = BrdBlm_TC_Ctx_DEFAULTS.WALLS_THICKNESS;
        }

        if (!aparams.wallColor) {
            aparams.wallColor = Uts.ApgUts_Enum.GetRandom<BrdBlm_TC_Ctx_eWallColor>(BrdBlm_TC_Ctx_eWallColor);
        }

        if (!aparams.wallFinish) {
            aparams.wallFinish = Uts.ApgUts_Enum.GetRandom<BrdBlm_TC_Ctx_eWallFinish>(BrdBlm_TC_Ctx_eWallFinish);
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


        const extFacade = this.#getExternFacade(acontext);
        const pavement = this.#getPavement(acontext);
        const threshold = this.#getThreshold(acontext);
        const extBaseboards = this.#getExternBaseboards(acontext);
        const intFacade = this.#getInternFacade(acontext);
        const leftWall = this.#getInternLeftWall(acontext);
        const rightWall = this.#getInternRightWall(acontext);
        const backWall = this.#getInternBackWall(acontext);
        const ceiling = this.#getCeiling(acontext);
        const floor = this.#getFloor(acontext);


        const r: BrdBlm_TC_Ctx_TComponentRecordset = {
            [BrdBlm_TC_Ctx_ePartName.EXTERN_FACADE]: extFacade,
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

            [BrdBlm_TC_Ctx_ePartName.INTERN_FACADE]: intFacade,
            [BrdBlm_TC_Ctx_ePartName.INTERN_RIGHT_WALL]: rightWall,
            [BrdBlm_TC_Ctx_ePartName.INTERN_LEFT_WALL]: leftWall,
            [BrdBlm_TC_Ctx_ePartName.INTERN_BACK_WALL]: backWall,
            [BrdBlm_TC_Ctx_ePartName.INTERN_CEILING]: ceiling,
            [BrdBlm_TC_Ctx_ePartName.INTERN_FLOOR]: floor,
            [BrdBlm_TC_Ctx_ePartName.INTERN_LEFT_BASEBOARD]: null,
            [BrdBlm_TC_Ctx_ePartName.INTERN_RIGHT_BASEBOARD]: null,
            [BrdBlm_TC_Ctx_ePartName.INTERN_COLUMN]: null,
            [BrdBlm_TC_Ctx_ePartName.INTERN_BEAM]: null,
            [BrdBlm_TC_Ctx_ePartName.EXTERN_FRONT_SIDEWALK]: null
        };
        return r;

    }



    static #getExternFacade(
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

        r.length = acontext.facadeThickness! - BrdBlm_TC_Ctx_DEFAULTS.FACADE_INT_MORTAR_THICKNESS;

        r.addTranslateZOp(BrdBlm_TC_Ctx_DEFAULTS.FACADE_INT_MORTAR_THICKNESS, false)

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

        const bbThk = acontext.externBaseboardThickness!;
        const fThk = acontext.facadeThickness!;

        r[0].outline = [
            { x: -halfWidth, y: 0 },
            { x: -halfWidth, y: fThk },
            { x: -halfWidth + bbThk, y: fThk },
            { x: -halfWidth + bbThk, y: -bbThk },
            { x: totalLeftExternal, y: - bbThk },
            { x: totalLeftExternal, y: 0 },
        ];

        r[1].outline = [
            { x: halfWidth, y: 0 },
            { x: totalRightExternal, y: 0 },
            { x: totalRightExternal, y: -bbThk },
            { x: halfWidth - bbThk, y: -bbThk },
            { x: halfWidth - bbThk, y: fThk },
            { x: halfWidth, y: fThk },
        ];

        r[0].length = acontext.externBaseboardHeight!;
        r[0].addRotateXOp(-Uts.ApgUts_Math.DegToRad(90), false);
        r[0].addTranslateZOp(acontext.facadeThickness!, false);

        r[1].length = acontext.externBaseboardHeight!;
        r[1].addRotateXOp(-Uts.ApgUts_Math.DegToRad(90), false);
        r[1].addTranslateZOp(acontext.facadeThickness!, false);

        return r;
    }



    static #getInternFacade(
        acontext: BrdBlm_TC_Ctx_IParams
    ) {

        const r = this.#getExternFacade(acontext)

        r.name = BrdBlm_TC_Ctx_ePartName.INTERN_FACADE

        r.placementOps = [];

        r.length = BrdBlm_TC_Ctx_DEFAULTS.FACADE_INT_MORTAR_THICKNESS;

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

        for (let i = lwo.length; i > 0; i--) {
            const p = lwo[i - 1]
            r.outline.push({ x: p.x + acontext.wallThickness!, y: p.y })
        }

        r.length = this.#getMaxY(acontext.ceilingOutline!);

        r.addRotateXOp(-Uts.ApgUts_Math.DegToRad(90), false);

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

        for (let i = rwo.length; i > 0; i--) {
            const p = rwo[i - 1];
            r.outline.push({ x: p.x, y: p.y })
        }

        r.length = this.#getMaxY(acontext.ceilingOutline!);

        r.addRotateXOp(-Uts.ApgUts_Math.DegToRad(90), false);

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

        for (let i = co.length; i > 0; i--) {
            const p = co[i - 1];
            r.outline.push({ x: p.x, y: p.y })
        }

        // NOTE Ricrdiamoci sempre che i profili del contesto sono dalla vista in pianta con
        // foro verso il basso --APG 20240228
        const maxx = this.#getMaxX(acontext.wallLeftOutline!) + acontext.wallThickness!;
        const minx = this.#getMinX(acontext.wallRightOutline!) - acontext.wallThickness!
        r.length = minx * -1 + maxx;

        r.addTranslateZOp(minx, false);
        r.addRotateYOp(Uts.ApgUts_Math.DegToRad(90), false);

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

        for (let i = wlo.length; i > 0; i--) {
            const p = wlo[i - 1];
            r.outline.push({ x: p.x, y: p.y })
        }

        r.length = acontext.floorThickness!;

        r.addRotateXOp(-Uts.ApgUts_Math.DegToRad(90), false);
        r.addTranslateYOp(-acontext.floorThickness!, false);

        return r;

    }



    static #getInternBackWall(
        acontext: BrdBlm_TC_Ctx_IParams
    ) {

        const r = new BrdBlm_TC_Ctx_Component(
            BrdBlm_TC_Ctx_ePartName.INTERN_BACK_WALL
        );

        r.outline = [];

        // NOTE Ricrdiamoci sempre che i profili del contesto sono dalla vista in pianta con
        // foro verso il basso --APG 20240228
        const maxX = this.#getMaxX(acontext.wallLeftOutline!) + acontext.wallThickness!;
        const minX = this.#getMinX(acontext.wallRightOutline!) - acontext.wallThickness!
        const maxY = this.#getMaxY(acontext.ceilingOutline!) + acontext.ceilingThickness!;

        r.outline.push({ x: minX, y: 0 })
        r.outline.push({ x: minX, y: maxY })
        r.outline.push({ x: maxX, y: maxY })
        r.outline.push({ x: maxX, y: 0 })

        let z = this.#getMaxY(acontext.wallLeftOutline!);
        let maxZ = z;
        z = this.#getMaxY(acontext.wallRightOutline!);
        if (z > maxZ) maxZ = z;
        z = this.#getMaxX(acontext.ceilingOutline!);
        if (z > maxZ) maxZ = z;

        r.addTranslateZOp(-maxZ, false);

        return r;

    }


    // #endregion
    //--------------------------------------------------------------------------



    //--------------------------------------------------------------------------
    // #region Context Materials

    static GetMaterials(
        acontext: BrdBlm_TC_Ctx_IParams
    ) {

        const facade = this.#getFacadeMaterialDef(acontext);
        const pavement = this.#getPavementMaterialDef(acontext);
        const threshold = this.#getThresholdMaterialDef(acontext);
        const floor = this.#getFloorMaterialDef(acontext);
        const wall = this.#getWallMaterialDef(acontext);
        const ceiling = this.#getCeilingMaterialDef(acontext);

        const r: BrdBlm_TC_Ctx_TMaterialDefRecordset = {
            
            [BrdBlm_TC_Ctx_ePartName.EXTERN_FACADE]: facade,
            [BrdBlm_TC_Ctx_ePartName.EXTERN_PAVEMENT]: pavement,
            [BrdBlm_TC_Ctx_ePartName.EXTERN_THRESHOLD]: threshold,
            [BrdBlm_TC_Ctx_ePartName.EXTERN_LEFT_BASEBOARD]: null,
            [BrdBlm_TC_Ctx_ePartName.EXTERN_RIGHT_BASEBOARD]: null,
            [BrdBlm_TC_Ctx_ePartName.EXTERN_LEFT_SIDEWALK]: null,
            [BrdBlm_TC_Ctx_ePartName.EXTERN_RIGHT_SIDEWALK]: null,
            [BrdBlm_TC_Ctx_ePartName.EXTERN_FRONT_SIDEWALK]: null,
            [BrdBlm_TC_Ctx_ePartName.EXTERN_FRAME]: null,
            [BrdBlm_TC_Ctx_ePartName.EXTERN_CANOPY]: null,
            [BrdBlm_TC_Ctx_ePartName.EXTERN_ROOF]: null,
            [BrdBlm_TC_Ctx_ePartName.EXTERN_LEFT_LAMP]: null,
            [BrdBlm_TC_Ctx_ePartName.EXTERN_RIGHT_LAMP]: null,

            [BrdBlm_TC_Ctx_ePartName.INTERN_FACADE]: wall,
            [BrdBlm_TC_Ctx_ePartName.INTERN_RIGHT_WALL]: wall,
            [BrdBlm_TC_Ctx_ePartName.INTERN_LEFT_WALL]: wall,
            [BrdBlm_TC_Ctx_ePartName.INTERN_BACK_WALL]: wall,

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



    static #getFacadeMaterialDef(
        acontext: BrdBlm_TC_Ctx_IParams
    ) {
        const finish = acontext.facadeFinish! as BrdBlm_TC_Ctx_eFacadeFinish
        const r: A3D.ApgA3D_IMaterialDef = structuredClone(
            BrdBlm_TC_Ctx_FacadeFinishRecordset[finish]
        )
        r.color = this.#getColor(acontext.facadeColor!);
        return r;
    }



    static #getPavementMaterialDef(
        acontext: BrdBlm_TC_Ctx_IParams
    ) {
        const finish = acontext.pavementFinish! as BrdBlm_TC_Ctx_ePavementFinish
        const r: A3D.ApgA3D_IMaterialDef = structuredClone(
            BrdBlm_TC_Ctx_PavementFinishRecordset[finish]
        )
        r.color = this.#getColor(acontext.pavementColor!);
        return r;
    }



    static #getThresholdMaterialDef(
        acontext: BrdBlm_TC_Ctx_IParams
    ) {
        const finish = acontext.thresholdFinish! as BrdBlm_TC_Ctx_eThresholdFinish
        const r: A3D.ApgA3D_IMaterialDef = structuredClone(
            BrdBlm_TC_Ctx_ThresholdFinishRecordset[finish]
        )
        r.color = this.#getColor(acontext.thresholdColor!);
        return r;
    }



    static #getFloorMaterialDef(
        acontext: BrdBlm_TC_Ctx_IParams
    ) {
        const finish = acontext.floorFinish! as BrdBlm_TC_Ctx_eFloorFinish
        const r: A3D.ApgA3D_IMaterialDef = structuredClone(
            BrdBlm_TC_Ctx_FloorFinishRecordset[finish]
        )
        r.color = this.#getColor(acontext.floorColor!);
        return r;
    }



    static #getWallMaterialDef(
        acontext: BrdBlm_TC_Ctx_IParams
    ) {
        const finish = acontext.wallFinish! as BrdBlm_TC_Ctx_eWallFinish
        const r: A3D.ApgA3D_IMaterialDef = structuredClone(
            BrdBlm_TC_Ctx_WallFinishRecordset[finish]
        )
        r.color = this.#getColor(acontext.wallColor!);
        return r;
    }



    static #getCeilingMaterialDef(
        acontext: BrdBlm_TC_Ctx_IParams
    ) {
        const finish = acontext.ceilingFinish! as BrdBlm_TC_Ctx_eWallFinish
        const r: A3D.ApgA3D_IMaterialDef = structuredClone(
            BrdBlm_TC_Ctx_WallFinishRecordset[finish]
        )
        r.color = this.#getColor(acontext.ceilingColor!);
        return r;
    }

    // #endregion
    //--------------------------------------------------------------------------

    static #getMaxY(aoutline: A3D.ApgA3D_IPoint2D[]) {
        let r = 0;
        for (const p of aoutline) {
            if (r < p.y) {
                r = p.y
            }
        }
        return r;
    }

    static #getMaxX(aoutline: A3D.ApgA3D_IPoint2D[]) {
        let r = 0;
        for (const p of aoutline) {
            if (r < p.x) {
                r = p.x
            }
        }
        return r;
    }

    static #getMinX(aoutline: A3D.ApgA3D_IPoint2D[]) {
        let r = 0;
        for (const p of aoutline) {
            if (r > p.x) {
                r = p.x
            }
        }
        return r;
    }

}
