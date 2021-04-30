import { useState } from "react"
import dogBreeds from "../dummy-data/dog-breeds"

export default function Form (props) {
    const [formValues, setFormValues] = useState({
        dogName: '',
        breed: '',
        gender: '',
        dogLikes: ''
    })

    function handleInputChange(e) {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value
        })
    }

    function submitForm(e) {
        e.preventDefault()
        props.onChildClick(formValues)
        resetForm()
    }

    function resetForm() {
        document.querySelector('#dogName').value = ''
        document.querySelector('#breed').value = ''
        document.querySelectorAll('[name="gender"]')[0].checked = false
        document.querySelectorAll('[name="gender"]')[1].checked = false
        document.querySelector('#dogLikes').value = ''
        setFormValues({formValues})
    }

    return(
        <>
        <h3>Dog Form</h3>
        <form name="dogBreedForm">
            <label for="dogName">Dogs Name: </label>
            <input
                type="text"
                id="dogName"
                name="dogName"
                onChange={handleInputChange}
                value={formValues.dogName}
            />
            <br></br>
            <label for="breed">Breed: </label>
            <select id="breed" name="breed" onChange={handleInputChange}>
                <option value="">-</option>
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
            <input
                type="radio"
                value="M"
                id="male"
                name="gender"
                onChange={handleInputChange}
            />
            <label for="male">Male</label>
            <input
                type="radio"
                value="F"
                id="female"
                name="gender"
                onChange={handleInputChange}
            />
            <label for="female">Female</label>
            <br></br>
            <label for="dogLikes">What does your dog like?: </label>
            <textarea
                id="dogLikes"
                name="dogLikes"
                placeholder="List your dogs 3 favorite things"
                rows="4"
                cols="30"
                onChange={handleInputChange}
            >
                {formValues.dogLikes}
            </textarea>
            <br></br>
            <button type="submit" onClick={submitForm}>Submit</button>
        </form>
        </>
    );
}