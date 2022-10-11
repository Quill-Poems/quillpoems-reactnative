import React, { useState, useEffect } from 'react'
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from 'native-base';
import { Box, VStack, Text, Input, Button, Pressable, HStack, Badge, Spacer, Flex } from "native-base";
import API from '../services/apiClient';
import { useNavigation } from '@react-navigation/native';

export default function CommentCard({ data }){
    const navigation = useNavigation()
    return(
        <Pressable overflow="hidden" borderWidth="0.5" borderColor="coolGray.300" minW="96" shadow="3" bg="coolGray.100" p="5">
        <Box>
          <HStack alignItems="center">
          </HStack>
          <Text mt="2" fontSize="sm" color="coolGray.700">
          {data.content}
          </Text>
          <Flex>
            <Text mt="2" fontSize={12} fontWeight="medium" color="darkBlue.600">
            {data.authorUsername}
            </Text>
          </Flex>
        </Box>
        </Pressable>
    )
}