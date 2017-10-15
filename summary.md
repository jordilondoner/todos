# Summary and conclusions

## Extra features not originally requested

- A disabled state to the visibility filter button that does not allow to click it when there are no completed tasks in the list. I added it as it was fairly straight forward, (no extra state management logic required) and the UI looked slightly broken otherwise.

## Approach

- Whenever it has been possible the approach has been to write a test asserting against the feature that was going to be developed next, breaking down on the more granular way as possible. Not always accomplished due to the timing constrains.

- Did not use any extra library as I didn't feel it necessary. The only part where I could have used a library could have been to guarantee immutability when returning new states on the reducers, but ES6 spread operator among other functional features / methods offered by the specification out of the box make it easy enough to ensure it writing vanilla js

- As suggested, I barely spent any time on the `css`, I made modifications or additions only when required.

## Possible improvements

- If I had more time I would have added a feature in order to handle state persistence upon refresh, on the client only, most likely using the `localStorage API` , in order to enhance the experience and as a matter of exercise, also for practising using a `Redux middleware` for handling `async` operations.

- The way how an arrow function that returns the actual handler function is used in the `ItemsList` component for handling `onClick` events when a parameter is needed does not seem to be the best option to me as later on that function can not be mocked for testing purposes. I would have provably gone for returning the handler which would have had the target available as a parameter anyway and then I would have added the extra info needed (ie. Id) on a `data-attribute`.

### Did

```
onClick={() => {
  toggleDone(item.id)
}}
```

## Would have done

```
data-id{item.id}
onClick={toggleDone} // that implies the target as parameter from which we can get data-id
```

- I would have worked out a richer UI.
