import { Card, CardProps } from "./Card";
import { CardBody } from "./Body";
import { Container } from "../Flex";
import type { Meta, StoryObj, StoryFn } from "@storybook/react";
import { Link } from "../Link/Link";
import { Button } from "../Button/Button";
import { CardTitle, CardSubtitle, CardText, CardImage, CardHeader } from ".";
import { ListGroup, ListGroupItem } from "../ListGroup";
import { Nav } from "../Nav/Nav";

export type Story = StoryObj<typeof Card>;
const meta: Meta<typeof Card> = {
  component: Card,
  title: "components/Card",
  parameters: {
    layout: ["centered"],
  },
};

export default meta;

export const Template: StoryFn<CardProps> = (args: CardProps) => {
  return (
    <Container>
      <Card {...args} />
    </Container>
  );
};

export const Body = {
  args: {
    children: <CardBody>This is some text within a card body</CardBody>,
  },
};

export const TitleTextAndLinks = {
  args: {
    style: { width: "18rem" },
    children: (
      <>
        <CardBody>
          <CardTitle as="h5">Card Title</CardTitle>
          <CardSubtitle
            style={{
              color: "rgba(33, 37, 41, 0.75)",
              opacity: 1,
              marginBottom: "0.5rem",
            }}
            as="h6"
          >
            Card subtitle
          </CardSubtitle>
          <CardText>
            Some quick example text to build on the card title and make up the
            bulk of the card&apos;s content.
          </CardText>
          <Link href="#">Card Link</Link>
          <Link href="#" style={{ marginLeft: "1rem" }}>
            Another Link
          </Link>
        </CardBody>
      </>
    ),
  },
};

export const Image = {
  style: { width: "10rem" },
  args: {
    children: (
      <>
        <CardImage
          top
          src="https://picsum.photos/id/16/200/300"
          width={200}
          height={300}
        />
        <CardBody>
          <CardText>
            Some quick example text to build on the card title and make up the
            bulk of the card&apos;s content.
          </CardText>
        </CardBody>
      </>
    ),
  },
};

export const ImageOverlay = {
  style: { width: "10rem" },
  args: {
    children: (
      <>
        <CardImage
          src="https://picsum.photos/id/16/200/300"
          width={200}
          height={300}
        />
        <CardBody overlay>
          <CardText>
            Some quick example text to build on the card title and make up the
            bulk of the card&apos;s content.
          </CardText>
        </CardBody>
      </>
    ),
  },
};

export const ImageBottom = {
  args: {
    style: { width: "18rem" },
    children: (
      <>
        <CardBody>
          <CardText>
            Some quick example text to build on the card title and make up the
            bulk of the card&apos;s content.
          </CardText>
        </CardBody>
        <CardImage
          bottom
          src="https://picsum.photos/id/16/200/300"
          width={200}
          height={300}
        />
      </>
    ),
  },
};

export const HeaderAndFooter = {
  args: {
    children: (
      <>
        <CardHeader>Featured</CardHeader>
        <CardBody>
          <CardTitle as="h5">Special Title Treatment</CardTitle>
          <CardText>
            With supporting text below as a natural lead-in to additional
            content.
          </CardText>
          <Button variant="primary">Go Somewhere</Button>
        </CardBody>
      </>
    ),
  },
};

export const ListGroups = {
  args: {
    list: true,
    style: { width: "18rem" },
    children: (
      <ListGroup card flush>
        <ListGroupItem style={{ width: "calc(100% - 2.10 * 1rem)" }} first>
          An Item
        </ListGroupItem>
        <ListGroupItem style={{ width: "calc(100% - 2.10 * 1rem)" }}>
          A Second Item
        </ListGroupItem>
        <ListGroupItem last style={{ width: "calc(100% - 2.10 * 1rem)" }}>
          A Third Item
        </ListGroupItem>
      </ListGroup>
    ),
  },
};

export const KitchenSink = {
  args: {
    style: { width: "18rem" },
    children: (
      <>
        <CardImage
          top
          src="https://picsum.photos/id/16/200/300"
          width={200}
          height={300}
        />
        <CardBody>
          <CardTitle as="h5">Card Title</CardTitle>
          <CardText>
            Some quick example text to build on the card title and make up the
            bulk of the card&apos;s content.
          </CardText>
        </CardBody>
        <ListGroup card flush>
          <ListGroupItem first style={{ width: "calc(100% - 2.10 * 1rem)" }}>
            An item
          </ListGroupItem>
          <ListGroupItem style={{ width: "calc(100% - 2.10 * 1rem)" }}>
            A second item
          </ListGroupItem>
          <ListGroupItem last style={{ width: "calc(100% - 2.10 * 1rem)" }}>
            A third item
          </ListGroupItem>
        </ListGroup>
        <CardBody>
          <Link>Card link</Link>
          <Link style={{ marginLeft: "1rem" }}>Another Link</Link>
        </CardBody>
      </>
    ),
  },
};

export const Tabs = {
  args: {
    style: { width: "18rem" },
    children: (
      <CardHeader>
        <Nav
          variant="tabs"
          items={[
            {
              itemType: "link",
              label: "Active",
              active: true,
            },
            {
              itemType: "link",
              label: "Link",
              active: false,
            },
            {
              disabled: true,
              itemType: "link",
              label: "Disabled",
              active: false,
            },
          ]}
        />
        <CardBody>
          <CardTitle as="h5">Special title treatment</CardTitle>
          <CardText>
            With supporting text below as a natural lead-in to additional
            content.
          </CardText>
          <Button variant="primary">Go somewhere</Button>
        </CardBody>
      </CardHeader>
    ),
  },
};

export const Pills = {
  args: {
    style: { width: "18rem" },
    children: (
      <CardHeader>
        <Nav
          card={true}
          variant="pills"
          items={[
            {
              card: true,
              itemType: "link",
              label: "Active",
              active: true,
            },
            {
              card: true,
              itemType: "link",
              label: "Link",
              active: false,
            },
            {
              card: true,
              disabled: true,
              itemType: "link",
              label: "Disabled",
              active: false,
            },
          ]}
        />
        <CardBody>
          <CardTitle as="h5">Special title treatment</CardTitle>
          <CardText>
            With supporting text below as a natural lead-in to additional
            content.
          </CardText>
          <Button variant="primary">Go somewhere</Button>
        </CardBody>
      </CardHeader>
    ),
  },
};
