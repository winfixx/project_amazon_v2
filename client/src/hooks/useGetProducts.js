import { useQuery } from "@tanstack/react-query"
import productAPI from "../api/productAPI"
// categoryId = 0, name, page, brandId = 0, typeId = 0, limit = LIMIT_FETCH
const useGetProducts = product => {
    const { isLoading } = useQuery(
        [
            'get products',
            product.selectedCategory.id,
            product.nameProduct,
            product.page,
            product.selectedBrand.id,
            product.selectedType.id,
        ],
        async () => await productAPI.getALlProduct(
            product.selectedCategory.id,
            product.nameProduct,
            product.page,
            product.selectedBrand.id,
            product.selectedType.id
        ),
        {
            onSuccess: data => {
                product.setProducts(data.rows)
                product.setTotalCountProduct(data.count)
            },
            onError: error => console.log(error)
        }
    )
    return { isLoading }
}
export default useGetProducts