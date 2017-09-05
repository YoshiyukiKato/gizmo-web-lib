!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var n=t();for(var r in n)("object"==typeof exports?exports:e)[r]=n[r]}}(this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/",t(t.s=8)}([function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(){r(this,e),this.callback=function(e){}}return i(e,[{key:"set",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(this.value=Object.assign(this.value,e),!t&&this.callback){var n={};n[this.id]=this.value,this.callback(n)}}},{key:"onChange",value:function(e){this.callback=e}},{key:"init",value:function(){this.value&&this.set(this.value)}}]),e}();t.default=o},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(){r(this,e),this.id="",this.filters=[],this.state={}}return i(e,[{key:"useFilter",value:function(e){this.filters.push(e)}},{key:"_render",value:function(e){try{var t=this.id;this.filters.reduce(function(n,r){return n&&r.validate(e,t)},!0)&&this.render(e)}catch(e){}return Promise.resolve(e)}},{key:"render",value:function(e){throw new Error("render method is not defined")}}]),e}();t.default=o},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();Object.defineProperty(t,"__esModule",{value:!0});var o=n(3),u=n(5),a=function(){function e(){var t=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"dev";r(this,e),this.isInitialized=!1,this.user=new o.default,this.view=new u.default,this.user.onChange(function(e){return t.view.render(e)}),this.mode=n,"dev"===this.mode&&(window.__import_view_component__=this.__import_view_component__.bind(this),window.__import_user_attr__=this.__import_user_attr__.bind(this),window.__import_user_attrs_value__=this.__import_user_attrs_value__.bind(this))}return i(e,[{key:"__import_user_attrs_value__",value:function(e){this.user.setAttrs(e)}},{key:"__import_user_attr__",value:function(e,t,n){var r="dev-"+e;this.user.import(r,t,n)}},{key:"__import_view_component__",value:function(e,t){var n="dev-"+e;this.view.import(n,t)}}]),e}();t.default=a},function(e,t,n){"use strict";function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();Object.defineProperty(t,"__esModule",{value:!0});var a=n(0),s=function(){function e(){o(this,e),this.attrs={},this.callbacks=[]}return u(e,[{key:"use",value:function(e){e.onChange(this.setAttrs.bind(this)),e.init()}},{key:"import",value:function(e,t,n){var u=function(n){function u(){o(this,u);var n=r(this,(u.__proto__||Object.getPrototypeOf(u)).apply(this,arguments));return n.id=e,n.value=t,n}return i(u,n),u}(a.default),s=new u;n&&(s.init=n.bind(s)),this.use(s)}},{key:"setAttrs",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];this.attrs=Object.assign(this.attrs,e),n||this.callbacks.forEach(function(e){return e(t.attrs)})}},{key:"onChange",value:function(e){this.callbacks.push(e)}}]),e}();t.default=s},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=function e(){r(this,e)};t.default=i},function(e,t,n){"use strict";function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();Object.defineProperty(t,"__esModule",{value:!0});var a=n(1),s=function(){function e(){o(this,e),this.components=[],this.filters=[],this.userAttrs={},this.state={renderCount:0}}return u(e,[{key:"import",value:function(e,t){var n=function(t){function n(){o(this,n);var t=r(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments));return t.id=e,t}return i(n,t),n}(a.default),u=new n;u.render=t.bind(this),this.use(u)}},{key:"use",value:function(e){this.components.push(e),this.filters.forEach(function(t){t.componentId&&e.id!==t.componentId||e.useFilter(t)}),e._render(this.userAttrs)}},{key:"useFilter",value:function(e){if(this.filters.push(e),e.componentId){var t=this.components.find(function(t){return t.id===e.componentId});t&&t.useFilter(e)}else this.components.forEach(function(t){t.useFilter(e)})}},{key:"render",value:function(e){var t=this;this.userAttrs=e;var n=this.components.map(function(t){return t._render(e)});return Promise.all(n).then(function(){t.state.renderCount+=1})}}]),e}();t.default=s},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0);t.UserAttr=r.default;var i=n(1);t.ViewComponent=i.default;var o=n(4);t.ViewFilter=o.default;var u=n(2);t.App=u.default},,function(e,t,n){e.exports=n(6)}])});