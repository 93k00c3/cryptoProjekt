import React, {useEffect, useState} from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import {ChartDot, ChartPath, ChartPathProvider, ChartYLabel} from "@rainbow-me/animated-charts";
import { useSharedValue } from "react-native-reanimated";
import { AntDesign } from "@expo/vector-icons";
import styles from "./styles";

const CoinItem = ({ rank, name, symbol, currentPrice, priceChangePercentage7d, logoUrl, onPress}) => {

    const priceColorChange = priceChangePercentage7d > 0 ? "#34C759" : "#FF3B30";
  
    return (
        <TouchableOpacity onPress={onPress}>
        <View>
        <View style={styles.coinContainer}>
                <Image source={{uri: logoUrl}} 
                    style={{width:30, height:30, marginRight: 10}}
                    />
                
                <View style={styles.rankContainer}>
                <Text style={styles.rank}> { rank } </Text>

                </View>
                <View style={{alignItems: "flex-start"}}>
                <Text style={styles.title}> { name } </Text>
                <Text style={styles.title}> { symbol.toUpperCase()}</Text>

                </View>
                <AntDesign 
                name="caretdown" 
                size={12} 
                color="white"
                style={{alignSelf: "flex-end", marginRight:5}}/>          
          { /* Prawa strona */ }
                    
            <View style={{marginLeft: "auto", alignItems: "flex-end",}}>
                <Text style={styles.text}> { currentPrice.toLocaleString("en-US", { currency: "USD"}) } $ </Text>
                <Text style={[styles.subtitle, {color: priceColorChange}, ]}> { priceChangePercentage7d.toFixed(2) } % </Text>

            </View>
            
        </View>
        </View>
        </TouchableOpacity>
        )
        
}
export default CoinItem;