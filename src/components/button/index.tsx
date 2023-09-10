/**
 * Button
 * Last edited by Syed Nadeem
 *
 * @format
 */

import React from 'react';
import type { PropsWithChildren } from 'react';
import {
  ActivityIndicator,
  Pressable,
  Text,
} from 'react-native';
import styles from './styles';

type SectionProps = PropsWithChildren<{
  title: string;
  handleClick: () => void;
  isLoading: boolean
}>;

function Button({ title, handleClick, isLoading = false }: SectionProps): JSX.Element {
  return (
    <Pressable style={styles.button}
      onPress={handleClick}>
      { isLoading ?
        <ActivityIndicator color={'white'} />
        :
        <Text style={styles.buttonText}>
          {title ?? 'Book'}
        </Text>
      }
    </Pressable>
  );
}

export default Button;