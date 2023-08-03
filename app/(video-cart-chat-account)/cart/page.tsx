import Cart from "@/components/Cart";
import AddressService from "@/services/Address.service";

export default async function Page() {
  //Get address
  const address = await AddressService.getCurrentAddress();
  const listDelivery = await AddressService.getListDelivery();
  return <Cart address={address} listDelivery={listDelivery} />;
}
