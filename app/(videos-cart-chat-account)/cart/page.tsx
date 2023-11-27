import Cart from "@/components/Cart";
import AddressService from "@/services/Address.service";
export const dynamic = 'force-dynamic';
export default async function Page() {
  //Get address
  const listDelivery = await AddressService.getListDelivery();
  return <Cart listDelivery={listDelivery} />;
}
