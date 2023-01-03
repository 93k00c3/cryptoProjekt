import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, FlatList, SafeAreaView } from 'react-native';
import CoinItem from './src/components/CoinItem';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import React, { useEffect, useState, useRef, useMemo } from 'react';
import { BottomSheetModal, BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { getMarketData } from './service/cryptoService';
import Chart from './src/components/Chart';


const ListHeader = () => (
  <>
    <View style={styles.titleWrapper}>
        <Text style={styles.largeTitle}>Markets</Text>
      </View>
  </>
)

export default function App() {

const [data, setData] = useState([]);
const [selectedCoinData, setSelectedCoinData] = useState(null);

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
    <GestureHandlerRootView style={{ flex: 1 }}>
  <BottomSheetModalProvider>
    <SafeAreaView>
      <FlatList 
        keyExtractor={(item) => item.id}
        data={data}
        renderItem={({ item }) => (
          <CoinItem style={styles.container}
          rank={item.market_cap_rank}
          name= {truncate(item.name)}
          symbol={item.symbol}
          currentPrice={item.current_price}
          priceChangePercentage7d={item.price_change_percentage_7d_in_currency}
          logoUrl={item.image}
          onPress={() => openModal(item)}
          />
      )}
      ListHeaderComponent={<ListHeader />}/>
    </SafeAreaView>

    <BottomSheetModal
      ref={bottomSheetModalRef}
      index={0}
      snapPoints={snapPoints}
      style={styles.bottomSheet}
    >
      { selectedCoinData ? (
        <Chart
        currentPrice={selectedCoinData.current_price}
        logoUrl={selectedCoinData.image}
        name={selectedCoinData.name}
        symbol={selectedCoinData.symbol}
        priceChangePercentage7d={selectedCoinData.price_change_percentage_7d_in_currency}
        sparkline={selectedCoinData?.sparkline_in_7d.price}
        />
      ) : null }
      </BottomSheetModal>
    </BottomSheetModalProvider>
    </GestureHandlerRootView>
    );
    
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    paddingTop: 50
  },
  titleWrapper: {
    marginTop: 20,
    paddingHorizontal: 16,
  },
  largeTitle: {
    fontSize: 24,
    fontWeight: "bold",
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
});
