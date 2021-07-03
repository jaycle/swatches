import { useHistory } from 'react-router';
import './RandomButton.css';

interface RandomButtonProps {
  choices: string[];
}

export default function RandomButton(props: RandomButtonProps) {
  const history = useHistory();

  const clicked = () => {
    const max = props.choices.length;
    const idx = Math.floor(Math.random() * max)
    history.push(`/swatches/${props.choices[idx]}`)
  }

  return (
    <button onClick={clicked} className="RandomButton">Random Color</button>
  )
}
