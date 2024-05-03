import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Colors from '../GlobalStyles/colors';
import HeaderScreens from '../GlobalStyles/HeaderScreens';
import { useNavigation } from '@react-navigation/native';
import styles from './Styles';
const CartDetailScreen = () => {
  const navigation =useNavigation()
  const [cartItems, setCartItems] = useState([]);
  const [cartGoods,setCartGoods] = useState([])
  const [totalBill, setTotalBill] = useState(0);

  useEffect(() => {
    // Fetch cart items from AsyncStorage here
    fetchCartItems();
  }, []);

  const fetchCartItems = async () => {
    try {
      const cartData = await AsyncStorage.getItem('cartData');
      const cartGoods = await AsyncStorage.getItem('cartGoods');

      if (cartData) {
        const parsedCartData = JSON.parse(cartData);
        const parsedcartGoods = JSON.parse(cartGoods);

        setCartItems(parsedCartData);
        setCartGoods(parsedcartGoods);
        console.log(parsedCartData , "gooddss =>>> " ,parsedcartGoods)
        setTotalBill(calculateSubtotal(parsedCartData));
      }
    } catch (error) {
      console.error('Error fetching cart items:', error);
    }
  };

  const calculateSubtotal = (items) => {
    return items.reduce((total, item) => total + item.totalPrice, 0);
  };

  const calculateGST = () => {
    const GSTPercentage = 0; // 10% GST
    return totalBill * GSTPercentage;
  };

  const handleDeleteItem = async (itemIndex, itemPrice) => {
    const updatedCartItems = [...cartItems];
    const updatedcarGoods = [...cartGoods];
    updatedCartItems.splice(itemIndex, 1);
    updatedcarGoods.splice(itemIndex, 1);
    setCartGoods(updatedcarGoods);
    setCartItems(updatedCartItems);
    // Save the updated cart items to AsyncStorage if needed
    try {
      await AsyncStorage.setItem('cartData', JSON.stringify(updatedCartItems));
      await AsyncStorage.setItem('cartGoods', JSON.stringify(updatedcarGoods));
      console.log("goods>>>",updatedcarGoods)
    } catch (error) {
      console.error('Error saving cart items:', error);
    }
  
    // Update the total bill by subtracting the item price
    setTotalBill((prevTotalBill) => prevTotalBill - itemPrice);
    // Update the total bill by subtracting the item price
  };

  const renderCartItem = ({ item, index }) => (
    <View style={styles.cartItemContainer}>
      <Image source={{ uri: item.product.picture }} style={styles.productImage} />
      <View style={styles.productDetails}>
        <Text style={styles.productName}>{item.product.title}</Text>
        <Text style={styles.productDescription}>{item.product.desc}</Text>
        <View style={{flexDirection:'row',alignItems:'center'}}>
        <Text style={styles.productPrice}>Price: {item.product.price}</Text>
        <Text style={styles.quantityText}>  Quantity: {item.quantity}</Text>
        </View>

        <View style={styles.addOnsContainer}>
     
              <Text style={styles.addOnsText}>Add-ons:</Text>
          <View style={styles.addOnsOptions}>
            {item.addOns.sugar && <Text style={styles.addOnOptionText}>Sugar</Text>}
            {item.addOns.brownSugar && <Text style={styles.addOnOptionText}>Brown Sugar</Text>}
            <Text style={styles.addOnOptionText}>Sweet: 1</Text>
                        {/* Add more add-ons here if needed */}
          </View>
         
        
        </View>
        <Text style={styles.totalPriceText}>Total Price: {item.totalPrice}</Text>
        <TouchableOpacity
        style={styles.deleteButton}
        onPress={() => handleDeleteItem(index, item.totalPrice)}
      >
        <Icon name="trash" size={20} color="#161616" />
      </TouchableOpacity>
      </View>

    </View>
  );

  const calculateTotalPrice = () => {
    const GST = calculateGST();
    return totalBill + GST;
  };













  // const makeApiCall = async () => {
  //   const apiUrl = 'https://f.aiwan88.net/cp/coffee/v2/genPickUpCode';
  
  //   const token = '4YgUjOLnZ6x6b3tPVOCBMX5y';
  //   const machineCode = 'AWafp380o7';
  //   const jsonStr = JSON.stringify({
  //     createTime: '2023-10-10 10:00:00',
  //     payTime: '2023-10-10 10:10:10',
  //     goods: [
  //       { id: 11937, count: 2, temp: 1, sweet: 1 },
  //       { id: 11938, count: 1, temp: 1, sweet: 1 },
  //     ],
  //   });
  
  //   const formData = new FormData();
  //   formData.append('token', token);
  //   formData.append('machineCode', machineCode);
  //   formData.append('jsonStr', jsonStr);
  
  //   try {
  //     const response = await fetch(apiUrl, {
  //       method: 'POST',
  //       body: formData,
  //     });
  
   
  
  //     const data = await response.json();
  //     console.log('API call result:', data);
  
  //     // Process the result as needed, for example, display the pickCode in an alert
  //   } catch (error) {
  //     console.error('API call failed:', error);
  //     // Handle the error, for example, display an error alert
  //   }
  // };


  const makeApiCall = async () => {
    const apiUrl = 'https://f.aiwan88.net/cp/coffee/v2/genPickUpCode';
  
    const token = '4YgUjOLnZ6x6b3tPVOCBMX5y';
    const machineCode = 'AWafp380o7';
    const jsonStr = JSON.stringify({
      createTime: '2023-10-10 10:00:00',
      payTime: '2023-10-10 10:10:10',
      goods: [
        { id: 11937, count: 2, temp: 1, sweet: 1 },
        { id: 11938, count: 1, temp: 1, sweet: 1 },
      ],
    });
  
    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // 'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({
          token:'4YgUjOLnZ6x6b3tPVOCBMX5y',
          code: machineCode,
          jsonStr: jsonStr,
        }),
      });
  
      const data = await response.json();
      console.log('API call result:', data);
  
      // Process the result as needed, for example, display the pickCode in an alert
    } catch (error) {
      console.error('API call failed:', error);
      // Handle the error, for example, display an error alert
    }
    navigation.navigate("OrderTakenScreen")
  };
  
  // Example us






  return (
    <View style={styles.container}>
      <HeaderScreens
      ScreenName={"Confirm Cart Detail"}
      />
      <View 
      style={{}}
      >

      </View>
      <FlatList
        data={cartItems}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderCartItem}
        contentContainerStyle={styles.flatListContent}
      />
      <View style={styles.priceDetails}>
      <Text style={styles.priceText}>Make payment at shop</Text>

        <Text style={styles.priceText}>Subtotal: ${totalBill.toFixed(2)}</Text>
        <Text style={styles.priceText}>GST (0%): ${calculateGST().toFixed(2)}</Text>
        <Text style={styles.priceText}>Total Price: ${calculateTotalPrice().toFixed(2)}</Text>
      </View>
      <TouchableOpacity 
      // onPress={()=> navigation.navigate("OrderTakenScreen")}
      onPress={()=> makeApiCall()}

      style={styles.proceedButton}>
        <Text style={styles.proceedButtonText}>Proceed to order - Total: ${calculateTotalPrice().toFixed(2)}</Text>
      </TouchableOpacity>
    </View>
  );
};



export default CartDetailScreen
