import {
  HStack,
  Dialog,
  Button,
  Portal,
  CloseButton,
  BoxProps,
} from "@chakra-ui/react";

interface Props extends BoxProps {
  titleDialog: React.ReactNode;
  bodyDialog: React.ReactNode;
  triggerButton: React.ReactNode;
  closable?: boolean;
  hasCancel?: boolean;
  submitButton?: React.ReactNode;
}

export default function BaseDialog({
  titleDialog,
  bodyDialog,
  submitButton,
  triggerButton,
  closable = false,
  hasCancel = false,
  ...props
}: Props) {
  if (!triggerButton || !titleDialog || !bodyDialog) {
    return null;
  }

  return (
    <HStack wrap="wrap" gap="4">
      <Dialog.Root
        placement={"center"}
        motionPreset="slide-in-bottom"
        lazyMount={true}
        unmountOnExit={true}
      >
        <Dialog.Trigger asChild w={"full"}>
          {triggerButton}
        </Dialog.Trigger>
        <Portal>
          <Dialog.Backdrop />
          <Dialog.Positioner>
            <Dialog.Content bg="teal.50" {...props}>
              <Dialog.Header>
                <Dialog.Title>{titleDialog}</Dialog.Title>
              </Dialog.Header>
              <Dialog.Body
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                flexDirection={"column"}
                gap={4}
              >
                {bodyDialog}
              </Dialog.Body>

              {submitButton && (
                <Dialog.Footer>
                  {hasCancel && (
                    <Dialog.ActionTrigger asChild>
                      <Button colorPalette={"teal"} variant="ghost">
                        Cancel
                      </Button>
                    </Dialog.ActionTrigger>
                  )}
                  {submitButton}
                </Dialog.Footer>
              )}

              {closable && (
                <Dialog.CloseTrigger asChild>
                  <CloseButton size="sm" />
                </Dialog.CloseTrigger>
              )}
            </Dialog.Content>
          </Dialog.Positioner>
        </Portal>
      </Dialog.Root>
    </HStack>
  );
}
