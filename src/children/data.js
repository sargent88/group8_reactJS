import dogBreeds from "../dummy-data/dog-breeds"

export default function Data (props) {
    function formatBreed(dogBreed) {
        const dogBreedObj = dogBreeds.filter(breed =>breed.value === dogBreed)
        
        return dogBreedObj[0].breed
    }
    return(
        props.dogData.map(dogs => {
            return (
                <>
                <div>
                    <p>{props.firstName}'s dog name: {dogs.dogName}</p>
                    <p>{props.firstName}'s dogs breed: {formatBreed(dogs.breed)}</p>
                    <p>{props.firstName}'s dogs gender: {dogs.gender}</p>
                    <p>{props.firstName}'s dog likes: {dogs.dogLikes}</p>
                </div>
                <hr></hr>
                </>
            )
        })
    );
}
