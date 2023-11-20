import { View, Text } from "react-native";
import React from "react";
import tw from "twrnc";

export default function Home() {
  return (
    <View style={tw`flex-1 justify-center items-center`}>
      <Text style={tw`text-red-500`}>Home</Text>
    </View>
  );
}
