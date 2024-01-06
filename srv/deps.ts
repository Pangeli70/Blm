import { Uts } from "../../Uts/mod.ts";

export const BrdBlm_Microservice: Uts.BrdUts_IMicroservice = {
    name: "BrdBlm",
    description: "Breda Business Logic",
    devServerIP: "localhost",
    devServerPort: 12056
};

export * from "../mod.ts";
    
// Brd local monorepo
export * from "../../Edr/mod.ts";
export * from "../../Tng/mod.ts";
export * from "../../Uts/mod.ts";
