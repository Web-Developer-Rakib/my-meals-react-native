import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Modal, Portal, Provider } from "react-native-paper";

export default function DescModal({ visible, hideModal, strInstructions }) {
  return (
    <Provider>
      <Portal>
        <Modal
          visible={visible}
          onDismiss={hideModal}
          style={styles.modalContent}
        >
          <ScrollView nestedScrollEnabled={true}>
            <View>
              <Text>{strInstructions}</Text>
            </View>
          </ScrollView>
        </Modal>
      </Portal>
    </Provider>
  );
}
const styles = StyleSheet.create({
  modalContent: {
    backgroundColor: "white",
    padding: 10,
    margin: 10,
    marginBottom: 20,
  },
});
