/** ---------------------------------------------------------------------------
 * @module [BrdBlm_TC_Ctx]
 * @author [APG] Angeli Paolo Giusto 
 * @version 0.1 APG 20230707
 * @version 0.2 APG 20231109 Pulizia e refactoring
 * @version 0.3 APG 20231227 Modulo BrdBlm server side
 * ----------------------------------------------------------------------------
 */

/**
 * Texture per la facciata esterna  del contesto (albedo e bump o normal maps)
 */
export enum BrdBlm_TC_Ctx_eFacadeFinish {

    /**
     * Cemento un po' troppo ondulato (ruotabile )
     */
    CONCRETE = 'context_outdoor_facade_concrete',

    /**
     * Mah questo è brutto
     */
    UGLY_PLASTER = 'context_outdoor_facade_ugly_plaster',

    /**
     * Graffiato (ruotabile)
     */
    SCRATCHED_PLASTER = 'context_outdoor_facade_scratched_plaster',

    /**
     * Intonaco grezzo (ruotabile)
     */
    RAW_PLASTER = 'context_outdoor_facade_raw_plaster',

    /**
     * Blocchi di cemento
     */
    FINE_BLOCKS = 'context_outdoor_facade_fine_blocks',

    /**
     * Malta non tanto fina (ruotabile)
     */
    FINE_MORTAR = 'context_outdoor_facade_fine_mortar'
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