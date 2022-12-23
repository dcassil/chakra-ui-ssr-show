import React from 'react';
import  Chakra from '@chakra-ui/react';
import { ChakraComponent } from '@chakra-ui/react';
import {component} from './types';

const types = Object.keys(Chakra).join('"|"');
type breakpointTypes = 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
type propsType = {
  above?: breakpointTypes;
  below?: breakpointTypes;
  showAs?: component;
  children?: any;
  key?: string;
};

console.log(types)

/**
 *
 * @param props {above?: string, below?: string, key?: string, children: component [component] }
 * @returns Component
 * @description Conditionaly wraps children using css to show or hide ( supports SSR ).
 * @example <Show above="xs">hello world</Show> will render when the screen size is greater than or equal to the xs breakpoint.
 * @example <Show below="sm">hello world</Show> will redner when the screen size is equal to or below the sm breakpoint.
 * @example <Show above="xs">hello world</Show> below="sm" will render when the screen size is between xs and sm.
 */
export const Show = (props: propsType = {}) => {
  type DivComponent = ChakraComponent<'div', {}>;
  const display = getBreakpointDisplayValues(props.above, props.below);
  const Component = props.showAs ? Chakra[props.showAs] as DivComponent : Chakra.Box;
  

  console.log(props, Component?.name, Component, Chakra.Flex)
  return (
    <Chakra.Flex id="poo" display={display} key={props.key}>
      {props.children}
    </Chakra.Flex>
  ) as DivComponent;
}

function getBreakpointDisplayValues(above: breakpointTypes, below: breakpointTypes) {
  const breakpoints: Chakra.ResponsiveValue<any> = {};

  if (above) {
    breakpoints.base = 'none';
    breakpoints[above] = 'initial';
  }
  if (below) {
    breakpoints[below] = 'none';
  }

  return breakpoints || {};
}
