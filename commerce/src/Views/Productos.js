import React, { useCallback, useEffect, useState } from 'react'
import { Productos } from '../Api/Api';
import ProductEle from '../Components/ProductEle';

function Product() {

  const [dato, setDato] = useState([]);
  const getProducts = useCallback(async () => {
    setDato(await Productos());

  }, [])
  //console.log('algo',dato[0].title)


  useEffect(() => {
    getProducts()

  }, [getProducts]);
  return (
    <div className='contendor'>
      <div className='contBtns'>
        <button className='botones'>
          all
        </button>
        <button className='botones'>
          Back
        </button>
        <button className='botones'>
          Front
        </button>
        <button className='botones'>
          SSG
        </button>
        <button className='botones'>
          Container
        </button>
        <button className='botones'>
          Database
        </button>
        <button className='botones'>
          Other
        </button>
      </div>


      <div className='viewProduct'>
        {dato.map((item, index) => {
          //console.log(item.id)
          return (
            <ProductEle cont={item} key={index} />
          );
        })}
      </div>
    </div>
  )
}

export default Product