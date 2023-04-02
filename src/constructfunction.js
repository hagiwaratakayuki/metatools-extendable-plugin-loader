module.exports.clsConstructor = function(cls, options) {
    
    return new cls(options);

}

module.exports.functionConstructor = function(fnc, options) {
    return fnc(options);
}