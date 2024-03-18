import { useState } from "react";
import "./Modal.css"

function Modal({setModalToggle}){
    
    const [ischecked, setIsChecked] = useState(true)

    const checkHandler = ()=> {
        setIsChecked(!ischecked)
    }

    const [billingData, setBillingData] = useState({
        firstName: '',
        lastName: '',
        address: '',
        city: '',
        state: '',
        postalCode: ''
    })
    
    return(
        <div className="modal-container">
            <div className="modal-card">
                <h2>CHECKOUT</h2>
                <h4>Enter the Shipping information</h4>
                <form className="form" action="post">
                    <input type="text" placeholder="First Name" />
                    <input type="text" placeholder="Last Name" />
                    <input type="text" placeholder="Addres" />
                    <input type="text" placeholder="City" />
                    <input type="text" placeholder="State" />
                    <input type="text" placeholder="Postal Code" />
                    <input type="checkbox" id="checkbox" checked={ischecked} onChange={checkHandler} />
                    <label htmlFor="checkbox" id="checkboxLabel">Use shipping address as billing address</label>
                    {!ischecked && 
                        <>
                        <h4>Enter the billing information</h4>
                        <input type="text" placeholder="First Name" value={billingData.firstName} onChange={(e) => setBillingData({...billingData, firstName: e.target.value})} />
                        <input type="text" placeholder="Last Name" value={billingData.lastName} onChange={(e) => setBillingData({...billingData, lastName: e.target.value})}/>
                        <input type="text" placeholder="Addres" value={billingData.address} onChange={(e) => setBillingData({...billingData, address: e.target.value})} />
                        <input type="text" placeholder="City" value={billingData.city} onChange={(e) => setBillingData({...billingData, city: e.target.value})} />
                        <input type="text" placeholder="State" value={billingData.state} onChange={(e) => setBillingData({...billingData, state: e.target.value})} />
                        <input type="text" placeholder="Postal Code" value={billingData.postalCode} onChange={(e) => setBillingData({...billingData, postalCode: e.target.value})} />
                        </>}
                    <input type="submit" className="submitBtn" onClick={(e)=> e.target.value.trim()}/>
                </form>

                <button className="cancelBtn" onClick={() => setModalToggle(false)}>Cancel</button>
            </div>
            
        </div>
        
    )
}

export default Modal;

