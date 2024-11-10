// ResultPage.js
import React from 'react';
import './ResultPage.css';
import styled from 'styled-components';

import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend } from 'chart.js';

// Chart.js 필수 요소 등록
ChartJS.register(BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

const Container = styled.div`
  padding: 20px;
`;

const CustomTitle = styled.h2`
  text-align: center;
  color: #4a90e2;
`;

const InfoContainer = styled.div`
  margin: 20px 0;
`;

const InfoItem = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin-bottom: 10px;

  p {
    margin: 0;
    padding-right: 10px;
  }

  .tooltip {
    margin-left: 5px;
    width: 16px;
    height: 16px;
    background-color: #4a90e2;
    color: white;
    font-size: 12px;
    font-weight: bold;
    border-radius: 50%;
    text-align: center;
    line-height: 16px;
    cursor: pointer;
    position: relative;
  }

  .tooltip:hover .tooltip-text {
    visibility: visible;
    opacity: 1;
  }

  .tooltip-text {
    visibility: hidden;
    opacity: 0;
    width: 180px;
    background-color: #555;
    color: #fff;
    text-align: center;
    border-radius: 5px;
    padding: 5px;
    position: absolute;
    z-index: 1;
    bottom: 125%;
    left: 50%;
    margin-left: -95px;
    transition: opacity 0.3s;

    /* 삼각형 화살표 */
    &:after {
      content: '';
      position: absolute;
      top: 100%;
      left: 50%;
      margin-left: -5px;
      border-width: 5px;
      border-style: solid;
      border-color: #555 transparent transparent transparent;
    }
  }
`;

const descriptions = {
    A: "내가 주변에 주는 긍정적인 영향 정도",
    B: "내가 주변에 주는 부정적인 영향 정도",
    C: "내가 주변에서 받는 긍정적인 영향 정도",
    D: "내가 주변에서 받는 부정적인 영향 정도",
    E: "외부와의 차단 정도",
};

const descriptionsDetails = {
    A: {
        description: "내가 주변에 주는 긍정적인 영향 정도",
        details: "내가 주변에 얼마나 긍정적인 영향을 주는지를 나타냅니다. 높으면 높을수록 현재 주변에 긍정적인 영향을 많이 미칩니다."
    },
    B: {
        description: "내가 주변에 주는 부정적인 영향 정도",
        details: "내가 주변에 얼마나 부정적인 영향을 주는지를 나타냅니다. 높으면 높을수록 현재 주변에 부정적인 영향을 많이 미칩니다."
    },
    C: {
        description: "내가 주변에서 받는 긍정적인 영향 정도",
        details: "내가 주변에서 얼마나 긍정적인 영향을 받는지를 나타냅니다. 높으면 높을수록 현재 주변으로부터 긍정적인 영향을 많이 받고 있습니다."
    },
    D: {
        description: "내가 주변에서 받는 부정적인 영향 정도",
        details: "내가 주변에서 얼마나 부정적인 영향을 받는지를 나타냅니다. 높으면 높을수록 현재 주변으로부터 부정적인 영향을 많이 받고 있습니다."
    },
    E: {
        description: "외부와의 차단 정도",
        details: "어떤 영향도 받지 않는 상태 정도를 나타냅니다. 높으면 높을수록 외부와의 교류를 차단하고 있을 확률이 높습니다."
    },
};

export default function ResultStrokePage({ result }) {

    console.log(result);
    const resultKeys = Object.keys(result);
    const resultValues = Object.values(result);


    // 데이터를 정의합니다.
    const data = {
        labels: resultKeys,
        datasets: [
            {
                data: resultValues, // 데이터 값들
                backgroundColor: [
                    'rgba(75, 192, 192, 0.6)',  // A
                    'rgba(255, 99, 132, 0.6)',   // B
                    'rgba(54, 162, 235, 0.6)',   // C
                    'rgba(255, 206, 86, 0.6)',   // D
                    'rgba(153, 102, 255, 0.6)',  // E
                ],
                borderColor: [
                    'rgba(75, 192, 192, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(153, 102, 255, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };

    // 옵션을 정의합니다.
    const options = {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true,
                max: 10, // Y축의 최대값을 10으로 설정
                ticks: {
                    stepSize: 1, // Y축의 단계 크기를 1로 설정하여 정수만 표시
                },
            },
        },
        plugins: {
            legend: {
                display: false, // 모든 범례를 비활성화
            },
        },
    };

    // return (
    //     <Container>
    //         <CustomTitle>스트로크 진단 테스트 결과</CustomTitle>

    //     </Container>
    // )

    return (
        <div className="card">
            <InfoContainer>
                <h1>스트로크 진단 테스트 결과</h1>
                {Object.entries(descriptionsDetails).map(([key, description]) => (
                    <InfoItem key={key}>
                        <p>{key}: {description['description']}</p>
                        <div className="tooltip">
                            ?
                            <div className="tooltip-text">{description['details']}</div>
                        </div>
                    </InfoItem>
                ))}
            </InfoContainer>
            <div>
                <Bar data={data} options={options} />
            </div>

            <h1>스트로크 진단 테스트 해석 방법</h1>
            <p>1. 긍정적인 영향을 주는 것 보다 받는게 많다면 좋은 상황입니다.</p>
            <p>2. 주변에 부정적인 영향을 많이 주고 있다면 행동을 돌아볼 필요가 있습니다.</p>
            <p><div>3. 긍정적인 영향을 많이 주는데 반해 부정적인 영향을 많이 받는다면</div>
                <div>주변 사람들이 나에게 이로운지 생각해보세요.</div>
            </p>
            <p>외부와의 차단 정도가 높다면 사람에게 스트레스를 받고 있는 상황일 수 있습니다.</p>

            <div>
                <a href="/stroke" className="button">테스트 다시하기</a>
                <a href="/" className="button">처음으로</a>
            </div>
        </div >
    );
}