import { type Meta, type StoryObj } from "@storybook/react";
import { InputGroup } from "./InputGroup";
import { GroupText } from "./GroupText";
import { GroupInput } from "./GroupInput";
import { GroupButton } from "./GroupButton";
import { GroupTextarea } from "./GroupTextarea";

export type Story = StoryObj<typeof InputGroup>;
const meta: Meta<typeof InputGroup> = {
  title: "components/Form/InputGroup",
  component: InputGroup,
  parameters: {
    layout: ["centered"],
  },
};

export default meta;

export const UsernameExample: Story = {
  args: {
    children: (
      <>
        <GroupText>@</GroupText>
        <GroupInput type="text" id="username-example" placeholder="Username" />
      </>
    ),
  },
};

export const SmallUsernameExample: Story = {
  args: {
    size: "small",
    children: (
      <>
        <GroupText>@</GroupText>
        <GroupInput type="text" id="username-example" placeholder="Username" />
      </>
    ),
  },
};

export const LargeUsernameExample: Story = {
  args: {
    size: "large",
    children: (
      <>
        <GroupText>@</GroupText>
        <GroupInput type="text" id="username-example" placeholder="Username" />
      </>
    ),
  },
};

export const WithTextarea: Story = {
  args: {
    children: (
      <>
        <GroupText>With Textarea</GroupText>
        <GroupTextarea id="username-example" placeholder="Username" />
      </>
    ),
  },
};

export const WithSmallTextarea: Story = {
  args: {
    size: "small",
    children: (
      <>
        <GroupText>With Textarea</GroupText>
        <GroupTextarea id="username-example" placeholder="Username" />
      </>
    ),
  },
};

export const WithLargeTextarea: Story = {
  args: {
    size: "large",
    children: (
      <>
        <GroupText>With Textarea</GroupText>
        <GroupTextarea id="username-example" placeholder="Username" />
      </>
    ),
  },
};

export const CurrencyExample: Story = {
  args: {
    children: (
      <>
        <GroupText>$</GroupText>
        <GroupInput type="text" id="username-example" placeholder="Amount" />
        <GroupText>.00</GroupText>
      </>
    ),
  },
};

export const SmallCurrencyExample: Story = {
  args: {
    children: (
      <>
        <GroupText>$</GroupText>
        <GroupInput type="text" id="username-example" placeholder="Amount" />
        <GroupText>.00</GroupText>
      </>
    ),
  },
};

export const LargeCurrencyExample: Story = {
  args: {
    children: (
      <>
        <GroupText>$</GroupText>
        <GroupInput type="text" id="username-example" placeholder="Amount" />
        <GroupText>.00</GroupText>
      </>
    ),
  },
};

export const ButtonExample = {
  args: {
    children: (
      <>
        <GroupButton id="button-addon1">Button</GroupButton>
        <GroupInput
          type="text"
          placeholder=""
          aria-label="Example text with button addon"
          aria-describedby="button-addon1"
        />
      </>
    ),
  },
};

export const SmallButtonExample = {
  args: {
    size: "small",
    children: (
      <>
        <GroupButton id="button-addon1">Button</GroupButton>
        <GroupInput
          type="text"
          placeholder=""
          aria-label="Example text with button addon"
          aria-describedby="button-addon1"
        />
      </>
    ),
  },
};

export const LargeButtonExample = {
  args: {
    size: "large",
    children: (
      <>
        <GroupButton id="button-addon1">Button</GroupButton>
        <GroupInput
          type="text"
          placeholder=""
          aria-label="Example text with button addon"
          aria-describedby="button-addon1"
        />
      </>
    ),
  },
};

export const SearchButtonExample = {
  args: {
    type: "search",
    children: (
      <>
        <GroupInput
          type="text"
          placeholder=""
          aria-label="Example text with button addon"
          aria-describedby="button-addon1"
        />
        <GroupButton id="button-addon1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
          >
            <path
              d="M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z"
              stroke="#000"
              fill="none"
              fillRule="evenodd"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </GroupButton>
      </>
    ),
  },
};

export const UrlTextExample = {
  args: {
    id: "text-url-example",
    children: (
      <>
        <GroupText id="button-addon1">
          <svg
            width="24"
            height="24"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M17.9,17.39C17.64,16.59 16.89,16 16,16H15V13A1,1 0 0,0 14,12H8V10H10A1,1 0 0,0 11,9V7H13A2,2 0 0,0 15,5V4.59C17.93,5.77 20,8.64 20,12C20,14.08 19.2,15.97 17.9,17.39M11,19.93C7.05,19.44 4,16.08 4,12C4,11.38 4.08,10.78 4.21,10.21L9,15V16A2,2 0 0,0 11,18M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" />
          </svg>
        </GroupText>
        <GroupInput
          type="text"
          placeholder=""
          aria-label="Example text with button addon"
          aria-describedby="button-addon1"
        />
      </>
    ),
  },
};

export const TelTextExample = {
  args: {
    id: "text-tel-example",
    children: (
      <>
        <GroupText id="button-addon1">
          <svg
            width="24"
            height="24"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z" />
          </svg>
        </GroupText>
        <GroupInput
          type="text"
          placeholder=""
          aria-label="Example text with button addon"
          aria-describedby="button-addon1"
        />
      </>
    ),
  },
};
