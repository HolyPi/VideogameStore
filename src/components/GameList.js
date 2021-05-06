import data from './data'
import Game from './Game'


function GameList() {
    return (
      <div className="GameList">
        {data.map((_, i) => <Game id={i} />)}
      </div>
    )
  }

export default GameList