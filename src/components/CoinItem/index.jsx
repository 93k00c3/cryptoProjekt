import React from 'react';
import { Text, View, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import styles from './styles';


const CoinItem = ({ rank, name, symbol, currentPrice, priceChangePercentage7d, logoUrl, onPress}) => {
    const priceColorChange = priceChangePercentage7d > 0 ? '#34C759' : '#FF3B30'
    return (
        <View>
        <View style={styles.coinContainer}>
                <Image source={{uri: logoUrl}} 
                    style={{width:30, height:30, marginRight: 10}}
                    />
                
                <Text style={styles.title}> {symbol.toUpperCase} </Text>
                <View style={styles.rankContainer}>
                <Text style={styles.rank}> { rank } </Text>

                </View>
                <Text style={styles.title}> { name } </Text>
                <AntDesign 
                name="caretdown" 
                size={12} 
                color='white' 
                style={{alignSelf: 'right', marginRight:5}}/>          
          { /* Prawa strona */ }
            
            <View style={{marginLeft: 'auto', alignItems: 'flex-end',}}>
                <Text style={styles.text}> { currentPrice.toLocaleString('en-US', { currency: 'USD'}) } $ </Text>
                <Text style={[styles.subtitle, {color: priceColorChange, marginLeft:0}, ]}> { priceChangePercentage7d.toFixed(2) } % </Text>

            </View>
            
        </View>
        </View>
        )
}
export default CoinItem;