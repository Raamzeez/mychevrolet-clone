import { Text as RNText, TextProps } from "react-native";

interface Props extends TextProps {
  bold?: boolean;
}

export function Text({ style, bold, ...props }: Props) {
  return (
    <RNText
      style={[
        {
          color: "white",
          fontFamily: bold ? "Poppins_600SemiBold" : "Poppins_400Regular",
        },
        style,
      ]}
      {...props}
    />
  );
}
