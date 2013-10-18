# Class.js

### クラスの作成＆継承
```javascript
var Class1 = Class.extend({
        init: function(config) {
            // write init code.
        },
        method1: function() {
            // write method.
        },
        on: function() {
            // override method.

            // call super method.
            this._super.apply(this, arguments);
        },
    }),
    Class2 = Class1.extend({
        // extend Class1 method & props.
    });
```
