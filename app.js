const _ = require("lodash");

const Arr = [1, 2, [3, [4, [5]]]];

const NewArr = _.flattenDeep(Arr);

console.log(NewArr);
