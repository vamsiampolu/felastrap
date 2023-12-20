### Breadcrumbs

Breadcrumbs show the user visualize their current location within a website or application. They are typically displayed as a horizontal list of links.

#### Approaches:

Breadcrumbs can take various approaches to achieve this result:

- **Hierarchy Based**: The most common approach, this displays the hierarchy of the page in relation to the higher level pages.

- **Path Based**: Shows the path taken by the user to reach the current page. May be too complex to represent, is not preferred.

- **Attribute Based**: Shows attributes or categories selected by the user on the page along with the hierarchy used.

#### Design:

The component represents a trail of breadcrumbs leading to the current page. When designing the component, the following must be considered:

- **Current page non-clickable** All the items in the breadcrumbs except the last one must be clickable, this allows the user to navigate to any point within the hierarchy easily. It is even suggested that the last item should be plain text instead of a link.

- **Prominence** Breadcrumbs should be positioned at the top of the page's content. It should be discoverable but less prominent than the primary navigation items such as the Navbar and the Sidebar. Use a color that contrasts with the background but is not as prominent as the primary color.

- **Responsive** Breadcrumbs must be adjusted to work on all screen sizes. Consider truncating or simplifying the path on smaller devices.

- **Accessibility** Use an `ol` with `li` for each element. This helps screen readers interpret the breadcrumbs as a list of related items.

Use `aria-label="breadcrumb"` on the list element to define the role of the breadcrumb trail for screen readers.

Provide clear and descriptive titles for each link. Allow users to `Tab` through the breadcrumbs to reach the link they need.

Either label seperators clearly or hide them from the screen reader to avoid confusion.
Use `aria-current="page"` to indicate the current page in the breadcrumb trail.

#### Usage:

Let's create a breadcrumb trail for a book page on an e-commerce website:

`Books›Literature & Fiction›Classics›Frankenstein`

> By default `/` is used as the divider, however you can provide a divider as a prop.

```tsx
import { Breadcrumb } from "./Breadcrumb";
<Breadcrumb
  divider="›"
  items={[
    {
      label: "Books",
      href: "/books",
    },
    {
      label: "Literature and Fiction",
      href: "/books/literature-fiction/",
    },
    {
      label: "Classics",
      href: "/books/literature-fiction/classics/",
    },
    {
      label: "Frankenstein",
    },
  ]}
/>;
```
