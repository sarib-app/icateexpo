import AsyncStorage from "@react-native-async-storage/async-storage";

const HandleAddCart = async (cartItem) => {
    try {
   
      // Get existing cartData from AsyncStorage (if any)
      const existingCartData = await AsyncStorage.getItem("cartData");
      const existingCartGoods = await AsyncStorage.getItem("cartGoods");

  
      // Parse the existingCartData from JSON string to an array (if it exists)
      const cartDataArray = existingCartData ? JSON.parse(existingCartData) : [];
      const CartGoods = existingCartGoods ? JSON.parse(existingCartGoods) : [];

      // Check if a similar cart item (same product with same add-ons) already exists
      const existingCartItem = cartDataArray.find(
        (item) =>
          item.product.id === cartItem.product.id &&
          JSON.stringify(item.addOns) === JSON.stringify(cartItem.addOns)
      );
      const existingGoodItem = CartGoods.find(
        (item) =>
          item.id === cartItem.product.id 
      );
  console.log(existingCartGoods)
      if (existingCartItem) {
        // Update quantity and total price of the existing cart item
        existingCartItem.quantity += cartItem.quantity;
        existingCartItem.totalPrice += cartItem.totalPrice;
        existingGoodItem.count += cartItem.quantity
      } else {
        // Add the new cartItem to the cartDataArray
        const goods ={
          id:cartItem.product.id,
          count:cartItem.quantity,
          temp:1,
          sweet:1
        }
        cartDataArray.push(cartItem);
      CartGoods.push(goods)
      }
  
      // Convert the updated cartDataArray back to a JSON string
      const updatedCartData = JSON.stringify(cartDataArray);
      const updatedCartGoods = JSON.stringify(CartGoods);

      // Save the updated cartData back to AsyncStorage
      await AsyncStorage.setItem("cartData", updatedCartData);
      await AsyncStorage.setItem("cartGoods", updatedCartGoods);

      const newCartData = await AsyncStorage.getItem("cartData");
     return "added"  
      // console.log("Data saved successfully!", newCartData);
    } catch (error) {
        console.log("Error while handling data: ", error);
        return "not added"
    }
  };

  export default HandleAddCart