import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import DataBinding from './DataBinding';
// import DiscountOffer from './DiscountOffer';
// import Search from './Search';
import NavigationBar from './NavigationBar';
//import ProductView from './ProductView';
import { lazy, Suspense } from 'react';
import UserProvider from '../context/UserProvider';
import SearchRedux from './SearchRedux';

function Layout() {

    const DataBinding = lazy(() => import('./DataBinding'));
    const DiscountOffer = lazy(() => import('./DiscountOffer'));
    const Search = lazy(() => import('./Search'));
    const ProductView = lazy(() => import('./ProductView'));
    const UnControlledForm = lazy(() => import('./UnControlledForm'));
    const ControlledForm = lazy(() => import('./ControlledForm'));
    const FormikForm = lazy(() => import('./FormikForm'));
    const Products = lazy(() => import('./Products'));
    const Login = lazy(() => import('./Login'));

    return (
        <>
            <BrowserRouter>
             <UserProvider>
                    <NavigationBar />
                    <Suspense fallback={<div> Loading...</div>}>
                        <Routes>
                            <Route path="/databinding" element={<DataBinding />}></Route>
                            <Route path="/offer" element={<DiscountOffer />}></Route>
                            <Route path="/search" element={<Search />}></Route>
                            <Route path="/dataBinding" element={<DataBinding />}></Route>
                            <Route path="/product-view/:id" element={<ProductView />}></Route>
                            <Route path="/uncontrolledform" element={<UnControlledForm />}></Route>
                            <Route path="/controlledform" element={<ControlledForm />}></Route>
                            <Route path="/formikform" element={<FormikForm />}></Route>
                            <Route path="/products-list" element={<Products />}></Route>
                            <Route path="/login" element={<Login />}></Route>
                            <Route path="/redux" element={<SearchRedux />}></Route>

                        </Routes>
                    </Suspense>
   </UserProvider>
            </BrowserRouter>

        </>
    )
}

export default Layout;