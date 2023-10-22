import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import jwtDecode from 'jwt-decode'

const VM_BASE_URL = 'some url'

const initialState = {
  loading: false,
  error: false,
  userId: '',
  idToken: localStorage.getItem('idToken'),
  tokenData: {},
  vendorData: {},
}

export const getVendors = createAsyncThunk(
  'vendors/getVendors',
  async (_, thunkApi) => {
    try {
      const resp = await axios.get(
        `${VM_BASE_URL}/v1/vm/getVendorById/${
          thunkApi.getState().user.tokenData?.sub
        }`
      )
      return resp.data.data
    } catch (error) {
      throw thunkApi.rejectWithValue('Some error occued while fetching date')
    }
  }
)

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload
    },
    setUserId: (state, action) => {
      state.userId = action.payload
    },
    setIdToken: (state, action) => {
      state.idToken = action.payload
    },
    setTokenData: (state, action) => {
      let idToken = localStorage.getItem('idToken')
      if (idToken) {
        state.tokenData = jwtDecode(idToken)
      }
    },
  },
  extraReducers: {
    [getVendors.pending]: (state, action) => {
      state.loading = true
    },
    [getVendors.fulfilled]: (state, action) => {
      state.loading = false

      state.vendorData = action.payload
    },
    [getVendors.rejected]: (state, action) => {
      state.loading = false
      state.error = true
    },
  },
})

export const { setLoading, setUserId, setIdToken, setTokenData } =
  userSlice.actions

export default userSlice.reducer
