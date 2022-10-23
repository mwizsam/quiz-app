const myShoes = [{
    image: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/ce8a6f3aa6294de988d7abce00c4e459_9366/Breaknet_Shoes_White_FX8707_01_standard.jpg',
    name: 'Adiddas',
    description: 'super content 1',
    price: '20,000RWF'
  },
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsbi_w8qQmZUgoVZgnYglToXOFs3b8Zfkxwg&usqp=CAU',
    name: 'Running Shoes',
    description: 'super content 1',
    price: '20,000RWF'
  },
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX0IV7fFoZkGyKQ85k7flfYeWWHUFAvEWyUA&usqp=CAU',
    name: 'Classic',
    description: 'super content 1',
    price: '50,000RWF'
  },
]

const myShirts = [{
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBTKDLAU-oIQSGC0ZrcLB619RWsJ-I-vJVUQ&usqp=CAU',
    name: 'Appolo shirt',
  description: 'super content 1',
  price: '14,000RWF'
},
{
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpcQnYh49jfIECLdADNbmHlxqgxtK0DI9fvQ&usqp=CAU',    name: 'Appolo shirt',
  description: 'super content 1',
  price: '14,000RWF'
},
]

myShoes.map((item) => {
    const name = item.name;
    const image = item.image;
    const price= item.price;
    // const desc = item.description;
    const shoe = `<li class="card"><img src="${image}" width="200px" height="150px"> <h5 class="text1">${name}</h5>  <p class="text">${price}</p></li>`
    document.querySelector('.shoes').innerHTML += shoe;
})

myShirts.map((item) => {
  const name = item.name;
  const image = item.image;
  const price= item.price;
  // const desc = item.description;
  const shirt = `<li class="card"><img src="${image}" width="200px" height="150px"> <h5 class="text1">${name}</h5>  <p class="text">${price}</p></li>`
  document.querySelector('.shirts').innerHTML += shirt;
})