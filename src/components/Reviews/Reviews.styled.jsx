import styled from 'styled-components';

export const ReviewsList = styled.ul`
  list-style: none;
`;

export const ReviewsItem = styled.li`
  margin-bottom: 20px;
  padding: 20px 30px;
  box-shadow: rgba(26, 7, 22, 0.267) 0px 2px 10px 0px;
  border-radius: 5px;
  text-align: justify;
  line-height: 1.5;
  font-size: 16px;
`;

export const ReviewsAuthor = styled.h4`
  text-align: right;
  margin-right: 100px;
`;

export const ReviewsText = styled.p`
  font-size: 24px;
  font-style: italic;
  color: #ccc;
`;
