# Tuesday Notes

## React Context

Typically in a React application, data can only flow in one direction via the use of props: from parent component to child component. Additionally, we are not supposed to modify the value of props that have been passed to child components.

This introduces an issue: what if we need to use data from one component in another component that isn't a direct child of that first component?

Enter React `Context`, it gives us a way to pass data through the component tree without having to manually thread props. Context gives developers a convenient way to share and update "global" data across a React application.

### Parts of React Context

There are 3 main parts of Context in React.

* We create the Context using the `createContext()` function imported from "react".
* We provide that context to a portion or all of our component tree by wrapping our components in a provider component. The provider function will take in "props" as an argument and pass in an object contains the data we want to provide to the "value" attribute. See the example below:

```Javascript
// /src/context/SomeContext.js
import {createContext, useState} from "react";

export const SomeContext = createContext();

export default function SomeContextProvider(props) {
    const [data, setData] = useState("");

    return (
        <SomeContext.Provider
      value={{
        data,
        setData
      }}
    >
      {props.children}
    </SomeContext.Provider>
    )
}


// /src/index.js -------------------------------------
import SomeContextProvider from "./context/SomeContext"
// more imports not shown
const Root = () => {
  return (
    <SomeContextProvider>
        <App />
    </SomeContextProvider>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root'),
);
```

* Finally we have the "consumer" of the context. Inside of the component that is consuming the data, we can access the variables that were passed into the "value" attribute by using the `useContext()` hook available from React. Using the same variable names as in the example code above that would look like:

```Javascript
// /src/components/SomeComponent.js
import {useContext} from "react";
import {SomeContext} from "../context/SomeContext.js";

export default function SomeComponent () {
    const {data, setData} = useContext(SomeContext);

    return (
        // some more code here
    )
}
```
