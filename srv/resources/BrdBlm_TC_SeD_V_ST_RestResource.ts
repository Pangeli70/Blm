/** ---------------------------------------------------------------------------
 * @module [BrdBlm]
 * @author [APG] Angeli Paolo Giusto
 * @version 0.1 APG 20240105
 * ----------------------------------------------------------------------------
 */

import {
    Blm, BrdBlm_Microservice,
    Edr,
    Uts
} from "../deps.ts";



const TEST_NAME_QSP = 'TestName';
const MODE_QSP = 'Mode';

const MODE_HELP = "Help";
const MODE_PARAMS = "Params";
const MODE_RESULT = "Result";

const PARAMS_BP = 'params';


const RouteHelp = {
    GET: {
        qsParams: [
            {
                name: MODE_QSP,
                values: `${MODE_HELP}, ${MODE_PARAMS}, ${MODE_RESULT}`
            },
            {
                name: PARAMS_BP,
                values: "Names in the BrdBlm_TC_SeD_V_ST_Tests list"
            }
        ],
        payload: {
            type: "BrdBlm_TC_SeD_V_ST_TProfiledSheetMetalMap",
            description: "Conversion to plain object of the map"
        }
    },
    POST: {
        bodyParams: [
            {
                name: PARAMS_BP,
                type: "BrdBlm_TC_SeD_V_ST_IParams"
            }
        ],
        payload: {
            type: "BrdBlm_TC_SeD_V_ST_TProfiledSheetMetalMap",
            description: "Conversion to plain object of the map"
        }
    }
}

/**
 * Genera la pagina di test per il servizio di gestione guide di scorrimento
 */
export class BrdBlm_TC_SeD_V_ST_RestResource extends Edr.Drash.Resource {


    public paths = ["/Brd/Blm/TC/SeD/V/ST"];



    public GET(
        request: Edr.Drash.Request,
        response: Edr.Drash.Response
    ) {

        const r = new Uts.BrdUts_RestResult(BrdBlm_Microservice.name);
        const startTime = performance.now();

        let mode = MODE_RESULT;
        const rawMode = request.queryParam(MODE_QSP);
        if (rawMode == MODE_PARAMS) {
            mode = rawMode;
        }

        if (rawMode == MODE_HELP) {
            r.ok = false;
            r.message = 'Look at the payload to have hints about how to use this route.'
            r.payload = RouteHelp;
            this.#terminate(startTime, r, response);
            return;
        }

        const testsParams = Blm.TC.SeD.V.ST.BrdBlm_TC_SeD_V_ST_Tests;
        const ids: string[] = [];
        for (const test of testsParams) {
            ids.push(encodeURIComponent(test.name));
        }

        const rawTestName = request.queryParam(TEST_NAME_QSP);

        if (!rawTestName) {
            r.ok = false;
            r.message = 'Look at the payload to have hints about how to use this route.'
            r.payload = RouteHelp;
            this.#terminate(startTime, r, response);
            return;
        }

        const testIndex = testsParams.findIndex((v) => v.name == rawTestName)

        if (testIndex == -1) {
            r.ok = false;
            r.message =
                `Il valore [${rawTestName}] specificato per il parametro ` +
                `[${TEST_NAME_QSP}] della querystring non è valido.\n` +
                `I valori disponibili sono specificati nel payload.`;
            r.payload = ids;
            this.#terminate(startTime, r, response);
            return;
        }

        const params = testsParams[testIndex];

        if (mode == MODE_PARAMS) {
            r.message = `The parameters associated to the test [${rawTestName}] `;
            r.payload = params;
            this.#terminate(startTime, r, response);
            return;
        }

        const rawPayload = this.#getComponents(params);

        if (Object.keys(rawPayload).length == 0) {
            r.ok = false;
            r.message =
                `L'elaborazione dei compomenti per il test ` +
                `[${rawTestName}] specificato per il parametro ` +
                `[${TEST_NAME_QSP}] della querystring non ha dato nessun risultato.\n` +
                `Probabilmente il servizio di elaborazione per lo scorrimento ` +
                `[${params.type}] non è stato ancora implementato`
            this.#terminate(startTime, r, response);
            return;
        }

        r.payload = rawPayload;

        this.#terminate(startTime, r, response);
    }



    #terminate(startTime: number, r: Uts.BrdUts_RestResult, response: Edr.Drash.Response) {
        const totalTime = ((performance.now() - startTime) / 1000).toFixed(4);
        r.totalTime = totalTime;

        response.json(r);
    }

    public POST(
        request: Edr.Drash.Request,
        response: Edr.Drash.Response
    ) {


        const startTime = performance.now();

        const r = new Uts.BrdUts_RestResult(BrdBlm_Microservice.name);

        const rawParams = request.bodyParam(PARAMS_BP);

        if (!rawParams) {
            r.ok = false;
            r.message =
                `Parametri per il calcolo mancanti nel [body] della richiesta in [POST]. ` +
                `Specificare un oggetto denominato [${PARAMS_BP}]. ` +
                `Questo oggetto deve soddisfare l'interfaccia [BrdBlm_TC_SeD_V_ST_IParams].`
            this.#terminate(startTime, r, response);
            return;
        }

        const params = rawParams as Blm.TC.SeD.V.ST.BrdBlm_TC_SeD_V_ST_IParams;
        const rawComponents = this.#getComponents(params);

        if (Object.keys(rawComponents).length == 0) {
            r.ok = false;
            r.message =
                `L'elaborazione dei componenti per la richiesta ` +
                `[${params.name}] non ha dato nessun risultato.`
            this.#terminate(startTime, r, response);
            return;
        }

        r.payload = rawComponents;
        this.#terminate(startTime, r, response);
    }



    #getComponents(aparams: Blm.TC.SeD.V.ST.BrdBlm_TC_SeD_V_ST_IParams) {


        const service = Blm.TC.SeD.V.ST.BrdBlm_TC_SeD_V_ST_Service;
        const components = service.GetComponents(aparams);

        const r: any = {};
        if (components) {
            for (const [key, value] of components) {
                r[key] = value;
            }
        }

        return r;
    }
}


