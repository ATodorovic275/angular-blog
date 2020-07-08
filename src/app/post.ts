export interface Post {
    id: number,
    title: string,
    description: string,
    date: string,
    // author: { id: number, first_name: string, last_name: string },
    // category: { id: number, name: string },
    // image: string
    category_id: number,
    author_id: number
}