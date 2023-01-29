import axios from 'axios';


const formatSparkline = (numbers) => {
    const sevenDaysAgo = Date.now() - 7 * 24 * 60 * 60 * 1000;
    let formattedSparkline = numbers.map((item, index) => {
        return {
            x: sevenDaysAgo + (index + 1) * 3600,
            y: item,
        }
    })
    return formattedSparkline;
}

const formatNumber = value => {
  if (value >= 1) {
    return value.toFixed(3).replace(/0+$/g, '').replace(/\.$/g, '');
  } else {
    return value.toFixed(8).replace(/0+$/g, '').replace(/\.$/g, '');
  }
}

const formatMarketData = (data) => {
  let formattedData = [];

  data.forEach(item => {
    const formattedSparkline = formatSparkline(item.sparkline_in_7d.price)

    const formattedItem = {
      ...item,
      sparkline_in_7d: {
        price: formattedSparkline
      }
    }

    formattedData.push(formattedItem);
  });

  return formattedData;
}

export const getMarketData = async () => {
  try {
    const response = await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=true&price_change_percentage=7d");
    const data = response.data;
    const formattedResponse = formatMarketData(data);
    return formattedResponse;
  } catch (error) {
    console.log(error.message);
  }
}
export { formatNumber };