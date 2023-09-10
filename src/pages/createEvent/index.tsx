/**
 * Home page
 * Last edited by Syed Nadeem
 * 
 * @format
 */

import React, { useCallback, useMemo, useState } from 'react';
import {
    Alert,
    SafeAreaView,
    ScrollView,
    Text,
    View,
} from 'react-native';


import styles from './styles'
import CustomTextInput from '../../components/customTextInput';
import CustomUnitsInput from '../../components/customUnitsInput';
import Button from '../../components/button';
import useStore from '../../state'
import { bookEventApi } from '../../apis/events';
import { useNavigation } from '@react-navigation/core';

function CreateEvent(): JSX.Element {
    // useState
    const navigate = useNavigation()
    const [formData, setFormData] = useState<any>({
        name: "",
        userName: "",
        email: "",
    })
    const [isLoading, setisLoading] = useState<boolean>(false);
    const [noOfTickets, setNoOfTickets] = useState<number>(0);
    
    // global state
    const event = useStore((state) => state.event)

    // useCallback
    const onChangeName = useCallback(
        (text: string) => {
            setFormData({
                ...formData,
                userName: text
            })
        },
        [formData],
    )

    const onChangeEmail = useCallback(
        (text: string) => {
            setFormData({
                ...formData,
                email: text
            })
        },
        [formData],
    )

    const onChangeNoOfTickets = useCallback(
        (text: string) => {
            console.log('numberrr', text)
            setNoOfTickets(text)
        },
        [],
    )

    const isEmailValid = useCallback((email: string) => {
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        return reg.test(email);
    }, [])

    const bookEvent = useCallback(
        async () => {
            if (!formData?.userName) {
                Alert.alert("please fill name!")
                return
            }
            if (!formData?.email) {
                Alert.alert("please fill email!")
                return
            }

            if (!isEmailValid(formData?.email)) {
                Alert.alert("please fill valid email!")
                return
            }
            if (noOfTickets <= 0) {
                Alert.alert("please increase ticket count!")
                return
            }

            setisLoading(true)
            const result = await bookEventApi({
                event_id: event?.event_id,
                no_of_bookings: noOfTickets,
                amount: noOfTickets * event?.price,
                user_name: formData?.userName,
                email: formData?.email
            })
            if (result) {
                setisLoading(false)
                Alert.alert('Event Booked successfully!');
                navigate.goBack();
            }
        },
        [formData, noOfTickets],
    )

    // useMemo
    const header = useMemo(() => {
        return <View style={styles.headerView}>
            <Text style={{
                fontSize: 22,
                fontWeight: '600',
                paddingLeft: 24,
                paddingTop: 20,
            }}>{'Book Event'}</Text>
        </View>
    }, [])

    const body = useMemo(() => {
        return (
            <ScrollView
                style={styles.backgroundStyle}>
                <CustomTextInput
                    placeholder="Enter Event Name"
                    value={event?.name}
                    label={'Event Name'}
                    editable={false}
                />

                <CustomTextInput
                    onChangeText={onChangeName}
                    placeholder="Enter User Name"
                    value={formData?.userName}
                    label={'User Name'}
                />

                <CustomTextInput
                    onChangeText={onChangeEmail}
                    placeholder="Enter User Email"
                    value={formData?.email}
                    label={'Email'}
                />

                <CustomUnitsInput
                    onChangeNumber={onChangeNoOfTickets}
                    value={noOfTickets}
                    label={'No of Tickets'}
                />
            </ScrollView>
        )
    }, [event, noOfTickets, onChangeNoOfTickets, onChangeEmail, onChangeName])

    const footer = useMemo(() => {
        return (
            <View style={styles.bookingView}>
                <Text style={styles.bookingAmountText}>{`${noOfTickets * event?.price} (AED)`}</Text>
                <Button title={'Submit'} handleClick={bookEvent} isLoading={isLoading} />
            </View>
        )
    }, [noOfTickets, event, isLoading, bookEvent])

    return (
        <SafeAreaView style={styles.backgroundStyle}>
            {header}
            {body}
            {footer}
        </SafeAreaView>
    );
}

export default CreateEvent


