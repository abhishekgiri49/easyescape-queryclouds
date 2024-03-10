import { Paynow } from "../../../../views";
const PaymentCard = () => {
  return (
    <div className="card">
      <div className="card-header">
        <h5 className="card-title">Payment</h5>
      </div>
      <div className="card-body">
        <Paynow />
      </div>
    </div>
  );
};
export default PaymentCard;
