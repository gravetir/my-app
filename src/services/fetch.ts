import { Category } from '../types/category'
import { Product } from '../types/product'

const BASE = 'http://178.154.206.159:8888/api/'

export async function fetchCategories(): Promise<Category[]> {
    const res = await fetch(`${BASE}category/all`)
    if (!res.ok) throw new Error('Ошибка загрузки категорий')
    return res.json()
}
export async function fetchProducts(): Promise<Product[]> {
    const res = await fetch(`${BASE}product/all`)
    if (!res.ok) throw new Error('Ошибка загрузки товаров')
    return res.json()
}