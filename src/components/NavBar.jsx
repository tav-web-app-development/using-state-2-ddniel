import { useState } from "react";
import Modal from "./Modal";
import "./NavBar.css"

export default function NavBar({itemsInCart, user } = false) {
  const [modalToggle, setModalToggle] = useState(false)

  
  return (
    < div className="nav-bar">
      {user ? (
        <span>{`Welcome ${user.firstName} ${user.lastName} `}</span>
      ) : (
        <a href="#">Login </a>
      )}
      <a href="#home">Home </a>
      <a href="#home">Laptops </a>
      <a href="#contact">Contact </a>
      <a href="#about">About </a>

      <div className="cartInfoContainer">
        <button onClick={()=> !modalToggle? setModalToggle(true): setModalToggle(false)}>Checkout</button>
        <div>{itemsInCart} items in your cart</div>
      </div>
      
      {modalToggle && <Modal setModalToggle={setModalToggle} />}
    </div>
  );
}
