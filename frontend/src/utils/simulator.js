export function simulateBuyers(productId, buyers, setTrafficCount) {

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
      .then(() => {
        setTrafficCount(prev => prev + 1);
      })
      .catch(() => {
        console.log("buyer failed");
      });

    }, Math.random() * 2000);

  }

}