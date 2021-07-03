import { SwatchModel } from "../../data/swatch";
import Swatch from "../swatch/Swatch";
import './Detail.css'

interface DetailProps {
  swatch?: SwatchModel;
}

export default function Detail(props: DetailProps) {
  return (
    <div className="Detail">
      { props.swatch
        ? <div className="Detail-Swatch"><Swatch model={props.swatch}/></div>
        : <div>404 - Swatch not found :(</div>
      }
    </div>);
}
