import data from './data'
import { useDispatch } from 'react-redux'
import { removeFromList, addOne, removeOne } from './actions'

function WishListItem({ id, index, count }) {
    const {name, price} = data[id]
    const dispatcher = useDispatch()

    return (
        <li>
            <strong className="item-name">{name}</strong>
            
            <button
            className="remove"
            onClick={() => dispatcher(removeFromList(0))}>Remove from Wish-list</button>
        </li>
    )
}

export default WishListItem