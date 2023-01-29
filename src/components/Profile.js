import Header from './Header';

const Bottom = ({ navigation }) => {
  const navigateToHome = () => {
    // Navigate to the home screen
  };

  const navigateToProfile = () => {
    navigation.navigate('Profile');
  };

  return (
    <View>
      <Header navigateToHome={navigateToHome} navigateToProfile={navigateToProfile} />
    </View>
  );
};
