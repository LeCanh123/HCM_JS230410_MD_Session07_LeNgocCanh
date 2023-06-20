import React from 'react'
import "./Nav.scss"

export default function Nav() {
  return (
    <div className='fixNav'>
        <div className="container mt-3 mb-5">
            <div className="row">
                <div className="col-md-7">
                    <div className="row">
                        <div className="col-3">
                            <div className="row">
                                <div className="col-8 fs-3 fw-bold ps-2">FASHION</div>
                                <div className="col text-danger col-4 fs-3  ps-1 fw-bold">CUBE</div>
                            </div>
                        </div>

                        

                    </div>
                </div>
                <div className="col-md-5">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="row">
                                <div className="col"><button type="button" class="btn btn-link" data-mdb-ripple-color="dark">HOME</button></div>
                                <div className="col">
                                    <div class="btn-group ">
                                        <button type="button" class="btn btn-link dropdown-toggle" data-mdb-toggle="dropdown" aria-expanded="false">
                                            SHOP
                                        </button>
                                        <ul class="dropdown-menu">
                                            <li><a class="dropdown-item" href="#">Action</a></li>
                                            <li><a class="dropdown-item" href="#">Another action</a></li>
                                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                                            <li><hr class="dropdown-divider" /></li>
                                            <li><a class="dropdown-item" href="#">Separated link</a></li>
                                        </ul>
                                    </div>    
                                    
                                </div>
                                <div className="col"><button type="button" class="btn btn-link" data-mdb-ripple-color="dark">CONTACT</button></div>

                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="row">
                                <div className="col pt-1 ps-0">
                                <i class="fa-solid fa-magnifying-glass"></i>
                                </div>
                                <div className="col pt-1 ps-0">
                                <i class="fa-solid fa-user"></i>
                                </div>
                                <div className="col pt-1 ps-0">
                                <i class="fa-solid fa-bag-shopping"></i>
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
