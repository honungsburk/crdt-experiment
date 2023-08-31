import { chakra, BoxProps, useToken } from "@chakra-ui/react";
import * as ReactKawaii from "react-kawaii";
import * as Misc from "src/Library/Misc";

export default function Kawaii({
  color,
  character,
  ...rest
}: {
  size: number;
  character: "planet" | "ghost" | "browser" | "creditCard";
  mood: ReactKawaii.KawaiiMood;
  color: BoxProps["color"];
}): JSX.Element {
  const colors = useToken(
    "colors",
    Misc.nullToUndefined(color) ?? ("grey.300" as any),
    color,
  );

  switch (character) {
    case "planet":
      return <ReactKawaii.Planet {...rest} color={colors} />;
    case "ghost":
      return <ReactKawaii.Ghost {...rest} color={colors} />;
    case "browser":
      return <ReactKawaii.Browser {...rest} color={colors} />;
    case "creditCard":
      return <ReactKawaii.CreditCard {...rest} color={colors} />;
  }
}
