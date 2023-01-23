import { calculateNewValue } from "@testing-library/user-event/dist/utils";

const Cake = function(cakeName, ingredients ,price, rating ){
    //This part is a glorified constructor
        this.cakeName= cakeName;
        this.ingredients= ingredients;
        this.price= price;
        this.rating=rating;

    };

   // export default Cake;
    module.exports= Cake;