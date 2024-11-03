import { useState } from "react";
import { emotionCheckList } from '../data';
import '../EmotionCheckPage.css';
import EmotionBox from "./EmotionBox";

export default function EmotionCheckPage({ onComplete }) {
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

  return (
    <div className="card">
      <h1>핵심감정 심리 테스트</h1>
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
  );
}