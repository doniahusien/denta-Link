// 'use client';
// import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { openLogoutModal, closeLogoutModal } from '@/redux/features/auth/authSlice';
// import { logoutUser } from '@/redux/features/auth/authThunk';


// const Modal = () => {
//     const dispatch = useDispatch();
//     const { isLogoutModalOpen } = useSelector((state) => state.auth);

//     if (!isLogoutModalOpen) return null;

//     const handleLogout = () => {
//         dispatch(logoutUser());
//         dispatch(closeLogoutModal());
//     };

//     return (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
//             <div className="bg-white p-6 rounded-lg shadow-md w-11/12 max-w-md text-center">
//                 <h3 className="text-lg font-semibold mb-4">Are you sure?</h3>
//                 <p className="mb-6">Do you really want to logout?</p>
//                 <div className="flex justify-center space-x-4">
//                     <button
//                         onClick={handleLogout}
//                         className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
//                     >
//                         Yes
//                     </button>
//                     <button
//                         onClick={() => dispatch(closeLogoutModal())}
//                         className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 transition"
//                     >
//                         No
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Modal;
