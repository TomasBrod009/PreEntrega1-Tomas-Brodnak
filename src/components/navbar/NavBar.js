import React from 'react';
import Cart from '../Cart/Cart';
import '../styles/navbar.css'
function NavBar() {
return (
<div className=" bg-yellow-400 mr-6 border-b-2 border-red-500 h-12">
<li className="flex justify-around text-xl ">
    <ul className="mt-3">Logo</ul>
    <ul className="mt-3 "> <input type="seatch" className="rounded-full" /></ul>
    <ul className="mt-3">Home</ul>
    <ul className="mt-3">Contact</ul>
    <ul className="mt-3">Support</ul>
    <ul className="mt-3 "><svg xmlns="http://www.w3.org/2000/svg" width="32" height="30" fill="currentColor" class="bi bi-cart " viewBox="0 0 16 16">
    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
</svg></ul>
    <ul className="mt-3"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="30" fill="blue" class="bi bi-person-fill" viewBox="0 0 16 16">
  <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
</svg> </ul>

</li>

</div>


)
}

export default NavBar