import React from 'react';
import { Text, View, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import styles from './styles';


const CoinItem = ({ name, symbol, currentPrice, priceChangePercentage7d, logoUrl, onPress}) => {
    const priceColorChange = priceChangePercentage7d > 0 ? '#34C759' : '#FF3B30'
    return(
        <View>
        <Image source={{uri: logoUrl}} 
        style={{width:30, height:30, marginRight: 10, alignSelf: "center"}}
        />
        <Text style={styles.title}> { name } </Text>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.text}> {symbol.toUpperCase} </Text>
              <View style={styles.rankContainer}>
            <Text style={styles.rank}> 1 </Text>
            </View>
            <Text style={styles.text}> { name } </Text>
            <AntDesign 
            name="caretdown" 
            size={12} 
            color='white' 
            style={{alignSelf: 'center', marginRight:5}}/>
            <Text style={styles.text}>0,63%</Text>
          </View>
          { /* Prawa strona */ }
        <View style={{marginLeft: 'auto'}}>
            <Text style={styles.title}> { symbol.toUpperCase()} </Text>
            <Text style={[styles.subtitle, {color: priceColorChange}]}>{priceChangePercentage7d.toFixed(2)} % </Text>
            <Text style={styles.text}> { currentPrice.toLocaleString('en-US', { currency: 'USD' }) } </Text>
          </View>
        </View>
        );
}

export default CoinItem;