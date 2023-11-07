"use client";
import React, { useEffect, useState } from "react";
import { ListDelivery } from "@/types/Delivery";
import AddressService from "@/services/Address.service";
function ChangeAddress() {
  const [listDelivery, setListDelvery] = useState<ListDelivery[]>([]);
  useEffect(() => {
    const setup = async () => {
      const getdata = await AddressService.getListDelivery();
      setListDelvery(getdata);
    };
    setup();
  }, []);
  return (
    <>
      {listDelivery.map((item, index) => (
        <div key={index}>
          <span>{item.address}</span>;
        </div>
      ))}
    </>
  );
}

export default ChangeAddress;
