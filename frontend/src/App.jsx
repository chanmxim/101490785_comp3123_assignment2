import { BrowserRouter, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Provider, useSelector, useDispatch } from 'react-redux';
import { store } from './redux/store';

import { Login } from './pages/auth/Login';
import { Signup } from './pages/auth/Signup';
import { Dashboard } from './pages/Dashboard';
import { AddEmployee } from './pages/AddEmployee';
import { UpdateEmployee } from './pages/UpdateEmployee';
import { DeleteEmployee } from './pages/DeleteEmployee';
import { EmployeeDetails } from './pages/EmployeeDetails';

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
            retry: 1,
        }
    }
});

const PrivateRoute = ({ children }) => {
  const { isAuthenticated } = useSelector((state) => state.auth);
  return isAuthenticated ? children : <Navigate to="/login" />;
};


function App() {

  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />}/>
            <Route path="/signup" element={<Signup />}/>
            <Route path="/dashboard" element={<Dashboard />}/>
            <Route path="/add" element={<AddEmployee />}/>
            <Route path="/update/:employeeId" element={<UpdateEmployee />}/>
            <Route path="/delete/:employeeId" element={<DeleteEmployee />}/>
            <Route path="/details/:employeeId" element={<EmployeeDetails />}/>
          </Routes>  
        </BrowserRouter>

      </QueryClientProvider>
    </Provider>
  )
}

export default App
