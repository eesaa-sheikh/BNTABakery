import './App.css';
//import Cake from './Cake.js';
import NewContainer from './CakeContainer/NewContainer';



function App() {

  //const  victoriaCake = new Cake ["Victoria Sponge", ["eggs","butter","sugar","self-raising flour","baking powder","milk"],5,5 ];


//javascript goes here
// let[counter, setCounter] = useState(0);

// const incrementCounter = () => {
//  // counter *= 5;
//   setCounter (counter + 1);
// }




  return (
    
  
    <div className='blue'>
      <div className='Header'>
      <h1>Welcome to the BNTA Bakery</h1>
      <h2> The best bakery in the Town</h2>
      </div>
<div className='meme'>
      <NewContainer/>
      </div>
    </div>
   
  );
}

export default App;
