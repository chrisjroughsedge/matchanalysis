<template>
<div class="container-fluid">
  <!-- <nav class="navbar navbar-expand-lg navbar-light bg-dark">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#">Disabled</a>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>     -->




      <div class="row flex-nowrap">
          <div class="col-auto col-md-3 col-xl-2 px-sm-2 px-0" style="--bs-bg-opacity: .9; background-image: var(--bs-gradient); background-color: #F2F2F2;">
              <div class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                  <!-- <a href="/" class="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-black text-decoration-none">
                      <span class="fs-5 d-none d-sm-inline">Analysis</span>
                  </a> -->
                  <ul class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                      <li>
                        
                        <router-link to="/" class="nav-link align-middle px-0">
                          <img src="../assets/logo.png" alt="Logo" class="img-thumbnail" style="width:50px;height:50px;">  
                          <span class="ms-1 d-none d-sm-inline" style="color: #38404B;">Match analysis</span>
                        </router-link>
                      </li>
                      <li>

                        <router-link to="/data-analysis" class="nav-link align-middle px-0">
                          <img src="../assets/data.png" alt="Logo" class="img-thumbnail" style="width:50px;height:50px;">  
                          <span class="ms-1 d-none d-sm-inline" style="color: #38404B;">Data Analysis</span>
                        </router-link>

                        <!-- <router-link to="/data-analysis" class="nav-link px-0 align-middle"><span class="ms-1 d-none d-sm-inline">Data Analysis</span></router-link> -->
                      </li>

                      <li>
                        <router-link to="/reporting" class="nav-link align-middle px-0">
                          <img src="../assets/report.png" alt="Logo" class="img-thumbnail" style="width:50px;height:50px;">  
                          <span class="ms-1 d-none d-sm-inline" style="color: #38404B;">Reports</span>
                        </router-link>
                      </li>

                      <li>
                        <router-link to="/software" class="nav-link align-middle px-0">
                          <img src="../assets/software.png" alt="Logo" class="img-thumbnail" style="width:50px;height:50px;">  
                          <span class="ms-1 d-none d-sm-inline" style="color: #38404B;">Software</span>
                        </router-link>
                      </li>

                      <li>
                        <router-link to="/aboutme" class="nav-link align-middle px-0">
                          <img src="../assets/person.png" alt="Logo" class="img-thumbnail" style="width:50px;height:50px;">  
                          <span class="ms-1 d-none d-sm-inline" style="color: #38404B;">About me</span>
                        </router-link>
                      </li>

                      <!-- <li>
                        <a href="#submenu3" data-bs-toggle="collapse" class="nav-link px-0 align-middle">
                            <i class="fs-4 bi-grid"></i> <span class="ms-1 d-none d-sm-inline">Code Window</span> </a>
                            <ul class="collapse nav flex-column ms-1" id="submenu3" data-bs-parent="#menu">
                            <li class="w-100">
                              <router-link to="/code-window" class="nav-link px-0 align-middle"><span class="ms-1 d-none d-sm-inline">Start Code Window</span></router-link>
                            </li>
                            <li>
                              <router-link to="/code-window-config" class="nav-link px-0 align-middle"><span class="ms-1 d-none d-sm-inline">Configure Code Window</span></router-link>
                            </li>
                        </ul>
                    </li> -->

                    <!-- <li>
                        <router-link to="/reporting" class="nav-link px-0 align-middle"><span class="ms-1 d-none d-sm-inline">Reports</span></router-link>
                      </li>
                      <li>
                        <router-link to="/about" class="nav-link px-0 align-middle"><span class="ms-1 d-none d-sm-inline">Drag and drop</span></router-link>
                      </li>
                      <li>
                        <router-link to="/aboutme" class="nav-link px-0 align-middle"><span class="ms-1 d-none d-sm-inline">About Me</span></router-link>
                      </li> -->
                  </ul>
                  <hr>
                  <!-- <div class="dropdown pb-4">
                      <a href="#" class="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                          <img src="https://github.com/mdo.png" alt="hugenerd" width="30" height="30" class="rounded-circle">
                          <span class="d-none d-sm-inline mx-1">loser</span>
                      </a>
                      <ul class="dropdown-menu dropdown-menu-dark text-small shadow">
                          <li><a class="dropdown-item" href="#">New project...</a></li>
                          <li><a class="dropdown-item" href="#">Settings</a></li>
                          <li><a class="dropdown-item" href="#">Profile</a></li>
                          <li>
                              <hr class="dropdown-divider">
                          </li>
                          <li><a class="dropdown-item" href="#">Sign out</a></li>
                      </ul>
                  </div> -->
              </div>
          </div>
          <div class="col py-3">
            <router-view/>
          </div>
      </div>

    </div>

</template>
