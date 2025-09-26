import { h } from "./h";

export function Button(props: { label: string; onClick?: () => void }) {
  return <button onClick={props.onClick}>{props.label}</button>;
}
