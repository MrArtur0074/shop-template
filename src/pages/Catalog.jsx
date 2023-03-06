import Header from "../components/header/Header"
import Footer from "../components/footer/Footer"
import {useState, useEffect} from "react"
import CardComponent from "../components/CardComponent"

const Catalog = (props) => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json => {
                setProducts(json);
            })
    }, [])

    const showAllProducts = products.map((product, index) => {
        console.log(product)
        return <CardComponent key={index} cardInfo={product} />
    })
    
    return (
        <div>
            <Header />
            <div className="container center-flex">
                <div className="catalog-list">
                    {showAllProducts}
                </div>
            </div>
            <Footer />
        </div>
    )
};

export default Catalog;