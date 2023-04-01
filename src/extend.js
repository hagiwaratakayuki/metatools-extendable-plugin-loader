const defautConstructor = require('./constructors').clsConstructor;
/**
 * 
 * @param {[{plugin:any, options:any}]} pluginsets 
 * @param {[{plugin:any, options:any}]} extendsets 
 * @param {Function} constructor 
 * @returns 
 */
module.exports = function (pluginsets, extendsets, constructor=defautConstructor) {
    const plugins = [];
    const packMap = new Map()
    
    pluginsets.forEach(({plugin, options={}}) =>packMap.set(plugin, options))
    
    for (const extendset of extendsets) {
        packMap.set(extendset.plugin, extendset.options);
        
    }
    for (const [plugin, options] of packMap.entries()) {
       
        plugins.push(constructor(plugin, options))
    }
    return plugins;
    

}