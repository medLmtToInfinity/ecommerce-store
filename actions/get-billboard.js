const URL = `${process.env.NEXT_PUBLIC_API_URL}/billboards`;
export default async function getBillboard(id) {
    const res = await fetch(`${URL}/${id}`);
    return res.json();
}