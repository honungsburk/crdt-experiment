import { Spacer } from "@chakra-ui/react";

/**
 * Center a page's content vertically
 */
export default function CenterOnPage(props: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <>
      <Spacer />
      {props.children}
      <Spacer />
    </>
  );
}
