import React, { useState } from 'react'
import {View, Text, StyleSheet, Button, TextInput, Image, TouchableOpacity} from 'react-native'
import api from './src/services/api'


export default function App(){
  
  const [user, setUser] = useState()
  const [foto, setFoto] = useState('https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png')
  const [id, setId] = useState()
  const [name, setName] = useState()
  const [bio, setBio] = useState()
  const [created, setCreated] = useState()
  const [followers, setFollowers] = useState()
  const [following, setFollowing] = useState()
  

  const consultaUser = async (user) => {
    const response = await api.get('/' + user);
    setFoto(response.data.avatar_url)
    setId(response.data.id)
    setName(response.data.name)
    setBio(response.data.bio)
    setCreated(response.data.created_at)
    setFollowers(response.data.followers)
    setFollowing(response.data.following)
  }

    return(
      <View style={styles.container}>
        <View style={styles.elements}>
          <Image source={{ uri: foto}} style={{width: 200, height: 200, borderRadius: 200/2 }}/>
          <TextInput
            style={styles.cep}
            value={user}
            onChangeText={(texto) => setUser(texto)}
            underlineColorAndroid="transparent"
            keyboardType='numeric'
          />
          <Button title="Consultar Usuário" onPress={() => consultaUser(user)} />

        </View>

        <View style={styles.elements2}> 
          <Text style={styles.name}>Id: {id}</Text>
          <Text style={styles.name}>Nome: {name}</Text>
          <Text style={styles.name}>Bio: {bio}</Text>
          <Text style={styles.name}>Criado em: {created}</Text>
          <Text style={styles.name}>Seguidores: {followers}</Text>
          <Text style={styles.name}>Seguindo: {following}</Text>
          
        </View>
      </View>    
    )
  }


const styles = StyleSheet.create({
  container:{
    flex: 1,
    marginTop: 60,
    
  },
  elements:{
    alignItems: 'center'
  },
  elements2:{
    flex: 1,
    padding: 15
  },
  name:{
    marginTop: 15,
    fontSize: 16,
    textAlign: 'justify'
  },
  cep:{
    width: 280,
    height: 40,
    borderColor: '#000',
    borderWidth: 1,
    padding: 10,
    marginBottom: 15
  }
});
