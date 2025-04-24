import { View, Text, TextInput } from "react-native";
// import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, Platform } from "react-native";
import { Image } from "expo-image";
// import { Image } from "expo-image";
const signin = () => {
	return (
		<SafeAreaView style={{ height: "100%", padding: 10 }}>
			<View>
				<Text style={styles.titleContainer}>SignIn</Text>
				<Image
					style={styles.image}
					source="https://img.freepik.com/free-photo/computer-security-with-login-password-padlock_107791-16191.jpg?ga=GA1.1.943142825.1745488067&semt=ais_hybrid&w=740"
					// placeholder={{ blurhash }}
					contentFit="cover"
					transition={1000}
				/>
			</View>
			<View style={styles.inputbox}>
				<Text style={styles.text}>Email</Text>
				<TextInput
					placeholder="Email"
					style={styles.input}
				/>
			</View>
			<View style={styles.inputbox}>
				<Text style={styles.text}>Password</Text>
				<TextInput
					placeholder="Password"
					style={styles.input}
				/>
			</View>
		</SafeAreaView>
	);
};
const styles = StyleSheet.create({
	image: {
		width: "80%",
		height: 220,
		margin: "auto",
	},
	titleContainer: {
		display: "flex",
		flexDirection: "row",
		fontSize: 30,
		color: "white",
		alignItems: "center",
		justifyContent: "center",
	},
	stepContainer: {
		gap: 8,
		marginBottom: 8,
	},
	reactLogo: {
		height: 178,
		width: 290,
		bottom: 0,
		left: 0,
		position: "absolute",
	},
	text: {
		color: "white",
	},
	input: {
		backgroundColor: "white",
		width: "80%",
		borderRadius: 10,
	},
	inputbox: {
		display: "flex",
		width: "100%",
	},
});

export default signin;
