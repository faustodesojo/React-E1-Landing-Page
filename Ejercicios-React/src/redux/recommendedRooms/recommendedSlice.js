import { createSlice } from "@reduxjs/toolkit";
// import { recommendedRooms } from "../../data/recommendedRooms";

// const initialState = {
//   recommendedRooms: Array(4)
//     .fill(0)
//     .reduce((acc) => {
//       const IDS = acc.map((value) => value.id);
//       let newRecommended;
//       do {
//         newRecommended = {
//           ...recommendedRooms[
//             Math.floor(Math.random() * recommendedRooms.length)
//           ],
//         };
//       } while (IDS.includes(newRecommended.id));
//       return [...acc, newRecommended];
//     }, []),
// };

export const recommendedSlice = createSlice({
  name: "recommended",
  // initialState: initialState,
  // reducers: {
  //   randoomRecommended: (state) => {
  //     return state;
  //   },
  // },
});

export const { randoomRecommended } = recommendedSlice.actions;
export default recommendedSlice.reducer;
