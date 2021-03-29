import logo from './logo.svg';
import ProductCard from './components/ProductCard';
import './App.css';

const sampleProduct = {
  id: 0,
  productName: "basket",
  country: "Kenya",
  market: "Wallingford",
  price: 0,
  description: "This decorative basket is hand-crafted by village artisans.",
  isPurchased: "false",
  merchantId: 0
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          ::Welcome:: to Sauti Market.  

          Landing Page will map product cards to this page (like movielist).  
           use contextAPI to pull the product card RS is coding
           this page will connect to login page for both customer and merchant
                                  to create/edit/delete page for logged in merchants  
           contain header and footer navigation

         {nameofArr.map(e => {
           return 
           <div>  <ProductCard product={sampleProduct}/> </div>
         })}


        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
