import React from 'react'
import * as mdb from 'mdb-ui-kit'; // lib
import { Input } from 'mdb-ui-kit'; // module
import './Header.scss'

export default function Header() {
  return (
    <div class="fixHeader">
        <div className='bg-dark'>
            <div class="container bg-dark">
                <div className="row">
                    <div className="col-md-8 pt-1 text-white ">FREE SHIPPING ON ALL U.S ODRERS OVER 50$ </div>
                    <div className="col-md-4">
                        <div className="row">
                            <div className="col-md-3 ">
                                        <div className="btn-group">
                                        <button
                                            type="button"
                                            className="btn btn-dark dropdown-toggle show2"
                                            data-mdb-toggle="dropdown"
                                            aria-expanded="false"
                                            
                                        >
                                            USD
                                        </button>
                                        <ul className="dropdown-menu show1">
                                            <li>
                                            <a className="dropdown-item" href="#">
                                                CAD
                                            </a>
                                            </li>
                                            <li>
                                            <a className="dropdown-item" href="#">
                                                UAD
                                            </a>
                                            </li>
                                            <li>
                                            <a className="dropdown-item" href="#">
                                                EUR
                                            </a>
                                            </li>
                                            <li>
                                            <hr className="dropdown-divider" />
                                            </li>
                                            <li>
                                            <a className="dropdown-item" href="#">
                                                GBP
                                            </a>
                                            </li>
                                        </ul>
                                        </div>
                            </div>
                            <div className="col-md-3 ">
                                        <div className="btn-group">
                                        <button
                                            type="button"
                                            className="btn btn-dark dropdown-toggle"
                                            data-mdb-toggle="dropdown"
                                            aria-expanded="false"
                                        >
                                            English
                                        </button>
                                        <ul className="dropdown-menu">
                                            <li>
                                            <a className="dropdown-item" href="#">
                                                French
                                            </a>
                                            </li>
                                            <li>
                                            <a className="dropdown-item" href="#">
                                                Italian
                                            </a>
                                            </li>
                                            <li>
                                            <a className="dropdown-item" href="#">
                                                German
                                            </a>
                                            </li>
                                            <li>
                                            <hr className="dropdown-divider" />
                                            </li>
                                            <li>
                                            <a className="dropdown-item" href="#">
                                                Spanish
                                            </a>
                                            </li>
                                        </ul>
                                        </div>
                            </div>
                            <div className="col-md-3 ms-3">
                                        <div className="btn-group">
                                        <button
                                            type="button"
                                            className="btn btn-dark dropdown-toggle"
                                            data-mdb-toggle="dropdown"
                                            aria-expanded="false"
                                        >
                                            My Account
                                        </button>
                                        <ul className="dropdown-menu">
                                            <li>
                                            <a className="dropdown-item" href="#">
                                                Sign In
                                            </a>
                                            </li>
                                            <li>
                                            <a className="dropdown-item" href="#">
                                                Register
                                            </a>
                                            </li>
                                        </ul>
                                        </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
