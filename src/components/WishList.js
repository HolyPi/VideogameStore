import { useSelector } from 'react-redux'
import data from './data'
import ClearCartButton from './ClearCartButton'
import WishListItem from './WishListItem'

function WishList() {
  const shoppingCart = useSelector(state => state.shoppingCart)

  return (
    <div className="Wishlist">
      <h1>Your List</h1>
        <ul>
          {shoppingCart.map((item, i) => <WishListItem id={item.id} index={i} count={item.count}/>)}
        </ul>
        <ClearCartButton/>
      </div>
      
  )
}

export default WishList