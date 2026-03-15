export function simulateBuyers(setProducts){

setInterval(()=>{

setProducts(prev =>

prev.map(p=>{

if(p.stock > 0 && Math.random() > 0.7){

return {
...p,
stock:p.stock-1
}

}

return p

})

)

},2000)

}