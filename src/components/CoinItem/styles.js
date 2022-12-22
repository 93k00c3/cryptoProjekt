import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    title: {
        color: "white",
        fontSize: 16,
        fontWeight: 'bold',
      },
      text: {
        color: "white",
        marginRight: 5,
      },
      coinContainer: {
        flexDirection: 'row',
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: 'grey',
        padding:15,
        justifyContent: right
      },
      rank: {
        fontWeight: 'bold',
        color: 'white',
        marginRight: 5,
        },
      rankContainer: {
        paddingHorizontal: 2,
        borderRadius: 2,
        marginRight: 2,
        backgroundColor: '#585858',
      },
});
export default styles;