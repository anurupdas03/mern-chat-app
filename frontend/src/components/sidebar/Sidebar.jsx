import React from 'react'
import SearchInput from './SearchInput'
import Conversations from './Conversations'
import LogoutButton from './LogoutButton'

export const Sidebar = () => {
    return (
        <div className='border-r border-slate-800 p-4 flex flex-col'>
            <SearchInput></SearchInput>
            <div className='divider px-3'></div>
            <Conversations></Conversations>
            <LogoutButton></LogoutButton>
        </div>
    )
}


// STARTER CODE :
// import React from 'react'
// import SearchInput from './SearchInput'
// import Conversations from './Conversations'
// import LogoutButton from './LogoutButton'

// export const Sidebar = () => {
//     return (
//         <div className='border-r border-slate-800 p-4 flex flex-col'>
//             <SearchInput></SearchInput>
//             <div className='divider px-3'></div>
//             <Conversations></Conversations>
//             <LogoutButton></LogoutButton>
//         </div>
//     )
// }
