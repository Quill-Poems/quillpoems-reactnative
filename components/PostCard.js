import React, { useState, useEffect } from 'react'
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from 'native-base';
import { Box, VStack, Text, Input, Button, Pressable, HStack, Badge, Spacer, Flex } from "native-base";
import API from '../services/apiClient';
import { useNavigation } from '@react-navigation/native';

export default function PostCard({ post }){
    const navigation = useNavigation()
    return(
        <Pressable key={post.id} onPress={() => navigation.navigate('Post', {post: post})} overflow="hidden" borderWidth="0.5" borderColor="coolGray.300" minW="96" shadow="3" bg="coolGray.100" p="5">
        <Box>
          <HStack alignItems="center">
            <Badge colorScheme="darkBlue" _text={{
            color: "white"
          }} variant="solid" rounded="4">
              Tag
            </Badge>
            <Spacer />
            <Text fontSize={10} color="coolGray.800" onPress={() => navigation.navigate('Profile', {user: post.authorUsername})}>
            {post.authorUsername}
            </Text>
          </HStack>
          <Text color="coolGray.800" mt="3" fontWeight="medium" fontSize="xl">
          {post.title}
          </Text>
          <Text mt="2" fontSize="sm" color="coolGray.700">
            {post.content}
          </Text>
          <Flex>
            <Text mt="2" fontSize={12} fontWeight="medium" color="darkBlue.600">
              Read More
            </Text>
          </Flex>
        </Box>
        </Pressable>
    )
}