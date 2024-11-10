import { useState } from "react"
import { strokeQuestionList } from "./data";
import StrokeQuestionBox from "./StrokeQuestionBox";
import styled from "styled-components";

const Container = styled.div`
width: 90%;
    max-width: 400px;
    background: #ffffff;
    padding: 25px 35px;
    border-radius: 12px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    text-align: center;
`

const Title = styled.h1`
font-size: 24px;
    margin-bottom: 20px;
    color: #3b5998;
    /* 제목의 색상 */
    font-weight: bold;
`

const QuestionNumber = styled.p`
font-size: 14px;
    font-weight: bold;
    color: #555;
    margin-bottom: 10px;
`

const QuestionBox = styled.div`
margin-bottom: 20px;
    padding: 20px;
    border-radius: 12px;
    background-color: #f9f9f9;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
`


export default function StrokeCheckPage({ onComplete }) {
    const [shuffledQuestionList, setShuffledQuestionList] = useState([]);
    const [index, setIndex] = useState(0);
    const [scoreList, setScoreList] = useState(
        {
            A: 0,
            B: 0,
            C: 0,
            D: 0,
            E: 0
        }
    );

    // 질문 리스트를 무작위로 섞어주는 함수
    function shuffle(array) {

        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));

            let t = array[i];
            array[i] = array[j];
            array[j] = t
        }
    }

    if (shuffledQuestionList.length === 0) {
        let questionList = Object.assign([], strokeQuestionList);
        shuffle(questionList);
        setShuffledQuestionList(questionList);
    }

    function handleClickScore(category, score) {
        let currentScoreList = Object.assign([], scoreList);
        currentScoreList[category] += score;
        setScoreList(currentScoreList);
        setIndex(index + 1);

        if (index + 1 === shuffledQuestionList.length) {
            onComplete(currentScoreList);
        }
    }

    return (
        <Container>
            <Title>스트로크 진단 테스트</Title>
            <QuestionNumber>{index + 1}/{shuffledQuestionList.length}</QuestionNumber>
            <QuestionBox>
                <StrokeQuestionBox
                    question={shuffledQuestionList[index]}
                    onClickScore={handleClickScore}
                />
            </QuestionBox>
        </Container>
    )

}