import React, { useState, useEffect } from 'react'
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from 'native-base';
import { Box, VStack, Text, Input, Button, Pressable, HStack, Badge, Spacer, Flex } from "native-base";
import API from '../services/apiClient';
import PostCard from '../components/PostCard';
import CommentCard from '../components/CommentCard';
import { useNavigation } from '@react-navigation/native';

export default function Post({ route }) {
    const navigation = useNavigation()
    const { post } = route.params;
    const [postData , setpostData] = useState(null)
    useEffect(() => {
      async function fetchPost(){
        const { data } = await API.fetchUserPost(`/posts/${post.authorUsername}/${post.id}`)
        setpostData(data)
      }
      fetchPost()
    }, [])

    if (postData){
    return (
        <SafeAreaView>
        <Box
            width={"100%"}
            height={"100%"}
            alignItems={"center"}
            justifyContent={"center"}
        >
            <ScrollView>
            <PostCard post={postData} />
            {postData?.comments?.map((comment, index) => {
                return <CommentCard key={index} data={comment} />
            })}
            <Input placeholder="comment"/>
            </ScrollView>
            
        </Box>
        </SafeAreaView>
    )
    }
    else{
        return (
            <SafeAreaView>
            <Box
                width={"100%"}
                height={"100%"}
                alignItems={"center"}
                justifyContent={"center"}
            >
                <Text> Post not found </Text>
            </Box>
            </SafeAreaView>
        )
    }
}
