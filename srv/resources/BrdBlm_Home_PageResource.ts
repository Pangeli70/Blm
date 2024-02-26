/** ---------------------------------------------------------------------------
 * @module [BrdBlm]
 * @author [APG] Angeli Paolo Giusto 
 * @version 0.1 APG 20240105
 * ----------------------------------------------------------------------------
 */
import {
    BrdBlm_Microservice,
    Edr,
    Tng
} from "../deps.ts";


/**
 * Homepage del sito del microservice
 */
export class BrdBlm_Home_PageResource extends Edr.Drash.Resource {


    public paths = ["/", "/Brd/Blm/index"];


    public async GET(_request: Edr.Drash.Request, response: Edr.Drash.Response) {

        const data = {
            siteName: BrdBlm_Microservice.name,
            siteTitle: BrdBlm_Microservice.description,
            pageTitle: "Portoni sezionali",
            links: this.#getLinks()
        }

        const html = await Tng.BrdTngService.Render("/BrdBlm_Home_Page.html", data) as string;

        response.html(html);
    }




    #getLinks() {

        const r = [
            {
                url: "/Brd/Blm/TC/Ctx",
                caption: "Costruzione contesto installazione chiusure tecniche."
            },
            {
                url: "/Brd/Blm/TC/SeD/V/ST",
                caption: "Costruzione guide portone sezionale a corrimento verticale."
            },
            {
                url: "/Brd/Blm/TC/SeD/Se/FP",
                caption: "Costruzione pannello schiumato per portone sezionale."
            },

        ]
        return r;

    }
}