import { useState } from "react";
import CakeComponents from "../components/CakeComponents";


const  NewContainer= () => {

    // ingrediants


    const [victoriaIngrediants, setVictoriaIngrediants] = useState(["eggs,",
    " butter,",
    " sugar",
    " self-raising flour,",
    " baking powder,",
    " milk,"]);

    const [teaIngrediants, setTeaIngrediants] = useState(["eggs",
    " oil,",
    " dried fruit,",
    " sugar,",
    " self-raising flour,",
    " strong tea,"]);

    const [carrotCakeIngrediants, setCarrotCakeIngrediants] = useState(["carrots",
    " walnuts",
    " oil",
    " cream cheese",
    " flour,",
    
    ]);

    //price 
    const [victoriaPrice, setVictoriaPrice] = useState("£" + 5);

    const [teaPrice, setTeaPrice] = useState("£" + 2);

    const [carrotCakePrice, setCarrotCakePrice] = useState("£" + 8);

       //Rating 
       const [victoriaRating, setVictoriaRating] = useState(5);

       const [teaRating, setTeaRating] = useState(3);
   
       const [carrotCakeRating, setCarrotCakeRating] = useState(5);

    return(
        <>

            <div className="Cards">
            <div className="victoria">
            <h3>Victoria Spongecake</h3>
            <img className="vicCake" src="https://images.food52.com/Btf1eMV0NCd5A94NZ5_c7i4lmHw=/1200x675/8caf639e-c2d2-480e-8832-980a308133d3--2021-0525_victoria-sponge-cake_3x2_rocky-luten_015.jpg" width={250}></img>
            <CakeComponents title ={"Victoria Spongecake"} ingrediants={victoriaIngrediants} price= {victoriaPrice} rating ={victoriaRating}/>
            
            </div>
            <div className="teaLoaf">
            <h3>Tea Loaf</h3>
            <img className="TeaLof" src="https://food-images.files.bbci.co.uk/food/recipes/tea_loaf_75867_16x9.jpg" width={250}></img>
            <CakeComponents title ={"Tea Loaf"} ingrediants = {teaIngrediants} price= {teaPrice} rating ={teaRating}/>
            </div>

            <div className="carrotCake">
            <h3>Carrot Cake</h3>
            <img className="CarrtCake" src="https://charlotteslivelykitchen.com/wp-content/uploads/2019/11/carrot-cake-3.jpg" width={250}></img>
            <CakeComponents title = {"Carrot Cake"}  ingrediants ={carrotCakeIngrediants} price={carrotCakePrice} rating ={carrotCakeRating}/>
            </div>
            </div>
            <div className="Rating">
            Average Rating: {(carrotCakeRating+ teaRating + victoriaRating) / 3}
           
            </div>
            </>
    );
    

}

export default NewContainer;