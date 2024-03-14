import { Box, Flex, Spinner } from '@chakra-ui/react'
import React from 'react'
import { useLocation } from 'react-router-dom'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../firebase/firebase'
import Navbar from '../components/Navbar/Navbar'
import Sidebar from '../components/Sidebar/Sidebar'

//instead of adding the Sidebar compnent to every page, we add it this way only once to the PageLayout component
//and wrap the children with it. This way, we can have a sidebar or every page except the AuthPage

export const PageLayout = ({children}) => {
    const {pathname} = useLocation()
    const [user, loading] = useAuthState(auth)
    const canRenderSidebar = pathname !== "auth" && user;
    const canRenderNavbar = !user && !loading && pathname !== "/auth";

    const checkIfUserIsAuth = !user && loading
    if(checkIfUserIsAuth) return <PageLayoutSpinner />


  return (
    <Flex flexDir={canRenderNavbar ? "column" : "row"}>
        {/* sidebar on the left */}
        {canRenderSidebar ? (
            <Box w={{base:"70px", md:"240px"}}>
                <Sidebar/>
            </Box>
            ) : null}
        {/* Navbar */}
        {canRenderNavbar ? <Navbar/> : null}

        {/* page content on the right */}
        <Box flex={1} w={{base:"calc(100% - 70px", md:"calc(100% - 240px" }} mx={"auto"}>
            {children}
        </Box>
    </Flex>
  )
}

const PageLayoutSpinner = () => {
    return (
        <Flex flexDir="column" h='100vh' alignItems="center" justifyContent="center">
            <Spinner size="xl"/>
        </Flex>
    )
}
