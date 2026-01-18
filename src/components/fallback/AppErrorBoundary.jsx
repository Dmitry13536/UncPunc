import { ErrorBoundary } from 'react-error-boundary'
import Mammott from '../../IMG/Monsters/Mammott.png'
import { motion as m } from "motion/react"

var Fallback = ( { ResetErrorBoundary } ) => {
    return (
        <div className="AppErrorBoundaryComponent" >

            <img src={Mammott} alt='monsterMammott' style={{ position: 'absolute', top: '45%', left: '60%' }} />

            <div >    
                <h1>Some error just happened</h1>
                
                <m.button whileTap={{ scale: 0.9 }} onClick={ResetErrorBoundary}
                    whileHover={{ scale: 1.2 }} transition={{ scale: { delay: 0.1 } }}>
                    Reset
                </m.button>
            </div>
        </div>
    )
}

var AppErrorBoundary = ( { children } ) => {
    return (
        <ErrorBoundary FallbackComponent={Fallback}
            onReset={() => window.location.reload()} 
            onError={(error, info) => console.error(error, info) }
        >
            {children}
        </ErrorBoundary>
    )
}

export default AppErrorBoundary
