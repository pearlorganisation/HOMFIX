import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
initialState={
    isloading:false,
    partner:{},
    partners:[],    
    error:null,
    isSuccess:true

}
const partnerSlice=createSlice({
  name:"partners",
  initialState,
  reducers:{},
  extraReducers:(builder)=>{
    builder.addCase(createAllpartners.pending,(state)=>{
        state.isloading=true,
        state.error=null,
        state.succes=false
    })
    .addCase(createAllpartnes.fulfilled,(state,action)=>{
        state.isloading=false,
        state.partners=action.payload,
        state.isSuccess=true
    })
    .addCase(createAllpartnes.rejected,(state,action)=>{
        state.isloading=false,
        state.error=action.payload;
        state.isSuccess=false;
        toast.error(`Error:${action.payload}`,{position:"top-right",autoClose:3000,hideProgressBar:false,closeOnClick:true,
            pauseOnHover:true,
            draggable:true,
            theme:"colored"
        })
    })
  }

})
export default partnerSlice.reducer


