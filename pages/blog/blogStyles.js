import { Center, Heading, Image } from "@chakra-ui/react";

const blogStyles = {
  h2: (props) => <Heading {...props} fontSize="xl" as="h2" />,
  img: (props) => (
    <Image
      {...props}
      objectFit="cover"
      borderRadius="xl"
      width="100%"
      mx="auto"
    />
  ),
  h4: (props) => <Heading {...props} fontSize="lg" color="gray.600" />,
};

export default blogStyles;
