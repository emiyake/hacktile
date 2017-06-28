import React from 'react';
import ReactNative from 'react-native';
import { styles } from './title.style';


export function H1({...props}: Object) {
  return <ReactNative.Text style={[styles.h1]} {...props} />;
}

export function H2({...props}: Object) {
  return <ReactNative.Text style={[styles.h2]} {...props} />;
}

export function H3({...props}: Object) {
  return <ReactNative.Text style={[styles.h3]} {...props} />;
}

export function H4({...props}: Object) {
  return <ReactNative.Text style={[styles.h4]} {...props} />;
}

export function Body({...props}: Object) {
  return <ReactNative.Text style={[styles.body]} {...props} />;
}

export function Caption({...props}: Object) {
  return <ReactNative.Text style={[styles.caption]} {...props} />;
}

export function CaptionError({...props}: Object) {
  return <ReactNative.Text style={[styles.caption_error]} {...props} />;
}

export function Dt({...props}: Object) {
  return <ReactNative.Text style={[styles.dt]} {...props} />;
}

export function Dd({...props}: Object) {
  return <ReactNative.Text style={[styles.dd]} {...props} />;
}

export function Label({...props}: Object) {
  return <ReactNative.Text style={[styles.label]} {...props} />;
}

export function ProductTitle({...props}: Object) {
  return <ReactNative.Text style={[styles.product_title]} {...props} />;
}