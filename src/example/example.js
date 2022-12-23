import React from "react";
import { Show } from "../../dist/module";
import * as Chakra from "@chakra-ui/react";

export default Example = () => {
  console.log(Show);
  return (
    <Show showAs="Flex" below="xs">
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <Chakra.Flex>
        <Chakra.Box>test</Chakra.Box>
      </Chakra.Flex>
    </Show>
  );
};
