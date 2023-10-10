import { observer } from "mobx-react-lite"
import React, { useContext } from "react"
import useGetCategories from "../hooks/useGetCategories"
import useGetProducts from "../hooks/useGetProducts"
import { Context } from "../index"
import style from "./Shop.module.css"
import ProductsList from "../components/screens/ProductsList"
import Loading from "../components/shared/loading/Loading"

const Shop = observer(() => {
  const { product } = useContext(Context)

  const { isLoading } = useGetProducts(product)
  useGetCategories(product)

  return (
    <div className={style.shop}>
      {isLoading ?
        <Loading />
        :
        <div className={style.container}>
          {product.nameProduct &&
            <div className={style.search}>
              Products on searching "{product.nameProduct}"
            </div>
          }
          {product.products.length ?
            <ProductsList />
            :
            <div className={style.not__found}>Nothing found...</div>
          }
        </div>
      }
    </div>
  )
})

export default Shop
