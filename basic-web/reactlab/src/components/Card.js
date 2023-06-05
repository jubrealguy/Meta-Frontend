import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  return (
    <div>
      <VStack background={"white"} color={"black"} rounded={10}>
        <Image src={imageSrc} alt="photo" rounded={10} />
        <VStack alignItems="flex-start" padding={3}>
          <Heading size="sm">{title}</Heading>
          <Text>{description}</Text>
          <HStack alignItems="center">
            <Text fontWeight="bold" fontSize="sm">See more</Text>
            <FontAwesomeIcon icon={faArrowRight} />
          </HStack>
        </VStack>
      </VStack>
    </div>
  )
};

export default Card;
