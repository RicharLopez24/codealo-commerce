import React, { useCallback, useEffect, useState } from 'react'
import { Productos } from '../Api/Api';
import ProductEle from '../Components/ProductEle';
import './Views.css';
import Cod_1 from '../Imagenes/codealo_2.jpeg'

function Home() {

  const [dato, setDato] = useState([]);

  const getProducts = useCallback(async () => {
    setDato(await Productos());

  }, [])
  //console.log('algo',dato[0].title)
  const [ale, setAle] = useState([])
  const num = []
  useEffect(() => {
    getProducts()
    //console.log(dato)


    for (let index = 0; index < 3; index++) {
      const numero = Math.floor(Math.random() * dato.length)
      console.log(numero)
      const produc = dato.filter((prod) => prod.id === numero)
      console.log(produc)
      num.push(...produc)
    }


    setAle(num)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dato.length, getProducts]);


  return (
    <div className='contendor'>
      <div className='codealo'>
        <img src={Cod_1}
        alt={'codealo'}
        className='imgStyle'>
        </img>
        <h2>
          COMMERCE
        </h2>
      </div>
      <div className='viewProduct'>
        
        {ale.map((item,index) => {
          console.log(item.id)
          return (
           <ProductEle cont= {item} key = {index}/>
          );
        })}
      </div>


    </div>
  )
}

export default Home
