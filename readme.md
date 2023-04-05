# @Metatools/Extendable-Plugin-Loader

plugin system extendable from preset

## Install

```bash
npm install @meatatools/parallworker
```

## Usage

```javascript
    
    class example {
        constructor (options) {
            this.options = options;

        }
    }
    const pluginsets = [
         {
            plugin:example,
            options:'test'
        }

    ]
        
    const extendsets = [];
    const plugins = loader.extend(pluginsets, extendsets);

```

if want  more, see docs directry