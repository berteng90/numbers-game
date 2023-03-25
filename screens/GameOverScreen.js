import {
  View,
  Image,
  StyleSheet,
  Text,
  useWindowDimensions,
  ScrollView,
} from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";
import Colors from "../constants/colors";
const GameOverScreen = ({ userNumber, rounds, resetGame }) => {
  const { width, height } = useWindowDimensions();

  let imageSize = 300;
  if (width <= 360) {
    imageSize = 150;
  }

  if (height < 400) {
    imageSize = 80;
  }

  console.log(`Width: ${width}`);
  console.log(`Height: ${height}`);

  const imageStyle = {
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize / 2,
  };
  return (
    <ScrollView style={styles.screen}>
      <View style={styles.rootContainer}>
        <Title>GAME OVER!</Title>
        <View>
          <View style={[styles.imageContainer, imageStyle]}>
            <Image
              source={require("../assets/images/success.png")}
              style={styles.image}
              resizeMode="cover"
            />
          </View>
        </View>
        <Text style={styles.summaryText}>
          Your phone needed <Text style={styles.highlight}>{rounds}</Text>{" "}
          rounds to guess the number{" "}
          <Text style={styles.highlight}>{userNumber}</Text>
        </Text>
        <PrimaryButton onPress={resetGame}>Start New Game</PrimaryButton>
      </View>
    </ScrollView>
  );
};

export default GameOverScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  rootContainer: {
    flex: 1,
    padding: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    // width: deviceWidth <= 360 ? 150 : 300,
    // height: deviceWidth <= 360 ? 150 : 300,
    // borderRadius: deviceWidth <= 360 ? 75 : 150,
    overflow: "hidden",
    borderWidth: 3,
    borderColor: Colors.primary800,
    margin: 36,
  },
  image: {
    width: "100%",
    height: "100%",
  },

  summaryText: {
    fontFamily: "open-sans",
    fontSize: 24,
    textAlign: "center",
    marginBottom: 24,
  },

  highlight: {
    fontFamily: "open-sans-bold",
    color: Colors.primary500,
  },
});
