import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    title: {
        color: "black",
        fontSize: 16,
        fontWeight: 'bold',
      },
      text: {
        color: "black",
        marginRight: 5,
      },
      coinContainer: {
        backgroundColor: 'white',
        flexDirection: 'row',
        borderBottomColor: 'dark-grey',
        padding:15,
        justifyContent: 'right'
      },
      rank: {
        fontWeight: 'bold',
        color: 'white',
        marginRight: 5,
        textAlign: 'center'
        },
      rankContainer: {
        paddingHorizontal: 1,
        borderRadius: 6,
        height: 20,
        marginRight: 2,
        marginTop: 5,
        backgroundColor: '#585858',
      },
      chartWrapper: {
        marginVertical: 16
      },
      chartLineWrapper: {
        marginTop: 40,
      },
      
});
export default styles;