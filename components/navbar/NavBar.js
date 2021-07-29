// components/navbar/NavBar.js
  
const NavBar = () => (
  <nav id="block-ge-unified-main-menu" class="contextual-region navbar navbar-dark navbar-expand-lg ge-menu-main bg-transparent text-white px-3 px-lg-4" data-block-plugin-id="system_menu_block:main">
    <div class="container-fluid">
      <a class="navbar-brand text-white" href="/">
        <img class="d-inline-block img-fluid" alt="General Electric" title="General Electric Logo" src="https://www.ge.com/themes/custom/ge_com_unified/logo.svg" />
      </a>
      <button class="navbar-toggler ml-auto rounded-0 collapsed" type="button" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <ul class="nav d-lg-none ge-nav-icons-mobile">
        <li class="nav-item icon d-none">
          <a href="https://www.ge.com/directory" class="nav-link px-3 text-white" id="globe-icon">
            <i class="ficon-globe"><span class="hidden">Globe</span></i>
          </a>
        </li>
        <li class="nav-item icon pl-3 search-icon">
          <a href="javascript:void(0);" class="nav-link px-3 text-white enable" id="ge-search-component-init">
            <i class="ficon-search"><span class="hidden">Search</span></i>
          </a>
        </li>
      </ul>
      <ul class="nav d-none d-lg-flex ge-nav-icons-mobile">
        <li class="nav-item icon d-none">
          <a href="https://www.ge.com/directory" class="nav-link px-3 text-white" id="globe-icon">
            <i class="ficon-globe"><span class="hidden">Globe</span></i>
          </a>
        </li>
        <li class="nav-item icon pl-3 search-icon">
          <a href="javascript:void(0);" class="nav-link px-3 text-white enable" id="ge-search-component-init">
            <i class="ficon-search"><span class="hidden">Search</span></i>
          </a>
        </li>
      </ul>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <div class="main-menu-wrapper ml-auto">
          <ul data-region="header" class="navbar-nav ml-auto first--level dd-bg-inactive">
            <li class="nav-item menu-level-one">
              <a href="/news/" target="_self" class="nav-link px-auto px-lg-3 text-white" title="News">News</a>
              <div class="dropdown-menu megamenu" aria-labelledby="dropdown01">
                <div class="row">
                  <div class="dd-container">
                      <div class="no-position dd-links">
                          <ul class="list-unstyled second--level">
                              <li>
                                  <a href="https://www.ge.com/news/press-releases" target="_self" class="dropdown-item body-1" title="Press releases">Press releases</a>
                                  <div class="second-level-description">
                                      <h2 class="col-xl-8 col-lg-8">Company news and announcements.</h2>
                                      <p class="dd-description body-2 col-xl-8 col-lg-8">
                                          Access the latest press releases, media contacts, and press tools.
                                      </p>
                                      <ul class="list-unstyled"></ul>
                                      <div class="dropdown_img">
                                          <div class="wrapper_img">
                                              <img class="dd-image w-100 lazyloaded" loading="lazy" src="https://www.ge.com/sites/default/files/2020-04/GE_Reports.jpg" alt="GE Reports" />
                                          </div>
                                      </div>
                                  </div>
                              </li>
                          </ul>
                      </div>
                      <div class="dd-content-block">
                          <h2 class="col-xl-12 col-lg-12">Company news and stories.</h2>
                          <p class="dd-description body-2 col-xl-8 col-lg-8">
                              Explore the latest stories, news, downloads, and press tools.
                          </p>
                          <div class="dropdown_img">
                              <div class="wrapper_img">
                                  <img class="dd-image w-100 lazyloaded" loading="lazy" src="https://www.ge.com/sites/default/files/2020-04/GE_News_Narrow.jpg" alt="GE News" />
                              </div>
                          </div>
                      </div>
                  </div>
                </div>
              </div>
            </li>
            <li class="nav-item menu-level-one">
              <a href="/investor-relations" title="Investors overview" class="nav-link px-auto px-lg-3 text-white" data-drupal-link-system-path="node/6994">Investors</a>
            </li>
            <li class="nav-item menu-level-one">
              <a href="/about-us" title="About us" class="nav-link px-auto px-lg-3 text-white" data-drupal-link-system-path="node/6741">About us</a>
            </li>
            <li class="nav-item menu-level-one">
              <a href="https://jobs.gecareers.com/global/en" class="nav-link px-auto px-lg-3 text-white iexternal" target="_blank" rel="noopener noreferrer" title="Careers" >
                Careers
                <span class="fa-ext extlink">
                    <span class="ficon-external-link-rd" title="(link is external)"></span>
                    <span class="visually-hidden">(link is external)</span></span>
              </a>
            </li>
            <li class="nav-item menu-level-one">
              <span class="idropdown nav-link px-auto px-lg-3 text-white" title="Businesses">
                Businesses<span class="businesses-icon ficon-dropdown"></span>
              </span>
            </li>
            <span class="dd-lightbox"></span>
            <span class="dd-bg" ></span>
          </ul>
        </div>
      </div>
      <ul class="nav d-none d-lg-flex ge-nav-icons-desktop">
        <li class="nav-item icon">
					<a href="https://www.ge.com/directory" class="nav-link px-3 text-white" id="globe-icon">
						<i class="ficon-globe"><span class="hidden">Globe</span></i>
					</a>
				</li>
        <li class="nav-item icon search-icon">
					<a id="ge-search-component-init" class="nav-link enable">
						<i class="ficon-search"><span class="hidden">Search</span></i>
					</a>
				</li>
        <li class="nav-item header-stock-ticker">          
          <a id="ge-stock-ticker" class="nav-link ge-stock-ticker" href="https://www.ge.com/investor-relations/stocks" target="_self">
            GE <img src="/themes/custom/ge_unified/assets/images/arrow-up.png" width="11" height="8"/> <span class="stock-ticker__status"></span></a>
        </li>              
      </ul>
    </div>
  </nav>    
);

export default NavBar;