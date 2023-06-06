# Monday Notes

## Controlled Components

These are form inputs that are linked to slices of state

* We use useState() to initialize a slice of state.\
ex: `const [name, setName] = useState();`
* We connect that state variable to the form input by adding a *value* attribute to the form input and setting it to the state variable we created.\
ex: `<input value={name}>`
* Finally, we update our state as the user inputs data, typically through the *onChange* event listener. We can access the value of the input through *event.target.value*\
ex: `<input onChange={e => setName(e.target.value)}`

## Form Validations

We can create front end form validations using a combination of React's *useState* and *useEffect* hooks.

* We can create a slice of state to track whether there are any validation errors. \
`ex: const [validationErrors, setValidationErrors] = useState({})`
* We can update our validation errors anytime the user updates the information they have entered on the form using *useEffect*. Make sure to add the fields we are "watching" for validation errors into the second argument of *useEffect*.

```Javascript
ex: useEffect(() => {
    const errors = {};
    if (!name.length) errors.name = "Please enter a name";
    setValidationErrors(errors)
}, [name])
```
