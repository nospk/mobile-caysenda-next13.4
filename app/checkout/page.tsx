import CheckOut from "@/components/CheckOut";
import AddressService from "@/services/Address.service";
export default async function Page() {
  const listDelivery = await AddressService.getListDelivery();
  const activeDelivery = listDelivery.filter((item) => item.active == true);
  return (
    <CheckOut listDelivery={listDelivery} activeDelivery={activeDelivery[0]} />
  );
}
