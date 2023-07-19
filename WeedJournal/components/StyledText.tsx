import React from 'react';
import { Text, TextProps } from './Themed';

export function MonoText(props: TextProps) {
  return <Text {...props} style={[props.style, { fontFamily: 'SpaceMono' }]} />;
}

export function SpaceGrotesk(props: TextProps) {
  return <Text {...props} style={[props.style, { fontFamily: 'SpaceGrotesk' }]} />;
}

export function SpaceGroteskBold(props: TextProps) {
  return <Text {...props} style={[props.style, { fontFamily: 'SpaceGrotesk_Bold' }]} />;
}

export function Spliffs(props: TextProps) {
  return <Text {...props} style={[props.style, { fontFamily: 'Spliffs' }]} />;
}

export function PsychoFun(props: TextProps) {
  return <Text {...props} style={[props.style, { fontFamily: 'PsychoFun' }]} />;
}


