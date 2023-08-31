import { Center, Text, Spinner, VStack, BoxProps } from "@chakra-ui/react";
import CenterOnPage from "../Components/CenterOnPage";

export default function Loading(props: {
  minH?: BoxProps["minH"];
}): JSX.Element {
  return (
    <CenterOnPage>
      <Center minH={props.minH}>
        <VStack>
          <Spinner color="black" size="xl" thickness="8px" />
          <Text fontSize={12} fontWeight={"bold"}>
            LOADING...
          </Text>
        </VStack>
      </Center>
    </CenterOnPage>
  );
}
