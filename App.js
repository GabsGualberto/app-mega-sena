import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [contador, setContador] = useState([]);
  const [hasSorteado, setSorteado] = useState(false);
  function gerarNum(){
    var nums = new Set(Array(6).fill().map(()=>Math.floor(Math.random() * 59) + 1));
    while(nums.size < 6 ){
      var nums = new Set(Array(6).fill().map(()=>Math.floor(Math.random() * 59) + 1));
    }
    setContador([...nums]);
    setSorteado(true);
  }
  
  return (
    <View style={styles.container}>
      {!hasSorteado ? 
            <Text style={styles.generalText}> Clique no Botão para gerar os numeros</Text> 
            : (
              <>
              <Text style={styles.generalText}>Os numeros sorteados foram: </Text>
              <View style={styles.numerosSorteadosView}>
                <Text style={styles.numerosSorteadosText}>{contador[0]}</Text>
                <Text style={styles.numerosSorteadosText}>{contador[1]}</Text>
                <Text style={styles.numerosSorteadosText}>{contador[2]}</Text>
                <Text style={styles.numerosSorteadosText}>{contador[3]}</Text>
                <Text style={styles.numerosSorteadosText}>{contador[4]}</Text>
                <Text style={styles.numerosSorteadosText}>{contador[5]}</Text>
              </View>
              </>
            )}
      <Button style={styles.generalButton} title='Gerar novos numeros' onPress={() => gerarNum()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  numerosSorteadosView:{
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  numerosSorteadosText:{
    fontSize:32,
    color:'#000',
    paddingLeft:30,
    paddingRight:30,
    borderTopWidth:1,
    borderRightWidth:1,
    borderBottomWidth:1,
    borderLeftWidth:1,
    borderRadius: 40,
    marginBottom: 20
  },
  generalText:{
    fontSize: 32,
    fontWeight: 400,
    marginBottom: 20
  }
});
