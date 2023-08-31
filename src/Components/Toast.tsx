import * as AppError from "src/AppError";
import { UseToastOptions, ToastId } from "@chakra-ui/toast";
import {
  Alert,
  AlertIcon,
  AlertStatus,
  AlertTitle,
  Button,
  CloseButton,
  HStack,
  Spacer,
  createStandaloneToast,
} from "@chakra-ui/react";

export const { ToastContainer, toast } = createStandaloneToast({
  defaultOptions: {
    duration: 9000,
    isClosable: true,
  },
});

export const withAction = (args: {
  status: AlertStatus;
  message: string;
  buttonLabel: string;
  onClick: () => void;
}) =>
  toast({
    duration: 16000,
    isClosable: true,
    render: (props) => (
      <Alert variant="solid" status={args.status} rounded={8}>
        <AlertIcon />
        <AlertTitle>{args.message} </AlertTitle>
        <Spacer />
        <HStack spacing={4} pl={8}>
          <Button
            variant="outline"
            colorScheme="ghost-light"
            onClick={() => {
              args.onClick();
              props.onClose();
            }}
          >
            {args.buttonLabel}
          </Button>
          <CloseButton onClick={props.onClose} />
        </HStack>
      </Alert>
    ),
  });

/**
 * Turn any error into a toast
 */
export function error(err: any, options?: { unique?: string }): ToastId {
  if (options?.unique && toast.isActive(options.unique)) {
    return options.unique;
  }

  if (AppError.isAppError(err)) {
    return toast({
      id: options?.unique,
      title: err.title,
      description: err.message,
      status: "error",
    });
  } else if (err instanceof Error) {
    return toast({
      id: options?.unique,
      title: err.name,
      description: err.message,
      status: "error",
    });
  } else {
    return toast({
      id: options?.unique,
      title: "Failed to register the QR-Code",
      description: "The registration process failed for an unknown reason",
      status: "error",
    });
  }
}
