/**
 * Custom text input
 * Last edited by Syed Nadeem
 *
 * @format
 */

import React from 'react';
import type { PropsWithChildren } from 'react';
import {
   Text,
   TextInput,
   View,
} from 'react-native';

import styles from './styles';

type SectionProps = PropsWithChildren<{
   onChangeText: any;
   value: string;
   keyboardType: string;
   placeholder: string;
   label: string;
   editable: boolean
}>;

function CustomTextInput({ onChangeText, value,
   keyboardType = 'default',
   placeholder,
   label,
   editable = true
}: SectionProps): JSX.Element {


   return (
      <View style={styles.inputView}>
         <Text style={styles.textHeader}>{label}</Text>
         <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value={value}
            placeholder={placeholder ?? ""}
            keyboardType={keyboardType}
            editable={editable}
         />
      </View>
   );
}

export default CustomTextInput;