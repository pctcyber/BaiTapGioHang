import React from 'react'
import { useSelector } from 'react-redux'
import './LoadingComponent.css'
export default function LoadingComponent() {

    const {isLoading} = useSelector(state => state.LoadingReducer)

    if(isLoading){
        return (
            <div className = 'loading'>
                <img className = 'imgLoading' src='./img/imgLoading/Loading.gif' alt="loading"/>
            </div>
    
        )
    } else {
        return '';
    }
    
}
