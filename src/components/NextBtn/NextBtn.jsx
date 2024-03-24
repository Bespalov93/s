import './NextBtn.css'
import {Link } from 'react-router-dom';
function NextBtn(props) {


  return (
    <Link to={props.Link}>
    <button disabled={props.par} onClick={props.func} className={!props.par ? 'NextBtn' : 'dis'}>
    Продолжить
    </button>
    </Link>
    
  );
}
export default NextBtn;
