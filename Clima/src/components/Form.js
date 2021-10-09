import React, {useState} from "react";
import
 {
  Text,
  TextInput,
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Animated,
  Alert
} 



from "react-native";
import { Picker } from "@react-native-community/picker";

const Form = ({busqueda, setBusqueda, setConsultar}) => {
    const {municipio} = busqueda;

    const consultarClima = () => {
        if(municipio.trim() === "") {
          mostrarAlerta();
          return;
        }
        setConsultar(true)
      }

      const mostrarAlerta = () => [
        Alert.alert("Error", "Debe seleccionar una ciudad", [{Text: "ok"}])
      ]

    return (  
        <>
           <View>
        <View>
          <Text style={styles.input}>Clima</Text>
        </View>
        <View>
          <Picker
            selectedValue={municipio}
            onValueChange={municipio => setBusqueda({...busqueda, municipio})}
            style={styles.itempais}
          >
            <Picker.Item label="Seleccione una ciudad" value="" />
            <Picker.Item label="Aguilares" value="Aguilares" />
            <Picker.Item label="Apopa" value="Apopa" />
            <Picker.Item label="Ayutuxtepeque" value="Ayutuxtepeque" />
            <Picker.Item label="Ciudad Delgado" value="Ciudad Delgado" />
            <Picker.Item label="Cuscatancingo" value="Cuscatancingo" />
            <Picker.Item label="El Paisnal" value="El Paisnal" />
            <Picker.Item label="Guazapa" value="Guazapa" />
            <Picker.Item label="Ilopango" value="Ilopango" />
            <Picker.Item label="Mejicanos" value="Mejicanos" />
            <Picker.Item label="Nejapa" value="Nejapa" />
            <Picker.Item label="Panchimalco" value="Panchimalco" />
            <Picker.Item label="Rosario de Mora" value="Rosario de Mora" />
            <Picker.Item label="San Marcos" value="San Marcos" />
            <Picker.Item label="San Martín" value="San Martín" />
            <Picker.Item label="San Salvador" value="San Salvador" />
            <Picker.Item label="Santiago Texacuangos" value="Santiago Texacuangos" />
            <Picker.Item label="Santo Tomás" value="Santo Tomás," />
            <Picker.Item label="Soyapango" value="Soyapango" />
            <Picker.Item label="Tonacatepeque" value="Tonacatepeque" />
          </Picker>
        </View>
        <TouchableWithoutFeedback
          onPress={() => consultarClima()}
        >
          <Animated.View style={styles.btnBuscar}>
            <Text style={styles.textoBuscar}>Buscar Clima</Text>
          </Animated.View>
        </TouchableWithoutFeedback>
      </View>
        </>
    );
}


const styles = StyleSheet.create({
    input: {
      padding: 70,
      height: 50,
      fontSize: 50,
      marginBottom: 20,
      textAlign: "center",
      color: "#1C2833",
      fontWeight:'bold',
      backgroundColor: "#D5DBDB",
    },
    itempais: {
      height: 60,
      fontSize: 50,
      backgroundColor: "#fff",
      fontSize: 15,
      backgroundColor: "#D5DBDB",
    },
    btnBuscar: {
      marginTop: 50,
      height: 40,
      
      backgroundColor: "#566573",
      fontSize: 20,
      marginBottom: 20,
      textAlign: "center",
      borderStyle:'solid',
      borderColor:'#000',
      padding:5,
      borderRadius:15
    },
    textoBuscar: {
      color: "#fff",
      fontWeight: "bold",
      textTransform: "uppercase",
      textAlign: "center",
      fontSize: 18,
    },
  });
 
export default Form;