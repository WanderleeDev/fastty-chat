import { Button, BoxProps } from "@chakra-ui/react";
import EmblaWrapper from "@/components/shared/EmblaWrapper";
import { CategoryTab } from "../interfaces/CategoryTab.interface";

const CATEGORIES: CategoryTab[] = [
  { id: "todo", name: "All" },
  { id: "gaming", name: "Gaming" },
  { id: "musica", name: "Music" },
  { id: "deportes", name: "Sports" },
  { id: "tech", name: "Tech" },
  { id: "arte", name: "Art" },
  { id: "idiomas", name: "Languages" },
  { id: "cine", name: "Movies" },
  { id: "libros", name: "Books" },
];

export default function CategoryTabs({ ...props }: BoxProps) {
  return (
    <EmblaWrapper {...props} gap={2}>
      {CATEGORIES.map((category) => (
        <Button
          className="embla__slide"
          key={category.id}
          size="sm"
          borderRadius="full"
          minW="auto"
          px="4"
          fontWeight="medium"
          // variant={activeCategory === category.id ? "solid" : "outline"}
          // bg={activeCategory === category.id ? "brand.500" : "white"}
          // borderColor={
          //   activeCategory === category.id ? "brand.500" : "gray.300"
          // }
          // color={activeCategory === category.id ? "white" : "gray.700"}
          // onClick={() => handleCategoryClick(category.id)}
          // _hover={{
          //   bg: isDragging
          //     ? activeCategory === category.id
          //       ? "brand.500"
          //       : "white"
          //     : activeCategory === category.id
          //     ? "brand.600"
          //     : "gray.100",
          // }}
          transition="all 0.2s"
          flexShrink={0}
        >
          {category.name}
        </Button>
      ))}
    </EmblaWrapper>
  );
}
