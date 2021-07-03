import { getHsl, HSLToHex, SwatchModel } from "../../data/swatch";
import './Swatch.css';

interface SwatchProps {
  model: SwatchModel;
  onClick?: () => any;
}

export default function Swatch({ model, onClick }: SwatchProps) {
  const hsl = getHsl(model);
  const hex = HSLToHex(hsl.hue, hsl.saturation, hsl.lightness);
  const clickStyle = {cursor: `${onClick ? 'pointer' : 'auto'}`};
  const colorStyle = {
    backgroundColor: `hsl(${hsl.hue}, ${hsl.saturation}%, ${hsl.lightness}%)`
  }

  return (
    <div className="Swatch" style={clickStyle} onClick={onClick}>
      <div className="Swatch-Color" style={colorStyle}></div>
      <div className="Swatch-Label"><div>{ hex }</div></div>
    </div>
  );
}
