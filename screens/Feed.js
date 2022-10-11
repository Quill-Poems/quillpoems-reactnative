import React, { useState, useEffect } from 'react'
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from 'native-base';
import { Box, VStack, Text, Input, Button, Pressable, HStack, Badge, Spacer, Flex, Fab, Icon, Slide, TextArea } from "native-base";
import API from '../services/apiClient';
import PostCard from '../components/PostCard';
import Post from './Post';
import { createNativeStackNavigator  } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from "@expo/vector-icons";

export default function Feed() {
  const Stack = createNativeStackNavigator ();

  return (
    <Stack.Navigator
    initialRouteName="MainFeed"
    screenOptions={{
      headerShown: false
    }}>
              <Stack.Screen name="MainFeed" component={MainFeed} />
              <Stack.Screen name="Post" component={Post} />
              <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator> 
  )
}

function MainFeed(){
    const [isOpen, setIsOpen] = useState(false)
    const [posts , setPosts] = useState(null)
    useEffect(() => {
      async function fetchPosts(){
        const { data } = await API.fetchPosts()
        setPosts(data)
      }
      fetchPosts()
    }, [])
return (
    <SafeAreaView>
        <Box
            width={"100%"}
            height={"100%"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Slide in={isOpen} placement="bottom">
                <CreatePost setIsOpen={setIsOpen} />
            </Slide>

            <Fab onPress={() => setIsOpen(true)} renderInPortal={false} shadow={2} size="lg" icon={<Icon color="white" as={AntDesign} name="plus" size="lg" />} />
            <ScrollView>
            {posts?.map((post, index) => {
                return <PostCard key={index} post={post} />
            })}
            </ScrollView>
          </Box>
    </SafeAreaView>
)
}

function CreatePost({ setIsOpen }){
    return (
        <SafeAreaView>
        <Box
            width={"100%"}
            height={"100%"}
            alignItems={"center"}
            justifyContent={"center"}
            bg="white"
          >
            <Button onPress={() => setIsOpen(false)}>Close</Button>
            <Text>Title</Text>
            <Input />
            <Text>Poem</Text>
            <TextArea h={20} placeholder="Text Area Placeholder" w="75%" maxW="300" />
            <Button>Submit</Button>
          </Box>
        </SafeAreaView>
    )
}


function Profile({ route }){
    const { user } = route.params;
    const [userData, setUserData] = useState(null)
    useEffect(() => {
        async function fetchUser(){
          const { data } = await API.fetchUserData(user)
          setUserData(data) 
      }
        fetchUser()
      }, [])

    if (userData) {return(
        <SafeAreaView>
        <Box
            width={"100%"}
            height={"100%"}
            alignItems={"center"}
            justifyContent={"center"}
            bg="white"
          >
            <ScrollView>
                <Text>{userData.username} {userData.firstName} {userData.lastName} </Text>
                <Text>Followers: {userData.followCount}</Text>
                <Text>Following: {userData.followingCount}</Text>
            <Text> Posts </Text>
            {userData?.writtenPosts?.map((post, index) => {
                return <PostCard post={post} />
                })}
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
                bg="white"
              >
    
              </Box>
              <Text> Profile not found </Text>
            </SafeAreaView>
        )
    }
}
