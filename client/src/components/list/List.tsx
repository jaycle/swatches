import { Swatch } from "../../data/swatch";

interface ListProps {
  filter?: string;
  swatches: Swatch[];
}

export default function List(props: ListProps) {
  return (
    <>
      <span>{props.filter}</span>
      {
      props.swatches.map(s => (
        <div>
          <span>{s.id}</span>
          <span>{s.hue}</span>
          <span>{s.saturation}</span>
          <span>{s.value}</span>
        </div>)
      )}
    </>
  );
}
