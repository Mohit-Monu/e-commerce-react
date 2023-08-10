function ProductReview(props){
    return(
        <div className="bg-danger mt-5" style={{height:"45vh"}} >
            <h1>{props.review} rating</h1>
        </div>
    )
}
export default ProductReview