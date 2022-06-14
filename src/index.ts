import * as gph from "./graph/graph";
import * as rndGph from "./graph/random-uniform";
import * as tarjan from "./graph/sccs-tarjan";
import * as tsort from "./graph/tsort-tarjan";

export const graph = { ...gph, ...tarjan, ...tsort, ...rndGph };

import * as range from "./list/range";

export const list = { ...range };

import * as rnd from "./random/random";
import * as bs from "./random/builtin";
import * as sha1s from "./random/sha1";

export const random = { ...rnd, ...bs, ...sha1s };

import * as uf from "./set/unionfind";
import * as su from "./set/utils";

export const set = { ...su, ...uf };

import * as uk from "./util/key";

export const util = { ...uk };
