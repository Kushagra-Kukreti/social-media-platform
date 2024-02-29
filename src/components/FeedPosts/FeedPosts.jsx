import {
  Box,
  Container,
  Flex,
  Skeleton,
  SkeletonCircle,
  Text,
  VStack,
} from "@chakra-ui/react";
import FeedPost from "./FeedPost";
import { useEffect, useState } from "react";
const FeedPosts = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  return (
    <Container maxW={"container.sm"} py={10} px={2}>
      {isLoading ? (
        <>
          {[0, 1, 2].map((_, idx) => (
            <VStack key={idx} gap={4} alignItems={"flex-start"} mb={10}>
              <Flex gap="2">
                <SkeletonCircle size="10" />
                <VStack gap={2} alignItems={"flex-start"}>
                  <Skeleton height="10px" w={"200px"} />
                  <Skeleton height="10px" w={"200px"} />
                </VStack>
              </Flex>
              <Skeleton w={"full"}>
                <Box h={"400px"}>contents wrapped</Box>
              </Skeleton>
            </VStack>
          ))}
        </>
      ) : (
        <>
          <VStack gap={4} alignItems={"flex-start"} mb={10}>
            <FeedPost img={"/img1.png"} name={"Minisha"} />
          </VStack>
          <VStack gap={4} alignItems={"flex-start"} mb={10}>
            <FeedPost img={"img2.png"} name={"Suryansh"}/>
          </VStack>
          <VStack gap={4} alignItems={"flex-start"} mb={10}>
            <FeedPost img={"img3.png"}name={"Abhinay"} />
          </VStack>
        </>
      )}

      {
        <>
          <Text fontSize={"md"} color={"red.400"}>
            Dayuum. Looks like you don&apos;t have any friends.
          </Text>
          <Text color={"red.400"}>Stop coding and go make some!!</Text>
        </>
      }
    </Container>
  );
};

export default FeedPosts;
