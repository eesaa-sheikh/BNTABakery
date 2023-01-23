const CakeComponents = ({cakeName , ingrediants, price, rating}) => {


    return(
        <div className="try">
        <h3>{cakeName}</h3>
        {/* new Counter(Archery, 0) */}
        <p> ingrediants needed : {ingrediants}</p>
        <p> price: {price}</p>
        <p> rating: {rating}</p>
        </div>
    )
    
    }

    export default CakeComponents;
    

