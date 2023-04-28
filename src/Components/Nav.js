import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { useTransition, animated} from 'react-spring' //'@react-spring/web'
import NavMenu from './NavMenu'

function Nav(){
    //this is creating a variable called showMenu, which is going to be
    //the state to check whether we should show the menu
    //2e
    //then we are declaring that we are going to use a function that will
    //change the value of this variable
    //
    //then we are using the useState hook from React and setting this to 
    //a current value of false bc the menu should not show when you open 
    //the page
    const [showMenu, setShowMenu] = useState(false)

    //adding transistion for when you open the menu
    const maskTransistions = useTransition(showMenu, {
        // key: showMenu,
        from: { position: 'absolute', opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0},
    })

    const menuTransistions = useTransition(showMenu, {
        // key: showMenu,
        from: { opacity: 0, transform: 'translateX(-100%)' },
        enter: { opacity: 1, transform: 'translateX(0%)' },
        leave: { opacity: 0, transform: 'translateX(-100%)'},
        // exitBeforeEnter: true,
    })

    // className="fixed bg-white top-0 left-0 w-4/5 h-full z-50 shadow"
    // mask className="bg-black-t-50 fixed top-0 left-0 w-full h-full z-50"

    // let menu
    // //want an overlay when menu is up to make menu stand out from background
    // let menuMask
    
    // //will only show menu if showMenu is true
    // if(showMenu){
    //     menu = 
    //     <div
    //         className="fixed bg-white top-0 left-0 w-4/5 h-full z-50 shadow"
    //     > 
    //         The menu 

    //     </div>

    //     menuMask = 
    //     <div 
    //         className="bg-black-t-50 fixed top-0 left-0 w-full h-full z-50"
    //         onClick={() => setShowMenu(false)}
    //     >

    //     </div>
    // }

    // const transition = useTransition(show, null,{
    //     from: {position: 'absolute', opacity: 0},
    //     enter: {opacity: 1},
    //     leave: {opacity: 0},
    //     })

    return(
        <nav>
            <span className="text-xl">
                <FontAwesomeIcon
                    icon={faBars}
                    onClick={() => setShowMenu(!showMenu)}
                />
            </span>

            {
                maskTransistions(( props, item, key ) =>
                    item && 
                    <animated.div 
                        key={key} 
                        style={props}
                        className="bg-black-t-50 fixed top-0 left-0 w-full h-full z-50"
                        onClick={() => setShowMenu(false)}
                    >
                    </animated.div>
                )
            }

            {
                menuTransistions(( props, item, key ) =>
                    item && 
                    <animated.div 
                        key={key} 
                        style={props}
                        className="fixed bg-white top-0 left-0 w-4/5 h-full z-50 shadow p-3"
                    >
                        <NavMenu 
                            closeMenu={() => setShowMenu(false)}/>
                    </animated.div>
                )
            }

        </nav>
    )
}

export default Nav