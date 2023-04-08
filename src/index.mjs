import module from "module";
const require = module.createRequire(import.meta.url)
/**
 * @typedef {import("./extender.js")} extender 
 * @typedef {import("./constructfunction.js")} constructFunctions
 * 
*/
/**
 * @type {{extender:extender, constructFunctions:constructFunctions}}
 */
const namespace = require('./index.cjs');
export const { extender, constructFunctions} = namespace 
export default namespace


