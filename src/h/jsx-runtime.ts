import { h } from "../h";


export function jsx(type: any, props: any, key?: any) {
  const { children, ...rest } = props || {};
  return h(type, rest, ...(Array.isArray(children) ? children : children != null ? [children] : []));
}

export function jsxs(type: any, props: any, key?: any) {
  const { children, ...rest } = props || {};
  return h(type, rest, ...(Array.isArray(children) ? children : children != null ? [children] : []));
}

export const Fragment = (props: { children?: any }) =>
  Array.isArray(props.children) ? props.children : props.children ?? [];
