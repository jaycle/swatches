import { getHsl, SwatchModel } from "../../data/swatch";
import './Swatch.css';

interface SwatchProps {
  model: SwatchModel;
}

export default function Swatch({ model }: SwatchProps) {
  const hsl = getHsl(model);
  const style = {
    backgroundColor: `hsl(${hsl.hue}, ${hsl.saturation}, ${hsl.lightness})`
  }

  return (
    <div className="Swatch" style={style}>
      <div>{ model.id }</div>
      <div>{ model.hue }</div>
      <div>{ model.saturation }</div>
      <div>{ model.value }</div>
    </div>
  );
}
