import TendencyCheckBox from "./TendencyCheckBox";

export default function EmotionBox({ emotionCheck, onChangeCheckBox, checkboxList }) {

    // {
    //     'id': 1,
    //     'emotion': '부담감',
    //     'interpersonalRelationship': ['위축되어 있다.', '긴장되어 있다.', '요구를 못한다.', '거절을 못한다.'],
    //     'familyrelationship': ['집에서는 파김치다.', '늘 지쳐있다.', '눈치를 보게 한다.', '함께 자리하기를 피한다.'],
    //     'workAndStudy': ['잘 하려고 한다.', '혼자 다한다', '할 일이 산더미 같이 쌓여있다.'],
    //     'strength': ['열심히 산다.', '맡은 바를 다한다.', '든든하다.']
    // },

    return (
        <div className="test-table">
            <table>
                <thead>
                    <tr>
                        <th>대인 관계</th>
                        <th>가족 관계</th>
                        <th>일 / 공부</th>
                        <th>강점</th>
                    </tr>
                </thead>
                <tbody>
                    {Array.from({ length: 4 }).map((_, rowIndex) => (
                        <tr key={rowIndex}>
                            <TendencyCheckBox
                                category={'interpersonalRelationship'}
                                checkbox={checkboxList['interpersonalRelationship']}
                                checkboxIndex={rowIndex}
                                tendency={emotionCheck.interpersonalRelationship[rowIndex]}
                                onChange={onChangeCheckBox}
                            />
                            <TendencyCheckBox
                                category={'familyRelationship'}
                                checkbox={checkboxList['familyRelationship']}
                                checkboxIndex={rowIndex}
                                tendency={emotionCheck.familyRelationship[rowIndex]}
                                onChange={onChangeCheckBox}
                            />
                            <TendencyCheckBox
                                category={'workAndStudy'}
                                checkbox={checkboxList['workAndStudy']}
                                checkboxIndex={rowIndex}
                                tendency={emotionCheck.workAndStudy[rowIndex]}
                                onChange={onChangeCheckBox}
                            />
                            <TendencyCheckBox
                                category={'strength'}
                                checkbox={checkboxList['strength']}
                                checkboxIndex={rowIndex}
                                tendency={emotionCheck.strength[rowIndex]}
                                onChange={onChangeCheckBox}
                            />
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );

    return (
        <table className="test-table">
            <thead>
                <tr>
                    <th>대인 관계</th>
                    <th>가족 관계</th>
                    <th>일 / 공부</th>
                    <th>강     점</th>
                </tr>
            </thead>

        </table>
    )
}