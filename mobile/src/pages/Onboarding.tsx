import { Image, Text, StyleSheet } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import Onboarding from "react-native-onboarding-swiper";

import { useNavigation } from "@react-navigation/native";
import { RectButton } from "react-native-gesture-handler";

import World from "../assets/world.png";
import Child from "../assets/child.png";

export default function CustomOnboarding() {
  const navigation = useNavigation();

  function handleNavigateToOrphanageMap() {
    navigation.navigate("OrphanagesMap");
  }

  const Next = ({ ...props }) => (
    <RectButton style={styles.next} {...props}>
      <Feather name="arrow-right" size={25} color="#15B6D6" />
    </RectButton>
  );

  const Done = ({ ...props }) => (
    <RectButton style={styles.done} {...props}>
      <Feather name="check" size={25} color="#15B6D6" />
    </RectButton>
  );

  return (
    <Onboarding
      onDone={handleNavigateToOrphanageMap}
      NextButtonComponent={Next}
      DoneButtonComponent={Done}
      bottomBarColor={"#F2F3F5"}
      showSkip={false}
      pages={[
        {
          backgroundColor: "#F2F3F5",
          image: <Image source={World} style={styles.image} />,
          title: <Text style={styles.title}>Leve felicidade para o mundo</Text>,
          subtitle: (
            <Text style={styles.subtitle}>
              Visite orfanatos e mude o dia de muitas crianças
            </Text>
          ),
        },
        {
          backgroundColor: "#F2F3F5",
          image: <Image source={Child} style={styles.image} />,
          title: (
            <Text style={styles.title2}>
              Escolha um orfanato no mapa e faça uma visita
            </Text>
          ),
          subtitle: "",
        },
      ]}
    />
  );
}

const styles = StyleSheet.create({
  title: {
    maxWidth: 300,
    color: "#0089A5",
    fontFamily: "700",
    fontSize: 48,
    lineHeight: 48,
    position: "relative",
    top: -40,
  },

  title2: {
    maxWidth: 280,
    color: "#0089A5",
    fontFamily: "700",
    fontSize: 30,
    lineHeight: 36,
    textAlign: "right",
    position: "relative",
    top: -40,
  },

  subtitle: {
    maxWidth: 290,
    fontFamily: "600",
    fontSize: 20,
    color: "#5C8599",
    position: "relative",
    top: -40,
  },

  image: {
    position: "relative",
    top: -60,
  },

  next: {
    width: 56,
    height: 56,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#D1EDF2",
    marginRight: 24,
    marginBottom: 24,
  },

  done: {
    width: 56,
    height: 56,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#D1EDF2",
    marginBottom: 24,
    marginRight: 24,
  },

  dot: {
    backgroundColor: "#BECFD8",
    width: 8,
    height: 4,
  },
});
