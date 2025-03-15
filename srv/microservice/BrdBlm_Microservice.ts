/** ---------------------------------------------------------------------------
 * @module [BrdBlm]
 * @author [APG] ANGELI Paolo Giusto
 * @version 1.0.0 [APG 2025/03/09]
 * ----------------------------------------------------------------------------
 */

import { Edr, Uts } from "../deps.ts";

export const BrdBlm_Microservice: Uts.ApgUts_IMicroservice = {
    name: Edr.ApgEdr_Microservice_Name,
    version: "1.0",
    title: "Apg for Breda Business logig modiule",
    isDeploy: Uts.ApgUts_Is.IsDeploy(),
    devServerIP: "localhost",
    devServerPort: 12055
};
