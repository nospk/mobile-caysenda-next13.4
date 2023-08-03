import Cart from "@/components/Cart";
import AddressService from "@/services/Address.service";

export default async function Page() {
  //Get address
  const listDelivery = await AddressService.getListDelivery();
  const address = listDelivery.filter((item)=> item.active == true)
  return <Cart listDelivery={listDelivery} address={address[0].address}/>;
}
