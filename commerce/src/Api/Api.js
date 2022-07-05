const urlbase = 'https://codealo-commerce-cms.onrender.com'

export const Categorias = async () => {
    try {
        const response = await fetch(`${urlbase}/categories`);
        const data = await response.json();
        //console.log('data', data)
       // setDato(data)
        return data;

    } catch (err) {
        console.log('error', err);
    }
};

export const Productos = async () => {
    try {
        const response = await fetch(`${urlbase}/products`);
        const data = await response.json();
        //console.log('data', data)
       // setDato(data)
        return data;

    } catch (err) {
        console.log('error', err);
    }
};
export const fetchImageURL = (url) => {
    return `${urlbase}${url}`;
  };

  