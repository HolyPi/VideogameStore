import data from './data'

import { useDispatch } from 'react-redux'
import { addToList } from './actions'


function Game({ id }) {
    const dispatcher = useDispatch()
    const { name, desc, price, img } = data[id]
   
    return (
     <div className="cell">
       <h1>{name}</h1>
       <img className="icon" src={img}></img>
       <p>{desc}</p>
       {/* <small>{price}</small>  */}
       
       <button className="add"
        onClick={() => dispatcher(addToList(id))}
      >Add to WishList</button>
     </div>
    )
   }
   
   export default Game