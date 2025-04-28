import { Box, Button } from "@chakra-ui/react";
import EmblaWrapper from "@/components/shared/EmblaWrapper";
import { axiosFetcher } from "../../../app/_lib/axiosFetcher";
import { CategoryTab } from "../interfaces/CategoryTab.interface";
import AlertCustom from "@/components/shared/AlertCustom";

export default async function CategoryTabs() {
  const { content, error, isSuccess } = await axiosFetcher<CategoryTab[]>(
    "/categories"
  );

  if (!isSuccess || error || !content) {
    return (
      <AlertCustom
        alertTitle={error || "Something went wrong"}
        status="error"
        md={{ display: "none" }}
      />
    );
  }

  return (
    <Box md={{ display: "none" }}>
      <EmblaWrapper gap={2}>
        {content.map((category) => (
          <Button
            className="embla__slide"
            key={category.id}
            size="sm"
            borderRadius="full"
            minW="auto"
            px="4"
            fontWeight="medium"
            transition="all 0.2s"
            flexShrink={0}
          >
            {category.name}
          </Button>
        ))}
      </EmblaWrapper>
    </Box>
  );
}
