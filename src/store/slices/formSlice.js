import { createSlice } from "@reduxjs/toolkit";
import { addCourse } from "./courseSlice";

const formSlice = createSlice({
  name: "form",
  initialState: {
    name: "",
    desription: "",
    cost: 0,
  },
  reducers: {
    changeName(state, action) {
      state.name = action.payload;
    },
    changeDesription(state, action) {
      state.desription = action.payload;
    },
    changeCost(state, action) {
      state.cost = action.payload;
      console.log(action.payload);
    }

  },
  // eğer courseSlice içerisindeki addCourse actionuna ulaşmak isteyip formda değişiklik yapmak istediğimizde yani,
  // formdaki değerleri kaydete bastığımızda sıfırlanmasını istemek gibi extraReducer kullanırız.
  extraReducers(builder) {
    builder.addCase(addCourse, (state, action) => {
      state.name = "";
      state.desription = "";
      state.cost = 0;
    })
  }

});

export const { changeName, changeCost, changeDesription } = formSlice.actions;
// actionslarımız yukarıdakı reducerlarımız içine yazdığımız şeyler , action.payload da state i bir şey göndererek değiştirmek istediğimizde kullanırız. id ,değer vb
export const formReducer = formSlice.reducer;
