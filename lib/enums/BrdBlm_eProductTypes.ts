/** ---------------------------------------------------------------------------
 * @module [BrdBlm]
 * @author [APG] Angeli Paolo Giusto
 * @version 0.1 APG 20220620
 * @version 0.2 APG 20230622
 * @version 0.3 APG 20231222
 * @version 0.4 APG 20231227 Modulo BrdBlm server side
 * ----------------------------------------------------------------------------
 */


/**
 * Tipologie di prodotti 
 */
export enum BrdBlm_eProductTypes {

    /**
     * Sezionale
     * 
     * [T]echnical [C]losure _ [Se]ctional [D]oor _  [V]ertical
     */
    TC_SeD_V = "TC_SeD_V_",

    /**
     * Phenix
     * 
     * [T]echnical [C]losure _ [Se]ctional [D]oor _  [H]orizontal
     */
    TC_SeD_H = "TC_SeD_H_",

    /**
     * Swing
     * 
     * [T]echnical [C]losure _ [Se]ctional [D]oor _  [T]ilting
     */
    TC_SeD_T = "TC_SeD_T_",

    /**
     * Ibis
     * 
     * [T]echnical [C]losure _ [Se]ctional [D]oor _  [S]liding
     */
    TC_SeD_S = "TC_SeD_S",

    /**
     * Porta pedonale laterale sezionale
     * 
     * [T]echnical [C]losure _ [Se]ctional [D]oor _  [L]ateral [P]edestrian [D]oor
     */
    TC_SeD_LPD = "TC_SeD_LPD_",

    /**
     * Porta pedonale laterale sezionale certificata
     * 
     * [T]echnical [C]losure _ [Se]ctional [D]oor _  [L]ateral [P]edestrian [D]oor [C]ertified
     */
    TC_SeD_LPDC = "TC_SeD_LPDC_",



    /** 
     * Adone
     * 
     * [Fo]lding [D]oor _ [W]ith [F]rame: 
     */
    TC_FoD_WF = "TC_FoD_WF_",

    /**
     * Adone slim
     * 
     * [Fo]lding [D]oor _ [N]o [F]rame: 
     */
    TC_FoD_NF = "TC_FoD_NF_",

    /**
     * Apollo
     * 
     * [Fo]lding [D]oor _ [H]anging on [T]rack 
     */
    TC_FoD_HT = "TC_FoD_HT_",

    /** 
     * Atlante con ruote a terra
     * 
     * [Fo]lding [D]oor _ [S]iding on [R]ollers
     */
    TC_FoD_SR = "TC_FoD_SR_",

    /** 
     * Atlante sospeso con guida a terra
     * 
     * [Fo]lding [D]oor _ [S]iding [H]anging _ [W]ith [F]loor [T]rack
     */
    TC_FoD_SH_WFT = "TC_FoD_SH_WFT_",

    /** 
     * Atlante sospeso senza guida a terra
     * 
     * [Fo]lding [D]oor _ [S]iding [H]anging _ [N]o [F]loor [T]rack 
     */
    TC_FoD_SH = "TC_FoD_SH_",

    /**
     * Porta pedonale laterale libro certificata
     * 
     * [Fo]lding [D]oor _ [L]ateral [P]edestrian [D]oor [C]ertified
     */
    TC_FoD_LPDC = "TC_SeD_LPDC_",


    /** 
     * Fulmine
     * [Fa]st [D]oor _ [P]acking
     */
    TC_FaD_P = "TC_FaD_P_",

    /**
     * Lampo
     * 
     * [Fa]st [D]oor _ [R]olling [S]elf [R]epairing
     * */
    TC_FaD_RSR = "TC_FaD_RSR_",

    /** 
     * Thunder
     * 
     * [Fa]st [D]oor _ [R]igid [C]coat
     */
    TC_FaD_RC = "TC_FaD_RC_",


    /**
     * Portale isotermico sospeso
     * 
     * [I]sothermal [S]helter _ [Suspended]
     */
    IS_S = "IS_S_",

    /**
     * Cargo + Pedana + Portale Isotermico
     * 
     * [C]omplete [L]oading [P]oint
     */
    CLP = "CLP_",
}
