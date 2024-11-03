import './App.css';
import EmotionCheckPage from "./component/EmotionCheckPage";
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import ResultPage from './ResultPage';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TestPageWrapper />} />
        <Route path="/result" element={<ResultPageWrapper />} />
      </Routes>
    </Router>
  );
}

// TestPageWrapper 컴포넌트: 테스트 페이지에서 완료 후 결과 페이지로 이동하도록 래핑
function TestPageWrapper() {
  const navigate = useNavigate();

  const handleComplete = (response) => {
    const result = getResult(response);
    // 테스트 완료 시 결과 페이지로 이동
    navigate('/result', { state: { result: result } });
  };

  return <EmotionCheckPage onComplete={handleComplete} />;
}

function getResult(response) {
  const result = [];

  for (let item of response) {
    let count = 0;
    count += item['familyRelationship'].filter(value => value === true).length;
    count += item['interpersonalRelationship'].filter(value => value === true).length;
    count += item['workAndStudy'].filter(value => value === true).length;
    count += item['strength'].filter(value => value === true).length;

    result.push({
      'emotion': item['emotion'],
      'count': count
    })
  }

  return result;
}

// ResultPageWrapper 컴포넌트: 결과 페이지에서 props로 결과 전달
function ResultPageWrapper() {
  const { state } = useLocation();
  const result = state?.result || '테스트가 아직 완료되지 않았습니다.';
  return <ResultPage result={result} />;
}