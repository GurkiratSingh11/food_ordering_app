import { Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Redirect, Slot } from "expo-router";


export default function AuthLayout() {
          const isAuthenticated = false; 

    if(isAuthenticated) return <Redirect href="/" />
    return (
        <SafeAreaView>
            <Text>Auth Layout</Text>
            <Slot/>
        </SafeAreaView>
    )
}