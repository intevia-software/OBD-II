import React,{useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee,  faShop} from "@fortawesome/free-solid-svg-icons";
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'

function Navbar() {
  return (



    <div className="w-full bg-gray-900 p-2 flex justify-between items-center lg:px-16 border-b border-gray-700 ">

        <div className="container mx-auto flex justify-between">
            <div className="text-gray-100 bg-gray-700 p-1 rounded">
                <FontAwesomeIcon icon={faShop} />
            </div>

            <div className="">
                <Menu >
                    <MenuButton className="mx-1 py-2 px-4 bg-gray-700 text-gray-100 text-xs border-none outline-none rounded hover:bg-gray-800 transition duration-200"><FontAwesomeIcon icon={faCoffee} /> Pages</MenuButton>
                    <MenuItems anchor="bottom" className="mt-2 py-2 w-40  bg-gray-900 text-gray-100 text-sm border-b border-x border-gray-700 outline-none rounded-b-lg block p-1">
                        <MenuItem className="w-full my-1">
                            <Link to="/home" className="block w-full text-xs bg-gray-700 px-3 py-2 rounded hover:bg-gray-800 transition duration-200 " >
                                Board
                            </Link>
                        </MenuItem>
                        <MenuItem className="w-full my-1">
                            <Link to="/default" className="block w-full text-xs bg-gray-700 px-3 py-2 rounded hover:bg-gray-800 transition duration-200" >
                                Default
                            </Link>
                        </MenuItem>
                        <MenuItem className="w-full my-1">
                            <Link to="/" className="block w-full text-xs bg-gray-700 px-3 py-2 rounded hover:bg-gray-800 transition duration-200" >
                                Settings
                            </Link>
                        </MenuItem>
                    </MenuItems>
                </Menu>
                <Menu>

                    <MenuButton className="mx-1 py-2 px-4 bg-gray-700 text-gray-100 text-xs border-none outline-none rounded hover:bg-gray-800 transition duration-200"><FontAwesomeIcon icon={faCoffee} /> Pages</MenuButton>
                    <MenuItems anchor="bottom" className="mt-2 py-2 w-40  bg-gray-900 text-gray-100 text-sm border-b border-x border-gray-700 outline-none rounded-b-lg block p-1">
                        <MenuItem className="w-full my-1">
                            <Link to="/" className="block w-full text-xs bg-gray-700 px-3 py-2 rounded hover:bg-gray-800 transition duration-200 " >
                                link1
                            </Link>
                        </MenuItem>
                        <MenuItem className="w-full my-1">
                            <Link to="/" className="block w-full text-xs bg-gray-700 px-3 py-2 rounded hover:bg-gray-800 transition duration-200" >
                                Settings
                            </Link>
                        </MenuItem>
                        <MenuItem className="w-full my-1">
                            <Link to="/" className="block w-full text-xs bg-gray-700 px-3 py-2 rounded hover:bg-gray-800 transition duration-200" >
                                Settings
                            </Link>
                        </MenuItem>
                    </MenuItems>
                </Menu>

            </div>
        </div>
    </div>
  )
}

export default Navbar;