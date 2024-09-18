import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch, RooteState } from "./store";


export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RooteState> = useSelector
