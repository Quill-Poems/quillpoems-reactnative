import React, { useState } from 'react'
import { SafeAreaView } from "react-native-safe-area-context";
import { Box, VStack, Text, Input, Button } from "native-base";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  return (
    <SafeAreaView>
    <Box
        width={"100%"}
        height={"100%"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Text bold fontSize={60} style={{ color: "#AAD6A0" }}>
          Flik.
        </Text>
        <Text
          style={{
            fontWeight: "500",
            position: "relative",
            bottom: 15,
            fontSize: 15,
          }}
        >
          The photo hunting app
        </Text>
        <VStack width={"100%"} space={3} alignItems={"center"}>
          <Input
            width={"80%"}
            h={10}
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.currentTarget.value)}
            onChangeText={(text) => setEmail(text)}
          />
          <Input
            width={"80%"}
            h={10}
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.currentTarget.value)}
            onChangeText={(text) => setPassword(text)}
          />
          <Button
            width={"80%"}
            onPress={Login}
            style={{ backgroundColor: "black" }}
          >
            Login
          </Button>
          <Text>
            Don't have an account?{" "}
            <Text bold onPress={() => navigation.navigate("Register")}>
              Register here.
            </Text>
          </Text>
        </VStack>
      </Box>
    </SafeAreaView>
  )
}