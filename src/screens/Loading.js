import React from 'react'

import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  AsyncStorage,
  Image
} from 'react-native'

import { Spinner } from 'native-base';

import { NavigationActions } from 'react-navigation'

class Loading extends React.Component {
  static navigationOptions = {
    title: 'Loading'
  }

  componentDidMount () {
    
    AsyncStorage.getItem('token', (err, result) => {
      if (result === null) {
        const goLogin = NavigationActions.reset({
          index: 0,
          actions: [
            NavigationActions.navigate({ routeName: 'Login'})
          ]
        })
        this.props.navigation.dispatch(goLogin)
      } else {
        AsyncStorage.getItem('avatarURL', (error, dataAvatarURL) => {
            if (!dataAvatarURL) {
              const goPersonalization = NavigationActions.reset({
                index: 0,
                actions: [
                  NavigationActions.navigate({ routeName: 'Personalization'})
                ]
              })

              this.props.navigation.dispatch(goPersonalization)
            } else {
              AsyncStorage.getItem('user', (err, dataUser) => {
                if (dataUser) {
                  const goLandingPage = NavigationActions.reset({
                    index: 0,
                    actions: [
                      NavigationActions.navigate({ routeName: 'LandingPage'})
                    ]
                  })
                  this.props.navigation.dispatch(goLandingPage)
                }
              })
            }
        })
      }
    })
  }

  render () {
    return (
      <View style={{flex: 1, alignItems: 'center',backgroundColor: '#99d6ff',justifyContent:'center'}}>
        <Image
          style={{width: 200,height:200,alignSelf:'center'}}
          source={require('../assets/Quedaricon.png')}
        />
      </View>
    )
  }
}

export default Loading
