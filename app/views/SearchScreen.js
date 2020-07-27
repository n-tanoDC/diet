import React from 'react';
import { SafeAreaView } from 'react-native';
import { Icon, Divider, TopNavigation, TopNavigationAction, Layout } from '@ui-kitten/components';

export default ({ navigation }) => {

  const renderBackAction = () => {
    return (
      <TopNavigationAction 
        onPress={() => navigation.navigate('Home')}
        icon={(props) => <Icon {...props} name='arrow-back'/>}/>
    )
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopNavigation 
        title="Ajouter un aliment"
        alignment="center"
        accessoryLeft={renderBackAction}
      />
      <Divider />
      <Layout>
        
      </Layout>
    </SafeAreaView>
  );
};