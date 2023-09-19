const URL = `${process.env.NEXT_PUBLIC_API_URL}/colors`;
export default async function getColors() {
    const res = await fetch(URL);
    return res.json();
}