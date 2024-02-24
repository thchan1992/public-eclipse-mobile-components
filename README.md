# eclipse-mobile-components

---

## PrimaryButton

A customisable button component designed for React Native Expo applications, offering flexibility in size, colour, and styling.

### Props

| Prop               | Type               | Optional | Default           | Description                                              |
| ------------------ | ------------------ | -------- | ----------------- | -------------------------------------------------------- |
| `title`            | string             | No       |                   | The text displayed on the button.                        |
| `onPress`          | function           | No       |                   | Callback function to execute when the button is pressed. |
| `size`             | "small" \| "large" | Yes      | "small"           | Predefined button sizes.                                 |
| `backgroundColour` | string             | Yes      | Predefined colour | The background colour of the button.                     |
| `textColour`       | string             | Yes      |                   | The colour of the button text.                           |
| `borderRadius`     | number             | Yes      | Predefined value  | The border radius of the button.                         |
| `borderWidth`      | number             | Yes      | Predefined value  | The border width of the button.                          |
| `textStyle`        | object             | Yes      |                   | Custom style object for the button text.                 |
| `width`            | number \| null     | Yes      |                   | Custom width for the button.                             |
| `height`           | number \| null     | Yes      |                   | Custom height for the button.                            |

### Usage Example

```jsx
import { PrimaryButton } from "eclipse-mobile-components";

<PrimaryButton
  title="Press Me"
  onPress={() => alert("Button Pressed")}
  size="large"
  backgroundColour="#007bff"
  textColour="#ffffff"
/>;
```

### Visual Example

![PrimaryButton](https://i.imgur.com/h5xYIhN.png "PrimaryButton")

Customise the `PrimaryButton` to fit your app's design by adjusting its size, colours, and styles as needed.

---

## TextField Component

A customisable text input component designed for React Native apps, offering a wide range of styling options.

### Properties

| Property           | Type     | Optional | Default                  | Description                                         |
| ------------------ | -------- | -------- | ------------------------ | --------------------------------------------------- |
| `value`            | any      | No       |                          | The current value of the text input.                |
| `setter`           | Function | No       |                          | Function to update the value based on user input.   |
| `placeholder`      | string   | Yes      |                          | Placeholder text displayed when the input is empty. |
| `textStyle`        | Object   | Yes      |                          | Custom style for the text within the input.         |
| `textSize`         | number   | Yes      |                          | Size of the text within the input.                  |
| `width`            | number   | Yes      |                          | Custom width for the input field.                   |
| `height`           | number   | Yes      |                          | Custom height for the input field.                  |
| `inputColour`      | string   | Yes      | `defaultInputColour`     | Colour of the input text.                           |
| `borderRadius`     | number   | Yes      | `defaultBorderRadius`    | Border radius for the input field.                  |
| `borderWidth`      | number   | Yes      | `defaultBorderWidth`     | Border width for the input field.                   |
| `backgroundColour` | string   | Yes      | `defaultTextFieldColour` | Background colour of the input field.               |

### Usage Example

```jsx
import React, { useState } from "react";
import { TextField } from "eclipse-mobile-components";

const MyComponent = () => {
  const [text, setText] = useState("");

  return (
    <TextField
      value={text}
      setter={setText}
      placeholder="Enter something..."
      textSize={16}
      backgroundColour="#fff"
      inputColour="#333"
    />
  );
};
```

### Visual Example

![TextField](https://i.imgur.com/i92CxNR.png "TextField")

---

## TabSystem Component

The `TabSystem` offers a flexible and interactive means to display content in a tabulated format within React Native applications. It enables the dynamic rendering of content based on user interaction with tab selectors.

### Properties

| Property        | Type            | Optional | Description                                      |
| --------------- | --------------- | -------- | ------------------------------------------------ |
| `tabOneTitle`   | string          | No       | Title for the first tab.                         |
| `tabTwoTitle`   | string          | No       | Title for the second tab.                        |
| `tabOneContent` | React.ReactNode | No       | Content displayed when the first tab is active.  |
| `tabTwoContent` | React.ReactNode | No       | Content displayed when the second tab is active. |
| `height`        | number          | Yes      | Optional height for the content container.       |
| `width`         | number          | Yes      | Optional width for the content container.        |

### Usage Example

```jsx
import React from "react";
import { TabSystem } from "eclipse-mobile-components";
const App = () => (
  <TabSystem
    tabOneTitle="Tab 1"
    tabTwoTitle="Tab 2"
    tabOneContent={<Text>Content for Tab 1</Text>}
    tabTwoContent={<Text>Content for Tab 2</Text>}
    height={300}
  />
);
export default App;
```

This component facilitates the creation of tabbed interfaces within your application, allowing users to switch between different views or content areas seamlessly.

###Visual Example
![TabSystem](https://i.imgur.com/5IfLwIo.png "TabSystem")

---

## CustomWarning Component

A modal component designed for displaying warnings or messages with customisable options, part of the `eclipse-mobile-components` package.

### Properties

| Property           | Type     | Optional | Description                                          |
| ------------------ | -------- | -------- | ---------------------------------------------------- |
| `visible`          | boolean  | No       | Controls the visibility of the modal.                |
| `message`          | string   | No       | The message or content displayed inside the modal.   |
| `onClose`          | function | No       | Function to call when attempting to close the modal. |
| `title`            | string   | No       | The title displayed at the top of the modal.         |
| `buttonTwoTitle`   | string   | Yes      | Title for an optional second button.                 |
| `buttonTwoOnClick` | function | Yes      | Callback for the optional second button.             |

###Usage Example

```jsx
import { CustomWarning } from "eclipse-mobile-components";
import { useState } from "react";

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <CustomWarning
      visible={modalVisible}
      title="Warning"
      buttonOneTitle="Button A"
      message="This is a detailed warning message."
      onClose={() => setModalVisible(false)}
      buttonTwoTitle="Button B"
      buttonTwoOnClick={() => console.log("Second action taken")}
    />
  );
}
```

###Visual Example
![CustomWarning](https://i.imgur.com/KqM3TUZ.png "CustomWarning")
