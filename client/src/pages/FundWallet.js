import React from "react";
import styled from "styled-components";
import { useGlobalContext } from "../context/UserContext";

import { toast } from "react-toastify";
import FormInput from "../components/FormInput";

const FundWallet = () => {
  const {
    handleChange,
    isValidated,
    fundWalletCoupon,
    user: { userName },
    couponCode,
  } = useGlobalContext();

  const handleInputChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    handleChange({ name, value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!userName || !couponCode) return toast.error("Enter a coupon code");
    fundWalletCoupon();
  };

  return (
    <Wrapper>
      <h4 className="title">fund wallet</h4>
      <form onSubmit={handleSubmit} className="form">
        <p className="title">Fund your wallet with coupon code</p>

        <FormInput
          type="text"
          name="couponCode"
          value={couponCode}
          labelText="Enter a coupon code"
          placeholder="coupon code"
          handleChange={handleInputChange}
          disabled={isValidated}
        />
        <button type="submit" className="btn">
          fund wallet
        </button>
      </form>
    </Wrapper>
  );
};

export default FundWallet;
const Wrapper = styled.div`
  padding-right: 3rem;
`;
