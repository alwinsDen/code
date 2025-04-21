import { Image, View } from "react-native";

import { ThemedText } from "@/components/ThemedText";

export default function HomeScreen() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        gap: 10,
      }}
    >
      <Image
        source={require("@/assets/images/dashwave.png")}
        style={{ width: 160, height: 170 * (220 / 170) }}
      />
      <ThemedText>
        Expo 52 template from{" "}
        <ThemedText
          style={{
            fontFamily: "SpaceMono",
            fontWeight: "bold",
            fontStyle: "italic",
          }}
        >
          Dashwave.io
        </ThemedText>
      </ThemedText>
    </View>
  );
}
