const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`;
export default async function getCategory(id) {
    const res = await fetch(`${URL}/${id}`);
    return res.json();
}