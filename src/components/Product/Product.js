import { useParams } from "react-router-dom"

function Product(){
    const params=useParams().productid
    return(
        <h1>Hiiii{params}</h1>
    )
}
export default Product