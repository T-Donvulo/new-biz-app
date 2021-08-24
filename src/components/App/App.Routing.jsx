import React  from 'react';
import {Switch, Route, HashRouter} from 'react-router-dom'
import {Demo as ButtonDemo} from '../Button/Button.Demo'
import {Demo as CheckboxDemo} from '../Checkbox/Checkbox.Demo'
import {Demo as ImageDemo} from '../Image/Image.Demo'
import {Demo as InputDemo} from '../Input/Input.Demo'
import {Demo as LayoutDemo} from '../Layout/Layout.Demo'
import {Demo as LinkDemo} from '../Link/Link.Demo'
import {Demo as TextDemo} from '../Text/Text.Demo'
import {Demo as AlertDemo} from '../Alert/Alert.Demo'

import {LandingPage} from '../../views/LandingPage';
import {NewAccount} from '../../views/NewAccount';
import {ResetPassword} from '../../views/ResetPassword';
import {SignIn} from '../../views/Signin';
import { Alert } from '@material-ui/lab';

const Demos = () => {
  return (
    <Switch>
      <Route path = "/demo/Button">
          <ButtonDemo/>
          </Route>

          <Route path = "/demo/Checkbox">
          <CheckboxDemo/>
          </Route>

          <Route path = "/demo/Image">
          <ImageDemo/>
          </Route>

          <Route path = "/demo/Input">
          <InputDemo/>
          </Route>

          <Route path = "/demo/Layout">
          <LayoutDemo/>
          </Route>

          <Route path = "/demo/Link">
          <LinkDemo/>
          </Route>

          <Route path = "/demo/Text">
          <TextDemo/>
          </Route>

          <Route path = "/demo/alert">
          <AlertDemo/>
          </Route>

          <Route path = "/">
          <div>Home</div>
          </Route>
      </Switch>
  )
}

const Auth = () => {
  return(
    <Switch>
          <Route path = "/auth/register">
          <NewAccount/>
          </Route>

          <Route path = "/auth/signin">
          <SignIn />
          </Route>

          <Route path = "/auth/reset">
          <ResetPassword/>
          </Route>
    </Switch>
  )
}

export const Routing = () => {
  return (
  <HashRouter>
      <Switch>
      <Route path = "/demo">
          <Demos/>
          </Route>

          <Route path = "/auth">
          <Auth/>
          </Route>

          <Route path = "/">
          <LandingPage/>
          </Route>
      </Switch>
   </HashRouter>
   
  );
}

export default Routing;