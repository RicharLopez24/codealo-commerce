import React from 'react'
import { fetchImageURL } from '../Api/Api';

function ProductEle({ cont }) {

    /*useEffect(() => {
       
    console.log(cont.image.url)
        
      }, []);*/

      const imagen = fetchImageURL(cont.image.url)
    return (
        <div className='targeta'>
            <div className='products' >
                <div className='imgProduct'>
                    
                    <img src={imagen}
                        alt=''
                        className='logoProduct' />
                </div>

                <div className='databox'>
                    <div className='data'>
                        {cont.title}
                    </div>
                    <div className='data'>
                        ${cont.price}
                    </div>
                   
                    
                </div>
                <div className='contBtn'>
                    <button className='btnStyle'>
                        add to cart
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ProductEle