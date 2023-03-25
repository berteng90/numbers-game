import { Text, View, StyleSheet } from "react-native";
import Colors from "../../constants/colors";
const RoundBar = ({ round, guess }) => {
  return (
    <View style={styles.rootContainer}>
      <View style={styles.roundContainer}>
        <Text style={styles.roundText}>Round: {round}</Text>
      </View>
      <View style={styles.roundContainer}>
        <Text style={styles.roundText}>Opponent's Guess {guess}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    flexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: "space-between",
    backgroundColor: Colors.accent500,
    borderRadius: 50,
    borderWidth: 2,
    marginVertical: 6,
    elevation: 3,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 3,
  },
  roundContainer: {
    padding: 16,
  },
  roundText: {
    fontFamily: "open-sans",
    fontWeight: "500",
    fontSize: 16,
  },
});
export default RoundBar;
