import { Center, Heading, VStack, Text } from "@chakra-ui/react";
import Kawaii from "./Kawaii";

export default function NotFound(props: { title: string; message: string }) {
  return (
    <Center>
      <VStack>
        <Kawaii character="browser" size={200} mood="sad" color="#E0E4E8" />
        <Heading size={"xl"}>{props.title}</Heading>
        <Text>{props.message}</Text>
      </VStack>
    </Center>
  );
}
