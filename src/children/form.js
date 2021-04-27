const Form = (props) => {
    const submitForm = event => {
        console.log(event)
    }
    return(
        <>
        <h3>Dog Form</h3>
        <form onSubmit={submitForm}>
            <label>Dogs Name: </label>
            <input/>
            <br></br>
            <label>Breed: </label>
            <select>
                <option>{}</option>
            </select>
            <br></br>
            <label>Gender: </label>
            <input type='radio' value='M'/>
            <input type='radio' value='F'/>
            <br></br>
            <label>What does your dog like? </label>
            <textarea placeholder='List 3 interesting things about your dog.'></textarea>
            <br></br>
            <button type='submit'>Submit</button>
        </form>
        </>
    );
}

export default Form;