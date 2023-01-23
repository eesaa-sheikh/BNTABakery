const Counter = ({title , count , onButtonClick}) => {

    const handleAddParticipant = () =>{
        onButtonClick(count +1)
    }


    const handleRemoveParticipant = () =>{

    if (count > 0){
        onButtonClick(count - 1)
    }
    }


return(
    <>
    <h3>{title}</h3>
    {/* new Counter(Archery, 0) */}
    <p> Current Total: {count}</p>
    <button onClick={handleAddParticipant}>Add Participant</button>
    <button onClick ={handleRemoveParticipant}> Remove Participant</button>
    </>
)

}

export default Counter;