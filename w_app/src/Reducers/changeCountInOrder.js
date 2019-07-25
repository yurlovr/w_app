// import { Const } from "../Const/Const";
//
// export const changeCount = (state, action, id) => {
//   switch (action.type) {
//     case Const.ADD:
//       return {
//         ...state,
//         orderState: state.orderState.map(i => {
//           if (i.id === id) {
//             return item;
//           } else {
//             return i;
//           }
//         })
//       };
//     case Const.DISSMISS:
//       item.count = item.count - 1;
//       if (item.count) {
//         return {
//           ...state,
//           orderState: state.orderState.map(i => {
//             if (i.id === id) {
//               return item;
//             } else {
//               return i;
//             }
//           })
//         };
//       } else {
//         return {
//           ...state,
//           orderState: state.orderState.filter(i => i.id !== id)
//         };
//       }
//     default:
//       return {
//         ...state,
//         orderState: state.orderState.filter(i => i.id !== id)
//       };
//   }
//   return{};
// };
