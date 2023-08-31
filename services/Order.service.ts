'use client'
import { OrderType } from "@/types/order";
import { useState } from 'react'
let listOrder = [
    {
        OrderId: "1234567890",
        Product: "iPhone 13 Pro Max",
        status: "new",
        price: 1000000000,
        category: [
            {
                name: "Phones",
                slug: "phones",
                condition: 1,
                amount: 1,
                products: [
                    {
                        productId: 1,
                        name: "iPhone 13 Pro Max",
                        id: 1,
                        sku: "iphone-13-pro-max",
                        slug: "iphone-13-pro-max",
                        conditionDefault: 1,
                        condition1: 2,
                        condition2: 3,
                        condition3: 4,
                        condition4: 5,
                        priceDefault: 1000,
                        price1: 1100,
                        price2: 1200,
                        price3: 1300,
                        price4: 1400,
                        thumbnail: "https://www.apple.com/iphone/13-pro-max/",
                        categoryId: 1,
                        retail: true,
                        quantity: 1,
                        range: 1,
                        amount: 1000,
                        active: true,
                        unit: "pcs",
                        variants: [
                            {
                                name: "128GB",
                                thumbnail: "https://www.apple.com/iphone/13-pro-max/128gb/",
                                id: 1,
                                sku: "iphone-13-pro-max-128gb",
                                price: 1000,
                                quantity: 1,
                                priceDefault: 1000,
                                vip1: 1100,
                                vip2: 1200,
                                vip3: 1300,
                                vip4: 1400,
                                selected: true,
                                variantId: 1,
                            }
                        ]
                    },
                    {
                        productId: 1,
                        name: "iPhone 13 Pro Max",
                        id: 1,
                        sku: "iphone-13-pro-max",
                        slug: "iphone-13-pro-max",
                        conditionDefault: 1,
                        condition1: 2,
                        condition2: 3,
                        condition3: 4,
                        condition4: 5,
                        priceDefault: 1000,
                        price1: 1100,
                        price2: 1200,
                        price3: 1300,
                        price4: 1400,
                        thumbnail: "https://www.apple.com/iphone/13-pro-max/",
                        categoryId: 1,
                        retail: true,
                        quantity: 1,
                        range: 1,
                        amount: 1000,
                        active: true,
                        unit: "pcs",
                        variants: [
                            {
                                name: "128GB",
                                thumbnail: "https://www.apple.com/iphone/13-pro-max/128gb/",
                                id: 1,
                                sku: "iphone-13-pro-max-128gb",
                                price: 1000,
                                quantity: 1,
                                priceDefault: 1000,
                                vip1: 1100,
                                vip2: 1200,
                                vip3: 1300,
                                vip4: 1400,
                                selected: true,
                                variantId: 1,
                            }
                        ]
                    },
                    {
                        productId: 1,
                        name: "iPhone 13 Pro Max",
                        id: 1,
                        sku: "iphone-13-pro-max",
                        slug: "iphone-13-pro-max",
                        conditionDefault: 1,
                        condition1: 2,
                        condition2: 3,
                        condition3: 4,
                        condition4: 5,
                        priceDefault: 1000,
                        price1: 1100,
                        price2: 1200,
                        price3: 1300,
                        price4: 1400,
                        thumbnail: "https://www.apple.com/iphone/13-pro-max/",
                        categoryId: 1,
                        retail: true,
                        quantity: 1,
                        range: 1,
                        amount: 1000,
                        active: true,
                        unit: "pcs",
                        variants: [
                            {
                                name: "128GB",
                                thumbnail: "https://www.apple.com/iphone/13-pro-max/128gb/",
                                id: 1,
                                sku: "iphone-13-pro-max-128gb",
                                price: 1000,
                                quantity: 1,
                                priceDefault: 1000,
                                vip1: 1100,
                                vip2: 1200,
                                vip3: 1300,
                                vip4: 1400,
                                selected: true,
                                variantId: 1,
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        OrderId: "9876543210",
        Product: "MacBook Pro 14",
        status: "shipping",
        category: [
            {
                name: "Computers",
                slug: "computers",
                condition: 2,
                amount: 1,
                products: [
                    {
                        productId: 2,
                        name: "MacBook Pro 14",
                        id: 2,
                        sku: "macbook-pro-14",
                        slug: "macbook-pro-14",
                        conditionDefault: 2,
                        condition1: 3,
                        condition2: 4,
                        condition3: 5,
                        condition4: 6,
                        priceDefault: 2000,
                        price1: 2100,
                        price2: 2200,
                        price3: 2300,
                        price4: 2400,
                        thumbnail: "https://www.apple.com/macbook-pro/14/",
                        categoryId: 2,
                        retail: true,
                        quantity: 1,
                        range: 1,
                        amount: 2000,
                        active: true,
                        unit: "pcs",
                        variants: [
                            {
                                name: "16GB RAM, 512GB SSD",
                                thumbnail: "https://www.apple.com/macbook-pro/14/16gb-ram-512gb-ssd/",
                                id: 2,
                                sku: "macbook-pro-14-16gb-ram-512gb-ssd",
                                price: 2000,
                                quantity: 1,
                                priceDefault: 2000,
                                vip1: 2100,
                                vip2: 2200,
                                vip3: 2300,
                                vip4: 2400,
                                selected: true,
                                variantId: 2,
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        OrderId: "9876543210",
        Product: "MacBook Pro 14",
        status: "complete",
        category: [
            {
                name: "Computers",
                slug: "computers",
                condition: 2,
                amount: 1,
                products: [
                    {
                        productId: 2,
                        name: "MacBook Pro 14",
                        id: 2,
                        sku: "macbook-pro-14",
                        slug: "macbook-pro-14",
                        conditionDefault: 2,
                        condition1: 3,
                        condition2: 4,
                        condition3: 5,
                        condition4: 6,
                        priceDefault: 2000,
                        price1: 2100,
                        price2: 2200,
                        price3: 2300,
                        price4: 2400,
                        thumbnail: "https://www.apple.com/macbook-pro/14/",
                        categoryId: 2,
                        retail: true,
                        quantity: 1,
                        range: 1,
                        amount: 2000,
                        active: true,
                        unit: "pcs",
                        variants: [
                            {
                                name: "16GB RAM, 512GB SSD",
                                thumbnail: "https://www.apple.com/macbook-pro/14/16gb-ram-512gb-ssd/",
                                id: 2,
                                sku: "macbook-pro-14-16gb-ram-512gb-ssd",
                                price: 2000,
                                quantity: 1,
                                priceDefault: 2000,
                                vip1: 2100,
                                vip2: 2200,
                                vip3: 2300,
                                vip4: 2400,
                                selected: true,
                                variantId: 2,
                            }
                        ]
                    }
                ]
            }
        ]
    }
]

// Create a function to get orders
const getOrder = async (status: string | undefined) => {

    if (status === undefined) {
        const newList = { ...listOrder, category: [] }
        return newList;
    } else {
        return listOrder.filter((order) => order.status === status) as OrderType[];
    }
};

// Create a function to delete orders 
const delOrder = async (orderId: string) => {
    listOrder = listOrder.filter((order) => order.OrderId !== orderId);
};

// Create a function to update orders
const updateOrder = async (order: OrderType) => {
    const index = listOrder.findIndex((o) => o.OrderId === order.OrderId);
}
const detailOrder = async (orderId: string) => {

}
// Export the functions
export { getOrder, delOrder, updateOrder };
