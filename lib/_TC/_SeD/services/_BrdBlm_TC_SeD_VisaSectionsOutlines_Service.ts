import { BrdBlm_IIntExtOutlinesGroups } from "../../../interfaces/BrdBlm_IIntExtOutlinesGroups.ts";
import { ApgA3D_IPoint2D } from "../../../../../A3D/lib/interfaces/ApgA3D_IPoint2D.ts";
import { BrdBlm_TC_SeD_RULES } from "../const/BrdBlm_TC_SeD_RULES.ts";
import { BrdBlm_TC_SeD_eSectionType } from "../enums/BrdBlm_TC_SeD_eSectionType.ts";
import { BrdBlm_TC_SeD_ISectionParams } from "../interfaces/BrdBlm_TC_SeD_ISectionParams.ts";
import { BrdBlm_TC_SeD_TSectionsOutlines_Recordset } from "../types/BrdBlm_TC_SeD_TSectionsOutlines_Recordset.ts";

/**
 * Gestore delle sagome per l'estrusione dei pannelli schiumati dei
 * Portoni sezionali
 */


export class BrdBlm_TC_SeD_VisaSectionsOutlines_Service {


  private static _outlines: BrdBlm_TC_SeD_TSectionsOutlines_Recordset | null = null;
  private static _isInited = false;

  static #init() {

    if(this._isInited) return this._outlines!;
  }

  static #buildExtHorizontalOutlinesForVisaSection(aparams: BrdBlm_TC_SeD_ISectionParams) {

    const visaRules = BrdBlm_TC_SeD_RULES.VISA;

    let isHigh = false;
    let isLow = false;
    let maleHeight = visaRules.MALE_HEIGHT;
    let femaleHeight = visaRules.FEMALE_HEIGHT;

    switch(aparams.type) {
      case BrdBlm_TC_SeD_eSectionType.FULL_VISION: {
        maleHeight = visaRules.MALE_FULL_VISION_HEIGHT;
        femaleHeight = visaRules.FEMALE_FULL_VISION_HEIGHT;
        break;
      }
      case BrdBlm_TC_SeD_eSectionType.LUXOR_HIGH: {
        isHigh = true;
        maleHeight = visaRules.PLINTH_150;
        break;
      }
      case BrdBlm_TC_SeD_eSectionType.LUX_HIGH: {
        isHigh = true;
        maleHeight = visaRules.PLINTH_150;
        break;
      }
      case BrdBlm_TC_SeD_eSectionType.FULL_VISION_HIGH: {
        isHigh = true;
        maleHeight = visaRules.PLINTH_92;
        femaleHeight = visaRules.FEMALE_FULL_VISION_HEIGHT;
        break;
      }
      case BrdBlm_TC_SeD_eSectionType.LUXOR_LOW: {
        isLow = true;
        femaleHeight = visaRules.PLINTH_150;
        break;
      }
      case BrdBlm_TC_SeD_eSectionType.LUX_LOW: {
        isLow = true;
        femaleHeight = visaRules.PLINTH_150;
        break;
      }
      case BrdBlm_TC_SeD_eSectionType.FULL_VISION_LOW: {
        isLow = true;
        maleHeight = visaRules.MALE_FULL_VISION_HEIGHT;
        femaleHeight = visaRules.PLINTH_92;
        break;
      }
    }

    const r: BrdBlm_IIntExtOutlinesGroups = {
      int: [],
      ext: [],
    };

    const femaleProfExt = this.#femaleVisaProfExt(isLow, femaleHeight);
    r.ext.push(femaleProfExt);
    const maleProfExt = this.#maleVisaProfExt(isHigh, maleHeight, aparams.height);
    r.ext.push(maleProfExt);

    const femaleProfInt = this.#femaleVisaProfInt(isLow, femaleHeight);
    r.int.push(femaleProfInt);
    const maleProfInt = this.#maleVisaProfInt(isHigh, maleHeight, aparams.height);
    r.int.push(maleProfInt);

    return r;
  }


  /**
   * Profilo femmina/zoccolo ESTERNO per sezione Visa
   */
  static #femaleVisaProfExt(
    aisLow: boolean,
    afemaleHeight: number
  ) {
    const r: ApgA3D_IPoint2D[] = [];

    let portion: ApgA3D_IPoint2D[];

    // E' sezione  base
    if(aisLow) {
      portion = this._bottomCutOutlines.ext;
    }


    // Non è base mette la femmina
    else {
      portion = this._femaleOutlines.ext;
    }
    r.push(...structuredClone(portion));


    // TODO per fare un bel lavoro qui bisognerebbe mettere il profilo con la
    // sagoma del fermavetro. Ma bisogna sapere lo spessore del tamponamento. 
    // -- APG 20231116
    portion = this.#offsetPointsOnYAxis(this._topCutOutlines.ext, afemaleHeight);
    r.push(...structuredClone(portion));

    return r;
  }


  /**
   * Profilo femmina/zoccolo INTERNO per sezione Visa
   */
  static #femaleVisaProfInt(
    aisLow: boolean,
    afemaleHeight: number
  ) {
    const r: ApgA3D_IPoint2D[] = [];

    let portion: ApgA3D_IPoint2D[];


    // TODO per fare un bel lavoro qui bisognerebbe mettere il profilo con la
    // sagoma del fermavetro. Ma bisogna sapere lo spessore del tamponamento. 
    // -- APG 20231116
    portion = this.#offsetPointsOnYAxis(this._topCutOutlines.int, afemaleHeight);
    r.push(...structuredClone(portion));

    // E' sezione  base
    if(aisLow) {
      portion = this._bottomCutOutlines.int;
    }

    // Non è base mette la femmina
    else {
      portion = this._femaleOutlines.int;
    }
    r.push(...structuredClone(portion));

    return r;
  }



  /**
   * Profilo maschio/zoccolo ESTERNO per sezione Visa
   */
  static #maleVisaProfExt(
    aisHigh: boolean,
    amaleHeight: number,
    asectionHeight: number
  ) {
    const r: ApgA3D_IPoint2D[] = [];

    let portion: ApgA3D_IPoint2D[];

    // TODO per fare un bel lavoro qui bisognerebbe mettere il profilo con la
    // sagoma del fermavetro. Ma bisogna sapere lo spessore del tamponamento. 
    // -- APG 20231116
    portion = this.#offsetPointsOnYAxis(this._bottomCutOutlines.ext, amaleHeight);
    r.push(...structuredClone(portion));

    // E' sezione alta
    if(aisHigh) {
      portion = this._topCutOutlines.ext;
    }

    // Non è alta mette il maschio
    else {
      portion = this._maleOutlines.ext;
    }
    r.push(...structuredClone(portion));

    return r;
  }




  /**
   * Profilo maschio/zoccolo INTERNO per sezione Visa
   */
  static #maleVisaProfInt(
    aisHigh: boolean,
    amaleHeight: number,
    asectionHeight: number
  ) {
    const r: ApgA3D_IPoint2D[] = [];

    let portion: ApgA3D_IPoint2D[];

    // TODO per fare un bel lavoro qui bisognerebbe mettere il profilo con la
    // sagoma del fermavetro. Ma bisogna sapere lo spessore del tamponamento. 
    // -- APG 20231116
    portion = this.#offsetPointsOnYAxis(this._bottomCutOutlines.ext, amaleHeight);
    r.push(...structuredClone(portion));

    // E' sezione alta
    if(aisHigh) {
      portion = this._topCutOutlines.ext;
    }

    // Non è alta mette il maschio
    else {
      portion = this._maleOutlines.ext;
    }
    r.push(...structuredClone(portion));

    return r;
  }



}
