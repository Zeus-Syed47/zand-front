/**
 * Event card
 * To display an event information
 * Last edited by Syed Nadeem
 *
 * @format
 */

import React, { useCallback } from 'react';
import type { PropsWithChildren } from 'react';
import {
  Image,
  Text,
  View,
} from 'react-native';

import Button from '../button'

import styles from './styles';
import { useNavigation } from '@react-navigation/core';
import useStore from '../../state'


type SectionProps = PropsWithChildren<{
  name: string;
  image: string;
  location: number;
  day: string;
  month: string;
  priceWithUnit: string;
  event: any;
}>;

function EventCard({ name, image, location, priceWithUnit, day, month, event }: SectionProps): JSX.Element {

  // useNavigation
  const navigation = useNavigation();

  // global state useStore
  const updateEvent = useStore((state) => state.updateEvent)

  // useCallback
  const openCreateEvent = useCallback(
    () => {
      updateEvent(event)
      navigation.navigate("Create")
    },
    [],
  )

  return (
    <View style={styles.sectionContainer}>
      <View style={styles.details}>

        <Image
          style={styles.bgView}
          source={image}
        />
        <View style={styles.dateView}>
          <Text style={styles.textDate}>
            {day}
          </Text>
          <Text style={{ color: 'white', fontWeight: '600' }}>
            {month}
          </Text>
        </View>
      </View>
      <View style={[styles.details, styles.detailsView]}>
        <Text
          style={[
            styles.sectionTitle,
          ]}>
          {name}
        </Text>
        <View style={styles.locView}>
          <Image
            source={require('../../assets/icons/loc2.png')}
            style={styles.iconView}
          />
          <Text
            style={styles.locationText}
          >{location}</Text>
        </View>
        <View style={styles.priceView}>
          <Text
            style={
              styles.sectionDescription
            }
          >
            {priceWithUnit}
          </Text>
          <View style={styles.buttonView}>
            <Button title={"Book"} handleClick={openCreateEvent} />
          </View>
        </View>
      </View>
    </View>
  );
}

export default EventCard;