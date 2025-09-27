
import { Suspense, useState } from 'react'
import './App.css'
import Nabvar from './components/Navbar/Nabvar'
import Players from './components/Players/players'
import Selected from './components/Selected/Selected'
import { toast, ToastContainer } from 'react-toastify';

const fetchPlayers = fetch('../public/players.json').then(res => res.json())

function App() {
  const [toggle, setToggle] = useState(true);
  const [money, setMoney] = useState(1000000);
  const [purchasedPlayers, setpurchasedPlayers] = useState([])

  const purchasePlayerDetails = (detail) => {

    if (purchasedPlayers.length === 6) { toast("6 Players have already been selected") }
    else {
      const newDetail = [...purchasedPlayers, detail];
      setpurchasedPlayers(newDetail)
    }

  }
  const removePlayers = (player) => {
    const filterPlayers = purchasedPlayers.filter(players => players.id !== player.id);
    // console.log(filterPlayers)
    setpurchasedPlayers(filterPlayers)
    const playerPrice = parseInt(player.price.split('$').join("").split(',').join(""));
    setMoney(money + playerPrice)
  }
  // console.log(purchasedPlayers)
  const deductMoney = (player) => {
    const playerPrice = parseInt(player.split('$').join("").split(',').join(""));
    money < playerPrice ? toast("Not Enough Money") : setMoney(money - playerPrice)
  }
  return (
    <>
      <Nabvar money={money}></Nabvar>
      <div className='max-w-[1200px] mx-auto flex justify-between mt-14 mb-8'>
        <h1 className='font-bold text-3xl'>{toggle ? "Available Players" : `Selected Players (${purchasedPlayers.length}/6)`}</h1>
        <div>
          <button onClick={() => setToggle(true)} className={`btn border-r-0 rounded-l-2xl rounded-r-none ${toggle ? 'bg-[#E7FE29]' : ''}`}>Available</button>
          <button onClick={() => setToggle(false)} className={`btn border-l-0 rounded-r-2xl rounded-l-none ${!toggle ? 'bg-[#E7FE29]' : ''}`}>Selected <span>({purchasedPlayers.length})</span></button>
        </div>
      </div>
      {
        toggle === true ?
          <Suspense fallback={<div className='flex justify-center items-center mt-14'><span className="loading loading-dots loading-xl "></span></div>}>
            <Players deductMoney={deductMoney} fetchPlayers={fetchPlayers} purchasePlayerDetails={purchasePlayerDetails}></Players>
          </Suspense> :
          <Selected purchasedPlayers={purchasedPlayers} removePlayers={removePlayers}></Selected>
      }
      <ToastContainer />
    </>
  )
}

export default App
