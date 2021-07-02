import { Swatch } from "../../data/swatch";

interface DetailProps {
  swatch: Swatch;
}

export default function Detail(props: DetailProps) {
  return (
    <div>
      <span>{props.swatch.id}</span>
      <span>{props.swatch.hue}</span>
      <span>{props.swatch.saturation}</span>
      <span>{props.swatch.value}</span>
    </div>);
}
