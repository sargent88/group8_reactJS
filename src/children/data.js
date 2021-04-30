export default function Data (props) {
    // console.log(props)
    // return(<h1>Dog Data: </h1>)
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
