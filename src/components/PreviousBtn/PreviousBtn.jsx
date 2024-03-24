import './PreviousBtn.css'
import {Link } from 'react-router-dom';
function PreviousBtn(props) {

  return (
    <Link to={props.Link}>
    <button disabled={props.par} onClick={props.func} className={!props.par ? 'PreviousBtn' : 'dis'}>
    Назад
    </button>
    </Link>
    
  );
}
export default PreviousBtn;
