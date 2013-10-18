!function(win, module, class_fnTest, class_initializing, l_function, l_prototype) {
l_function = 'function';
l_prototype = 'prototype';

class_fnTest = /0/.test(function() {
    0;
}) ? /\b_super\b/ : /.*/;

function Class(){}
module = win['module'];
(module ?  module['exports'] : win)['Class'] = Class;

function _is(vars, key) {
    return typeof vars == key;
}

Class['extend'] = function(props /* varless */, SuperClass, i, prop, _super, that, temp) {
    // var SuperClass = this,
    //     i,
    //     prop,
    //     _super,
    //     that,
    //     temp;

    SuperClass = this,

    Class = function() {
        that = this;

        temp = that['init'];

        if (!class_initializing && temp) {
            temp.apply(that, arguments);
        }
    };

    class_initializing = true;
    temp = Class[l_prototype] = new SuperClass;
    class_initializing = false;
    temp['constructor'] = Class;

    for (i in props) {
        if (props.hasOwnProperty(i)) {
            prop = props[i];
            _super = SuperClass[l_prototype][i];

            if (_is(prop, l_function) && _is(_super, l_function) && class_fnTest.test(prop)) {
                Class[l_prototype][i] = function() {
                    that = this;

                    temp = that['_super'];

                    that['_super'] = _super;
                    prop = prop.apply(that, arguments);
                    that['_super'] = temp;

                    return prop;
                };
            } else {
                Class[l_prototype][i] = prop;
            }
        }
    }

    Class['extend'] = SuperClass['extend'];
    return Class;
};
}(window);
