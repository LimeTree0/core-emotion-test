import React from 'react';
import styled from 'styled-components';

// 카드 스타일 정의
const CardContainer = styled.div`
  display: flex;
  gap: 20px; // 카드 사이의 간격
  justify-content: center; // 중앙 정렬
  margin-top: 20px;
`;

const Card = styled.a`
  text-decoration: none; // 밑줄 제거
  color: #333; // 텍스트 색상
  background-color: #fff; // 카드 배경 색상
  border-radius: 8px; // 모서리를 둥글게
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); // 그림자 효과
  width: 200px; // 카드의 폭
  padding: 20px; // 카드 내부 여백
  text-align: center; // 텍스트 중앙 정렬
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px); // 마우스를 올렸을 때 약간 위로 이동
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2); // 마우스를 올렸을 때 그림자 확대
  }
`;

const CardTitle = styled.h3`
  margin-bottom: 10px;
  font-size: 1.2rem;
  color: #4a90e2; // 제목 색상
`;

const CardDescription = styled.p`
  font-size: 1rem;
  color: #666; // 설명 색상
`;

const MainPage = () => {
    return (
        <CardContainer>
            <Card href="/coreemotion">
                <CardTitle>핵심 감정 테스트</CardTitle>
                <CardDescription>나의 핵심 감정을 알아봅니다.</CardDescription>
            </Card>
            <Card href="/stroke">
                <CardTitle>스트로크 진단 테스트</CardTitle>
                <CardDescription>내가 주변에 어떤 영향을 많이 미치는지 알아봅니다.</CardDescription>
            </Card>
        </CardContainer>
    );
};

export default MainPage;