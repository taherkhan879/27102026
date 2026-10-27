import {useState} from 'react'
import './index.css'
const CoinToss = () => {
  const [results, setResults] = useState('')
  const [heads, setHeads] = useState(0)
  const [tails, setTails] = useState(0)
  const [total, setTotal] = useState(0)
  const coinToss = () => {
    const tossResult = Math.floor(Math.random() * 2)

    if (tossResult === 0) {
      setResults('Heads')
      setHeads(prevhead => prevhead + 1)
    } else {
      setResults('Tails')
      setTails(prevTails => prevTails + 1)
    }
    setTotal(prevTotal => prevTotal + 1)
  }
  return (
    <div className="yellowCard">
      <div className="main-card">
        <h1>Coin Toss Game</h1>
        <p>Heads (or) Tails</p>
        <div className="coin">
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
