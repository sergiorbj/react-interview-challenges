import { useEffect, useState } from "react";
import "./ProductList.css";

interface Product {
  id: number;
  name: string;
  type: "completed" | "ongoing" | "pending";
  value: number;
}

const types = ["all", "completed", "ongoing", "pending"] as const;
type FilterType = (typeof types)[number];

// Fake API — simulates fetching products from a server
function fetchProducts(): Promise<Product[]> {
  return Promise.resolve([
    { id: 1, name: "Laptop", type: "completed", value: 1200 },
    { id: 2, name: "Headphones", type: "ongoing", value: 150 },
    { id: 3, name: "Monitor", type: "completed", value: 300 },
    { id: 4, name: "Keyboard", type: "pending", value: 80 },
    { id: 5, name: "Mouse", type: "ongoing", value: 45 },
  ]);
}

function ProductList() {
  const [products, setProducts] = useState<Product[]>([]);
  const [filter, setFilter] = useState<FilterType>("all");

  // Fetch the products and apply the dropdown filter to them
  useEffect(() => {
    const filterProducts = (data: Product[]) =>
      filter === "all" ? data : data.filter((p) => p.type === filter);

    fetchProducts().then((data) => {
      setProducts(filterProducts(data));
    });
  }, [filter]);

  // 🐛 CHALLENGE 1: This sort button is not working. Why?
  const handleSort = () => {
    const sorted = [...products].sort((a, b) => a.value - b.value);
    setProducts(sorted);
  };

  // ✏️ CHALLENGE 2: Calculate the total value of the VISIBLE (filtered)
  // products. If the dropdown shows only 2 products, sum only those 2.
  const sumValues = (items: Product[]) =>
    items.reduce((total, product) => total + product.value, 0);

  const totalValue = sumValues(products);

  return (
    <div className="productlist-wrapper">
      <div className="productlist-container">
        <h2>Product List</h2>

        <div className="productlist-controls">
          <button type="button" onClick={handleSort}>
            Sort by value
          </button>

          <label className="productlist-filters">
            Filter by type:
            <select value={filter} onChange={(e) => setFilter(e.target.value as FilterType)}>
              {types.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </label>
        </div>

        <ul>
          {products.map((product) => (
            <li key={product.id}>
              <span className="product-name">{product.name}</span>
              <span className={`product-type ${product.type}`}>{product.type}</span>
              <span className="product-value">${product.value}</span>
            </li>
          ))}
        </ul>

        {products.length === 0 && <p className="no-results">No products found.</p>}

        <div className="productlist-total">
          Total value: <strong>${totalValue}</strong>
        </div>
      </div>
    </div>
  );
}

export { ProductList };
