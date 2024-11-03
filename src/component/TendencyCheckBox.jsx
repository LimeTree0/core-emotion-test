export default function TendencyCheckBox({ tendency, category, onChange, checkboxIndex, checkbox }) {

    // function handleChangeCheckBox(category, checkboxIndex, value) {
    //     setCheckboxList(prevCheckboxList => {
    //         const updatedCheckboxList = [...prevCheckboxList];
    //         updatedCheckboxList[index] = {
    //             ...updatedCheckboxList[index],
    //             [category]: updatedCheckboxList[index][category].map((item, idx) =>
    //                 idx === checkboxIndex ? value : item)
    //         }
    //     })
    // }

    if (tendency !== undefined) {
        return (
            <td>
                <label className="checkbox-container">
                    {tendency}
                    <input type="checkbox"
                        checked={checkbox[checkboxIndex]}
                        onChange={(event) => {
                            onChange(category, checkboxIndex, event.target.checked);
                        }} />
                    <span className="checkmark"></span>
                </label>
            </td>
        )
    }
}