import { Button } from "@chakra-ui/react";
import React, {
  FC,
  PropsWithChildren,
  ReactChild,
  ReactChildren,
  ReactElement,
  ReactNode,
  ReactPortal,
} from "react";

interface AuxProps {
  //   children: PropsWithChildren;
}

export const CustomButton = (props: any) => {
  return (
    <Button {...props} w={{ base: "100%", sm: "30%" }}>
      {props.children}
    </Button>
  );
};
