import { scryRenderedComponentsWithType } from 'react-dom/test-utils';
import './App.css';
import Customer from './components/Customer';


function App() {
  const [customers, setCustomers] = useState([]) 
  useEffect(() => {
   async = 
  }
  
  
  {
    firstName:"Maja",
    lastname:"Sol",
    email: "maja.sol@hotmail.com"
  },
  {
    firstName:"Gullan",
    lastname:"Sol",
    email: "gullan.sol@hotmail.com"
  }
  return (
    <div>

     <div className="container">
       <Customer item ={customer}/>
      </div>
      <div className="container">
       <Customer item ={customer}/>
      </div>
    </div>
  );
}

export default App;
