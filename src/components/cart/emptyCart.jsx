
// import React from 'react';
// import { Link } from 'react-router-dom';

// const EmptyCart = () => {
//   return (
//     <div className="container mt-5">
//       <div className="row">
//         <div className="col-10 mx-auto text-center">
//           <h1>Your cart is currently empty</h1>
//           <Link to="/" className="btn btn-primary mt-3">
//             Return to Shop
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EmptyCart;


import Button from "@/components/UI/Button/Button";

const EmptyCart = () => {
  return (
    <div className="text-center py-10">
      <h2 className="text-2xl font-semibold">Your Cart is Empty</h2>
      <p className="text-gray-600">Start adding items to your cart now!</p>
      <Button title="Go to Market" link="/market" className="mt-4 px-6 py-3" />
    </div>
  );
};

export default EmptyCart;
