import { View, Text } from 'react-native'
import React from 'react'

const Details = ({navigation,route}) => {
  const {name,} = route.params;
  return (
    <View>
      <Text>{name}</Text>
      

    </View>
  )
}

export default Details