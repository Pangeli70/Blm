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




/**
 * Route per la gestione dei delle guide dei sistemi di scorrimento dei portoni 
 * sezionali a scorrimento verticale
 */
export class BrdBlm_TC_SeD_V_ST_RestResource extends Edr.BrdEdr_Base_RestResource {


    static ROUTE = "/Brd/Blm/TC/SeD/V/ST";

    public paths = [BrdBlm_TC_SeD_V_ST_RestResource.ROUTE];


    public GET(
        request: Edr.Drash.Request,
        response: Edr.Drash.Response
    ) {

        const r = this.begin(BrdBlm_Microservice.name, request);

        const mode = this.GET_mode(request);

        if (this.GET_isHelpMode(mode, r, response))
            return;

        const rawTestName = request.queryParam(BrdBlm_TC_SeD_V_ST_RestResource.GET_QSP_TEST_NAME);

        if (this.GET_testNameIsMissing(rawTestName, r, response))
            return;

        const testsParams = Blm.TC.SeD.V.ST.BrdBlm_TC_SeD_V_ST_Tests;
        const names: string[] = [];
        for (const test of testsParams) {
            names.push(encodeURIComponent(test.name));
        }
        const testName = rawTestName!;
        const testIndex = testsParams.findIndex((v) => v.name == testName)

        if (this.GET_testWasNotFound(testIndex, testName, names, r, response))
            return;

        const params = testsParams[testIndex];

        if (this.GET_isParamsMode(mode, testName, params, r, response))
            return;

        const result = this.#processRequest(params);

        if (this.#processHasGivenEmptyResult(result, params, r, response))
            return;

        r.payload = result;
        this.end(r, response);
    }




    public POST(
        request: Edr.Drash.Request,
        response: Edr.Drash.Response
    ) {

        const r = this.begin(BrdBlm_Microservice.name, request);

        const rawParams = request.bodyParam(BrdBlm_TC_SeD_V_ST_RestResource.POST_BP_PARAMS);

        if (this.POST_paramsAreMissing(rawParams, BrdBlm_TC_SeD_V_ST_RestResource.POST_BP_PARAMS, 'BrdEdr_ITest', r, response))
            return;

        const params = rawParams as Blm.TC.SeD.V.ST.BrdBlm_TC_SeD_V_ST_IParams;

        const result = this.#processRequest(params);

        if (this.#processHasGivenEmptyResult(result, params, r, response))
            return;

        r.payload = result;
        this.end(r, response);
    }



    #processRequest(aparams: Blm.TC.SeD.V.ST.BrdBlm_TC_SeD_V_ST_IParams) {

        const service = Blm.TC.SeD.V.ST.BrdBlm_TC_SeD_V_ST_Service;
        const components = service.GetComponents(aparams);

        const r: Blm.TC.SeD.V.ST.BrdBlm_TC_SeD_V_ST_ProfiledSheetMetal[] = [];
        if (components) {
            for (const [_key, value] of components) {
                r.push(value);
            }
        }

        return r;
    }



    #processHasGivenEmptyResult(
        acomponents: Blm.TC.SeD.V.ST.BrdBlm_TC_SeD_V_ST_ProfiledSheetMetal[],
        aparams: Blm.TC.SeD.V.ST.BrdBlm_TC_SeD_V_ST_IParams,
        aresult: Uts.BrdUts_RestResult,
        response: Edr.Drash.Response
    ) {
        let r = false;
        if (acomponents.length == 0) {
            aresult.ok = false;
            aresult.message = [
                `The processing of the params name [${aparams.name}] has not given any result.`,
                `Probably the processing unit for the sliding system` +
                `[${aparams.type}] is not yet implemented.`
            ];
            this.end(aresult, response);
            r = true;
        }
        return r;
    }



    routeHelp() {
        const r = super.routeHelp();

        r.route = BrdBlm_TC_SeD_V_ST_RestResource.ROUTE;
        r.description = [
            "Use this route to get all the sheet metal profiles for a vertical sectional door sliding tracks system"
        ]
        r.payload.type = "BrdBlm_TC_SeD_V_ST_IProfiledSheetMetal[]";
        r.payload.description.push(
            "Sheet metal profiles for the specified slyding system params"
        )

        r.GET!.qsParams[1].values.push(
            'Refer to the [BrdBlm_TC_SeD_V_ST_Tests] list.'
        )

        r.POST!.bodyParams[0].type = "BrdBlm_TC_SeD_V_ST_IParams";
        r.POST!.bodyParams[0].description.push(
            "Vertical sectional door sliding system params"
        )
        return r;
    }
}


