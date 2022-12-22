import React from 'react';
import { Text, View, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import styles from './styles';


const CointItem = () => {
    return(
        <View style={styles.coinContainer}>
        <Image source={{uri:'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/800px-Bitcoin.svg.png'}} 
        style={{width:50, height:50, marginRight: 10, alignSelf: "center"}}
        />
        <Text style={styles.title}> Bitcoin </Text>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.text}> BTC </Text>
              <View style={styles.rankContainer}>
            <Text style={styles.rank}> 1 </Text>
            </View>
            <Text style={styles.text}> Bitcoin </Text>
            <AntDesign 
            name="caretdown" 
            size={12} 
            color='black' 
            style={{alignSelf: 'center', marginRight:5}}/>
            <Text style={styles.text}>0,63%</Text>
          </View>
        <View style={{marginLeft: 'auto'}}>
            <Text style={styles.title}> BTC </Text>
            <Text style={styles.text}> Bitcoin </Text>
          </View>
        </View>
        );
}

export default CointItem;