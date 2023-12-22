# Felastrap

## Why build this?

I have always been interested in `css-in-js` and the idea that we could write well typed
css as code in javascript instead of relying on a pre-processor for features such as mixins and functions.

In practice, I have found that css hides so much logic with its banal syntax. Some things
represented as psuedo classes or by a combination of classes must be represented by conditions that can be very complex.

I have ended up with certain uncomfortable props such as `first` and `last` to represent the `:first` and `:last` pseudo classes among other things. Similar, for `nth-of-type` to
get `odd` and `even` selectors.

Also, `css` refers to the hierarchy when defining child elements, their styles changing based on their parent's look and feel. It makes the use of Context API in react nessecary,
esp. when representing variants of a component,

For example: is a horizontal navigation menu item a `tab` or a `pill`. is the `nav`
containing this `horizontal` or `vertical`. Is this `nav` within a `card`.

This has proved to be a mighty learning opportunity (although my lack of css skill remains as woeful as it was when I started) about the hidden complexity of css and
the difficult task of representing it in js.

Additionally, I had never given so much thought to the end user of a component library
and the many ways we override styles on a component. I have tried to provide
both `className` and `style` props to the user as well as a static classname that the user
can refer if they are not interested in adding their own className.

Also, where possible, I have attempted to give the user as free a reign as possible to
add props to the component and use it as they desire.

It has been eye-opening how little a good library restricts the user and how much customization via props one must provide. It has increased my respect for the open
source contributors working on component libraries and CSS frameworks.

## Usage

To install the package, run:

```shell
yarn install react react-dom felastrap
```

To use a component, import it like this:

```tsx
import { Button } from "felastrap";
```

To import `type`:

```tsx
import { type ButtonProps } from "felastrap";
```

We use `@floating-ui/react` for collapsible components and `react-transition-group` for animations along with `fela` for styling.

---

## Contributing

Install the dependencies:

```shell
yarn install
```

We use `fela` as a CSS-in-JS framework and Bootstrap as `"inspiration"`. To put it simply,
we take the components from Bootstrap and try to re-build them using `react` and `fela`.

We use `storybook` to build our components, run:

```shell
yarn storybook
```

Ideally, you can work your component while visualizing it in storybook.

Jest is the preferred test framework, run tests using:

```shell
yarn test
```

and with coverage as:

```shell
yarn test --coverage
```

To debug memory leaks when running the tests:

```json
{
  "scripts": {
    "test:debug": "node --inspect-brk --experimental-vm-modules --expose-gc ./node_modules/.bin/jest --runInBand --logHeapUsage",
    "test:diag": "node --experimental-vm-modules --expose-gc ./node_modules/.bin/jest --runInBand --detectOpenHandles --logHeapUsage"
  }
}
```

Note: The stories and tests are located next to the code instead of a `test` directory. It becomes essential to exclude them when building the library. We use vite to build the
library. Use:

```shell
yarn build
```

to build the library and:

```shell
yarn clean
```

to cleanup after a build.
