/** ---------------------------------------------------------------------------
 * @module [Brd/3Dv]
 * @author [APG] Angeli Paolo Giusto 
 * @version 0.1 APG 20230626
 * ----------------------------------------------------------------------------
 */

import { Tng, Edr,  BrdBlm_Microservice } from "./srv/deps.ts";
import { BrdBlm_Resources, BrdBlm_Services } from "./srv/mod.ts";


// Setup Edr
Edr.BrdEdrService.ClientCacheMaxAge = 1 * 60; // One minute 


// Overwrite default Tengine settings
Tng.BrdTngService.Init("./srv/templates", false, 100);

const server = new Edr.Drash.Server({
    hostname: BrdBlm_Microservice.devServerIP,
    port: BrdBlm_Microservice.devServerPort,
    protocol: "http",
    resources: BrdBlm_Resources,
    services: BrdBlm_Services,
});


server.run();

Edr.BrdEdrService.ServerStartupResume(BrdBlm_Microservice, server.address);