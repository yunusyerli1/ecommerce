import React, { Component } from 'react'
import Filter from '../components/Filter'
import Products from '../components/Products'
import Cart from '../components/Cart'

class HomeScreen extends Component {
    render() {
        return (
            <div>
                 <div className="content">
                    <div className="main">
                        <Filter />
                        <Products />
                    </div>
                    <div className="sidebar">
                        <Cart />
                    </div>
                </div>
            </div>
        )
    }
}
export default  HomeScreen;