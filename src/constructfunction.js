/**
 * 
 * @param {any} cls 
 * @param {any} options 
 * @returns {any} 
 */
module.exports.clsConstructor = function(cls, options) {
    
    return new cls(options);

}
/**
 * 
 * @param {(options:any)=>an } fnc
 * @param {any} options 
 * @returns {any} 
 */
module.exports.functionConstructor = function(fnc, options) {
    return fnc(options);
}