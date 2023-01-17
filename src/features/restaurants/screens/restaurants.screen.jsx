import { StyleSheet, View, SafeAreaView, StatusBar } from "react-native";
import * as React from "react";
import { Searchbar } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import styled from "styled-components/native";

const SafeArea = styled.SafeAreaView`
  flex: 1;
  marginTop: ${StatusBar.currentHeight}px;
`;

const SearchContainer = styled.View`
  background-color: #13005A;
  padding: 20px;
`;

const RestaurantListContainer = styled.View`
  flex: 1;
  padding: 16px;
  background-color: #00337C;
`;

export const RestaurantsScreen = () => {
  const [searchQuery, setSearchQuery] = React.useState("");
  const onChangeSearch = (query) => setSearchQuery(query);

  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar
          style={{ borderRadius: 15 }}
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
      </SearchContainer>
      <RestaurantListContainer>
        <RestaurantInfoCard />
      </RestaurantListContainer>
    </SafeArea>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  search: {
    backgroundColor: "green",
    padding: 20,
  },
  list: {
    flex: 1,
    padding: 16,
    backgroundColor: "beige",
  },
});
