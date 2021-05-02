export default function Data (props) {
    return(
        props.dogData.map(dogs => {
            return (
                <>
                <div>
                    <p>{props.firstName}'s dog name: {dogs.dogName}</p>
                    <p>{props.firstName}'s dogs breed: {dogs.breed}</p>
                    <p>{props.firstName}'s dogs gender: {dogs.gender}</p>
                    <p>{props.firstName}'s dog likes: {dogs.dogLikes}</p>
                </div>
                <hr></hr>
                </>
            )
        })
    );
}
