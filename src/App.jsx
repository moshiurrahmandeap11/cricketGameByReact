import './App.css';
import Players from './players';


// const fetchUsers = fetch("https://jsonplaceholder.typicode.com/users").then(res => res.json())

// const fetchFriends = async() => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/users");
//   return res.json();
// }

// const fetchPosts = async() => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//   return res.json();
// }

function App() {
  // const friendPromise = fetchFriends();
  // const postPromise = fetchPosts();

  // const handleClick = () => {
  //   alert('I am clicked')
  // }

  // const handleClick5 = (num) => {
  //   const newNum = num + 5;
  //   alert(newNum)
  // }

  return (
    <>
      <h1>React Core Concept Part 2</h1>
      <Players></Players>
      {/* <Suspense fallback={<h3>Post are coming....</h3>}>
        <Post postPromise={postPromise}></Post>
      </Suspense> */}
      {/* <Suspense
        fallback={
          <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif"></img>
        }
      >
        <Friends friendPromise={friendPromise}></Friends>
      </Suspense> */}
      {/* <button onClick={handleClick}>Click Me</button> */}
      {/* <button onClick={() => handleClick5(10)}>Click Me1</button> */}
      {/* <Suspense fallback={<h3>Loading... </h3>}>
        <Users fetchUsers={fetchUsers}></Users>
      </Suspense> */}
      <Batsman></Batsman>
      {/* <Counter></Counter> */}
    </>
  );
}

export default App
