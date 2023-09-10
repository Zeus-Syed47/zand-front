/**
 * customTextInput
 * Last edited by Syed Nadeem
 *
 * @format
 */

import React, { useCallback } from 'react';
import type { PropsWithChildren } from 'react';
import {
   Text,
   TextInput,
   View,
} from 'react-native';

import styles from './styles';

type SectionProps = PropsWithChildren<{
   onChangeNumber: () => void;
   value: number;
   keyboardType: string;
   placeholder: string;
   label: string;
   editable: boolean
}>;

function CustomUnitsInput({
   onChangeNumber,
   value = 0,
   label,
   editable = true
}: SectionProps): JSX.Element {

   // useCallback
   const onDecrease = useCallback(
      () => {
         if (value <= 0) {
            return;
         }
         onChangeNumber(--value);
      },
      [value],
   )

   const onChange = useCallback(
      (unitNumber: number) => {
         const tempUnitNumber = parseInt(unitNumber);
         if (tempUnitNumber <= 0) {
            return;
         }
         onChangeNumber(tempUnitNumber);
      },
      [],
   )

   const onIncrease = useCallback(
      () => {
         onChangeNumber(++value);
      },
      [value],
   )

   return (
      <View style={styles.inputView}>
         <Text style={styles.textHeader}>{label}</Text>
         <View style={styles.unitsRow}>
            <Text style={styles.unitIcon} onPress={onDecrease}>{'-'}</Text>
            <TextInput
               style={styles.input}
               onChangeText={onChange}
               value={value.toString()}
               keyboardType={'numeric'}
               editable={editable}
               maxLength={3}
            />
            <Text style={styles.unitIcon} onPress={onIncrease}>{'+'}</Text>

         </View>
      </View>
   );
}

export default CustomUnitsInput;