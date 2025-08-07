function UserCard(props){
    return (
        <div style={{ border: "1px solid #ddd", padding: "16px", margin: "10px", borderRadius: "8px" }}>
            <h2>{props.name}</h2>
            <h4>{props.role}</h4>
            <p>{props.bio}</p>
        </div>
    )
}

export default UserCard

