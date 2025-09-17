
function Payment() {
  
  function pay() {
    const url = "https://igw-demo.every-pay.com/api/v4/payments/oneoff";
    const payload = {
      "account_name": "EUR3D1",
      "nonce": "16dasjk" + new Date() + Math.random() * 999999,
      "timestamp": new Date(),
      "amount": 120.90,
      "order_reference": "abc" + Math.random() * 999999,
      "customer_url": "https://err.ee",
      "api_username": "e36eb40f5ec87fa2"
    }
    const headers = {
      "Authorization": "Basic ZTM2ZWI0MGY1ZWM4N2ZhMjo3YjkxYTNiOWUxYjc0NTI0YzJlOWZjMjgyZjhhYzhjZA==",
      "Content-Type": "application/json"
    }
    fetch(url, {
      method: "POST", 
      body: JSON.stringify(payload),
      headers: headers
    }).then(res => res.json())
    .then(json => window.location.href = json.payment_link);
  }

  return (
    <button onClick={() => pay()}>Maksa</button>
  )
}

export default Payment