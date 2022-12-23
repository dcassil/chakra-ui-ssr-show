import {jsx as $4MPRY$jsx} from "react/jsx-runtime";
import $4MPRY$chakrauireact from "@chakra-ui/react";
import "react";

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $1b59ad3e9d952ec3$exports = {};

$parcel$export($1b59ad3e9d952ec3$exports, "Show", () => $1b59ad3e9d952ec3$export$f6a3d19be20f5819);



const $1b59ad3e9d952ec3$var$types = Object.keys((0, $4MPRY$chakrauireact)).join('"|"');
console.log($1b59ad3e9d952ec3$var$types);
const $1b59ad3e9d952ec3$export$f6a3d19be20f5819 = (props = {})=>{
    const display = $1b59ad3e9d952ec3$var$getBreakpointDisplayValues(props.above, props.below);
    const Component = props.showAs ? (0, $4MPRY$chakrauireact)[props.showAs] : (0, $4MPRY$chakrauireact).Box;
    console.log(props, Component?.name, Component, (0, $4MPRY$chakrauireact).Flex);
    return /*#__PURE__*/ (0, $4MPRY$jsx)((0, $4MPRY$chakrauireact).Flex, {
        id: "poo",
        display: display,
        children: props.children
    }, props.key);
};
function $1b59ad3e9d952ec3$var$getBreakpointDisplayValues(above, below) {
    const breakpoints = {};
    if (above) {
        breakpoints.base = "none";
        breakpoints[above] = "initial";
    }
    if (below) breakpoints[below] = "none";
    return breakpoints || {};
}




export {$1b59ad3e9d952ec3$export$f6a3d19be20f5819 as Show};
//# sourceMappingURL=module.js.map
