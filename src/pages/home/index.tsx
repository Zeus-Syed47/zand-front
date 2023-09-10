/**
 * Home page
 * Last edited by Syed Nadeem
 * 
 * @format
 */

import React, { useCallback, useEffect, useMemo, useState } from 'react';
import {
  FlatList,
  SafeAreaView,
  Text,
  View,
  ActivityIndicator
} from 'react-native';

import EventCard from '../../components/eventCard';
import styles from './styles'
import { getEvents } from '../../apis/events';


function Home(): JSX.Element {

  const [isLoading, setIsLoading] = useState(false);
  const [events, setEvents] = useState([]);  


  //useEffect
  useEffect(() => {
    fetchEvents()
  }, [])


  // useCallback
  const renderEvents = useCallback(
    (data: any) => {
      const { item } = data;
      return (
        <EventCard name={item?.name}
          day={item?.day}
          month={item?.month}
          price={item?.price}
          image={item?.image}
          priceWithUnit={item?.priceWithUnit}
          event={item}
          location={item?.location}
        />
      )
    },
    [],
  )

  const appendImageinEvent = useCallback((index: number) => {
    switch (index) {
      case 0:
        return require('../../assets/images/z1.jpeg')
      case 1:
        return require('../../assets/images/z2.jpeg')
      case 2:
        return require('../../assets/images/z3.jpeg')
    }
  }, [])

  const fetchEvents = useCallback(
    async () => {
      setIsLoading(true);
      const apiEvents = await getEvents();
      setEvents(apiEvents ?
        apiEvents.data.map((item: any, index: number) => {
          return {
            ...item,
            image: appendImageinEvent(index),
            priceWithUnit: `${item.price} (AED)`
          }
        })
        : []);
      setIsLoading(false);
    },
    [],
  )

  // useMemo
  const header = useMemo(() => {
    return <View style={styles.headerView}>
      <Text style={{
        fontSize: 22,
        fontWeight: '600',
      }}>{'Popular Events'}</Text>
    </View>
  }, [])

  const body = useMemo(() => {
    return (
      <FlatList
        ListEmptyComponent={<ActivityIndicator size={'large'} style={styles.loader} />}
        horizontal
        data={events}
        keyExtractor={(item, i) => `key-${i}`}
        renderItem={renderEvents}
        showsHorizontalScrollIndicator={false}
      />
    )
  }, [events, renderEvents])

  return (
    <SafeAreaView style={styles.backgroundStyle}>
      <View
        style={styles.backgroundStyle}>
        {header}
        {body}
      </View>
    </SafeAreaView>
  );
}

export default Home


