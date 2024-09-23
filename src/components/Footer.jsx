import React from 'react'

const Footer = () => {
    const footerLinks=(element)=>{
        const footerLinkAll=document.querySelectorAll('.footerLink')
        footerLinkAll.forEach((e,i)=>{
            if(i===element) e.style.opacity=1;
            else e.style.opacity=0.2;
        })
    }
    const footerLinksRestore=()=>{
        const footerLinkAll=document.querySelectorAll('.footerLink');
        footerLinkAll.forEach( e=> e.style.opacity=1 )
    }
    return (
        <>
            <footer >
                <h1 cursor-pointer="true">
                    let's<br />
                    #ConnectOnCutting
                </h1>
                <aside onMouseLeave={footerLinksRestore}>
                    <a href="/" className='footerLink' onMouseOver={()=>footerLinks(0)} cursor-mini="true">
                        Home
                    </a>
                    <a href="/story" className='footerLink' onMouseOver={()=>footerLinks(1)}>
                        story
                    </a>
                    <a href="/media" className='footerLink' onMouseOver={()=>footerLinks(2)}>
                        media
                    </a>
                    <a href="/franchise" className='footerLink' onMouseOver={()=>footerLinks(3)}>
                        franchise
                    </a>
                    <a href="/events" className='footerLink' onMouseOver={()=>footerLinks(4)}>
                        events
                    </a>
                    <a href="/chaiwalacares" className='footerLink' onMouseOver={()=>footerLinks(5)}>
                        chaiwalacares
                    </a>
                </aside>

                <div>
                    <h5>Phone</h5>
                    <a href="tel: +917000018627">7000018627</a>
                </div>

                <div>
                    <h5>Email</h5>
                    <a href="mailto: info@mbachaiwala.com">info@mbachaiwala.com</a>
                    <a href="mailto: info@mbachaiwala.com">info@mbachaiwala.com</a>
                </div>

                <p>© COPYRIGHT 2024 MBA CHAIWALA</p>
            </footer>
            <div className='footer'></div>
        </>
    )
}

export default Footer