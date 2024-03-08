/** ---------------------------------------------------------------------------
 * @module [BrdGlb]
 * @author [APG] Angeli Paolo Giusto
 * @version 0.1 APG 20230707
 * @version 0.2 APG 20231115 Spostato nel suo file dedicato + Commenti e refactoring
 * @version 0.3 APG 20231227 Modulo BrdGlb server side
 * @version 0.4 APG 20240225 Modulo BrdBlm server side
 * ----------------------------------------------------------------------------
 */

/**
 * Definizione dei dati di mappatura delle BUMPMAP.
 */
export interface BrdBlm_IBumpMapDef {

    /**
     * Nome della texture in livelli di grigio come definito nei CDN Assets
     */
    cdnAsset: string;

    /**
     * Url per la bumpmap viene compilato attingendo dai CDN Assets
     */
    url?: string;

    /**
     * Profondità dell'effetto di rugosità
     */
    depth: number;

    /**
     * Scala di mappatura orizzontale 
     */
    uScale: number;

    /**
     * Scala di mappatura verticale
     */
    vScale: number;

    /**
     * Questa texture può essere ruotata
     */
    canRotate: boolean;



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
