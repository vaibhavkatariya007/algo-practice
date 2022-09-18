// const obj = {
//     el: function (selector) {
//         const element = document.querySelector(selector);
//         this.element = element;
//         return this;
//     },
//     height: (ht) => {
//         obj.element.style.height = `${ht}px`;
//         return obj;
//     },
//     width: (wt) => {
//         obj.element.style.width = `${wt}px`;
//         return obj;
//     },
//     background: function (color) {
//         this.element.style.background = color;
//         return this;
//     }
// };

// // Function chaining
// obj.el("#test").height(200).width(300).background("red");

// // test without chaining

// const selector = obj.el("#test2");

// selector.height(300);
// selector.background('#000');

// Good Pattern
(function (window) {
    if (typeof window !== 'object') return;
    const self = {};
    window.$ = function (selector) {
        self.el = document.querySelector(selector);
        return self;
    }
    self.height = function (ht) {
        self.el.style.height = `${ht}px`;
        return self;
    }
    self.width = function (wt) {
        self.el.style.width = `${wt}px`;
        return self;
    }
    self.background = function (color) {
        self.el.style.background = color;
        return self;
    }
})(window);

window.$("#test").height(200).width(300).background("red")

// (function (window) {
//     if (typeof window !== 'object') return;
//     window.$ = function (selector) {
//         $.prototype.el = document.querySelector(selector);
//         return $.prototype;
//     }
//     $.prototype.height = function (ht) {
//         this.el.style.height = `${ht}px`;
//         return this;
//     }
//     $.prototype.width = function (wt) {
//         this.el.style.width = `${wt}px`;
//         return this;
//     }
//     $.prototype.background = function (color) {
//         this.el.style.background = color;
//         return this;
//     }
// })(window);


// (function (window) {
//     if (typeof window !== 'object') return;
//     window.$ = function (selector) {
//         if (!new.target) throw "Can not call the $ function without new keyword";
//         this.el = document.querySelector(selector);
//         return this;
//     }
//     $.prototype = {
//         height(ht) {
//             this.el.style.height = `${ht}px`;
//             return this;
//         },
//         width(wt) {
//             this.el.style.width = `${wt}px`;
//             return this;
//         },
//         background(color) {
//             this.el.style.background = color;
//             return this;
//         }
//     }
// })(window);

// const selector = new $("#test");
// selector.height(300).width(500).background("black")

// Lodash lib
const lodash = (function () {
    return {
        uniq(arr) {
            return [...new Set(arr)];
        },
        sum(a, b) {
            return a + b;
        },
        sub(a, b) {
            return a - b;
        }
    }
})();

const _ = lodash;

console.log("Unique Values:", _.uniq([1, 2, 2, 3, 4, 6, 2, 1, 7, 8, 9, 8, 7, 6, 2, 1]));
console.log("Sum Of a & b:", _.sum(2, 5));
