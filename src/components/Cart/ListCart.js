import { useContext } from "react";
import CartContext from "../../store/Cart-context";

function ListCart(){
  const CartCtx = useContext(CartContext);
    return(
        CartCtx.map((item,index)=>(
            <div className="container-fluid bg-secondary">
                <div className="row">
                    <div className="col">
                        <img className="img" src={item.imageUrl}></img>
                    </div>
                </div>
            </div>
        ))
    )
}
export default ListCart