import { makeAutoObservable } from "mobx"

export default class ModalHideStore {
    constructor() {
        this._hideFavourites = true
        this._hideCart = true
        makeAutoObservable(this)
    }

    setHideFavourites(bool) {
        this._hideFavourites = bool
    }
    setHideCart(bool) {
        this._hideCart = bool
    }

    get hideFavourites() {
        return this._hideFavourites
    }
    get hideCart() {
        return this._hideCart
    }
}