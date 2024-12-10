import React, { useState, useEffect } from 'react';
import { View, Button, StyleSheet, Text, StatusBar } from 'react-native';
import * as Progress from 'react-native-progress';
import { useNavigation } from '@react-navigation/native';

const BAR = () => {
  const [progress, setProgress] = useState(0);
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);
  const navigation = useNavigation();

  // Simular el progreso
  useEffect(() => {
    if (progress < 1) {
      const timer = setTimeout(() => {
        setProgress(progress + 0.1); // Aumenta el progreso en 0.1 cada segundo
      }, 500);
      return () => clearTimeout(timer); // Limpia el timer al desmontar
    } else {
      onComplete(); // Habilita el botón cuando el progreso llega al 100%
    }
  }, [progress]);// Este useEffect solo se ejecuta una vez al montar el componente

  // Ejecutar la función onComplete cuando el progreso llegue al 100%
  useEffect(() => {
    if (progress === 1) {
      onComplete();  // Ejecuta la función onComplete cuando el progreso llegue al 100%
    }
  }, [progress]); // Se ejecuta cada vez que 'progress' cambia

  // Función que se ejecutará cuando el progreso llegue al 100%
  const onComplete = () => {
    StatusBar.setHidden(true);  // Ocultar la barra de estado
    navigation.navigate('ToDo'); // Navegar a la pantalla "ToDo"
  };

  return (
    <View style={styles.container}>
      <Text>Cargando . . .</Text>
      <Progress.Bar progress={progress} width={200} />
      </View>
  );
};

// Estilos para asegurar que todo esté centrado correctamente
const styles = StyleSheet.create({
  container: {
    flex: 1, // Toma todo el espacio disponible
    justifyContent: 'center', // Centra el contenido verticalmente
    alignItems: 'center', // Centra el contenido horizontalmente
    padding: 20, // Da un poco de espacio alrededor del contenido
  },
});

export default BAR;
