import axios from 'axios';

const formatSparkline = (numbers) => {
    const sevenDaysAgo: Date = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
    let formattedSparkline = numbers.map((item, index) => {
        return {
            x: sevenDaysAgo + (index + 1) * 3600,
            y: item,
        }
    })
    return formattedSparkline;
}

const formatMarketData = (data) => {
    let formattedData = [];

    data.forEach(item => {
        const formatSparkline = formatSparkLine(data.sparkline_in_7d.price)

        const formattedItem = {
            ...item,
            sparkline_in_7d: {
                price: formattedSparkline
            }
        }
        formattedData.push(formattedItem);
    })
    return formattedData;
}
export const getMarketData = async() => {   
    try {
        //API Call https://api.coingecko.com/api/v3/coins/btc?market_data=false&community_data=false&developer_data=false&sparkline=true
        const response = axios.get('https://api.coingecko.com/api/v3/coins/btc?market_data=false&community_data=false&developer_data=false&sparkline=true')
        const data = response.data;
        const formattedResponse = formatMarketData(data);
        return formattedResponse;
    } catch (error){
        console.log(error.message);
    }
}