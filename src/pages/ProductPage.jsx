import Header from "../components/header/Header"
import Footer from "../components/footer/Footer"
import { useParams } from "react-router-dom";
import {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'

const ProductPage = (props) => {
    const { id } = useParams();
    const [product, setProduct] = useState([])

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res=>res.json())
            .then(json => {
                setProduct(json)
            })
    }, [])

    console.log(product)

    return (
        <div>
            <Header />
            <div className="product">
                <div className="back"><Link to={'/catalog'}>Вернуться назад</Link></div>
                <div className="product-info">
                    <div className="product-image">
                        <img src={product?.image} alt="" />
                    </div>
                    <div className="product-text">
                        <div className="product-title">
                            {product?.title}
                        </div>
                        <div className="product-description">
                            {product?.description}
                        </div>
                        <div className="product-buttons">
                            <div className="product-price">
                                Цена: {product?.price} $
                            </div>
                            <div className="product-buy">
                                <button className="product-buy-button">Купить</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
};

export default ProductPage;