import React from "react";


const Block = (props) => {
    return (
        <>
            <div className="col">
                <img src="assets/images/pdctimg-1.jpg" alt="pdctimg-1" />
                <div className="description">
                    <span>{props.name}</span> <br />
                    <strong>$99.00</strong> <br />
                    <div className="add"><a href="#">add to cart</a></div>
                </div>
            </div>
        </>
    );
}

export default Block;
