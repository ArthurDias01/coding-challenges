// // given the following code

// const D = (C) => {
//   return ({ children }) => (
//     <div>
//       <span>Foo</span>
//       {children}
//     </div>
//   );
// };

// class MyClass extends React.Component {
//   render() {
//     const { children } = this.props;
//     return <span>{children}</span>;
//   }
// }

// const X = D(MyClass);

// // what is the output of the following code?

// const App = () => <X>hello</X>;

// ReactDOM.render(<App />, document.getElementById("root"));

// Answer: <div><span>Foo</span><span>hello</span></div>
// Explanation: The children prop of the X component is the span element with the text Bar. The children prop of the D component is the X component. The children prop of the div element is the span element with the text Foo. The children prop of the App component is the div element with the text FooBar.

// You've developed the component below:

// const CurrencyInput = () => {
//   const [value, setValue] = React.useState();
//   const handleChange = (event) => {
//     const numeric = +event.target.replace(/[^0-9]/g, "");
//     setValue(`$ ${(numeric / 100).toFixed(2)}`);
//   };
//   return <input type="text" value={value} onChange={handleChange} />;
// };

// after interacting with the input however, you see an error message in the console. Which of the following options is true for this components behavior and how we could fix the error?

// A. The component is not controlled because the value prop is not set. We could fix this by setting the value prop to the value state variable.

// q: You have the following Users React component which renders a list of users, where the UserSummary component shows some basic user info and a button which when clicked opens a modal with a form (UserFormModal) to edit that user with the fields pre-populated with the user data. Select the option which describes the component's behavior when you interact with the page by selecting multiple different users (closing the modal in between).

// const Users = ({ users }) => {
//   const [selected, setSelected] = React.useState(null);

//   return (
//     <>
//       <ul>
//         <UserSummary onSelect={(user) => setSelected(user)} />
//       </ul>
//       <UserFormModal
//         key="user-form-modal"
//         userData={selected}
//         onClose={() => setSelected(null)}
//         open={Boolean(selected)}
//       />
//     </>
//   );
// };

// a: The form will only auto populate its fields on the first render, and the fields will be blank when you open the modal for a second time
// b: The modal will always show the selected user's data since we're setting the
// c: There will be an error since we can only use the key prop when rendering a list
// d: The modal form will show stale data after you open it a second time
// e: we don't actually need the key  prop, since React will know to populate the form with the correct data

// q: Given the following code:

// const Login = () => {
//   const [user, setUser] = React.useState({ username: "", password: "" });
//   const usernameRef = React.useRef(null);
//   const passwordRef = React.useRef(null);

//   const onChangeText = (type, text) => {
//     setUser((oldState) => ({ ...oldState, [type]: text }));
//   };

//   const submitToApi = () => {
//     axios.post("url", { user });
//   };

//   const focusPasswordInput = () => {
//     passwordRef.current.focus();
//   }

// };
// answer: the app will crash because the focus method is not available on the ref object, should be called like passwordRef.current.focus()

// q:

// Which of the following HTTP status code would be acceptable for a form validation error response with the following JSON content:

// {
//   "errors": {
//     "username": ["is too short (minimum is 6 characters)"],
//     "password": ["is too short (minimum is 8 characters)"]
//   }
// }

// a: 422
// b: 403
// c: 500
// d: 200
