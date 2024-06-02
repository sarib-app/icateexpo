import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, FlatList, TouchableOpacity } from 'react-native';

// Mock data for search results
import { useNavigation } from '@react-navigation/native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import HeaderScreens from '../GlobalStyles/HeaderScreens';
import Colors from '../GlobalStyles/colors';
import RestaurantListItem from '../SearchResult/RestaurantListItem';
export const searchData = [
  { id: 1, name: 'Espresso', category: 'Product' },
  { id: 2, name: 'Cappuccino', category: 'Product' },
  { id: 3, name: 'Coffee Corner', category: 'Shop' },
  { id: 4, name: 'Tea House', category: 'Shop' },
  // Add more data as needed
];


const SearchScreen = () => {
  const navigation = useNavigation()
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('Shop'); // Default selection

  // Function to handle search query and update results
  const handleSearch = (query) => {
    setSearchQuery(query)
    const formdata = new FormData();
formdata.append("query",query);

const requestOptions = {
  method: "POST",
  body: formdata,
  redirect: "follow"
};

fetch("https://zhang.alphanitesofts.net/api/search_store", requestOptions)
  .then((response) => response.json())
  .then((result) => {
    if(result.status === "200"){
      setSearchResults(result.stores)
    }
    console.log(result)})
  .catch((error) => console.error(error));
  };

  return (
    <>
        <HeaderScreens 
        ScreenName={"Search Store"}
        />
    <View style={styles.container}>
     
      <View style={styles.topSection}>
     
        <TextInput
          style={styles.searchInput}
          placeholderTextColor={"white"}
          placeholder={`search by ${selectedCategory}`}
          onChangeText={handleSearch}
          value={searchQuery}
        />
        {/* <TouchableOpacity
          style={styles.categoryButton}
          onPress={() => setSelectedCategory(selectedCategory === 'Product' ? 'Shop' : 'Product')}
        >
          <Text style={styles.categoryButtonText}>
            Search by {selectedCategory === 'Product' ? 'Store' : 'Product'}
          </Text>
        </TouchableOpacity> */}
      </View>

      <FlatList
        data={searchResults}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <RestaurantListItem restaurant={item} />}
      />
      {/* <FlatList
        data={searchResults}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Pressable 
          onPress={()=> navigation.navigate("ResturantSearchResult",  {query:searchQuery})}
          style={styles.resultItem}>
            <Text style={styles.resultName}>{item.name}</Text>
            <Text style={styles.resultCategory}>{item.category}</Text>
          </Pressable>
        )}
      /> */}
    </View>
    </>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: Colors.Dark, // Dark background color
  },
  topSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  searchInput: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: '#444', // Darker border color
    borderRadius: 8,
    padding: 10,
    color: '#FFF', // Text color
  },
  categoryButton: {
    marginLeft: 12,
    backgroundColor: '#E62B1E', // Primary color
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  categoryButtonText: {
    color: '#FFF', // Text color
    fontWeight: 'bold',
  },
  resultItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#444', // Darker border color
    paddingVertical: 10,
  },
  resultName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFF', // Text color
  },
  resultCategory: {
    color: '#999', // Lighter text color
  },
});

export default SearchScreen;
