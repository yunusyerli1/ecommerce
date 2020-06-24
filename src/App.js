import React from 'react';
import data from './data.json';
import Products from './components/Products'
import Filter from './components/Filter';


class App extends React.Component {
  state={
    products: data.products,
    size:"",
    sort:""
  };
  sortProducts = (e) => {
    const sort = e.target.value;
    this.setState({
      sort: sort,
      products: this.state.products
          .slice()
          .sort((a,b) => 
        sort === "lowest" ? ((a.price > b.price)?1:-1):
        sort === "highest" ? ((a.price < b.price)?1:-1):
        a._id>b._id ?1:-1
      )
    })
    console.log(e.target.value);
  }
  filterProducts = (e) => {
    console.log(e.target.value);
    if(e.target.value === ""){
      this.setState({size: e.target.value, products:data.products})
    }else{
      this.setState({
        size: e.target.value,
        products:data.products.filter( product => product.availableSizes.indexOf(e.target.value)>=0)
      })
    }

    
    
    
    
  }
  
  render(){
    return (
    <div className="grid-container">
      <header className="App-header">
        <a href="/">Shopping Cart</a>
      </header>
      <main>
          <div className="content">
            <div className="main">
              <Filter 
                  count={this.state.products.length} 
                  size={this.state.size}
                  sort={this.state.sort}
                  filterProducts={this.filterProducts}
                  sortProducts={this.sortProducts}
              />
              <Products products={this.state.products} />
            </div>
            <div className="sidebar">
              Sidebar
            </div>
          </div>
      </main>
      <footer>All right reserved.</footer>
    </div>
  );
}
}
export default App;
