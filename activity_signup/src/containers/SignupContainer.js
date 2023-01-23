
import Counter from "../components/Counter";

const signupContainer = () =>{


    const [archeryCount, setArcheryCount] = useState(0);
     
    const [zorbCount, setZorbCount] = useState(0);
    const [canoeCount, setCanoeCount] = useState(0);



return(
    <>
        <h2>Activities: </h2>

        <Counter title ={"Archery"} count={archeryCount} onButtonClick ={setArcheryCount}/>
        <Counter title ={"Zorb"}  count={zorbCount} onButtonClick={setZorbCount} />
        <Counter title = {"Canoeing"}  count={canoeCount} onButtonClick = {setCanoeCount} />

        <p> Total sign ups: {archeryCount + zorbCount + canoeCount}</p>
    </>
);

}
export default signupContainer;