import React, { ReactElement, ReactNodeArray } from 'react';
import '../styles/defaultstyles.scss'
import Header from './header'

interface Props {
    // children: ReactElement<any> 
    // children: any
    children: React.ReactNode
}


const Layout: React.FC<Props> = (props) => {
return (
    <>
    <script defer src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"></script>
    <Header />
    <div className="container">
        {props.children}
    </div>
    </>
)
}


export default Layout