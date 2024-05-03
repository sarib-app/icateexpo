import React, {useEffect,useState} from 'react';
import { View, Text, StyleSheet, Image, ScrollView, FlatList, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; // You can use any icon library you prefer
import Colors from '../GlobalStyles/colors';
import { useNavigation } from '@react-navigation/native';
import CheckCartStatus from '../ProductCart/CheckCartStatus';
import HandleAddCart from '../ProductCart/HandleAddCart';
import AddToCartModal from '../ProductCart/AddToCartModal';
import ViewCart from '../GlobalStyles/ViewCart';
import { useIsFocused } from '@react-navigation/native';
const Home = () => {

const focused = useIsFocused()
  const navigation = useNavigation()

  const [forceCheck,setForceCheck]=useState(false)
  const [showCartButton,setShowCartButton] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(()=>{
    
    existingCartCheck()
     
  },[focused])
  useEffect(()=>{
    existingCartCheck()
  },[forceCheck])
  const handleAddToCart = async (cartItem) => {
    const handleCart = await HandleAddCart(cartItem)
    if(handleCart){
     setForceCheck(!showCartButton)
    }
   };
   
  async function existingCartCheck(){
   const CheckStatusCart = await CheckCartStatus()
  setShowCartButton(CheckStatusCart)
  }

  // Sample data for popular stores, popular products, and categories
  const popularStores = [
    { id: 1, name: 'Coffee Corner', banner: 'https://blog-assets.lightspeedhq.com/img/2021/03/b26bcdcf-blog_coffee-shop-equipment-list_1200x628.jpg', rating: 4.5, description: 'A trendy coffee spot with a wide variety of drinks.',machineId:"AWafp380o7" },
    { id: 2, name: 'Tea House', banner: 'https://oceanlodgeflorida.com/wp-content/uploads/2019/11/coffee-shop-1149155_1920.jpg', rating: 4.2, description: 'A cozy cafe offering delicious pastries and desserts.',machineId:"AWafp380o7" },
    { id: 3, name: 'Coffee House', banner: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8ZEPOtAMa9PG9CpF-Rm9ig_RaCGiW0MKw2HYeOeGLbEfz5qQM2nluTWvACREPnSR8FS8&usqp=CAU', raing: 4.8, description: 'A modern coffee house with a relaxing ambiance.',machineId:"AWafp380o7" },
    // Add more stores here
  ];

  const popularProducts = [
    { id: 11941, title: '花生碎颗粒', picture: "http://qiniu.aiwan88.net/20220727165358338.jpg", desc: 'Dark Latte: Pure Black beans with oil',price:"1",machineId:"AWafp380o7" },
    // Add more products here
  ];

  const categories = [
    { id: 1, name: 'Latte', icon: 'local-cafe' },
    { id: 2, name: 'Coffee', icon: 'free-breakfast' },
    { id: 3, name: 'Tea', icon: 'local-drink' },
    { id: 4, name: 'Category 4', icon: 'local-cafe' },
    // Add more categories here
  ];

  return (
    <View  style={styles.container}>

    <ScrollView nestedScrollEnabled={true}>
      {/* Top banner */}
      <Image source={{ uri: 'https://t4.ftcdn.net/jpg/03/14/86/17/360_F_314861732_1MnoYhjA81pqeibaEJgAfXJBr0XERD5I.jpg' }} style={styles.bannerImage} />

      {/* Collect Daily Rewards */}
      <View style={styles.rewardContainer}>
        <Icon name="card-giftcard" size={30} color="#fff" />
        <Text style={styles.rewardText}>Collect Your Daily Login Rewards</Text>
      </View>

  
      {/* Categories */}
      {/* <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Categories</Text>
        <FlatList
          data={categories}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.categoryContainer}>
              <Icon name={item.icon} size={30} color="#B7DFA1" />
              <Text style={styles.categoryName}>{item.name}</Text>
            </View>
          )}
        />
      </View> */}

      {/* Popular Stores */}
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Popular Stores</Text>
        <FlatList
          data={popularStores}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <Pressable
            onPress={()=> navigation.navigate("StoreDetailScreen",{item:item})}
            style={styles.storeCard}>
              <Image source={{ uri: item.banner }} style={styles.storeBanner} />
              <View style={styles.storeInfoContainer}>
                <Text style={styles.storeName}>{item.name}</Text>
                <View style={styles.storeRatingContainer}>
                  <Icon name="star" size={18} color="#FFD700" />
                  <Text style={styles.storeRating}>{item.rating}</Text>
                </View>
                <Text style={styles.storeDescription}>{item.description}</Text>
              </View>
            </Pressable>
          )}
        />
      </View>

      {/* Popular Products */}
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Popular Products</Text>
        <FlatList
          data={popularProducts}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.productCard}>
              <Image source={{ uri: item.picture }} style={styles.productImage} />
              <Text style={styles.productName}>{item.title}</Text>
              <Text style={styles.productDescription}>{item.desc}</Text>
              <View
              style={{flexDirection:"row",alignItems:'center',justifyContent:'space-between'}}
              >


              <Text style={styles.productName}>CAD {item.price}</Text>
              <Icon 
              onPress={()=> 
                {
                  setSelectedProduct(item)
                  setModalVisible(true)
                }
              }
              name="add-circle" size={18} color="#FFD700" style={{marginRight:5}}/>

              </View>

            </View>
          )}
        />
      </View>

 
    <View style={{width:10,height:80}}>

    </View>
    </ScrollView>
    {
  selectedProduct !=null &&
  <AddToCartModal
  product={selectedProduct}
  visible={modalVisible}
  onClose={() => setModalVisible(false)}
  onAddToCart={handleAddToCart}
  />
}
      {
      showCartButton === true &&
    <ViewCart/>
    }
    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BgColor, // Dark background color
  },
  bannerImage: {
    width: '100%',
    height: 200,
  },
  rewardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.Dark,
    paddingVertical: 15,
  },
  rewardText: {
    color: '#fff',
    fontSize: 18,
    marginLeft: 10,
  },
  carouselContainer: {
    height: 200, // Adjust the height as per your design
    // Add additional styles for the carousel container if needed
  },
  sectionContainer: {
    marginVertical: 20,
  },
  sectionTitle: {
    marginLeft:5,
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: Colors.FontColorI, // Primary color for section titles
  },
  categoryContainer: {
    marginRight: 20,
    alignItems: 'center',
  },
  categoryName: {
    marginTop: 5,
    color: Colors.FontColorI, // Primary color for category names
  },
  storeCard: {
    marginRight: 10,
    marginLeft:5,
    backgroundColor: Colors.Dark,
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 2,
    width: 200,
    height: 250,
  },
  storeBanner: {
    width: '100%',
    height: 120,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  storeInfoContainer: {
    padding: 10,
  },
  storeName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  storeRatingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  storeRating: {
    marginLeft: 5,
    color: '#FFD700',
  },
  storeDescription: {
    marginTop: 5,
    color: '#B7DFA1',
  },
  productCard: {
    marginRight: 10,
    marginLeft:5,
    backgroundColor: Colors.Dark,
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 2,
    width: 150,
    paddingBottom:5
    // height: 200,
  },
  productImage: {
    width: '100%',
    height: 100,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    padding: 5,
  },
  productDescription: {
    color: '#B7DFA1',
    paddingLeft: 5,
  },
});

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#1A1A1A', // Dark background color
//   },
//   bannerImage: {
//     width: '100%',
//     height: 200,
//   },
//   rewardContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: '#333',
//     paddingVertical: 15,
//   },
//   rewardText: {
//     color: '#fff',
//     fontSize: 18,
//     marginLeft: 10,
//   },
//   carouselContainer: {
//     height: 200, // Adjust the height as per your design
//     // Add additional styles for the carousel container if needed
//   },
//   sectionContainer: {
//     marginVertical: 20,
//   },
//   sectionTitle: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginBottom: 10,
//     color: Colors.FontColorI, // Primary color for section titles
//   },
//   categoryContainer: {
//     marginRight: 20,
//     alignItems: 'center',
//   },
//   categoryName: {
//     marginTop: 5,
//     color: Colors.FontColorI, // Primary color for category names
//   },
//   storeCard: {
//     marginRight: 20,
//     backgroundColor: '#333',
//     borderRadius: 10,
//     overflow: 'hidden',
//     elevation: 2,
//     width: 200,
//     height: 250,
//   },
//   storeBanner: {
//     width: '100%',
//     height: 120,
//     borderTopLeftRadius: 10,
//     borderTopRightRadius: 10,
//   },
//   storeInfoContainer: {
//     padding: 10,
//   },
//   storeName: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#fff',
//   },
//   storeRatingContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginTop: 5,
//   },
//   storeRating: {
//     marginLeft: 5,
//     color: '#FFD700',
//   },
//   storeDescription: {
//     marginTop: 5,
//     color: '#B7DFA1',
//   },
//   productCard: {
//     marginRight: 20,
//     backgroundColor: '#333',
//     borderRadius: 10,
//     overflow: 'hidden',
//     elevation: 2,
//     width: 150,
//     height: 200,
//   },
//   productImage: {
//     width: '100%',
//     height: 100,
//     borderTopLeftRadius: 10,
//     borderTopRightRadius: 10,
//   },
//   productName: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#fff',
//     padding: 5,
//   },
//   productDescription: {
//     color: '#B7DFA1',
//     padding: 5,
//   },
// });

export default Home;
