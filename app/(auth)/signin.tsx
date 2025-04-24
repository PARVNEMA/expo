import {
	View,
	Text,
	TextInput,
	TouchableOpacity,
	KeyboardAvoidingView,
	Platform,
	StyleSheet,
	ScrollView,
	TouchableWithoutFeedback,
	Keyboard,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "expo-image";
import { useRouter } from "expo-router";

const SignIn = () => {
	const router = useRouter();

	return (
		<SafeAreaView
			style={{ flex: 1, backgroundColor: "black" }}
		>
			<KeyboardAvoidingView
				behavior={
					Platform.OS === "ios" ? "padding" : "height"
				}
				keyboardVerticalOffset={40}
				style={{ flex: 1 }}
			>
				<TouchableWithoutFeedback
					onPress={Keyboard.dismiss}
				>
					<ScrollView
						contentContainerStyle={{ flexGrow: 1 }}
					>
						<View style={styles.secondContainer}>
							<View style={{ width: "100%" }}>
								<Text style={styles.titleContainer}>
									SignIn
								</Text>
								<View style={styles.inputbox}>
									<Text style={styles.text}>Email:</Text>
									<TextInput
										placeholder="Email"
										style={styles.input}
									/>
								</View>
								<View style={styles.inputbox}>
									<Text style={styles.text}>Password:</Text>
									<TextInput
										placeholder="Password"
										style={styles.input}
										secureTextEntry
									/>
								</View>
							</View>
							<TouchableOpacity
								style={styles.button}
								onPress={() => router.navigate("/signup")}
							>
								<Text style={{ color: "white" }}>
									Sign-In
								</Text>
							</TouchableOpacity>
						</View>
					</ScrollView>
				</TouchableWithoutFeedback>
			</KeyboardAvoidingView>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	image: {
		width: "80%",
		height: 220,
		alignSelf: "center",
	},
	titleContainer: {
		fontSize: 30,
		color: "white",
		textAlign: "center",
		marginVertical: 2,
		marginBottom: 20,
	},
	secondContainer: {
		flex: 1,
		alignItems: "center",
		// justifyContent: "center",
		justifyContent: "space-around",
		padding: 10,
	},
	text: {
		color: "white",
		marginBottom: 10,
	},
	input: {
		backgroundColor: "white",
		width: "80%",
		borderRadius: 10,
		paddingHorizontal: 10,
		paddingVertical: 10,
		marginBottom: 30,
	},
	inputbox: {
		width: "100%",
		alignItems: "center",
		borderColor: "black",
	},
	button: {
		alignItems: "center",
		backgroundColor: "blue",
		padding: 10,
		marginVertical: 10,
		width: "35%",
		borderRadius: 5,
		marginTop: 20,
	},
});

export default SignIn;
