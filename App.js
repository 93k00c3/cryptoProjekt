import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import CoinItem from './src/components/CoinItem';
import { useEffect, useState } from 'react';
import { BottomSheetModal, BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { getMarketData } from './service/cryptoService';
import Chart from './src/components/Chart';

const ListHeader = () => (
  <>
    <View style>
      <Text>Markets</Text>
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
  return (
    <View style={styles.container}>
      <FlatList 
      keyExtractor={(item) => item.id}
      data={data}
      renderItem={({ item }) => (
        <ListItem
        name={item.name}
        symbol={item.symbol}
        currentPrice={item.currentPrice}
        priceChangePercentage7d={item.priceChangePercentage7d}
        logoUrl={item.image}
        onPress={() => openModal(item)}
        />
      )}
      ListHeaderComponent={<ListHeader />}/>
      <StatusBar style="light" />
    </View>
  );
}
const openModal = (item) => {
    setSelectedCoinData(item);
    bottomSheetModalRef.current.present();
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    paddingTop: 50
  },
});
