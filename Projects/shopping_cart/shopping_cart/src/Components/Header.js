import React from 'react'

function Header(props) {

    return (
        <header class="row block center ">
            <div> 
                <a href="#/">
                    <h1>Shopping Cart</h1>
                </a>

            </div>
            <a href="#/cart">Cart</a><a href="#signin">Sign In</a>
        </header>
        
        
    );
}


export default Header