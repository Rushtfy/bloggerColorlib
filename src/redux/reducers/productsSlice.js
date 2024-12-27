import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getProductThunk = createAsyncThunk('api/products', async () => {
    const response = await axios.get('https://dummyjson.com/products')
    return response.data.products
})
export const wishlistProductThunk = createAsyncThunk('api/products/wishlist', async (data) => {
    axios.get("http://localhost:5000/wishlist")
            .then(res => {
                let existing = res.data.find(element => element.id == data.id);
                if (existing) {
                    alert("Bu məhsul artıq sevimlilərə əlavə olunub");
                } else {
                    axios.post("http://localhost:5000/wishlist", { ...data })
                        .then(res => {
                            let element = document.getElementById(`${data.id}`);
                            element.children[4].innerHTML = `<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="heart" class="svg-inline--fa fa-heart " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"></path></svg>`;
                            return res
                        });
                }
                return res
            });
    return
})
export const postProductThunk = createAsyncThunk('api/products/post', async (data) => {
    axios.get("http://localhost:5000/basket")
            .then(res => {
                let existing = res.data.find(element => element.id == data.id);
                if (existing) {
                    axios.patch(`http://localhost:5000/basket/${existing.id}`, { count: existing.count + 1 })
                        .then(res => {
                            alert(`Məshsul sayı: (${existing.count + 1})`);
                            return res
                        });
                } else {
                    axios.post("http://localhost:5000/basket", { ...data, count: 1 })
                        .then(res => {
                            let element = document.getElementById(`${data.id}`);
                            element.children[3].children[0].innerText = `Added`
                            return res
                        });
                }
                return res
            });
            return
})


export const productsSlice = createSlice({
    name: 'products',
    initialState: {},
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(getProductThunk.fulfilled, (state, action) => {
                state.loading = false
                state.products = action.payload
            })
            .addCase(getProductThunk.pending, (state) => {
                state.loading = true
            })
            .addCase(getProductThunk.rejected, (state, action) => {
                state.loading = false
                state.error = action.error
            })
    }
})
export default productsSlice.reducer