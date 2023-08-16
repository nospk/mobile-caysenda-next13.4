import CheckOut from "@/components/CheckOut";
import AddressService from "@/services/Address.service";
import CheckOutService from "@/services/CheckOut.service";
export default async function Page() {
  const listDelivery = await AddressService.getListDelivery();
  const activeDelivery = listDelivery.filter((item) => item.active == true);
  const data = await CheckOutService.getCheckOut();
  return (
    <CheckOut
      listDelivery={listDelivery}
      activeDelivery={activeDelivery[0]}
      data={data}
    />
  );
}
