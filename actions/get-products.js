import qs from "query-string"
const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;
export default async function getProducts(query) {
    const url = qs.stringifyUrl({
        url: URL,
        query: {
            categoryId: query.categoryId,
            sizeId: query.sizeId,
            colorId: query.colorId,
        }
    })
    const res = await fetch(url);
    return res.json();
}