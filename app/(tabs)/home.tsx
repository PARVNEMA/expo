import { View, Text, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = () => {
	const [data, setdata] = useState([]);

	const fetchallproducts = async () => {
		try {
			const res = await fetch(
				"https://dummyjson.com/products"
			);
			const response = await res.json();
			console.log("Fetched products:", response.products);
			const sliced = response.products.slice(1, 10);
			setdata(sliced);
		} catch (error) {
			console.error("Error fetching products:", error);
		}
	};

	useEffect(() => {
		console.log("fetching products");
		fetchallproducts();
	}, []);

	const Item = ({ item }: any) => (
		<View style={{ padding: 10 }}>
			<Text>{item.title}</Text>
		</View>
	);

	return (
		<SafeAreaView style={{ flex: 1 }}>
			<FlatList
				data={data}
				renderItem={({ item }) => <Item item={item} />}
				keyExtractor={(item) => item?.id.toString()}
			/>
		</SafeAreaView>
	);
};

export default Home;
