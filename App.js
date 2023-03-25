import { useEffect, useState } from "react";
import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import Colors from "./constants/colors";
import GameOverScreen from "./screens/GameOverScreen";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";

const loadFonts = async () => {
  await Font.loadAsync({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });
};

export default function App() {
  const [isReady, setIsReady] = useState(false);
  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(true);
  const [rounds, setRounds] = useState(1);
  useEffect(() => {
    const loadAsync = async () => {
      try {
        await SplashScreen.preventAutoHideAsync();
        await loadFonts();
      } catch (error) {
        console.warn(error);
      } finally {
        setIsReady(true);
        await SplashScreen.hideAsync();
      }
    };
    loadAsync();
  }, []);

  if (!isReady) {
    return null;
  }

  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
    setGameIsOver(false);
  }

  const gameOverHandler = () => {
    setGameIsOver(true);
  };

  const updateRoundHandler = () => {
    setRounds(rounds + 1);
  };

  const resetGameHandler = () => {
    setUserNumber();
    setGameIsOver(true);
    setRounds(1);
  };

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;

  if (userNumber) {
    screen = (
      <GameScreen
        updateRound={updateRoundHandler}
        userNumber={userNumber}
        onGameOver={gameOverHandler}
        currentRound={rounds}
      />
    );
  }
  if (gameIsOver && userNumber) {
    screen = (
      <GameOverScreen
        userNumber={userNumber}
        rounds={rounds}
        resetGame={resetGameHandler}
      />
    );
  }
  console.log(rounds);
  return (
    <LinearGradient
      colors={[Colors.primary700, Colors.accent500]}
      style={styles.rootScreen}
    >
      <ImageBackground
        source={require("./assets/images/background.png")}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
});
