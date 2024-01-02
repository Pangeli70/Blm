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
 * @version 0.1 DLV 20231102
 * @version 0.2 APG 20231108 Sistemazione commenti e riformattazione 
 * ----------------------------------------------------------------------------
 */


/**
 * Regole di costruzione portoni sezionali verticali
 */
export class BrdBlm_TC_SeD_RULES {


    /** Costanti primarie pannelli sezionali */
    static readonly PANEL_CONSTRUCTION = {

        /** Sormonto maschio femmina */
        MALE_FEMALE_OVERLAP: 25,

        /** Altezza neutra minima del maschio e della femmina */
        MALE_FEMALE_HEIGHT: 50,

        /** Altezza Nervatura all'interasse */
        STAVE_HALF_HEIGHT: 9,

        /** Spessore pannello */
        SECTION_WIDTH: 42,

    };


    /** Costanti primarie sezioni VISA */
    static readonly VISA = {

        /** Altezza zoccolo Luxor */
        PLINTH_150: 150,
        /** Altezza zoccolo Full Vision */
        PLINTH_92: 92,

        /** Larghezza montante a T Luxor */
        T_WIDTH: 75,
        /** Larghezza montante a T Full Vision */
        T_FULL_VISION_WIDTH: 100,

        /** Altezza maschio Luxor */
        MALE_HEIGHT: 70.5,
        /** Altezza maschio Full Vision */
        MALE_FULL_VISION_HEIGHT: 30,

        /** Altezza femmina Luxor */
        FEMALE_HEIGHT: 71.5,
        /** Altezza femmina Full vision */
        FEMALE_FULL_VISION_HEIGHT: 54.5,

        /** Agio */
        EASE: 1,
    };


    /** Costanti derivate sezioni VISA */
    static readonly VISA_CALCULATED = {

        /** Modello Luxor */
        REDUCE_HIGH_SECTION_LUXOR:
            this.VISA.PLINTH_150 + this.VISA.FEMALE_HEIGHT + this.VISA.EASE,
        REDUCE_INTERM_SECTION_LUXOR:
            this.VISA.FEMALE_HEIGHT + this.VISA.MALE_HEIGHT + this.VISA.EASE,
        REDUCE_BASE_SECTION_LUXOR:
            this.VISA.PLINTH_150 + this.VISA.MALE_HEIGHT + this.VISA.EASE,

        /** Modello Lux */
        REDUCE_HIGH_SECTION_LUX:
            this.VISA.PLINTH_92 + this.VISA.FEMALE_HEIGHT + this.VISA.EASE,
        REDUCE_INTERM_SECTION_LUX:
            this.VISA.FEMALE_HEIGHT + this.VISA.MALE_HEIGHT + this.VISA.EASE,
        REDUCE_BASE_SECTION_LUX:
            this.VISA.PLINTH_92 + this.VISA.MALE_HEIGHT + this.VISA.EASE,

        /** Modello Full Vision */
        REDUCE_HIGH_SECTION_FULL_VISION:
            this.VISA.PLINTH_92 + this.VISA.FEMALE_FULL_VISION_HEIGHT + this.VISA.EASE,
        REDUCE_INTERM_SECTION_FULL_VISION:
            this.VISA.FEMALE_FULL_VISION_HEIGHT + this.VISA.MALE_FULL_VISION_HEIGHT + this.VISA.EASE,
        REDUCE_BASE_SECTION_FULL_VISION:
            this.VISA.PLINTH_92 + this.VISA.MALE_FULL_VISION_HEIGHT + this.VISA.EASE,
    };



}
