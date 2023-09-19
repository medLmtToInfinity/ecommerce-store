import getBillboard from "@/actions/get-billboard";
import getCategory from "@/actions/get-category";
import getColors from "@/actions/get-colors";
import getProducts from "@/actions/get-products"
import getSizes from "@/actions/get-sizes"
import Billboard from "@/components/billboard";
import Container from "@/components/ui/container";
import Filter from "./components/filter";
import NoResult from "@/components/ui/no-results";
import ProductCard from "@/components/ui/product-card";
import MobileFilters from "./components/mobile-filters";

export default async function CategoryPage( {params: { categoryId }, searchParams: { colorId, sizeId }} ) {
    const products = await getProducts({
        categoryId,
        colorId,
        sizeId,
    })
    console.log("product: ", products)
    const sizes = await getSizes();
    const colors = await getColors();
    const category = await getCategory(categoryId);
    const billboard = await getBillboard(category.billboardId)
    return (
        <div className="bg-white">
            <Container>
                <Billboard 
                    data={billboard}
                />
                <div className="px-4 sm:px-6 lg-px-8 pb-24">
                    <div className="lg:grid lg:grid-cols-5 lg:gap-x-8">
                        <MobileFilters sizes={sizes} colors={colors} />
                        <div className="hidden lg:block">
                            <Filter 
                                valueKey="sizeId"
                                name="Sizes"
                                data={sizes}
                            />
                            <Filter 
                                valueKey="colorId"
                                name="colors"
                                data={colors}
                            />
                        </div>
                        <div className="lg:col-span-4 mt-6 lg:mt-0">
                            {!products.length && <NoResult />}
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                                {
                                    products.map(product => {
                                        return <ProductCard key={product.id} data={product} />
                                    })
                                }

                            </div>
                        </div>
                    </div>

                </div>
            </Container>
        </div>
    )
}