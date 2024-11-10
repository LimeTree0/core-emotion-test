// ResultPage.js
import React from 'react';
import './ResultPage.css';
import { emotionResultList } from './data';

export default function ResultPage({ result }) {

    const maxCountEmotion = result.reduce((max, obj) => {
        return obj.count > max.count ? obj : max;
    }, result[0]);

    const emotionResult = emotionResultList.filter(emotion => maxCountEmotion.emotion === emotion.emotion)[0];


    return (
        <div className="card">
            <h1>심리 테스트 결과</h1>
            <p className="emotion">감정: {emotionResult.emotion}</p>
            <p className="section-title">긍정 요인</p>
            <p>{emotionResult.positive.join(', ')}</p>
            <p className="section-title">그림자</p>
            <p>{emotionResult.negative.join(', ')}</p>
            <p className="section-title">보완점</p>
            <p>{emotionResult.effort.join(', ')}</p>
            <a href="/coreemotion" className="button">테스트 다시하기</a>
            <a href="/" className="button">처음으로</a>
        </div>
    );
}