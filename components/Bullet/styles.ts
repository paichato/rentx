import styled from "styled-components/native";

interface ImageIndexProp {
  active?: boolean;
}

export const Container = styled.View<ImageIndexProp>`
  width: 6px;
  height: 6px;
  border-radius: 3;
  background-color: ${({ theme, active }) =>
    active ? theme.colors.title : theme.colors.shape};
  margin-left: 8px;
`;
