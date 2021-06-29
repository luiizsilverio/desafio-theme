import React, { useState } from 'react';
import { Picker } from '@react-native-picker/picker' 

import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  Modal, 
  Button 
} from 'react-native';

import { useTheme } from '../contexts/useTheme'

export function Header() {
  const [modalOpen, setModalOpen] = useState(false)
  const { idTheme, theme, changeTheme } = useTheme()    
  
  return (
    <View style={[styles.header, {backgroundColor: theme.backgroundHeader}]}>
      <Text style={[styles.headerTitle, {color: theme.colorHeader}]}>
        to.
      </Text>
      <Text style={[styles.headerTitle, 
        {color: theme.colorHeader, fontFamily: 'Poppins-SemiBold'}]}
      >
        do
      </Text>

      <TouchableOpacity
        activeOpacity={0.6}
        onPress={() => setModalOpen(true)}   
        style={[styles.headerButton, {backgroundColor: theme.backgroundInput}]}     
      >
        <Text style={{color: theme.colorInput}}>
          Tema {theme.name}
        </Text>
      </TouchableOpacity> 

      <Modal
        visible={modalOpen}
        animationType="fade"
        transparent={false}           
      >              
        <View>
          <View>
            <Text style={[styles.headerText, {color: theme.colorTitle}]}>
              Escolha o Tema
            </Text>

            <Picker
              style={{height: 50, width: '80%', marginLeft: 32}}
              selectedValue={idTheme}
              onValueChange={(itemValue, itemIndex) => (
                changeTheme(itemValue)
              )}
            >
              <Picker.Item label="Light Blue"    value="0" />
              <Picker.Item label="Pink Dracula"  value="1" />
              <Picker.Item label="Deep Ocean"    value="2" />
              <Picker.Item label="Skyline Moon"  value="3" />
              <Picker.Item label="Hot Capuccino" value="4" />
            </Picker>
          </View>
        
          <Button title="Fechar"
            onPress={() => setModalOpen(false)}
          />
        </View>
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    paddingTop: 32,
    paddingBottom: 44,
    paddingHorizontal: 12,
    justifyContent: 'center',
    alignItems: 'center', 
    flexDirection: 'row'
  },
  headerTitle: {
    fontSize: 24,
    fontFamily: 'Poppins-SemiBold'
  },
  headerText: {
    fontSize: 24,
    fontFamily: 'Poppins-Regular',
    textAlign: 'center'
  },
  headerButton: {
    marginLeft: 'auto',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 110,
    height: 40
  }
});
