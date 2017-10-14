# Summary and conclusions

## Extra features not originally requested

- A disabled state to the visibility filter button that does not allow to click it when there are no completed tasks in the list. I added it as it was fairly straight forward, (no extra state management logic required) and the UI looked slightly broken otherwise.

## Approach

- I tried to approach the test as much as following the TDD principles as possible. I felt that it has been easier to accomplish when working with components than with other bits of the logic.
However, all the layers of functionality required in the exercise can be accomplished using pure TDD approach.

- Did not use any extra library as I didn't feel it necessary. In a bigger project I could have considered the possibility to use a tool to ensure immutability on the state when modifying on the reducers.

- As suggested, I barely spent any time on the `css`, I made modifications or additions only when required.

## Possible improvements

- If I had more time I would have added some feature in order to handle state persistence, on the client only, most likely `localStorage` in order to show abilities using `middleware` for handling `async` operations.

- The way how an arrow function that returns the actual handler function is used in the `ItemsList` component for handling `onClick` events when a parameter is needed does not seem to be the best option to me as later on that function can not be mocked for testing purposes. I would have provably gone for returning the handler which would have had the target available as a parameter anyway and then I would have added the extra info needed (ie. Id) on a `data-attribute`.

- I would have worked out a richer UI.
