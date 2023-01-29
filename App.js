import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, FlatList, SafeAreaView, TouchableOpacity, RefreshControl, Vibration} from 'react-native';
import CoinItem from './src/components/CoinItem';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import React, { useEffect, useState, useRef, useMemo } from 'react';
import { BottomSheetModal, BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { getMarketData, formatNumber } from './service/cryptoService';
import Chart from './src/components/Chart';


const ListHeader = () => (
  <>
    <View style={styles.titleWrapper}>
        <Text style={styles.largeTitle}>Markets</Text>
      </View>
      <View style = {styles.divider}></View>

  </>
) 


export default function App() {

const [data, setData] = useState([]);
const [selectedCoinData, setSelectedCoinData] = useState(null);
const [refreshing, setRefreshing] = useState(false);

   useEffect(() => {
    const fetchMarketData = async() => {
      const marketData = await getMarketData();
      setData(marketData);
    }
    fetchMarketData();
  }, [])
  
  const truncate = (input) =>
      input?.length > 11 ? `${input.substring(0, 10)}...` : input;

  const bottomSheetModalRef = useRef(null);
  
  const snapPoints = useMemo(() => ['50%'], []);

  const openModal = (item) => {
    setSelectedCoinData(item);
    bottomSheetModalRef.current?.present();
  }
  

  return (
    <GestureHandlerRootView style={{ flex: 1, }}>      
    <BottomSheetModalProvider >
      
      <SafeAreaView >
        <FlatList 
          keyExtractor={(item) => item.id}
          data={data}
          renderItem={({ item }) => (
            <CoinItem style={styles.container}
            rank={item.market_cap_rank}
            name= {truncate(item.name)}
            symbol={item.symbol}
            currentPrice={formatNumber(item.current_price)}
            priceChangePercentage7d={item.price_change_percentage_7d_in_currency}
            logoUrl={item.image}
            onPress ={() => openModal(item)}
            />
        
        )}
        ListHeaderComponent={<ListHeader />}
        onRefresh={() => {
          const fetchMarketData = async() => {
            const marketData = await getMarketData();
            setData(marketData);
          }
          fetchMarketData();
          Vibration.vibrate(10);
        }}
        refreshing={refreshing}
        
        />
      </SafeAreaView>
     

      <BottomSheetModal
        ref={bottomSheetModalRef}
        index={0}
        snapPoints={snapPoints}
        style={styles.bottomSheet}
      >
        { selectedCoinData ? (
          <Chart
          currentPrice={selectedCoinData.current_price.toFixed(7)}
          logoUrl={selectedCoinData.image}
          name={selectedCoinData.name}
          symbol={selectedCoinData.symbol}
          priceChangePercentage7d={selectedCoinData.price_change_percentage_7d_in_currency}
          sparkline={selectedCoinData?.sparkline_in_7d.price}
          />
        ) : null }
        
        </BottomSheetModal>
        <View style={styles.bottomButtonsContainer}>
          <TouchableOpacity style={styles.buttonContainer}>
            <Text style={styles.buttonText}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonContainer}>
            <Text style={styles.buttonText}>Profile</Text>
          </TouchableOpacity>
        </View>
        </BottomSheetModalProvider>
    </GestureHandlerRootView>
    );    
}

const styles = StyleSheet.create({
  SafeAreaView: {
    backgroundColor: 'black',
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 50
  },
  titleWrapper: {
    marginBottom: 5,
    paddingHorizontal: 16,
  },
  largeTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  divider:{
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginRight: 16,
    marginLeft: 16,
    color: "#808080",
    opacity: 0.2,
  },
  bottomSheet: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: -4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  bottomButtonsContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 50,
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#D8D8D8',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  buttonContainer: {
    height: 50,
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '500',
  },
  
});
