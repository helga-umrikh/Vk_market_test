import { Item } from '../models/Item'

export async function getItems(): Promise<Item[] | undefined> {
    try {
        const response = await fetch('https://fakestoreapi.com/products')
        const data = await response.json()
        return data
    } catch (error) {
        console.error('Error fetching items:', error)
        return []
    }
}
