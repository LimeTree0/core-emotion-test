import styled from "styled-components";

const Question = styled.p`
font-size: 16px;
margin-bottom: 20px;
color: #333;
line-height: 1.5;
`;

const Options = styled.div`
display: flex;
    flex-direction: column;
    gap: 10px;
`;

const Option = styled.div`
font-size: 14px;
    color: #333;
    background: #ffffff;
    border: 1px solid #ddd;
    padding: 10px;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.3s, box-shadow 0.3s;
    display: flex;
    align-items: center;

    &:hover {
    background-color: #f0f8ff;
    /* 선택 항목에 호버 효과 */
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    }
`;

export default function StrokeQuestionBox({ question, onClickScore }) {

    return (
        <>
            <Question>{question['question']}</Question>
            <Options>
                <Option onClick={() => onClickScore(question['category'], 0)}>전혀 그렇지 않다</Option>
                <Option onClick={() => onClickScore(question['category'], 1)}>잘 모르겠다</Option>
                <Option onClick={() => onClickScore(question['category'], 2)}>그렇다</Option>
            </Options>
        </>
    );
}