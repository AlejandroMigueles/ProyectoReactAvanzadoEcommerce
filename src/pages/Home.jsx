import Card from '../components/Card/Card'
import fetchProducts from '../hooks/fetchProducts'
import '../pages/pagesStyles/Home.scss'

const Home = () => {
  const dataItem = fetchProducts()
  console.log(dataItem)
  // Ahora hacemos el destructuring de los datos que nos devuelve el servicio
  return (
    <>
      <h1>Home</h1>
      <div className='container center'>
        <div className='img-center'>
          <img src="https://i.pinimg.com/564x/90/3b/58/903b5830c743ff79e1665fe79aeb5fe6.jpg" alt="" />
        </div>
        {/* <div className='row'>
          {dataItem.products.map((item) => (
            <Card
              key={item._id}
              id={item._id}
              title={item.product_name}
              price={item.price}
              image={item.image}
            />
          ))}
          <Card />
        </div> */}
      </div>
    </>
  )
}

export default Home
