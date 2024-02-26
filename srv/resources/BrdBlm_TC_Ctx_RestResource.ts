/** ---------------------------------------------------------------------------
 * @module [BrdBlm]
 * @author [APG] Angeli Paolo Giusto
 * @version 0.1 APG 202401056
 * ----------------------------------------------------------------------------
 */

import {
    Blm, BrdBlm_Microservice,
    Edr,
    Uts
} from "../deps.ts";



/**
 * Route per ottenere e testare i pannelli schiumati per i portoni sezionali
 */
export class BrdBlm_TC_Ctx_RestResource extends Edr.BrdEdr_Base_RestResource {


    static ROUTE = "/Brd/Blm/TC/Ctx"
    public paths = [BrdBlm_TC_Ctx_RestResource.ROUTE];



    public GET(
        request: Edr.Drash.Request,
        response: Edr.Drash.Response
    ) {

        const r = this.begin(BrdBlm_Microservice.name, request);

        const mode = this.GET_mode(request);

        if (this.GET_isHelpMode(mode, r, response))
            return;

        const rawTestName = request.queryParam(BrdBlm_TC_Ctx_RestResource.GET_QSP_TEST_NAME);

        if (this.GET_testNameIsMissing(rawTestName, r, response))
            return;

        const testsParams = Blm.TC.Ctx.BrdBlm_TC_Ctx_Tests;
        const names: string[] = [];
        for (const test of testsParams) {
            names.push(encodeURIComponent(test.name));
        }
        const testName = rawTestName!;
        const testIndex = testsParams.findIndex((v) => v.name == rawTestName)

        if (this.GET_testWasNotFound(testIndex, testName, names, r, response))
            return;

        const params = testsParams[testIndex];

        if (this.GET_isParamsMode(mode, testName, params, r, response))
            return;

        const context = this.#processRequest(params);

        if (this.#processHadErrors(context, params, r, response))
            return;

        r.payload = context;
        this.end(r, response);
    }



    public POST(
        request: Edr.Drash.Request,
        response: Edr.Drash.Response
    ) {


        const r = this.begin(BrdBlm_Microservice.name, request);

        const rawParams = request.bodyParam(BrdBlm_TC_Ctx_RestResource.POST_BP_PARAMS);

        if (this.POST_paramsAreMissing(rawParams, BrdBlm_TC_Ctx_RestResource.POST_BP_PARAMS, 'BrdEdr_ITest', r, response))
            return;

        const params = rawParams as Blm.TC.Ctx.BrdBlm_TC_Ctx_IParams;

        const context = this.#processRequest(params);

        if (this.#processHadErrors(context, params, r, response))
            return;

        r.payload = context;
        this.end(r, response);
    }



    #processRequest(aparams: Blm.TC.Ctx.BrdBlm_TC_Ctx_IParams) {

        const r = new Blm.TC.Ctx.BrdBlm_TC_Ctx(aparams);
        
        return r;
    }



    #processHadErrors(
        acontext: Blm.TC.Ctx.BrdBlm_TC_Ctx,
        aparams: Blm.TC.Ctx.BrdBlm_TC_Ctx_IParams,
        aresult: Uts.BrdUts_RestResult,
        response: Edr.Drash.Response
    ) { 
        let r = false;
        if (!acontext.status.ok) {
            aresult.ok = false;
            aresult.message = [
                `The processing of the params name [${aparams.name}] resulted in errors.`,
                `Check the payload to get the status of the context creation`
            ];
            aresult.payload = acontext.status;
            this.end(aresult, response);
            r = true;
        }
        return r;
    }



    routeHelp() {
        const r = super.routeHelp();

        r.route = BrdBlm_TC_Ctx_RestResource.ROUTE;
        r.description = [
            "Use this route to get a context for a technical closure"
        ]
        r.payload.type = "BrdBlm_TC_Ctx";
        r.payload.description.push(
            "Context data for the specified params"
        )

        r.GET!.qsParams[1].values.push(
            'Refer to the [BrdBlm_TC_Ctx_Tests] list.'
        )

        r.POST!.bodyParams[0].type = "BrdBlm_TC_Ctx_IParams";
        r.POST!.bodyParams[0].description.push(
            "Context params for a technical closure"
        )
        return r;
    }
}


