import dogBreeds from './dog-breeds'

const Form = () => {
    let dogFormData = []
    const submitForm = (event) => {
        const formData = new FormData(event.target)
        dogFormData = [...formData]
        event.preventDefault();
        // for (let [key, value] of formData.entries()) {
        //     console.log(key, value);
        // }
        return dogFormData
    }

    return(
        <>
        <h3>Dog Form</h3>
        <form onSubmit={submitForm}>
            <label for='dogName'>Dogs Name: </label>
            <input type='text' id='dogName' name='dogName'/>
            <br></br>
            <label for='breed'>Breed: </label>
            <select id='breed' name='breed'>
                <option>-</option>
                {
                    dogBreeds.map(breeds => {
                        return (
                            <option value={breeds.value}>{breeds.breed}</option>
                        )
                    })
                }
            </select>
            <br></br>
            <label>Gender: </label>
            <input type='radio' value='M' id='male' name='gender'/>
            <label for='male'>Male</label>
            <input type='radio' value='F' id='female' name='gender'/>
            <label for='female'>Female</label>
            <br></br>
            <label for='dogLikes'>What does your dog like? </label>
            <textarea
                id='dogLikes'
                name='dogLikes'
                placeholder='List your dogs 3 favorite things'
                rows='4'
                cols='30'>
            </textarea>
            <br></br>
            <button type='submit'>Submit</button>
        </form>
        </>
    );
}

export default Form;