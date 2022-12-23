var $iA2ta$reactjsxruntime = require("react/jsx-runtime");
var $iA2ta$chakrauireact = require("@chakra-ui/react");
require("react");

function $parcel$exportWildcard(dest, source) {
  Object.keys(source).forEach(function(key) {
    if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) {
      return;
    }

    Object.defineProperty(dest, key, {
      enumerable: true,
      get: function get() {
        return source[key];
      }
    });
  });

  return dest;
}
function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $2fac3ae1cae5d43c$exports = {};

$parcel$export($2fac3ae1cae5d43c$exports, "Show", () => $2fac3ae1cae5d43c$export$f6a3d19be20f5819);



const $2fac3ae1cae5d43c$var$types = Object.keys((0, ($parcel$interopDefault($iA2ta$chakrauireact)))).join('"|"');
console.log($2fac3ae1cae5d43c$var$types);
const $2fac3ae1cae5d43c$export$f6a3d19be20f5819 = (props = {})=>{
    const display = $2fac3ae1cae5d43c$var$getBreakpointDisplayValues(props.above, props.below);
    const Component = props.showAs ? (0, ($parcel$interopDefault($iA2ta$chakrauireact)))[props.showAs] : (0, ($parcel$interopDefault($iA2ta$chakrauireact))).Box;
    console.log(props, Component?.name, Component, (0, ($parcel$interopDefault($iA2ta$chakrauireact))).Flex);
    return /*#__PURE__*/ (0, $iA2ta$reactjsxruntime.jsx)((0, ($parcel$interopDefault($iA2ta$chakrauireact))).Flex, {
        id: "poo",
        display: display,
        children: props.children
    }, props.key);
};
function $2fac3ae1cae5d43c$var$getBreakpointDisplayValues(above, below) {
    const breakpoints = {};
    if (above) {
        breakpoints.base = "none";
        breakpoints[above] = "initial";
    }
    if (below) breakpoints[below] = "none";
    return breakpoints || {};
}


$parcel$exportWildcard(module.exports, $2fac3ae1cae5d43c$exports);


//# sourceMappingURL=main.js.map
