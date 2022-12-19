/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useGlobalContext } from "../../context/globalContext";
import { CommonLayout } from "../../layouts/common";

export const Contact = () => {
  const {setActivePage} = useGlobalContext();
  useEffect(()=>{
    setActivePage('contact')
  },[])
  return (
    <CommonLayout>
      <h1>Contact Us</h1>
    </CommonLayout>
  );
};
