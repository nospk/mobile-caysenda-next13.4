
import { OrderVariant } from "@/types/order"
import { Key } from "react"

export const variantsList = ({ props }: { props?: OrderVariant[] }) => {
    return (
        <>
        </>
    )
}
export default variantsList;
/**
 * {
            props &&
            props.map((variant: OrderVariant, index: Key) => {
                <div>
                    <div className="flex justify-between">
                        <h3 className="flex-none">{variant.name}</h3>
                        <div className="order-last">{variant.price} VND</div>
                    </div>
                    <div className="flex justify-between">
                        <h4 className="category_Name">
                            {'Số Lượng'}
                        </h4>
                        <div className="">x{variant.quantity}</div>
                    </div>
                </div>
            })
        }
 */