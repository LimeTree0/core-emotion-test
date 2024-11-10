import { useState } from "react";
import { emotionCheckList } from '../data';
import '../EmotionCheckPage.css';
import EmotionBox from "./EmotionBox";
import styled from "styled-components";

export default function EmotionCheckPage({ onComplete }) {

  const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

  const Modal = styled.div`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  max-width: 400px;
  width: 100%;
  position: relative;
`;

  const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  font-size: 20px;
  cursor: pointer;
`;

  const Title = styled.h2`
  text-align: center;
  color: #4a90e2;
  margin-bottom: 20px;
  font-size: 20px;
  font-weight: bold;
`;

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [index, setIndex] = useState(0);
  const [checkboxList, setCheckboxList] = useState(
    emotionCheckList.map(emotionCheck => (
      {
        'id': emotionCheck['id'],
        'emotion': emotionCheck['emotion'],
        'interpersonalRelationship': Array(emotionCheck['interpersonalRelationship'].length).fill(false),
        'familyRelationship': Array(emotionCheck['familyRelationship'].length).fill(false),
        'workAndStudy': Array(emotionCheck['workAndStudy'].length).fill(false),
        'strength': Array(emotionCheck['strength'].length).fill(false)
      }
    ))
  )

  function handleChangeCheckBox(category, checkboxIndex, value) {
    setCheckboxList(prevCheckboxList => {
      const updatedCheckboxList = [...prevCheckboxList];
      updatedCheckboxList[index] = {
        ...updatedCheckboxList[index],
        [category]: updatedCheckboxList[index][category].map((item, idx) =>
          idx === checkboxIndex ? value : item)
      }

      return updatedCheckboxList;
    })
  }

  function handleSubmit() {
    /* eslint-disable no-restricted-globals */
    if (confirm("제출하시겠습니까?")) {
      onComplete(checkboxList);
    }
    /* eslint-enable no-restricted-globals */
  }

  function handleClickNext() {
    setIndex(index + 1);
  }

  function handleClickPrev() {
    setIndex(index - 1);
  }

  const openModal = (content) => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="card">
        <h1 onClick={() => openModal("테스트")}>핵심감정 심리 테스트</h1>
        <p>제목을 누르면 설명이 나옵니다.</p>
        <main className="test-container">
          <div className="test-box">
            <EmotionBox
              emotionCheck={emotionCheckList[index]}
              checkboxList={checkboxList[index]}
              onChangeCheckBox={handleChangeCheckBox}
            />
          </div>
        </main>
        <div className="pagination">
          <button
            className="button"
            onClick={handleClickPrev}
            disabled={index === 0}
          >
            이전
          </button>

          <span>{index + 1}/{emotionCheckList.length}</span>
          {index !== emotionCheckList.length - 1 && <button
            className="button"
            id="next"
            onClick={handleClickNext}
          >
            다음
          </button>}
          {index === emotionCheckList.length - 1 && <button
            className="button"
            onClick={handleSubmit}
          >
            제출
          </button>}
        </div>
      </div>
      {isModalOpen && (
        <ModalBackground onClick={closeModal}>
          <Modal onClick={(e) => e.stopPropagation()}>
            <CloseButton onClick={closeModal}>&times;</CloseButton>
            <Title>설명</Title>
            <p>1. 나에게 해당된다고 생각되거나 반반이라면 체크합니다.</p>
            <p>2. 나에게 확실히 해당되지 않는다고 생각되면 체크하지 않습니다.</p>
            <p>3. 대인 관계 줄에 있는 내용은 대인 관계에서의 자기 성향을 나타냅니다.</p>
            <p>4. 체크는 중복으로 할 수 있습니다.</p>
            <p>5. 모든 항목을 체크하셨으면 맨 마지막 항목으로 가 제출을 누르면 됩니다.</p>
          </Modal>
        </ModalBackground>

      )}
    </>
  );
}