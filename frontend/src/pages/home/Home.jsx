import React from 'react'
import { Sidebar } from '../../components/sidebar/Sidebar'
import MessageContainer from '../../components/messages/MessageContainer'

const Home = () => {
    return (
        <div className='flex sm:h-[450px] md:h-[550px] w-100 rounded-lg overflow-hidden bg-gray-400 bg-clip-padding 
        backdrop-filter backdrop-blur-lg bg-opacity-0'>
            <Sidebar></Sidebar>
            <MessageContainer></MessageContainer>
        </div>
    )
}

export default Home

// STARTER CODE
// import React from 'react'
// import { Sidebar } from '../../components/sidebar/Sidebar'
// import MessageContainer from '../../components/messages/MessageContainer'

// const Home = () => {
//     return (
//         <div className='flex sm:h-[450px] md:h-[550px] w-100 rounded-lg overflow-hidden bg-gray-400 bg-clip-padding
//         backdrop-filter backdrop-blur-lg bg-opacity-0'>
//             <Sidebar></Sidebar>
//             <MessageContainer></MessageContainer>
//         </div>
//     )
// }

// export default Home