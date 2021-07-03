import { useState } from "react";
import { SwatchModel } from "../../data/swatch";
import Swatch from "../swatch/Swatch";
import './Detail.css'

interface DetailProps {
  swatch?: SwatchModel;
}

export default function Detail(props: DetailProps) {
  const [selectedSwatch, selectSwatch] = useState(props.swatch);

  if (!props.swatch) {
    return (
      <div className="Detail-Missing">
        <div style={{fontSize: '6em'}}>404</div>
        <div>Swatch not found :(</div>
      </div>
    );
  }

  // Scale start to remain in bounds [0-100]
  const nearbyStart = props.swatch.value < 75 ? props.swatch.value : 100 - (props.swatch.value - 75);
  const swatchCopy = {...props.swatch};
  const values = Array(5).fill(0).map((_, i) => nearbyStart + i * 5);
  const swatches: SwatchModel[] = values.map(v => ({
    ...swatchCopy,
    value: v
  }));

  return (
    <div className="Detail">
      <div className="Detail-Swatch"><Swatch model={selectedSwatch || props.swatch}/></div>
      <div className="Nearby-Swatches">{swatches.map(s => <div><Swatch model={s} small={true} onClick={() => selectSwatch(s)}/></div>)}</div>
      <div className="Clear-Button">
        <button onClick={() => selectSwatch(props.swatch)}>Clear</button>
      </div>
    </div>
  );
}
