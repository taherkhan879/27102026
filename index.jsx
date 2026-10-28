import {useState} from 'react'
import './index.css'
const headImage = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
const tailImage = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'
const CoinToss = () => {
  const [results, setResults] = useState(
    'https://assets.ccbp.in/frontend/react-js/heads-img.png',
  )
  const [heads, setHeads] = useState(0)
  const [tails, setTails] = useState(0)
  const [total, setTotal] = useState(0)
  const coinToss = () => {
    const tossResult = Math.floor(Math.random() * 2)

    if (tossResult === 0) {
      setResults(headImage)
      setHeads(prevhead => prevhead + 1)
    } else {
      setResults(tailImage)
      setTails(prevTails => prevTails + 1)
    }
    setTotal(prevTotal => prevTotal + 1)
  }
  const coinImage = results === 'Heads' ? headImage : tailImage
  return (
    <div className="yellowCard">
      <div className="main-card">
        <h1>Coin Toss Game</h1>
        <p>Heads (or) Tails</p>
        <div className="coin">
          {results !== ' ' && (
            <img src={results} alt="toss result" className="coinImage" />
          )}
          <button type="button" onClick={coinToss}>
            {' '}
            Toss Coin{' '}
          </button>
        </div>
        <div className="count">
          <p>Total:{total}</p>
          <p>Heads:{heads}</p>
          <p>Tails:{tails}</p>
        </div>
      </div>
    </div>
  )
}
export default CoinToss
