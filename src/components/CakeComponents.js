const CakeComponents = ({cakeName , ingrediants, price, rating}) => {


    return(
        <>
        <h3>{cakeName}</h3>
        {/* new Counter(Archery, 0) */}
        <p> ingrediants needed : {ingrediants}</p>
        <p> price: {price}</p>
        <p> rating: {rating}</p>
        </>
    )
    
    }

    export default CakeComponents;
    

