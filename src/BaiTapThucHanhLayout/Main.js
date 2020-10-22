import React, { Component } from 'react'
import Carousel from './Carousel'
import Footer from './Footer'
import Header from './Header'
import ProductList from './ProductList'

export default class Main extends Component {
    render() {
        return (
            <div>
                <Header />
                <Carousel />
                <ProductList />
                <Footer />
            </div>
        )
    }
}
