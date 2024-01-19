import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeName, changeDesription, changeCost } from "../store/slices/formSlice";
import { addCourse } from "../store/slices/courseSlice";
function CourseForm(props) {
  const dispatch = useDispatch();
  const { name, desription, cost } = useSelector((state) => {
    return {
      name: state.form.name,
      desription: state.form.desription,
      cost: state.form.cost,
    }
  })
  console.log(name, desription, cost);

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addCourse({ name, desription, cost }));
  };
  return (
    <div className="courseForm panel">
      <h4 className="subtitle is-3">Kurs Ekle</h4>
      <form onSubmit={handleSubmit}>
        <div className="field-group">
          <div className="field">
            <label class="label">Ad</label>
            <input className="input is-expanded " onChange={(event) => { dispatch(changeName(event.target.value)) }} value={name} />
          </div>
          <div className="field">
            <label class="label">Açıklama</label>
            <textarea className="input is-expanded" onChange={(event) => { dispatch(changeDesription(event.target.value)) }} value={desription} />
          </div>
          <div className="field">
            <label class="label">Fiyat</label>
            <input className="input is-expanded" type="number" onChange={(event) => { dispatch(changeCost(parseInt(event.target.value))) }} value={cost} />
          </div>


        </div>
        <div className="field">
          <button className="button is-primary">Kaydet</button>
        </div>
      </form>
    </div>
  );
}

export default CourseForm;
