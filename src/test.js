const loader = require('./index');
const assert = require('node:assert')

describe('constract test', function () {
    
    it('should constract class', function () {
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
        assert.equal(plugins[0].options , 'test');
    });
    it('should constract function', function () {
        let _options = null;
        function mock(options) {
            _options = options

        }
        const pluginsets = [
            {
                plugin: mock,
                options: 'test'
            }

        ]

        const extendsets = [];
        const plugins = loader.extend(pluginsets, extendsets, loader.construtors.functionConstructor);
        assert.equal(_options, 'test');
    });
});
describe('extend test', function () {
    it('should constract class', function () {
        class example {
            constructor(options) {
                this.options = options;

            }
        }
        const pluginsets = [
            {
                plugin: example,
                options: 'test'
            }

        ];
        const extendsets = [
            {
                plugin: example,
                options: 'test_extend'
            }

        ]

       
        const plugins = loader.extend(pluginsets, extendsets);
        assert.equal(plugins[0].options, 'test_extend');
    });
})