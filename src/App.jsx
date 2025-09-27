
import { Suspense, useState } from 'react'
import './App.css'
import Nabvar from './components/Navbar/Nabvar'
import Players from './components/Players/players'
import Selected from './components/Selected/Selected'

const fetchPlayers = fetch('../public/players.json').then(res => res.json())

function App() {
  const [toggle, setToggle] = useState(true);
  const [money, setMoney] = useState(1000000);
  const [purchasedPlayers, setpurchasedPlayers] = useState([])

  const purchasePlayerDetails = (detail) => {
    const newDetail = [...purchasedPlayers, detail];
    setpurchasedPlayers(newDetail)

  }
  // console.log(purchasedPlayers)
  const deductMoney = (player) => {
    const playerPrice = parseInt(player.split('$').join("").split(',').join(""));
    money < playerPrice ? alert("Not Enough Money") : setMoney(money - playerPrice)
  }
  return (
    <>
      <Nabvar money={money}></Nabvar>
      <div className='max-w-[1200px] mx-auto flex justify-between mt-14 mb-8'>
        <h1 className='font-bold text-3xl'>Available Players</h1>
        <div>
          <button onClick={() => setToggle(true)} className={`btn border-r-0 rounded-l-2xl rounded-r-none ${toggle ? 'bg-[#E7FE29]' : ''}`}>Available</button>
          <button onClick={() => setToggle(false)} className={`btn border-l-0 rounded-r-2xl rounded-l-none ${!toggle ? 'bg-[#E7FE29]' : ''}`}>Selected <span>(0)</span></button>
        </div>
      </div>
      {
        toggle === true ?
          <Suspense fallback={<div className='flex justify-center items-center mt-14'><span className="loading loading-dots loading-xl "></span></div>}>
            <Players deductMoney={deductMoney} fetchPlayers={fetchPlayers} purchasePlayerDetails={purchasePlayerDetails}></Players>
          </Suspense> :
          <Selected purchasedPlayers={purchasedPlayers}></Selected>
      }
    </>
  )
}

export default App
