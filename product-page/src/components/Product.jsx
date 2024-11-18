import "./Product.css";
import plus from "./icon-plus.svg"
import minus from "./icon-minus.svg"

export default function Product(){
    return(
        <div className="product">
            <div className="product-image">
                <div className="product-image-1">
                    <img src="/images/image-product-1.jpg"></img>
                </div>
                <div className="product-thumbnail-image">
                    <img src="/images/image-product-1-thumbnail.jpg"></img>
                    <img src="/images/image-product-2-thumbnail.jpg"></img>
                    <img src="/images/image-product-3-thumbnail.jpg"></img>
                    <img src="/images/image-product-4-thumbnail.jpg"></img>
                </div>
            </div>
            <div className="product-desc">
                <div className="prod-brand">
                    <h5>Sneaker Company</h5>
                </div>
                <div className="prod-heading">
                    <h1>Fall Limited Edition Sneakers</h1>
                </div>
                <div className="prod-content">
                    <h3>These low-profile sneakers are your perfect casual wear companion. Featuring a 
                    durable rubber outer sole, they’ll withstand everything the weather can offer.</h3>
                </div>
                <div className="offer-price">
                        <h2>$ 125.00</h2>
                    <div className="offer">
                        50%
                    </div>
                </div>
                <h4>$250.00</h4>
                <div className="cart">
                    <div className="add-cart">
                        <img src={minus}></img>
                        <h5>0</h5>
                        <img src={plus}></img>
                    </div>
                    <button className="cart-btn">Add to cart</button>
                </div>
            </div>
        </div>
    )
}