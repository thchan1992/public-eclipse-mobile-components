# eclipse-mobile-components

---

## PrimaryButton

A customisable button component designed for React Native Expo applications, offering flexibility in size, colour, and styling.

### Props

| Prop               | Type               | Optional | Default          | Description                                              |
| ------------------ | ------------------ | -------- | ---------------- | -------------------------------------------------------- |
| `title`            | string             | No       |                  | The text displayed on the button.                        |
| `onPress`          | function           | No       |                  | Callback function to execute when the button is pressed. |
| `size`             | "small" \| "large" | Yes      | "small"          | Predefined button sizes.                                 |
| `backgroundColour` | string             | Yes      | Predefined color | The background color of the button.                      |
| `textColour`       | string             | Yes      |                  | The color of the button text.                            |
| `borderRadius`     | number             | Yes      | Predefined value | The border radius of the button.                         |
| `borderWidth`      | number             | Yes      | Predefined value | The border width of the button.                          |
| `textStyle`        | object             | Yes      |                  | Custom style object for the button text.                 |
| `width`            | number \| null     | Yes      |                  | Custom width for the button.                             |
| `height`           | number \| null     | Yes      |                  | Custom height for the button.                            |

### Usage Example

```jsx
import { PrimaryButton } from "your-package-name";

<PrimaryButton
  title="Press Me"
  onPress={() => alert("Button Pressed")}
  size="large"
  backgroundColour="#007bff"
  textColour="#ffffff"
/>;
```

Customise the `PrimaryButton` to fit your app's design by adjusting its size, colours, and styles as needed.
