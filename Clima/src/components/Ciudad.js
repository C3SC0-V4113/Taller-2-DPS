import React, { useState, useEffect, Fragment } from 'react';
import { StyleSheet, View, Text , Image, ScrollView} from 'react-native';
import { Card } from 'react-native-elements';

const Ciudad = ({ resultados }) => {

    const imagenClima=(comparar)=>{
        switch (comparar) {
          case "Lluvia":
            break;
          case "Nubes":
            break;
          case "Poca lluvia":
            break;
            case "Despejado":
              break;
          default:
            break;
        }
      }


    return (
      
    <Card>
        <Card.Title>Clima</Card.Title>
        <Card.Divider />
    {resultados.map(
        resultado => (
        <Fragment key={resultado?.id}>
            <Card >
                <View style={{ justifyContent: 'center' }}>
                <Card.Title>{resultado?.name}</Card.Title>
                    <View><Text><Text style={{fontWeight:'bold'}}>Clima: </Text>{resultado?.weather?.[0]?.main}</Text></View>
                    <Text style={{fontWeight:'bold', fontSize:15}}> Temperaturas</Text>
                    <Text><Text style={{fontWeight:'bold'}}>Temperatura minima:</Text> {resultado?.main?.temp_min}</Text>
                    <Text><Text style={{fontWeight:'bold'}}>Temperatura maxima:</Text> {resultado?.main?.temp_max}</Text>
                    <Text><Text style={{fontWeight:'bold'}}>Humedad:</Text> {resultado?.main?.humidity}</Text>
                </View>
                
            </Card>
            <Card.Divider />
        </Fragment>
        ))}
      </Card>
    )
      
 };

export default Ciudad;