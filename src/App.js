import React from "react";

import Home1 from "./Home1";
import ProductPage from "./components/component/ProductPage";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Products from "./eKact/Products";
import AboutMe from "./components/props/AboutMe";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home1 />,
  },
  {
    path: "/ProductPage",
    element: <ProductPage />,
  },
]);

function App() {
  return (
    <>
      <AboutMe
        candidateImg="https://cdn.britannica.com/08/187508-050-D6FB5173/Shanghai-Tower-Gensler-San-Francisco-world-Oriental-2015.jpg"
        name="Muzammil Hussain"
        age={28}
        sex="Male"
        degree="B.TECH"
        org="Zeeta-BOTS"
      />
      <AboutMe
        candidateImg="https://www.goworldtravel.com/wp-content/uploads/2021/03/Shanghai-China.-Photo-by-Edward-He-Unsplash-e1677029227162-768x401.jpg"
        name="Rahul Kumar"
        age={30}
        sex="Male"
        degree="BSC"
        org="Google"
      />
      <AboutMe
        candidateImg="https://img.freepik.com/free-photo/glassclad-skyscrapers-central-mumbai-reflecting-sunset-hues-blue-hour_469504-15.jpg?w=740&t=st=1708590104~exp=1708590704~hmac=a2817eef47a45d31a805c00602501dc5e615e121273115e3277d7ee22ab912f4"
        name="Rani Devi"
        age={25}
        sex="Female"
        degree="MSC"
        org="Micro"
      />
      <AboutMe
        candidateImg="https://img.freepik.com/free-photo/glassclad-skyscrapers-central-mumbai-reflecting-sunset-hues-blue-hour_469504-15.jpg?w=740&t=st=1708590104~exp=1708590704~hmac=a2817eef47a45d31a805c00602501dc5e615e121273115e3277d7ee22ab912f4"
        name="Ravi Lohani"
        age={20}
        sex="Male"
        degree="M.TECH"
        org="Adrosonic"
      />
      <AboutMe
        candidateImg="https://img.freepik.com/free-photo/glassclad-skyscrapers-central-mumbai-reflecting-sunset-hues-blue-hour_469504-15.jpg?w=740&t=st=1708590104~exp=1708590704~hmac=a2817eef47a45d31a805c00602501dc5e615e121273115e3277d7ee22ab912f4"
        name="Abhishek Gaur"
        age={15}
        sex="Male"
        degree="12th"
        org="Student"
      />
      <AboutMe
        candidateImg="https://img.freepik.com/free-photo/glassclad-skyscrapers-central-mumbai-reflecting-sunset-hues-blue-hour_469504-15.jpg?w=740&t=st=1708590104~exp=1708590704~hmac=a2817eef47a45d31a805c00602501dc5e615e121273115e3277d7ee22ab912f4"
        name="Vikas Gupta"
        age={32}
        sex="Male"
        degree="M.Com"
        org="SBI-Bank"
      />
      {/*
      <RouterProvider router={router} />*/}
    </>
  );
}

export default App;
