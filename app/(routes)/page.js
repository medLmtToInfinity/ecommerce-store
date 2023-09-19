import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import Container from "@/components/ui/container"
import Billboard from "@/components/billboard";
import ProductList from "@/components/product-list";
async function HomePage() {
  const billboard = await getBillboard("eaab771b-9e53-4499-b75a-7a8777094b4c");
  const products = await getProducts( { isFeatured: true } )
  console.log("billboard", billboard)
  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />
      
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Featured Products" items={products} />
        </div>
      </div>
    </Container>
  )
}

export default HomePage