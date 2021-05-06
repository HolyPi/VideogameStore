import { clearList } from './actions'
import { useDispatch } from 'react-redux'

function ClearCartButton() {
    const dispatcher = useDispatch()
    
    return <button
    className="ClearWishlistButton"
    onClick={() => dispatcher(clearList())}>
    Clear Cart

    </button>
}

export default ClearCartButton