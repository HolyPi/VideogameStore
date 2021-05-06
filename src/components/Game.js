import data from './data'

import { useDispatch } from 'react-redux'
import { addToList } from './actions'


function Game({ id }) {
    const dispatcher = useDispatch()
    const { name, desc, price, img } = data[id]
   
    return (
     <div className="cell">
       <h1>{name}</h1>
       <p>{desc}</p>
       <small>{price}</small> 
       <img src={img}></img>
       <button
        onClick={() => dispatcher(addToList(id))}
      >Add to WishList</button>
     </div>
    )
   }
   
   export default Game