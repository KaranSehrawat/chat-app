import { createAuthClient } from "better-auth/react";
import { expoClient } from "@better-auth/expo/client";
import * as SecureStore from "expo-secure-store";

export const authClient = createAuthClient({ 
    baseURL: "http://192.168.31.150:3000",
    plugins: [
        expoClient({
            scheme: "chatappai",
            storagePrefix: "chatappai",
            storage: SecureStore,
        }),
    ]
});