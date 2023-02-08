import Header from './Header';

const Nav = ({ navigation }) => {
  const navigateToHome = () => {
    navigation.navigate('App');
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
