import Card from '../components/Card/Card'
import fetchProducts from '../hooks/fetchProducts'

const Home = () => {
  const dataItem = fetchProducts()
  console.log(dataItem)
  // Ahora hacemos el destructuring de los datos que nos devuelve el servicio
  return (
    <>
      <h1>Home</h1>
      <div className='container center'>
        <div className='row'>
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
        </div>
      </div>
    </>
  )
}

export default Home
