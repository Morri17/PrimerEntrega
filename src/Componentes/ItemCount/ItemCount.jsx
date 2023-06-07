import { useState } from "react";

const ItemCount = () => {
  const [contador, setContador] = useState(1);

  const incrementar = () => {
    if (contador < 15) {
      setContador(contador + 1);
    }
  };
  const decrementar = () => {
    if (contador > 1) {
      setContador(contador - 1);
    }
  };

  return (
    <>
      <button onClick={incrementar}>+</button>
      <p>{contador}</p>
      <button onClick={decrementar}>-</button>
    </>
  );
};

export default ItemCount;
