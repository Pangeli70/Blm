

export const BrdBlm_TC_Ctx_DEFAULTS = {
  /**
   * Spazio laterale aggiuntivo sulla facciata in mm
   */
  EXTRA_LATERAL_SPACE: 1000,

  /**
   * Spazio superiore aggintivo sulla facciata in mm
   */
  EXTRA_UPPER_SPACE: 1000,

  /**
   * Spessore del muro della facciata in mm
   */
  FACADE_THICKNESS: 300,

  /**
   * Spessore dell'intonaco interno della facciata in mm
   */
  FACADE_INT_MORTAR_THICKNESS: 10,

  /**
   * Lunghezza della pavimentazione esterna in mm
   */
  PAVEMENT_DEPTH: 5000,

  /**
   * Spessore della pavimentazione esterna in mm
   */
  PAVEMENT_THICKNESS: 40,


  /**
   * Probabilità di avere la soglia
   */
  HAS_THRESHOLD_CHANCE: 0.7,


  /**
   * Probabilità di avere la lo zoccolo esterno
   */
  HAS_EXTERN_BASEBOARD_CHANCE: 0.7,

  /**
   * Altezza massima battiscopa esterno in mm
   */
  EXTERN_BASEBOARD_MAX_HEIGHT: 250,

  /**
   * Spessore del battiscopa esterno in mm
   */
  EXTERN_BASEBOARD_THICKNESS: 15,

  /**
   * Probabilità di avere il marciapiede esterno
   */
  HAS_EXTERN_SIDEWALK_CHANCE: 0.5,

  /**
   * Profondità massima dei marciapiede in mm
   */
  EXTERN_SIDEWALK_MAX_DEPTH: 800,

  /**
   * Altezza del marciapiede in mm
   */
  EXTERN_SIDEWALK_HEIGHT: 150,

  /**
   * Probabilità di avere la cornice
   */
  HAS_EXTERN_FRAME_CHANCE: 0.7,

  /**
   * Larghezza massima della cornice in mm
   */
  EXTERN_FRAME_MAX_WIDTH: 150,

  /**
   * Spessore massimo della cornice in mm
   */
  EXTERN_FRAME_MAX_THICKNESS: 30,

  /**
   * Dimensione della spalletta interna in mm
   */
  EMBRASURE: 200,

  /**
   * Profondità interna della stanza in mm
   */
  ROOM_DEPTH: 5000,


  /**
   * Spessore della pavimentazione interna in mm
   */
  FLOOR_THICKNESS: 50,


  /**
   * Probabilità di avere la lo zoccolo interno
   */
  HAS_INTERN_BASEBOARD_CHANCE: 0.7,

  /**
   * Altezza massima battiscopa interno in mm
   */
  INTERN_BASEBOARD_MAX_HEIGHT: 150,

  /**
   * Spessore del battiscopa interno in mm
   */
  INTERN_BASEBOARD_THICKNESS: 10,



  /**
   * Spessore del soffitto in mm
   */
  CEILING_THICKNESS: 250,

  /**
   * Spessore delle pareti in mm
   */
  WALLS_THICKNESS: 200,


} as const;
