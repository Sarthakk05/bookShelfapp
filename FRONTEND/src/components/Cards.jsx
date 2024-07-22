import React from 'react'

function Cards({item}) {
   
  return (
  <>
  <div className='mt-4 my-3 p-3'>
  <div className="card w-92 bg-base-200 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
  <figure>
    <img src={item.image}  alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
    {item.name}
        <div className="badge  dark:border-black bg-purple-500 text-white hover:bg-purple-700 dark:hover:border-black dark:text-black">{item.category}</div>
    </h2>
    <p>Hello have a look at these</p>
    <div className="card-actions justify-between">
      <div className="badge badge-outline ">${item.price}</div>
      <div className="cursor-pointer px-2 py-1 rounded-full border-[2px] hover:bg-purple-500 hover:text-white  dark:hover:border-black dark:hover:text-black duration-200">BUY NOW</div>
    </div>
  </div>
</div>
  </div>
  </>
  )
}

export default Cards
