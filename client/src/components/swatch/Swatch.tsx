import { getHsl, HSLToHex, SwatchModel } from "../../data/swatch";
import './Swatch.css';

interface SwatchProps {
  model: SwatchModel;
  small?: boolean;
  onClick?: () => any;
}

export default function Swatch({ model, onClick, small }: SwatchProps) {
  const hsl = getHsl(model);
  const hex = HSLToHex(hsl.hue, hsl.saturation, hsl.lightness);
  const clickStyle = {cursor: `${onClick ? 'pointer' : 'auto'}`};
  const labelStyle = {fontSize: `${small ? '1.2em' : '2em'}`};
  const colorStyle = {
    backgroundColor: `hsl(${hsl.hue}, ${hsl.saturation}%, ${hsl.lightness}%)`
  }

  return (
    <div className="Swatch" style={clickStyle} onClick={onClick}>
      <div className="Swatch-Color" style={colorStyle}></div>
      <div className="Swatch-Label" style={labelStyle}><div>{ hex }</div></div>
    </div>
  );
}
