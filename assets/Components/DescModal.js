import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Modal, Portal, Provider } from "react-native-paper";

export default function DescModal({
  visible,
  hideModal,
  strInstructions,
  strMeal,
}) {
  return (
    <Provider>
      <Portal>
        <Modal
          visible={visible}
          onDismiss={hideModal}
          style={styles.modalContent}
        >
          <Text style={styles.modalTitle}>{strMeal}</Text>
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
  modalTitle: {
    fontSize: 20,
  },
});
