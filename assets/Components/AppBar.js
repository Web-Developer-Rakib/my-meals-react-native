import { Appbar } from "react-native-paper";

export default function AppBar({ search, setSearchBar, searchBar }) {
  return (
    <Appbar.Header>
      <Appbar.Content title="My meals" />
      {searchBar === false ? (
        <Appbar.Action icon="magnify" onPress={search} />
      ) : (
        <Appbar.Action icon="magnify" onPress={() => setSearchBar(false)} />
      )}
    </Appbar.Header>
  );
}
