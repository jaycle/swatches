import { SwatchModel } from "../../data/swatch";
import Swatch from "../swatch/Swatch";

interface DetailProps {
  swatch?: SwatchModel;
}

export default function Detail(props: DetailProps) {
  return (
    <div>
      { props.swatch
        ? <Swatch model={props.swatch}></Swatch>
        : <div>404 - Swatch not found :(</div>
      }
    </div>);
}
