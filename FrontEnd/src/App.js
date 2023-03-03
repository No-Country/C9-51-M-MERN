
import ProductsProvider from "./context/ProductsProvider";
import Rutas from "./routes/Rutas";


function App() {

  return (

    <ProductsProvider>
      <Rutas/>
    </ProductsProvider>

  );
}

export default App;



