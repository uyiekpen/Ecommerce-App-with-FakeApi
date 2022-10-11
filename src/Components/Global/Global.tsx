import { atom, selector } from "recoil";
import { recoilPersist } from 'recoil-persist'
import axios from "axios"
const url = "https://fakestoreapi.com/products"

const { persistAtom } = recoilPersist()

interface RatingData {
    rate: number,
    count: number
}

interface MyData {
    id : number,
    title: string,
    price : number,
    image :string,
    description: string,
    category : string,
    rating : RatingData

}

interface AUTH {
    name: string;
    email: string;
}

export const  authData = atom<AUTH>({
    key: "authData",
    default: (null as null)||({} as AUTH),
    effects_UNSTABLE: [persistAtom],

})

export const  ProductData = selector({
    key: "ProductData",
    get: async () => {
        const data = await axios.get(url)
        const neWdata = data.data as Array<MyData>;
        return neWdata|| null
    },

    
})