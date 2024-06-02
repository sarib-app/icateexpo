import React, { useState } from 'react';
import {

  Text,
View,
SafeAreaView,
Image,
ImageBackground,
Pressable,
ScrollView
} from 'react-native';
import styles from './Styles';


import { useNavigation } from '@react-navigation/native';
import Abouts_Us from '../../assets/images/Abouts_Us.png'
import ContentHeader from './ContentHeader';
import Colors from '../GlobalStyles/colors';
import SettingsTit from '../../assets/images/SettingsTit.png'



function AboutUs() {
const navigation = useNavigation()
function LowerCart(){


const textStyle={color:Colors.FontColorI,margin:10,textAlign:'center',fontSize:15}

    return(
      <View style={styles.LowerCart}>
        <View style={{flexDirection:'row',margin:15,alignItems:'center'}}>
    
        <Image 
        source={SettingsTit}
        style={{width:20,height:20,marginRight:10}}
        />
      <Text style={styles.L_Cart_Title}>About Us</Text>
      </View>
    {/* <View style={styles.InnerLowerCart}> */}
    <ScrollView style={{padding:10}}>
      <Text style={styles.textStyle}>
        Welcome to our innovative coffee experience app, your ultimate destination for enjoying the finest coffee brewed by state-of-the-art AI bot machines. Our application is designed to redefine your coffee experience by blending technology, convenience, and a unique cryptocurrency-based reward system.
      </Text>
      <Text style={styles.headerStyle}>Our Mission</Text>
      <Text style={styles.textStyle}>
        Our mission is to provide a seamless and delightful coffee experience through advanced automation and rewarding loyalty. We aim to bring the future of coffee-making to your fingertips, ensuring every cup is brewed to perfection while offering you exciting benefits.
      </Text>
      <Text style={styles.headerStyle}>Key Features</Text>
      <Text style={styles.subHeaderStyle}>User Management</Text>
      <Text style={styles.textStyle}>
        With our easy-to-use login and sign-up process, you can quickly create and manage your account. Personalize your experience and keep track of your orders effortlessly.
      </Text>
      <Text style={styles.subHeaderStyle}>Add to Cart</Text>
      <Text style={styles.textStyle}>
        Browse through our selection of premium coffee products, add your favorite items to the cart, and proceed with a smooth checkout process.
      </Text>
      <Text style={styles.subHeaderStyle}>Store Listing & Product Viewing</Text>
      <Text style={styles.textStyle}>
        Discover our stores, each equipped with AI bot machines ready to serve you the perfect cup of coffee. View detailed descriptions and images of our products to make informed choices.
      </Text>
      <Text style={styles.subHeaderStyle}>Order Products</Text>
      <Text style={styles.textStyle}>
        Place orders directly through the app. Once your order is confirmed, generate a QR code that you can present to our AI machines to receive your freshly brewed coffee.
      </Text>
      <Text style={styles.subHeaderStyle}>JGK Cryptocurrency</Text>
      <Text style={styles.textStyle}>
        Experience the convenience of our very own cryptocurrency, JGK. Purchase coffee effortlessly using JGK, and enjoy daily login rewards in the form of JGK to enhance your coffee experience.
      </Text>
      <Text style={styles.subHeaderStyle}>Daily Login Rewards</Text>
      <Text style={styles.textStyle}>
        Earn JGK cryptocurrency every day just by logging in. Accumulate rewards over time and use them to purchase your favorite coffee products.
      </Text>
      <Text style={styles.subHeaderStyle}>Account Deletion</Text>
      <Text style={styles.textStyle}>
        We respect your privacy and offer the option to delete your account at any time, giving you complete control over your data.
      </Text>
      <Text style={styles.subHeaderStyle}>Customer Support</Text>
      <Text style={styles.textStyle}>
        Our dedicated customer support team is always ready to assist you. Whether you have questions, need help with an order, or require technical support, we're here to ensure your satisfaction.
      </Text>
      <Text style={styles.headerStyle}>Our Vision</Text>
      <Text style={styles.textStyle}>
        We envision a world where technology seamlessly integrates into everyday life, enhancing the simple pleasures like enjoying a cup of coffee. By leveraging AI and cryptocurrency, we strive to create a coffee culture that is not only innovative but also rewarding for our users.
      </Text>
      <Text style={styles.textStyle}>
        Join us on this exciting journey and experience coffee like never before. Download our app today and take your first step towards a futuristic coffee experience with the added benefit of earning rewards through JGK.
      </Text>
      <Text style={styles.textStyle}>
        Thank you for choosing our app. We look forward to serving you the perfect cup of coffee!
      </Text>
    </ScrollView>
    
    <View style={{height:100,width:20}}>

</View>
    {/* </View> */}
    </View>
    
    )
    }



  return (
    <SafeAreaView style={styles.Container}>


<ContentHeader 
icon ={Abouts_Us}
width={51}
height={49}
title={"Abouts Us"}
/>


<LowerCart/>


    </SafeAreaView>
  )
}
export default AboutUs;

