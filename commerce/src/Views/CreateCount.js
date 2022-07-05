import React, { useCallback, useEffect } from 'react'
import { user } from '../Api/Api'

const urlbase = 'https://codealo-commerce-cms.onrender.com/auth/local/register'
function CreateCount() {

  const getUser = (async () => {


  }, [])
  useEffect(() => {
    const request = {
      method: 'POST',
      headers: { 'Content-Type': ' application/json' },
      body: JSON.stringify({ email: 'richar@gmadsfil.com', password: '123456789', username: 'ricardo' })
    }
    /**
     * //TODO: obtener datos desde un formulario y agregarlos para crear el usuario 
     * 
     */
    fetch(urlbase, request)
      .then(response => response.json())
      .then(result => console.log(result));
  }, [getUser]);

  return (
    <div className='contendor'>
      { 
      //TODO: crear el formulario y dar estilos
      }

    </div>
  )
}

export default CreateCount