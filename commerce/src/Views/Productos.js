import React, { useCallback, useEffect, useState } from 'react'
import { Categorias, Productos } from '../Api/Api';
import ProductEle from '../Components/ProductEle';

function Product() {

  const [dato, setDato] = useState([]);

  const getProducts = useCallback(async () => {
    setDato(await Productos());
    setCatAux('Todos')
  }, [])

  const [cate,setCate] = useState([])
  const getCategorias = useCallback( async ()=>{
    setCate(await Categorias());
  },[])

  const [catAux,setCatAux] = useState('');
  const filtro = (cat) => {
    setCatAux(cat)
    const updatedList = cate.filter((x) => x.name === cat);
     console.log(updatedList)
    setDato(updatedList[0].products);
     console.log(updatedList[0].products , 'soy la lista')
  };


  useEffect(() => {
    getProducts()
    getCategorias()

  }, [getCategorias, getProducts]);


  return (
    <div className='contendor'>
      <div className='contBtns'>
        <button className='botones' 
        onClick={() => getProducts() }>
          all
        </button>
        <button className='botones'
        onClick={() => filtro("Back")}>
          Back
        </button>
        <button className='botones'
         onClick={() => filtro("Front")}>
          Front
        </button>
        <button className='botones'
         onClick={() => filtro("SSG")}>
          SSG
        </button>
        <button className='botones'
         onClick={() => filtro("Container")}>
          Container
        </button>
        <button className='botones'
         onClick={() => filtro("Database")}>
          Database
        </button>
        <button className='botones'
         onClick={() => filtro("Other")}>
          Other
        </button>
      </div>


      <div className='viewProduct'>
        <h3>
    {catAux}
        </h3>
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