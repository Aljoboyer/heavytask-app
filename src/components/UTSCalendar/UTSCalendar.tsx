import {Pressable, StyleSheet, View, Image} from 'react-native';
import React, {useState, useEffect} from 'react';

import {Calendar, LocaleConfig} from 'react-native-calendars';

const UTSCalendar = ({
  onDayPress,
  markedDates,
  initialDate,
}: any) => {
	console.log('marked dates -------->', markedDates);
  const [selected, setSelected] = useState('');

  const onDayItemPress = (day : any) => {
    console.log('day', day);
    setSelected(day?.dateString);
    onDayPress(day);
    console.log('selected value', selected);
  };

  return (
    <Calendar
      onDayPress={day => onDayItemPress(day)}
      markedDates={{
        [markedDates]: {selected: true, disableTouchEvent: true, selectedDotColor: 'blue'},
				[selected]: {selected: true}
      }}
      theme={{
        todayTextColor: 'rgba(25, 117, 255, 1)',
        textDisabledColor: 'rgba(218, 219, 225, 1)',
        selectedDayBackgroundColor: 'rgba(65, 204, 134, 1)',
        dayTextColor: 'rgba(157, 158, 169, 1)',
        textSectionTitleColor: 'rgba(34, 39, 87, 1)',
      }}
      style={{
        elevation: 2,
        borderRadius: 8,
        borderColor: 'grey',
      }}
      initialDate={initialDate}
      disableMonthChange={true}
      enableSwipeMonths={false}
    />
  );
};

export default UTSCalendar;
