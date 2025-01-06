/** ---------------------------------------------------------------------------
 * @module [BrdBlm_TC_SeD_V_ST]
 * @author [APG] ANGELI Paolo Giusto 
 * @version 0.1 APG 20231114
 * @version 0.2 APG 20231226 Estratto nel suo proprio file
 * ----------------------------------------------------------------------------
 */

/**
 * Costanti utilizzate come regole costruttive per il calcolo delle dimensioni
 * dei componenti delle guide dei sistemi di scorrimento verticali
 */
export const BrdBlm_TC_SeD_V_ST_RULES = {

    /**
     * Spessore delle lamiere per le guide standard
     */
    SHEET_METAL_LIGHT_WIDTH: 1.5,
    /**
     * Spessore delle lamiere per le guide rinforzate
     */
    SHEET_METAL_HEAVY_WIDTH: 2,

    /**
     * Prolungamento dell'angolare rispetto alla altezza contabile del portone
     * nel caso degli scorrimento S1
     */
    ANGLE_BAR_RAISE_S1: 90,
    /**
     * Prolungamento dell'angolare rispetto alla altezza contabile del portone
     * nel caso degli scorrimenti S2R ed S2Ri
     */
    ANGLE_BAR_RAISE_S2R: 170,
    /**
     * Prolungamento dell'angolare rispetto alla altezza contabile del portone
     * nel caso degli scorrimenti S2 ed S2i
     */
    ANGLE_BAR_RAISE_S2: 250,



    /**
     * Prolungamento dell'angolare rispetto alla altezza contabile del portone
     * nel caso degli scorrimenti S3 ed S4
     */
    ANGLE_BAR_RAISE_S3_S4: 300,
    /**
     * Prolungamento dell'angolare rispetto alla altezza contabile del portone
     * nel caso degli scorrimenti S3R ed S4R
     */
    ANGLE_BAR_RAISE_S3R_S4R: 400,

    /**
     * Posizione dell'interasse della piastrina sull'angolare a partire dall'alto
     * per lo scorrimento SD
     */
    ANGLE_BAR_FIRST_VERTICAL_TRACK_JUNCTION_SD: 469,
    /**
     * Posizione dell'interasse della piastrina sull'angolare a partire dall'alto
     * per lo scorrimento S2
     */
    ANGLE_BAR_FIRST_VERTICAL_TRACK_JUNCTION_S2: 550,

    /**
     * Altezza della guida
     */
    TRACK_HEIGHT: 55,
    /**
     * Spessore della guida
     */
    TRACK_WIDTH: 25,


    /**
     * Riduzione della lunghezza della guida rispetto alla altezza del portone 
     * per lo scorrimento S1
     */
    FIRST_VERTICAL_TRACK_DIMINISH_S1: 220,
    /**
     * Riduzione della lunghezza della guida rispetto alla altezza del portone 
     * per lo scorrimento S2
     */
    FIRST_VERTICAL_TRACK_DIMINISH_S2: 300,



    /**
     * Distanza della guida verticale primo tratto da terra
     */
    FIRST_VERTICAL_TRACK_FLOOR_DISTANCE: 10,




    /**
     * Apertura della guida verticale primo tratto alla base dall'interno
     * dell'angolare primo tratto
     */
    FIRST_VERTICAL_TRACK_BASE_APERTURE: 45,




    /**
     * Apertura standard superiore della guida verticale primo tratto
     * nella zona di giunzione con la curva o con la guida verticale secondo tratto
     */
    FIRST_VERTICAL_TRACK_UPPER_APERTURE: 90,





    /**
     * Apertura superiore ridotta della guida verticale primo tratto
     * nella zona di giunzione con la guida verticale secondo tratto nel caso
     * di scorrimenti S3R ed S4R
     */
    FIRST_VERTICAL_TRACK_UPPER_APERTURE_REDUCED: 60,



    SECOND_VERTICAL_TRACK_S3_S4_ANGLE: 6,

    LOWER_HORIZONTAL_TRACK_BACK_SPACE: 35,

    MINIMUM_LINTEL_FOR_DOUBLE_ANGLE_BAR_S3: 1150,
    BALANCING_GROUP_HEIGHT_S3: 300,
    BALANCING_GROUP_HEIGHT_S4: 150,
    RETURN_PULLEY_HEIGHT_S3R_S4R: 150,

    SMALL_CURVE_RADIOUS: 300,
    SMALL_CURVE_INITIAL_LENGHT: 867,
    SMALL_CURVE_TERMINAL_FIXED_SLICE: 200,
    REGULAR_CURVE_BIG_RADIOUS: 380,
    BIG_CURVE_INITIAL_LENGTH: 1000,
    BIG_CURVE_TERMINAL_FIXED_SLICE: 200,

    REGULAR_CURVE_DEFAULT_ANGLE_IN_DEGREES: 89,
    CURVE_S3_ANGLE_IN_DEGREES: 84,
    CURVE_FIRST_LINEAR_CHUNK: 122,
    CURVE_SECOND_LINEAR_CHUNK: 54,

    CURVE_300_HORIZONTAL_SPACE: 409,
    CURVE_380_HORIZONTAL_SPACE: 489,
    UPPER_CURVE_SR_S1_HORIZONTAL_SPACE: 545,
    UPPER_CURVE_SO_STO_HORIZONTAL_SPACE: 545,
    UPPER_CURVE_SMB2_HORIZONTAL_SPACE: 545,

    /**
     * Altezza profilo a C
     */
    C_PROFILE_HEIGHT: 55,



    /**
     * Spessore profilo a C
     */
    C_PROFILE_WIDTH: 25,



    /**
     * Incremento standard per la misura del profilo a C orizzontale
     */
    C_PROFILE_HORIZONTAL_RAISE: 500,



    /**
     * Passo fisso per lunghezza profilo a C
     */
    C_PROFILE_STEP: 250,




    /**
     * Incremento della dlunghezza del profilo a C orizzontale quando c'è il motore
     * a traino laterale
     */
    C_PROFILE_LATERAL_PULLING_MOTOR_RISE: 1000,

    /**
     * Incremento della larghezza totale della dima posteriore rispetto alla misura
     * contabile in larghezza del portone
     */
    REAR_TEMPLATE_TOTAL_RAISE: 120 // OK APG 20231129
} as const;
