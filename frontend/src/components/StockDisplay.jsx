import { useEffect, useState } from "react";
import socket from "../sockets/socketClient";

function StockDisplay(){

const [stock,setStock] = useState(0)

useEffect(()=>{

socket.on("stockUpdate",(data)=>{
setStock(data.newStock)
})

return ()=> socket.off("stockUpdate")

},[])

return(

<div>

Stock left: {stock}

</div>

)

}

export default StockDisplay;