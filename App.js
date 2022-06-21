import { useEffect, useState } from "react";
import { ScrollView, View } from "react-native";
import { Searchbar, Text } from "react-native-paper";
import AppBar from "./assets/Components/AppBar";
import MealsCard from "./assets/Components/MealsCard";

export default function App() {
  const [searchBar, setSearchBar] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`)
      .then((res) => res.json())
      .then((data) => setMeals(data.meals));
  }, [searchTerm]);

  const search = () => {
    setSearchBar(
      <Searchbar
        placeholder="Search"
        onChangeText={(newText) => setSearchTerm(newText)}
      />
    );
  };
  return (
    <View>
      <AppBar
        search={search}
        setSearchBar={setSearchBar}
        searchBar={searchBar}
      ></AppBar>
      {searchBar}
      <ScrollView>
        {meals === null ? (
          <Text
            style={{
              fontSize: 20,
              textAlign: "center",
              marginTop: 30,
              color: "red",
            }}
          >
            No meals found!
          </Text>
        ) : (
          meals.map((meal) => <MealsCard meal={meal}></MealsCard>)
        )}
      </ScrollView>
    </View>
  );
}
