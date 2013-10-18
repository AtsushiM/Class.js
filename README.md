# Class.js

### クラスの作成＆継承
```javascript
var Class1 = Class.extend({
        init: function(config) {
            // write init code.
        },
        method: function() {
            // write method.
        }
    }),
    Class2 = Class1.extend({
        // extend Class1 method & props.
        method: function() {
            // override method.

            // call super method.
            this._super.apply(this, arguments);
        }
    });
```
