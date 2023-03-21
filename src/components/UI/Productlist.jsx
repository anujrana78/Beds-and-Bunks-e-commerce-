import React from 'react'
import Productcard from './Productcard'

const Productlist = ({data}) => {
  return (
    <div className='flex px-[10%] py-[2%] flex-wrap'>
       {
        data.map((item, index) => {
            return <Productcard image={item.imgUrl} title={item.productName} category={item.category} price={item.price} key={item.id}/>
        })
       }
    </div>
  )
}

export default Productlist