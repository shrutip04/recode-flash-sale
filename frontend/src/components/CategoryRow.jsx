import CategoryCard from "./CategoryCard";

function CategoryRow(){

const categories = [

{
title:"Sneakers",
icon:"👟",
description:"Limited edition kicks"
},

{
title:"Electronics",
icon:"⚡",
description:"Cutting edge tech"
},

{
title:"Collectibles",
icon:"🎯",
description:"Rare finds"
},

{
title:"Apparel",
icon:"🧥",
description:"Designer streetwear"
}

]

return(

<div className="flex justify-center gap-6 py-12">

{categories.map((c,i)=>(

<CategoryCard
key={i}
title={c.title}
icon={c.icon}
description={c.description}
/>

))}

</div>

)

}

export default CategoryRow;