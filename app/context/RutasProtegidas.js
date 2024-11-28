// 'use client'

// import { useLogin } from "@/hooks/useLogin"
// import { useRouter } from "next/navigation"
// import { useEffect } from "react"

// export const ProtectedRoutes = ({children}) => {
//     const router = useRouter()
//     const { isLoggedIn } = useLogin()

//     useEffect(() => {
//         if(!isLoggedIn && (!router.pathname !== "/login" || !router.pathname !== "/signup" || !router.pathname !== "/contacto")) {
//             router.push("/login")
//         }
//         if(isLoggedIn) router.push('/')
//     }, [router, isLoggedIn])
   

//     return children
// }