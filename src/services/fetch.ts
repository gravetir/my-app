import { Category } from '../types/category'
import { Product } from '../types/product'

const BASE = 'http://localhost:8888/api'

export async function fetchCategories(): Promise<Category[]> {
    const res = await fetch(`${BASE}/category`)
    if (!res.ok) throw new Error('Ошибка загрузки категорий')
    return res.json()
}
export async function fetchProducts(): Promise<Product[]> {
    const res = await fetch(`${BASE}/product`)
    if (!res.ok) throw new Error('Ошибка загрузки категорий')
    return res.json()
}