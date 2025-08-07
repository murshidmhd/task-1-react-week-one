
import{Button} from 'react-bootstrap'
import { useState } from 'react'

function DarkTheme(){
    const [theme,setTheme]= useState(false)
    const toggleTheme = ()=>{
        setTheme(!theme)
    }  

  const styles = {
    height: '100vh',
    backgroundColor: theme ? '#121212' : '#ffffff',
    color: theme ? '#ffffff' : '#000000',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    transition: 'all 0.3s ease',
  };
    
    return(
        <div style={styles} >
            <Button variant={theme ? 'light' : 'dark'} onClick={toggleTheme}>Switch Theme</Button>
        </div>
    )
}

export default DarkTheme