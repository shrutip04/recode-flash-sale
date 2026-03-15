export function simulateBuyers(productId, buyers = 100) {

  const API = "https://recode-flash-sale.onrender.com";

  for (let i = 0; i < buyers; i++) {

    setTimeout(() => {

      fetch(`${API}/purchase`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          productId: productId
        })
      })
      .then(res => res.json())
      .then(data => {
        console.log("Buyer", i, data);
      })
      .catch(err => {
        console.error("Buyer failed", err);
      });

    }, Math.random() * 2000);

  }

}