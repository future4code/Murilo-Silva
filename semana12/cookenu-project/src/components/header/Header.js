import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import { StyledToolbar } from './styled' 
import { goToRecipesList, goToLogin } from '../../routes/coordinator'
import { useHistory } from 'react-router-dom'

const Header = () => {

  const history = useHistory()

  return (   
      <AppBar position="static">
        <StyledToolbar>
          <Button onClick={() => goToRecipesList(history)} color="inherit">Cookenu</Button>
          <Button onClick={() => goToLogin(history)} color="inherit">Login</Button>
        </StyledToolbar>
      </AppBar>
  )
}

export default Header