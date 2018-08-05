import React, { Component } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import WithStore from '../WithStore';
import Layout from './layout/Layout';
import NotFound from './NotFound';
import Dashboard from './Dashboard';
import SemanticDashboard from './SemanticDashboard';

// Routes with Layout and store
// const DecoratedRoute = ({ component: Component, ...rest}) => {
//   return (
//     <Route
//       {...rest}
//       render={(props) => (
//             <WithStore>
//               {(store, dispatch) => (
//                   <Layout {...props}>
//                     <Component store={store} dispatch={dispatch} {...props} />
//                   </Layout>
//                 )
//               }
//             </WithStore>
//       )}
//     />
//   )
//  }

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/sd" component={SemanticDashboard} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;