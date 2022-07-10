import React from "react";
import styled from "styled-components/native";

const Btn = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.mainBgColor};
`;

const Title = styled.Text`
  color: ${(props) => props.theme.textColor};
`;

const Search = ({ navigation: { navigate } }: any) => (
  <Btn onPress={() => navigate("Stack", { screen: "Two" })}>
    <Title>Search</Title>
  </Btn>
);
export default Search;