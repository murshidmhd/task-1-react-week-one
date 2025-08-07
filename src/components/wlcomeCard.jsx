function WelcomeCard ( props){ 
    return(
        <div>
            <h1> Welcome, {props.name}</h1>
            <p> Age : {props.age}</p>
            <p> Location :{ props.loaction}</p>
        </div>
    )
}

export default WelcomeCard