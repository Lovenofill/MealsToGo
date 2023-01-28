import {
  StyleSheet,
  View,
  SafeAreaView,
  StatusBar,
  FlatList,
} from "react-native";
import React, { useState, useContext } from "react";
import { Searchbar } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import styled from "styled-components/native";
import { Spacer } from "../../../components/spacer/spacer.component";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";

const SearchContainer = styled.View`
  background-color: #13005a;
  padding: 20px;
`;

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

export const RestaurantsScreen = () => {
  const [searchQuery, setSearchQuery] = React.useState("");
  const onChangeSearch = (query) => setSearchQuery(query);
  const restaurantContext = useContext(RestaurantsContext);
  console.log(restaurantContext);

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
      <RestaurantList
        data={restaurantContext.restaurants}
        renderItem={() => (
          <Spacer position="bottom" size="large">
            <RestaurantInfoCard />
          </Spacer>
        )}
        keyExtractor={(item) => item.name}
        contentContainerStyle={{ padding: 16 }}
      />

      {/* <RestaurantInfoCard /> */}
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
