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

      <p className="contador">
        <button className="botones" onClick={decrementar}>-</button>
          
        <button className="botones"  onClick={incrementar}>+</button>
      </p>
    </>
  );
};

export default ItemCount;
