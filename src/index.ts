import { ViewStyle, TextStyle } from "react-native";

type Style = ViewStyle | TextStyle;
type PairCallback = (arg0: {
  type: "condition" | "style";
  style?: Style;
  condition?: Boolean | any;
  styles?: Style[];
}) => void;
type Condition = [Style, Boolean];

export function cn(...args: Array<Condition | Style>): Style[] {
  return args.reduce((memo: Style[] = [], item: any) => {
    if (!item) return memo;

    if (Array.isArray(item)) {
      pairs(item, ({ type, style, condition, styles }) => {
        if (type === "condition" && style) {
          if (condition) memo.push(style);
        } else {
          styles?.forEach((i) => memo.push(i));
        }
      });
    } else {
      if (typeof item === "number" || typeof item === "object") {
        memo.push(item);
      }
    }

    return memo;
  }, []);
}

function pairs(array: Style[], callback: PairCallback) {
  for (var i = 0; i < array.length; i++) {
    if (typeof array[i + 1] === "boolean") {
      callback({
        style: array[i],
        condition: array[i + 1],
        type: "condition",
      });
    } else {
      callback({ type: "style", styles: array });
    }

    i++;
  }
}
