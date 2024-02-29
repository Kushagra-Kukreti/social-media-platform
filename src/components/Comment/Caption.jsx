import { Avatar, Flex, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Caption = () => {

	return (
		<Flex gap={4}>
			<Link >
				<Avatar size={"sm"} />
			</Link>
			<Flex direction={"column"}>
				<Flex gap={2} alignItems={"center"}>
					<Link  >
						<Text fontWeight={"bold"} fontSize={12}>
                            Dummyname
						</Text>
					</Link>
					<Text fontSize={14}>{ "Caption"}</Text>
				</Flex>
				<Text fontSize={12} color={"gray"}>
                       1m ago
				</Text>
			</Flex>
		</Flex>
	);
};

export default Caption;
