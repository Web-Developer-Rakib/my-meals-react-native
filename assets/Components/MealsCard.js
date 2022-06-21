import { StyleSheet, View } from "react-native";
import { Card, Paragraph, Text, Title } from "react-native-paper";

export default function MealsCard() {
  return (
    <View>
      <Card>
        <Card.Content>
          <Title>Card title</Title>
          <Text variant="displayMedium">Display Medium</Text>
        </Card.Content>
        <Card.Cover source={{ uri: "https://picsum.photos/700" }} />
        <Paragraph style={styles.paragraph}>Card content</Paragraph>
      </Card>
    </View>
  );
}
const styles = StyleSheet.create({
  paragraph: {
    padding: 10,
  },
});
