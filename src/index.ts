import * as gph from "./graph/graph";
import * as tarjan from "./graph/sccs-tarjan";

export const graph = { ...gph, ...tarjan };

import * as uf from "./set/unionfind";

export const set = { ...uf };
