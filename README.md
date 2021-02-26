## RN-Combine-Styles
 A small utility that combine react native styles ✨

#### How to use

```bash
yarn add rn-combine-styles
```

```js
import React, { useState } from "react";
import { View, StyleSheet } from "react-native";

import cs from "rn-combine-styles";

export default function Button({ text, style, disable = false, ...props }) {
  return (
    <View
      style={cs(styles.button, { color: "black" }, [(styles.disable, disable)])}
    >
      {text}
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "red",
  },
  disable: {
    backgroundColor: "blue",
  },
});
```
