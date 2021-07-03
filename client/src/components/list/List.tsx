import { useState } from "react";
import { useHistory } from "react-router";
import { getFilterFn, SwatchModel } from "../../data/swatch";
import Swatch from "../swatch/Swatch";
import './List.css'

const PAGE_SIZE = 9;

interface ListProps {
  filter?: string;
  swatches: SwatchModel[];
}

export default function List(props: ListProps) {
  const history = useHistory();
  const [page, setPage] = useState(0);
  let pageCount = 0;

  const swatchClicked = (swatch: SwatchModel) => {
    history.push(`/swatches/${swatch.id}`)
  }

  let swatches = props.swatches;

  if (props.filter) {
    const filterFn = getFilterFn(props.filter);
    swatches = swatches.filter(s => filterFn(s));
  }

  if (swatches.length > PAGE_SIZE) {
    pageCount = Math.ceil(swatches.length / PAGE_SIZE)
    const beginIdx = page * PAGE_SIZE;
    const endIdx = beginIdx + PAGE_SIZE - 1;

    swatches = swatches.filter((_, i) => i >= beginIdx && i <= endIdx);
  }

  return(
    <>
      <div className="List-Output">
        {swatches.map(s => <div className="List-Item"><Swatch model={s} onClick={() => swatchClicked(s)}/></div>)}
      </div>
      <div className="List-Pager">
        {Array(pageCount).fill(0).map((_, i) => i).map(i =>
          <div className={i === page ? 'Page-Link-Active' : 'Page-Link'} onClick={() => setPage(i)}>{i + 1}</div>)}
      </div>
    </>
  )
}
