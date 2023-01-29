
import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

const Header = ({ navigateToHome, navigateToProfile }) => {
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity onPress={navigateToHome} style={styles.headerButton}>
        <Text style={styles.headerButtonText}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={navigateToProfile} style={styles.headerButton}>
        <Text style={styles.headerButtonText}>Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = {
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'black',
    paddingHorizontal: 20,
    height: 50
  },
  headerButton: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5
  },
  headerButtonText: {
    color: 'black',
    fontWeight: 'bold'
  }
};

export default Header;
