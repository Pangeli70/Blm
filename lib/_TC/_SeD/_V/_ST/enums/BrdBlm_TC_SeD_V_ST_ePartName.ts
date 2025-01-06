/** ---------------------------------------------------------------------------
 * @module [BrdBlm_TC_SeD_V_ST]
 * @author [APG] ANGELI Paolo Giusto 
 * @version 0.1 APG 20231114
 * @version 0.2 APG 20231226 Estratto nel suo proprio file
 * ----------------------------------------------------------------------------
 */

/**
 * Nomi dei profilati che compongono il sistema di guide di scorrimento dei
 * portoni sezionali a scorrimento verticale.
 * I nomi sono plurali perché nella maggior parte dei casi si tratta di coppie
 * di profilati speculari.
 */
export enum BrdBlm_TC_SeD_V_ST_ePartName {
    UNDEFINED = "",
    ANGLE_BARS_FIRST_STRETCH = "Angle bars first stretch",
    ANGLE_BARS_SECOND_STRETCH = "Angle bars second stretch",
    VERTICAL_TRACKS_FIRST_STRETCH = "Vertical tracks first stretch",
    VERTICAL_TRACKS_SECOND_STRETCH = "Vertical tracks second stretch",
    HORIZONTAL_C_PROFILES = "Horizontal C profiles",
    HORIZONTAL_TRACKS = "Horizontal tracks",
    HORIZONTAL_UPPER_TRACKS = "horizontal upper tracks",
    REGULAR_CURVES = "Regular curves",
    UPPER_CURVES = "Upper curves",
    REAR_C_TEMPLATES = "Rear templates",
    HANGING_BARS = "Hanging bars"
}
