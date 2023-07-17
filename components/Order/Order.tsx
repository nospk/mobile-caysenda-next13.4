import Image from 'next/image';
export default function Order ( ){
    return (
        <>
        <div className="background">
            <ul className = 'List_Order'>
                <li className = 'Order'>
                     <div className = 'name/check/station'></div>
                     <div className='product_List'>
                        <div className="product">
                            <Image src = {''} alt = 'product_img'/>
                            <div className="Name_price">
                            <h3 className="product_Name"></h3>
                            <div className="price"></div>
                            </div>
                            
                            <h4 className="category_Name"></h4>
                            
                        </div>
                     </div>
                </li>
            </ul>
            <div className=''>

            </div>
        </div>
        </>
    )
};