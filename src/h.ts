export type Props = Record<string, any>;

export function h(
  type: string | ((props: any, ...children: any[]) => any),
  props: Props | null,
  ...children: any[]
): any {
  if (typeof type === "function") {
    // Custom component
    return type({ ...(props || {}), children });
  }

  const el = document.createElement(type);

  if (props) {
    for (const [k, v] of Object.entries(props)) {
      if (k === "style" && v && typeof v === "object") {
        // Apply style object
        Object.assign((el as HTMLElement).style, v);
      } else if (k === "className") {
        // Map React-style "className" to HTML "class"
        el.setAttribute("class", String(v));
      } else if (k.startsWith("on") && typeof v === "function") {
        // Event listeners (e.g. onClick)
        el.addEventListener(k.slice(2).toLowerCase(), v);
      } else if (v != null) {
        el.setAttribute(k, String(v));
      }
    }
  }

  for (const child of children.flat()) {
    if (child instanceof Node) {
      el.appendChild(child);
    } else {
      el.appendChild(document.createTextNode(String(child)));
    }
  }

  return el;
}
