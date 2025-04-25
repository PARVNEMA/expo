import {
	View,
	Text,
	TouchableOpacity,
	StyleSheet,
} from "react-native";
import React from "react";

const Button = ({ title, onpress }: any) => {
	return (
		<TouchableOpacity
			style={styles.button}
			onPress={() => onpress()}
			activeOpacity={0.8}
		>
			<Text style={{ color: "white" }}>{title}</Text>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	button: {
		alignItems: "center",
		backgroundColor: "blue",
		padding: 10,
		marginVertical: 10,
		width: "35%",
		borderRadius: 5,
	},
});
export default Button;
