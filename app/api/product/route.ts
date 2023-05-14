// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextResponse } from 'next/server'
import type { Product } from '@/types/product'

const product = [
  {
    data: {
      image: 'https://images.unsplash.com/source-404?fm=eps&h=800&q=60&w=800',
      name: 'Quần dài',
      price: 40000,
      sold: 40,
      unit: 'Cái',
      link: '/product',
      product: {}
    },
    type: 'product'
  },
  {
    data: {
      image: 'https://images.unsplash.com/source-404?fm=eps&h=800&q=60&w=800',
      name: 'Quần ngắn',
      price: 50000,
      sold: 20,
      unit: 'Cái',
      link: '/product',
      product: {}
    },
    type: 'product'
  },
  {
    data: {
      image: 'https://images.unsplash.com/source-404?fm=eps&h=800&q=60&w=800',
      name: 'Quần cụt',
      price: 100000,
      sold: 1240,
      unit: 'Cái',
      link: '/product',
      product: {}
    },
    type: 'product'
  },
  {
    data: {
      image: 'https://images.unsplash.com/source-404?fm=eps&h=800&q=60&w=800',
      name: 'Áo thun',
      price: 40000,
      sold: 41,
      unit: 'Cái',
      link: '/product',
      product: {}
    },
    type: 'product'
  },
  {
    data: {
      image: 'https://images.unsplash.com/source-404?fm=eps&h=800&q=60&w=800',
      name: 'Áo dài',
      price: 4340000,
      sold: 543,
      unit: 'Cái',
      link: '/product',
      product: {}
    },
    type: 'product'
  },
  {
    data: {
      image: 'https://images.unsplash.com/source-404?fm=eps&h=800&q=60&w=800',
      name: 'Áo khoác',
      price: 404320,
      sold: 6540,
      unit: 'Cái',
      link: '/product',
      product: {}
    },
    type: 'product'
  },
  {
    data: {
      image: 'https://images.unsplash.com/source-404?fm=eps&h=800&q=60&w=800',
      name: 'Mắt kiếng',
      price: 40031200,
      sold: 404,
      unit: 'Cái',
      link: '/product',
      product: {}
    },
    type: 'product'
  },
  {
    data: {
      image: 'https://images.unsplash.com/source-404?fm=eps&h=800&q=60&w=800',
      name: 'Phấn kẻ mắt',
      price: 40043200,
      sold: 1340,
      unit: 'Bộ',
      link: '/product',
      product: {}
    },
    type: 'product'
  },
  {
    data: {
      image: 'https://images.unsplash.com/source-404?fm=eps&h=800&q=60&w=800',
      name: 'Kẹo dẻo',
      price: 400000,
      sold: 40,
      unit: 'Bịch',
      link: '/product',
      product: {}
    },
    type: 'product'
  },
  {
    data: {
      image: 'https://images.unsplash.com/source-404?fm=eps&h=800&q=60&w=800',
      name: 'Đồ chơi 1',
      price: 4000044,
      sold: 404,
      unit: 'Bộ',
      link: '/product',
      product: {}
    },
    type: 'product'
  },
  {
    data: {
      image: 'https://images.unsplash.com/source-404?fm=eps&h=800&q=60&w=800',
      name: 'Áo len',
      price: 321000,
      sold: 440,
      unit: 'Cái',
      link: '/product',
      product: {}
    },
    type: 'product'
  },
  {
    data: {
      image: 'https://images.unsplash.com/source-404?fm=eps&h=800&q=60&w=800',
      name: 'Áo đỏ',
      price: 321000,
      sold: 440,
      unit: 'Cái',
      link: '/product',
      product: {}
    },
    type: 'product'
  },
  {
    data: {
      image: 'https://images.unsplash.com/source-404?fm=eps&h=800&q=60&w=800',
      name: 'Áo vàng',
      price: 321000,
      sold: 440,
      unit: 'Cái',
      link: '/product',
      product: {}
    },
    type: 'product'
  },
  {
    data: {
      image: 'https://images.unsplash.com/source-404?fm=eps&h=800&q=60&w=800',
      name: 'Áo tím',
      price: 321000,
      sold: 440,
      unit: 'Cái',
      link: '/product',
      product: {}
    },
    type: 'product'
  },
  {
    data: {
      image: 'https://images.unsplash.com/source-404?fm=eps&h=800&q=60&w=800',
      name: 'Áo xanh',
      price: 321000,
      sold: 440,
      unit: 'Cái',
      link: '/product',
      product: {}
    },
    type: 'product'
  },
  {
    data: {
      image: 'https://images.unsplash.com/source-404?fm=eps&h=800&q=60&w=800',
      name: 'Áo hồng',
      price: 321000,
      sold: 440,
      unit: 'Cái',
      link: '/product',
      product: {}
    },
    type: 'product'
  },
  {
    data: {
      image: 'https://images.unsplash.com/source-404?fm=eps&h=800&q=60&w=800',
      name: 'Kẹo dẻo',
      price: 321000,
      sold: 440,
      unit: 'Bịch',
      link: '/product',
      product: {}
    },
    type: 'product'
  },
  {
    data: {
      image: 'https://images.unsplash.com/source-404?fm=eps&h=800&q=60&w=800',
      name: 'Kẹo socola',
      price: 321000,
      sold: 440,
      unit: 'Bịch',
      link: '/product',
      product: {}
    },
    type: 'product'
  },
  {
    data: {
      image: 'https://images.unsplash.com/source-404?fm=eps&h=800&q=60&w=800',
      name: 'Kẹo mè',
      price: 321000,
      sold: 440,
      unit: 'Bịch',
      link: '/product',
      product: {}
    },
    type: 'product'
  },
  {
    data: {
      image: 'https://images.unsplash.com/source-404?fm=eps&h=800&q=60&w=800',
      name: 'Kẹo đậu xanh',
      price: 321000,
      sold: 440,
      unit: 'Bịch',
      link: '/product',
      product: {}
    },
    type: 'product'
  }
] as Product[]
export async function GET () {
  return NextResponse.json(product, { status: 200 })
}
