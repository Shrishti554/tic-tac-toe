import Icon from '../Icon/Icon';
import './Card.css';
function Card({player}){
    let  icon = <Icon />;
 if (player=='X'){
    icon = <Icon name="cross" />
 }else if (player=='0'){
    icon=<Icon name ="circle" />;
 }


  return (
 
<div className='card'>
  {icon}
</div>
  )
}
export default Card;