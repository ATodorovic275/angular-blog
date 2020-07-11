export interface Post {
    id: number,
    title: string,
    description: string,
    date: string,
    author: { id: number, first_name: string, last_name: string },
    category: { id: number, name: string },
    image: { id: Number, src: string, alt: string }
}