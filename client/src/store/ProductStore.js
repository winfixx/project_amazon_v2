import { makeAutoObservable } from "mobx"

export default class ProductStore {
    constructor() {
        this._products = []
        this._favourites = []
        this._cart = []
        this._categories = []
        this._brands = []
        this._types = []
        this._selectedCategory = {}
        this._selectedBrand = {}
        this._selectedType = {}
        this._nameProduct = ''
        this._page = 1
        this._totalCountProduct = 0
        this._isLoading = false
        makeAutoObservable(this)
    }

    setProducts(products) {
        this._products = products
    }
    setFavourites(products) {
        this._favourites = products
    }
    setCart(products) {
        this._cart = products
    }
    setCategories(categories) {
        this._categories = categories
    }
    setBrands(brands) {
        this._brands = brands
    }
    setTypes(types) {
        this._types = types
    }
    setSelectedCategory(category) {
        this._selectedCategory = category
    }
    setSelectedBrand(brand) {
        this._selectedBrand = brand
    }
    setSelectedType(type) {
        this._selectedType = type
    }
    setNameProduct(name) {
        this._nameProduct = name
    }
    setPage(page) {
        this._page = page
    }
    setTotalCountProduct(count) {
        this._totalCountProduct = count
    }
    setIsLoading(bool) {
        console.log(bool)
        this._isLoading = bool
    }

    get products() {
        return this._products
    }
    get favourites() {
        return this._favourites
    }
    get cart() {
        return this._cart
    }
    get categories() {
        return this._categories
    }
    get brands() {
        return this._brands
    }
    get types() {
        return this._types
    }
    get selectedCategory() {
        return this._selectedCategory
    }
    get selectedBrand() {
        return this._selectedBrand
    }
    get selectedType() {
        return this._selectedType
    }
    get nameProduct() {
        return this._nameProduct
    }
    get page() {
        return this._page
    }
    get totalCountProduct() {
        return this._totalCountProduct
    }
    get isLoading() {
        return this._isLoading
    }
}