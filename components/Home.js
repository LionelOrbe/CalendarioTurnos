import  React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, StatusBar } from 'react-native';
import {Agenda} from 'react-native-calendars';
import { Card , Avatar} from 'react-native-paper';
import {LocaleConfig} from 'react-native-calendars';


const timeToString = (time) => {
    const date = new Date(time);
    return date.toISOString().split('T')[0];
}
export default function Home() {

    const [items, setItems] = React.useState({});

    // const loadItems = (day) => {

    //     setTimeout(() => {
    //         for (let i = -5; i < 15; i++) {
    //             const time = day.timestamp + i * 24 * 60 * 60 * 1000;
    //             const strTime = timeToString(time);

    //             if (!items[strTime]) {
    //                 items[strTime] = [];

    //                 const numItems = Math.floor(Math.random() * 3 + 1);
    //                 for (let j = 0; j < numItems; j++) {
    //                     items[strTime].push({
    //                         name: 'Item for ' + strTime + ' #' + j,
    //                         height: Math.max(10, Math.floor(Math.random() * 150)),
    //                         day: strTime
    //                     });
    //                 }
    //             }
    //         }
    //         const newItems = {};
    //         Object.keys(items).forEach(key => {
    //             newItems[key] = items[key];
    //         });
    //         setItems(newItems);
    //     }, 1000);
    // }

    const renderItem = (item) => {
        return (
            <TouchableOpacity style={styles.item} >
                <Card>
                    <Card.Content>
                        <View>
                            <Text>{item.name}</Text>
                            <Avatar.Text label={item.name[0]+item.name[1]} />
                            <Text>{item.height}</Text>
                        </View>
                    </Card.Content>
                </Card>
            </TouchableOpacity>
        );
    }

    return (
        <View style={styles.container}>
            <Agenda
                items={items}
                //loadItemsForMonth={loadItems}
                //selected={'2022-10-12'}
                refreshControl={null}
                showClosingKnob={true}
                refreshing={false}
                renderItem={renderItem}
                theme={{
                    agendaKnobColor: 'red'
                  }}
            />
            <StatusBar />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    item: {
        flex: 1,
        borderRadius: 5,
        padding: 10,
        marginRight: 10,
        marginTop: 10
    },
});

LocaleConfig.locales['es'] = {
    monthNames: [
      'Enero',
      'Febrero',
      'Marzo',
      'Abril',
      'Mayo',
      'Junio',
      'Julio',
      'Agosto',
      'Septiembre',
      'Octubre',
      'Noviembre',
      'Diciembre'
    ],
    monthNamesShort: ['Ene.', 'Feb.', 'Mar', 'Abr', 'May', 'Jun', 'Jul.', 'Ago', 'Sep.', 'Oct.', 'Nov.', 'Dic.'],
    dayNames: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
    dayNamesShort: ['Dom.', 'Lun.', 'Mar.', 'Mié.', 'Jue.', 'Vie.', 'Sáb.'],
    today: "Hoy"
  };
  LocaleConfig.defaultLocale = 'es';