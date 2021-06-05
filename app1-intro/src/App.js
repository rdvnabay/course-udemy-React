import CategoryList from "./CategoryList";
import Navi from "./Navi";
import ProductList from "./ProductList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Navi/>
      <CategoryList/>
      <ProductList/>
      </header>
    </div>
  );
}

export default App;
