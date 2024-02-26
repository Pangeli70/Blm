/** ---------------------------------------------------------------------------
 * @module [BrdGlb_TC]
 * @author [APG] Angeli Paolo Giusto
 * @version 0.1 APG 20230707
 * @version 0.2 APG 20231115 Spostato nel suo file dedicato + Commenti e refactoring
 * @version 0.3 APG 20231227 Modulo BrdGlb server side
 * ----------------------------------------------------------------------------
 */

import {
  BrdBlm_IPoint2D
} from "../../../interfaces/BrdBlm_IPoint2D.ts";
import {
  BrdBlm_IRectangle
} from "../../../interfaces/BrdBlm_IRectangle.ts";
import { BrdBlm_TC_Ctx_eFacadeColor } from "../enums/BrdBlm_TC_Ctx_eFacadeColor.ts";
import { BrdBlm_TC_Ctx_eFacadeFinish } from "../enums/BrdBlm_TC_Ctx_eFacadeFinish.ts";
import { BrdBlm_TC_Ctx_eFloorColor } from "../enums/BrdBlm_TC_Ctx_eFloorColor.ts";
import { BrdBlm_TC_Ctx_eFloorFinish } from "../enums/BrdBlm_TC_Ctx_eFloorFinish.ts";
import { BrdBlm_TC_Ctx_ePavementColor } from "../enums/BrdBlm_TC_Ctx_ePavementColor.ts";
import { BrdBlm_TC_Ctx_ePavementFinish } from "../enums/BrdBlm_TC_Ctx_ePavementFinish.ts";
import { BrdBlm_TC_Ctx_eThresholdColor } from "../enums/BrdBlm_TC_Ctx_eThresholdColor.ts";
import { BrdBlm_TC_Ctx_eThresholdFinish } from "../enums/BrdBlm_TC_Ctx_eThresholdFinish.ts";
import { BrdBlm_TC_Ctx_eWallColor } from "../enums/BrdBlm_TC_Ctx_eWallColor.ts";
import { BrdBlm_TC_Ctx_eWallFinish } from "../enums/BrdBlm_TC_Ctx_eWallFinish.ts";


export const BrdBlm_TC_Ctx_IParams_Signature = "BrdBlm_TC_Ctx_IParams_Signature_V0"

/**
 * Definizione delle caratteristiche geometriche del contesto per la chiusura
 * tecnica.
 *
 * I params sono i dati verificati e pre processati a partire dalla config
 */
export interface BrdBlm_TC_Ctx_IParams {

  signature: "BrdBlm_TC_Ctx_IParams_Signature_V0";

  name: string;
  description: string;

  facadeLeft?: number;
  facadeRight?: number;
  facadeTop?: number;
  facadeThickness?: number;
  facadeColor?: BrdBlm_TC_Ctx_eFacadeColor;
  facadeFinish?: BrdBlm_TC_Ctx_eFacadeFinish;

  hasExternFrame?: boolean;
  externFrameWidth?: number;
  externFrameThickness?: number;
  externFrameColor?: BrdBlm_TC_Ctx_eFacadeColor;
  externFrameFinish?: BrdBlm_TC_Ctx_eFacadeFinish;

  pavementDepth?: number;
  pavementThickness?: number;
  pavementColor?: BrdBlm_TC_Ctx_ePavementColor;
  pavementFinish?: BrdBlm_TC_Ctx_ePavementFinish;

  hasThreshold?: boolean;
  thresholdDepth?: number;
  thresholdColor?: BrdBlm_TC_Ctx_eThresholdColor;
  thresholdFinish?: BrdBlm_TC_Ctx_eThresholdFinish;

  hasExternBaseBoard?: boolean;
  externBaseboardHeight?: number;
  externBaseboardThickness?: number;
  externBaseboardColor?: BrdBlm_TC_Ctx_eFacadeColor;
  externBaseboardFinish?: BrdBlm_TC_Ctx_eFacadeFinish;

  hasSidewalk?: boolean;
  sidewalkDepth?: number;
  sidewalkHeight?: number;
  sidewalkColor?: BrdBlm_TC_Ctx_ePavementColor;
  sidewalkFinish?: BrdBlm_TC_Ctx_ePavementFinish;

  holeWidth: number;
  holeHeight: number;
  holeTopOutline?: BrdBlm_IPoint2D[];

  lintel: number;
  lintelAdditionalHeight?: number;
  lintelAdditionalDepth?: number;

  embrasureRight?: number;
  embrasureLeft?: number;

  roomDepth?: number;
  floorThickness?: number;
  floorColor?: BrdBlm_TC_Ctx_eFloorColor;
  floorFinish?: BrdBlm_TC_Ctx_eFloorFinish;

  hasInternBaseBoard?: boolean;
  internBaseboardHeight?: number;
  internBaseboardThickness?: number;
  internBaseboardColor?: BrdBlm_TC_Ctx_eFloorColor;
  internBaseboardFinish?: BrdBlm_TC_Ctx_eFloorFinish;

  ceilingOutline?: BrdBlm_IPoint2D[];
  ceilingThickness?: number;
  ceilingColor?: BrdBlm_TC_Ctx_eWallColor;
  ceilingFinish?: BrdBlm_TC_Ctx_eWallFinish;

  wallRightOutline?: BrdBlm_IPoint2D[];
  wallLeftOutline?: BrdBlm_IPoint2D[];
  wallThickness?: number;
  wallColor?: BrdBlm_TC_Ctx_eWallColor;
  wallFinish?: BrdBlm_TC_Ctx_eWallFinish;

  trasversalBeams?: BrdBlm_IRectangle[];

  columns?: BrdBlm_IRectangle[];
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
