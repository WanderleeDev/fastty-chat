import CheckBoxTree from "@/components/icons/CheckBoxTree";
import {
  EmptyState,
  Icon,
  VStack,
  EmptyStateRootProps,
} from "@chakra-ui/react";

interface Props extends EmptyStateRootProps {
  title: string;
  description: string;
}

export default function EmptySection({
  title,
  description,
  children,
  ...props
}: Props) {
  return (
    <EmptyState.Root {...props}>
      <EmptyState.Content>
        <EmptyState.Indicator>
          <Icon fontSize={"5rem"}>
            <CheckBoxTree />
          </Icon>
        </EmptyState.Indicator>
        <VStack textAlign="center">
          <EmptyState.Title>{title}</EmptyState.Title>
          <EmptyState.Description>{description}</EmptyState.Description>
        </VStack>
        {children}
      </EmptyState.Content>
    </EmptyState.Root>
  );
}
