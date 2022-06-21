import { useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { Card, Paragraph, Text, Title } from "react-native-paper";
import DescModal from "./DescModal";

export default function MealsCard({ meal }) {
  const { strMeal, strCategory, strInstructions, strMealThumb, idMeal } = meal;
  const [visible, setVisible] = useState(false);
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  return (
    <View key={idMeal}>
      <ScrollView>
        <Card style={styles.card}>
          <Card.Content style={styles.cardContent}>
            <Title>{strMeal}</Title>
            <Text variant="displayMedium">{strCategory}</Text>
          </Card.Content>
          <Card.Cover source={{ uri: `${strMealThumb}` }} />
          <Paragraph style={styles.paragraph}>
            {strInstructions.slice(0, 200)}
            <Paragraph style={styles.readMore} onPress={showModal}>
              {""} Read more
            </Paragraph>
          </Paragraph>
        </Card>
      </ScrollView>
      <DescModal
        visible={visible}
        hideModal={hideModal}
        strInstructions={strInstructions}
        strMeal={strMeal}
      ></DescModal>
    </View>
  );
}
// StyleSheet
const styles = StyleSheet.create({
  paragraph: {
    padding: 10,
  },
  cardContent: {
    marginBottom: 10,
  },
  card: {
    margin: 10,
    borderStyle: "solid",
    borderWidth: 1,
  },
  readMore: {
    color: "red",
  },
});
