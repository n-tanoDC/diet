import React from 'react';
import { Icon, TopNavigationAction } from '@ui-kitten/components';

export const BackAction = props => (
  <TopNavigationAction 
    onPress={() => {props.goBack()}}
    icon={(iconProps) => <Icon {...iconProps} name='arrow-back'/>}
  />
)

