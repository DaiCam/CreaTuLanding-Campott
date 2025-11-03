import { useState, useEffect } from "react"
import "../css/ItemCount.css"

const ItemCount = ({ stock }) => {
  const [count, setCount] = useState(1)
  const [compra, setCompra] = useState(false)

  const sumar = () => {
    if (count < stock) {
      setCount(count + 1)
    }
  }

  const restar = () => {
    if (count > 0) {
      setCount(count - 1)
    }
  }
  const ejecutarCompra = () => {
    setCompra(!compra)
  }
  console.log("ItemCount")

  useEffect(() => {
    if (compra !== false) {
      console.log(
        "se ejecuta cuando monta el componente y siempre que compra cambie",
        compra
      )
    }
  }, [compra])

  return (
    <>
      <div>
        <button
          className="btn btn-count" //"btn btn-danger"
          onClick={restar}
          disabled={count === 0}
        >
          -
        </button>
        <span className="btn btn-number">{count}</span>
        <button className="btn btn-count" onClick={sumar}>
          +
        </button>
      </div>
      <button className="btn btn-comprar" onClick={ejecutarCompra}>
        Comprar
      </button>
    </>
  )
}

export default ItemCount
