function CategoryCard({title, icon, description}){

return(

<div className="card p-6 text-center w-[260px]">

<div className="text-3xl mb-3">
{icon}
</div>

<h3 className="font-semibold mb-2">
{title}
</h3>

<p className="text-gray-400 text-sm">
{description}
</p>

</div>

)

}

export default CategoryCard