import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, FlatList, SafeAreaView } from 'react-native';
import CoinItem from './src/components/CoinItem';
import React, { useEffect, useState } from 'react';
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
   useEffect(() => {
    const fetchMarketData = async() => {
      const marketData = await getMarketData();
      setData(marketData);
    }
    fetchMarketData();
  }, [])

  const openModal = (item) => {
    setSelectedCoinData(item);
    BottomSheetModalRef.current?.present();
  }
  return (
  <BottomSheetModalProvider>
    <SafeAreaView>
      <FlatList 
        keyExtractor={(item) => item.id}
        data={data}
        renderItem={({ item }) => (
          <CoinItem style={styles.container}
          rank={item.market_cap_rank}
          name={item.name}
          symbol={item.symbol}
          currentPrice={item.current_price}
          priceChangePercentage7d={item.price_change_percentage_7d_in_currency}
          logoUrl={item.image}
          />
      )}
      ListHeaderComponent={<ListHeader />}/>
      <StatusBar style="light" />
    </SafeAreaView>

    </BottomSheetModalProvider>
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
});
