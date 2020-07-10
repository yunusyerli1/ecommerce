import React from 'react';
import Products from './components/Products'
import Filter from './components/Filter';
import Cart from './components/Cart';


class App extends React.Component {
  
  render(){

    return (
    <div className="grid-container">
      <header className="App-header">
        <a href="/">Shopping Cart</a>
      </header>
      <main>
          <div className="content">
            <div className="main">
              <Filter />
              <Products />
            </div>
            <div className="sidebar">
              <Cart />
            </div>
          </div>
      </main>
      <footer>All right reserved.</footer>
    </div>
  );
}
}
export default App;
