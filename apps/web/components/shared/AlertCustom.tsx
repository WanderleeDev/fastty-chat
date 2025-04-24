import { Alert, AlertRootProps } from "@chakra-ui/react";

interface Props extends AlertRootProps {
  alertTitle: string;
  alertMessage?: string | null;
  icon?: React.ReactNode;
}

export default function AlertCustom({
  alertTitle,
  alertMessage,
  children,
  icon,
  ...props
}: Props) {
  return (
    <Alert.Root {...props}>
      <Alert.Indicator>{icon}</Alert.Indicator>
      <Alert.Content>
        <Alert.Title>{alertTitle}</Alert.Title>
        {alertMessage?.trim() && (
          <Alert.Description>{alertMessage}</Alert.Description>
        )}
      </Alert.Content>
      {children}
    </Alert.Root>
  );
}
