export default function Data (props) {
    return(
        props.dogData.map(dogs => {
            return (
                <>
                <div>
                    <p>{dogs.dogName}</p>
                    <p>{dogs.breed}</p>
                    <p>{dogs.gender}</p>
                    <p>{dogs.dogLikes}</p>
                </div>
                <hr></hr>
                </>
            )
        })
    );
}
