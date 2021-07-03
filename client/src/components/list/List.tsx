import { useEffect, useState } from "react";
import { getFilterFn, SwatchModel } from "../../data/swatch";
import Swatch from "../swatch/Swatch";

interface ListProps {
  filter?: string;
  swatches: SwatchModel[];
}

export default function List(props: ListProps) {
  // const [swatches, setSwatches] = useState<SwatchModel[]>(props.swatches);
  let swatches = props.swatches;

  if (props.filter) {
    const filterFn = getFilterFn(props.filter);
    swatches = swatches.filter(s => filterFn(s));
    console.log(swatches);
    // setSwatches(res);
  }

  return(
    <>
      <b>{ props.filter }</b>
      {swatches.map(s => <Swatch model={s}></Swatch>)}
    </>
  )
}
