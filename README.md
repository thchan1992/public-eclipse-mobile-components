# eclipse-mobile-components

---

Eclipse Mobile Components are crafted for developers who prioritise quick prototyping without compromising on usability. Our components offer a minimalistic yet detailed approach, providing an alternative to the out-of-the-box React Native components which may not always meet the rapid development needs. Perfect for those looking to swiftly bring their app ideas to life, specifically made for JS/TS Expo on iOS and Android platforms.

## PrimaryButton

A customisable button component, offering flexibility in size, colour, and styling.

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

---

## TextField Component

A customisable text input component, offering a wide range of styling options.

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

The `TabSystem` offers a flexible and interactive means to display content in a tabulated format.

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

### Visual Example

![TabSystem](https://i.imgur.com/5IfLwIo.png "TabSystem")

---

## CustomWarning Component

A modal component designed for displaying warnings or messages with customisable options.

### Properties

| Property           | Type     | Optional | Description                                          |
| ------------------ | -------- | -------- | ---------------------------------------------------- |
| `visible`          | boolean  | No       | Controls the visibility of the modal.                |
| `message`          | string   | No       | The message or content displayed inside the modal.   |
| `onClose`          | function | No       | Function to call when attempting to close the modal. |
| `title`            | string   | No       | The title displayed at the top of the modal.         |
| `buttonTwoTitle`   | string   | Yes      | Title for an optional second button.                 |
| `buttonTwoOnClick` | function | Yes      | Callback for the optional second button.             |

### Visual Example

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

### Visual Example

![CustomWarning](https://i.imgur.com/KqM3TUZ.png "CustomWarning")

---

## CustomAvatar Component

A customisable avatar component with an optional badge indicator.

### Properties

| Property      | Type                | Optional | Description                                                |
| ------------- | ------------------- | -------- | ---------------------------------------------------------- |
| `imageSource` | ImageSourcePropType | No       | Source of the avatar image.                                |
| `badgeCount`  | number \| string    | Yes      | Content of the badge. Can be used for notification counts. |
| `size`        | number              | Yes      | Custom size for the avatar's diameter.                     |
| `badgeSize`   | number              | Yes      | Custom size for the badge's diameter.                      |

### Usage Example

```jsx
import React from "react";
import { CustomAvatar } from "eclipse-mobile-components";

const UserProfile = () => (
  <CustomAvatar
    imageSource={{
      uri: "https://images.pexels.com/photos/428361/pexels-photo-428361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    }}
    badgeCount="9+"
    size={100}
    badgeSize={25}
  />
);
```

### Visual Example

![CustomAvatar](https://i.imgur.com/Q825ysG.png "CustomAvatar")

---

## AccordionSection Component

A versatile accordion component, allowing content to be expanded and collapsed.

### Properties

| Property   | Type            | Optional | Description                                                         |
| ---------- | --------------- | -------- | ------------------------------------------------------------------- |
| `title`    | string          | No       | The title displayed on the accordion header.                        |
| `children` | React.ReactNode | No       | The content to be shown when the accordion is expanded.             |
| `width`    | number          | Yes      | Optional width for the accordion, defaulting to the screen's width. |

## Usage Example

```jsx
import React from "react";
import { AccordionSection } from "eclipse-mobile-components";

const App = () => {
  return (
    <AccordionSection title="Section Title">
      <Text>Content goes here.</Text>
    </AccordionSection>
  );
};
```

### Visual Example

![CustomAccordionSection_Close](https://i.imgur.com/me1nnc3.png "CustomAccordionSection_Close")
![CustomAccordionSection_Open](https://i.imgur.com/zML4Ba9.png "CustomAccordionSection_Open")

---

## CustomModal Component

A flexible modal component, enabling customised presentation layers.

### Properties

| Property         | Type            | Optional | Description                             |
| ---------------- | --------------- | -------- | --------------------------------------- |
| `showModal`      | boolean         | No       | Controls the visibility of the modal.   |
| `children`       | React.ReactNode | No       | The content rendered within the modal.  |
| `containerStyle` | object          | Yes      | Custom style for the modal's container. |
| `contentStyle`   | object          | Yes      | Custom style for the modal's content.   |
| `borderWidth`    | number          | Yes      | Custom border width for the container.  |
| `borderRadius`   | number          | Yes      | Custom border radius for the container. |
| `borderColor`    | string          | Yes      | Custom border colour for the container. |

### Usage Example

```jsx
import React from "react";
import { CustomModal } from "eclipse-mobile-components";

const App = () => (
  <CustomModal
    showModal={true}
    borderWidth={2}
    borderRadius={10}
    borderColor="grey"
    containerStyle={{ backgroundColor: "rgba(0,0,0,0.5)" }}
    contentStyle={{ backgroundColor: "white" }}
  >
    <View style={{ width: 300, height: 100 }}>
      <Text>Modal Content Goes Here</Text>
    </View>
  </CustomModal>
);
```

### Visual Example

![CustomModal](https://i.imgur.com/mNq7xYO.png "CustomModal")

---

## License

MIT License

Copyright (c) [2024] [Han. C]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
