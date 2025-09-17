import { useRef, useState } from "react"

function Giftcards() {
  const [amount, setAmount] = useState(20);
  const [quantity, setQuantity] = useState(1);
  const [showInput, setShowInput] = useState(false);
  const [customAmount, setCustomAmount] = useState();
  const customAmountRef = useRef();

  function customAmountHandler(e) {
    setCustomAmount(e.target.value);
    setAmount(0);
  }

  function insertCustomAmount() {
    setShowInput(false);
    // setCustomAmount(document.getElementById("ID").value);
    setCustomAmount(customAmountRef.current.value);
    setAmount(0);
  }

  return (
    <div>
      <button 
        className={amount === 20 ? "amount-active" : undefined} 
        onClick={() => setAmount(20)}>
          20 €
      </button>

      <button 
        className={amount === 50 ? "amount-active" : undefined} 
        onClick={() => setAmount(50)}>
          50 €
      </button>

      <button 
        className={amount === 100 ? "amount-active" : undefined} 
        onClick={() => setAmount(100)}>
          100 €
      </button>

      {!showInput && amount > 0 &&
        <button onClick={() => setShowInput(true)}>
          Valin ise summa
        </button>}

      {showInput &&
        <>
          <input 
            ref={customAmountRef}
            defaultValue={customAmount} 
            onChange={(e) => customAmountHandler(e)} 
            onBlur={() => insertCustomAmount()}
            type="text" /> 
          <button onClick={() => insertCustomAmount()}>v</button>
        </>
      }

      {!showInput && customAmount && amount === 0 &&
      <button 
        className="amount-active"
        onClick={() => setShowInput(true)}
        >
          {customAmount} €
      </button>}


      <br /><br />

      <div>Kinkekaart {amount || customAmount} €</div>

      <br /><br />

      <button disabled={quantity === 1} onClick={() => setQuantity(prev => prev - 1)}>-</button>
      <span>{quantity}</span>
      <button onClick={() => setQuantity(prev => prev + 1)}>+</button>

      <div>Kinkekaartide kogusumma on: {(amount || customAmount) * quantity} €</div>
    </div>
  )
}

export default Giftcards