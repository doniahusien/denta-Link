
import Button from "@/components/UI/Button/Button";

const EmptyCart = () => {
  return (
    <div className="text-center py-10 space-y-4">
      <h2 className="text-2xl font-semibold">Your Cart is Empty</h2>
      <p className="text-gray-600 pb-5">Start adding items to your cart now!</p>
      <Button title="Go to Market" link="/market/shop" className="mt-10 px-6 py-5" />
    </div>
  );
};

export default EmptyCart;
