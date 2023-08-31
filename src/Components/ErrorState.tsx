import { Center, Text, VStack } from "@chakra-ui/react";
import Kawaii from "./Kawaii";
import Copy from "./Copy";
import * as AppError from "src/AppError";

export default function ErrorState({
  error,
  character = "ghost",
  colorScheme = "gray",
}: {
  character?: "ghost" | "browser" | "none";
  colorScheme?: "gray" | "whiteAlpha" | "red";
  error: unknown;
}): JSX.Element {
  let errorInfo: JSX.Element = <Text>Unknown Error</Text>;

  if (AppError.isAppError(error)) {
    errorInfo = <ErrorBox error={error} colorScheme={colorScheme} />;
  } else if (error instanceof Error) {
    errorInfo = (
      <ErrorBox
        error={AppError.create({
          code: `Error.${error.name}`,
          title: error.name,
          message: error.message,
          cause: error,
        })}
        colorScheme={colorScheme}
      />
    );
  }

  return (
    <VStack alignContent={"center"} justifyContent="center">
      {character !== "none" && (
        <Kawaii character={character} size={240} mood="ko" color="#E0E4E8" />
      )}
      {errorInfo}
    </VStack>
  );
}

function ErrorBox(props: {
  error: AppError.AppError;
  colorScheme: "gray" | "whiteAlpha" | "red";
}): JSX.Element {
  const copyString = props.error.toJSON();

  let bg = "gray.100";
  let hoverBg = "gray.200";

  if (props.colorScheme === "whiteAlpha") {
    bg = "whiteAlpha.700";
    hoverBg = "whiteAlpha.900";
  } else if (props.colorScheme === "red") {
    bg = "red.100";
    hoverBg = "red.200";
  }

  return (
    <Copy copy={copyString}>
      <VStack
        bg={bg}
        spacing={4}
        rounded={16}
        padding={3}
        alignItems="start"
        _hover={{
          bg: hoverBg,
          cursor: "pointer",
        }}
      >
        <VStack alignItems="start" spacing={1}>
          <Text fontSize={12}>{props.error.code}</Text>
          <Text fontSize={24}>{props.error.title}</Text>
        </VStack>
        <Center width="100%">
          <Text>{props.error.message}</Text>
        </Center>
      </VStack>
    </Copy>
  );
}
