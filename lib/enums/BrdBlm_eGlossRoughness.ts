/** ---------------------------------------------------------------------------
 * @module [BrdBlm]
 * @author [APG] ANGELI Paolo Giusto
 * @version 0.1 APG 20231108
 * @version 0.2 APG 20231227 Modulo BrdBlm server side
 * ----------------------------------------------------------------------------
 */

/**
 * Tipi di lucentezza da abbinare ai materiali del visualizzatore
 */
export enum BrdBlm_eGlossRoughness {
    UNDEFINED = 0,
    VERY_SHINIY = 0.02,
    SHINY = 0.1,
    ALU_POWDER = 0.2,
    ANODIZED = 0.3,
    PRE_LAQ_25_35 = 0.4,
    RAL_GLOSS_25_35 = 0.4,
    RAL_GLOSS_10 = 0.6,
    PRE_LAQ_SATIN = 0.9,
    RAL_SATIN = 0.9,
    ROUGH = 1
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
