export default function Friend ({friend}) {
    // console.log(friend);
    // console.log(friend.company);
    const { catchPhrase } = friend.company;
    const { name, email, phone, website, username} = friend;

    const friendStyle = {
      border: "4px solid green",
      borderRadius: "20px",
      margin: "10px",
    };
    return (
      <div style={friendStyle}>
        <h4>Name: {name} </h4>
        <h4>Email: {email} </h4>
        <h4>Phone: {phone} </h4>
        <h4>website: {website} </h4>
        <h4>username: {username} </h4>
        <h4>catchPhrase: {catchPhrase} </h4>
      </div>
    );
}