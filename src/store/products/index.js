

const INIT_STATE = [
    {
    name: 'Banana',
    url:
        'https://d26lpennugtm8s.cloudfront.net/stores/034/476/products/banana-prata1-697a68c7da6322edf115804203705497-480-0.png'
},
{
    name: 'Maçã',
    url:
        'https://superprix.vteximg.com.br/arquivos/ids/175207-292-292/Maca-Argentina--1-unidade-aprox.-200g-.png?v=636294203590200000'
},
{
    name: 'Limão',
    url:
        'https://superprix.vteximg.com.br/arquivos/ids/175178-292-292/Limao-Taiti--1-unidade-aprox.-100g-.png?v=636294177409870000'
}]

export default function reducer(state = INIT_STATE,action){
    if(action.type === 'addProduct')
        return [...state, action.product];
    return state;
}

export const addProduct = (product) =>{
    return {
        type: 'addProduct',
        product
    }
}