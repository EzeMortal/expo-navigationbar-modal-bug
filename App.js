import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import Modal from 'react-native-modal';

export default function App() {
  const [visible, setVisible] = useState(false);

  const handleClose = () => {
    setVisible(false);
  };

  return (
     <View style={styles.container}>
       <TouchableOpacity onPress={() => setVisible(true)}>
         <Text>Open modal</Text>
       </TouchableOpacity>

       <Modal
          isVisible={visible}
          onBackdropPress={handleClose}
          onBackButtonPress={handleClose}
          swipeDirection={'down'}
          onSwipeComplete={handleClose}
          backdropTransitionOutTiming={0}
          backdropOpacity={0.5}
          style={styles.modal}>
         <View style={styles.modalContent}>
           <Text>I am the modal content!</Text>
         </View>
       </Modal>
     </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  modal: {
    margin: 0,
    justifyContent: 'flex-end',
  },
  modalContent: {
    height: 500,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 20,
  },
});
