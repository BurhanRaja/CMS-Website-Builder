"use client";

import Link from "next/link";

const Header = ({ data }) => {
  console.log(data);
  return (
    <>
      <header className='header'>
        {/* <div className="topPart d-flex justify-content-between align-items-center">
          {" "}
          <a href="#" className="getQuote">
            Get Quote <img src="images/Arrow_Left_LG.svg" alt="" />
          </a>
          <ul>
            <li>
              <a href="#">
                <svg
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  viewBox="0 0 30 30"
                  style="enable-background:new 0 0 30 30;"
                  xml:space="preserve"
                >
                  <path
                    className="st0"
                    d="M29.62,5.9c-1.08,0.48-2.23,0.8-3.45,0.95c1.25-0.75,2.19-1.94,2.64-3.33c-1.18,0.7-2.47,1.2-3.81,1.46
	C24.1,4,22.91,3.36,21.6,3.14c-1.3-0.22-2.64,0.01-3.81,0.63C16.63,4.4,15.7,5.4,15.15,6.61c-0.54,1.21-0.68,2.57-0.37,3.86
	c-2.39-0.12-4.72-0.74-6.85-1.83C5.8,7.56,3.92,6.03,2.41,4.17C1.9,5.06,1.6,6.1,1.6,7.2c0,0.99,0.24,1.97,0.71,2.84
	c0.47,0.87,1.14,1.62,1.96,2.17c-0.95-0.03-1.88-0.29-2.72-0.75v0.08c0,1.39,0.48,2.74,1.36,3.82c0.88,1.08,2.1,1.82,3.46,2.09
	c-0.88,0.24-1.81,0.28-2.71,0.1c0.38,1.2,1.13,2.24,2.13,2.99s2.22,1.17,3.47,1.19c-2.13,1.68-4.75,2.58-7.45,2.58
	c-0.48,0-0.96-0.03-1.43-0.08c2.74,1.77,5.94,2.71,9.2,2.71c11.04,0,17.07-9.18,17.07-17.14c0-0.26-0.01-0.52-0.02-0.78
	C27.8,8.16,28.82,7.11,29.62,5.9L29.62,5.9z"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a href="#">
                <svg
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  viewBox="0 0 30 30"
                  style="enable-background:new 0 0 30 30;"
                  xml:space="preserve"
                >
                  <path
                    className="st0"
                    d="M27.64,9.76c-0.01-1.07-0.21-2.14-0.59-3.14C26.72,5.77,26.22,5,25.58,4.35c-0.64-0.64-1.41-1.15-2.25-1.47
	c-0.99-0.37-2.03-0.57-3.09-0.6C18.88,2.22,18.45,2.21,15,2.21s-3.89,0-5.24,0.08c-1.06,0.02-2.1,0.22-3.09,0.6
	C5.82,3.21,5.06,3.71,4.42,4.35C3.78,5,3.28,5.77,2.95,6.61c-0.37,0.99-0.57,2.04-0.59,3.1c-0.06,1.37-0.08,1.8-0.08,5.26
	c0,3.46,0,3.91,0.08,5.26c0.02,1.06,0.22,2.11,0.59,3.1c0.33,0.85,0.83,1.62,1.47,2.26c0.64,0.64,1.41,1.14,2.25,1.47
	c0.99,0.39,2.03,0.6,3.09,0.64c1.36,0.06,1.79,0.08,5.24,0.08s3.89,0,5.24-0.08c1.06-0.02,2.1-0.22,3.09-0.59
	c0.84-0.33,1.61-0.83,2.25-1.47c0.64-0.64,1.14-1.41,1.47-2.26c0.37-0.99,0.57-2.04,0.59-3.1c0.06-1.36,0.08-1.8,0.08-5.26
	C27.72,11.56,27.72,11.12,27.64,9.76L27.64,9.76z M14.99,21.53c-3.61,0-6.53-2.94-6.53-6.56c0-3.62,2.92-6.56,6.53-6.56
	c1.73,0,3.39,0.69,4.62,1.92c1.23,1.23,1.91,2.9,1.91,4.64c0,1.74-0.69,3.41-1.91,4.64C18.38,20.84,16.72,21.53,14.99,21.53
	L14.99,21.53z M21.78,9.7c-0.2,0-0.4-0.04-0.58-0.12c-0.18-0.08-0.35-0.19-0.49-0.33c-0.14-0.14-0.25-0.31-0.33-0.5
	c-0.08-0.19-0.12-0.38-0.12-0.59c0-0.2,0.04-0.4,0.12-0.58c0.08-0.19,0.19-0.35,0.33-0.5c0.14-0.14,0.31-0.25,0.49-0.33
	c0.18-0.08,0.38-0.12,0.58-0.12c0.2,0,0.4,0.04,0.58,0.12c0.18,0.08,0.35,0.19,0.49,0.33c0.14,0.14,0.25,0.31,0.33,0.5
	c0.08,0.19,0.12,0.38,0.12,0.58C23.3,9.01,22.62,9.7,21.78,9.7z M14.99,19.23c2.34,0,4.24-1.91,4.24-4.26s-1.9-4.26-4.24-4.26
	c-2.34,0-4.24,1.91-4.24,4.26S12.65,19.23,14.99,19.23z"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a href="#">
                <svg
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  viewBox="0 0 30 30"
                  style="enable-background:new 0 0 30 30;"
                  xml:space="preserve"
                >
                  <path
                    className="st0"
                    d="M8.15,27.59v-17H2.77v17H8.15z M5.46,8.28c1.88,0,3.04-1.31,3.04-2.94C8.47,3.67,7.34,2.41,5.5,2.41
	c-1.84,0-3.04,1.27-3.04,2.94c0,1.63,1.17,2.94,2.97,2.94H5.46L5.46,8.28z M11.13,27.59h5.38V18.1c0-0.51,0.03-1.02,0.18-1.38
	c0.39-1.01,1.27-2.07,2.76-2.07c1.95,0,2.72,1.56,2.72,3.84v9.09h5.38v-9.74c0-5.22-2.65-7.65-6.19-7.65c-2.9,0-4.18,1.7-4.88,2.86
	h0.04V10.6h-5.38C11.2,12.19,11.13,27.59,11.13,27.59L11.13,27.59z"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a href="#">
                <svg
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  viewBox="0 0 30 30"
                  style="enable-background:new 0 0 16.67 30;"
                  xml:space="preserve"
                >
                  <path
                    className="st0"
                    d="M4.49,28.05V15.8H1.03v-4.41h3.46V7.63c0-2.96,2.05-5.68,6.76-5.68c1.91,0,3.32,0.17,3.32,0.17l-0.11,4.12
	c0,0-1.44-0.01-3.01-0.01c-1.7,0-1.97,0.73-1.97,1.95v3.22h5.12l-0.22,4.41H9.48v12.25H4.49z"
                  />
                </svg>
              </a>
            </li>
          </ul>
        </div> */}
        <section className='container-fluid'>
          <div className='wrapper'>
            {" "}
            <a href='#' className='brand'>
              <img
                src='https://techysquad.com/wp-content/uploads/2022/10/logotechy-1.png'
                alt=''
              />
            </a>
            <button type='button' className='burger' id='burger'>
              {" "}
              <span className='burger-line'></span>{" "}
              <span className='burger-line'></span>{" "}
              <span className='burger-line'></span>{" "}
              <span className='burger-line'></span>{" "}
            </button>
            <span className='overlay' id='overlay'></span>
            <nav className='navbar' id='navbar'>
              <ul className='menu'>
                {data?.map((el) => {
                  return el?.subMenus?.length > 0 ? (
                    <li className='menu-item menu-item-child' key={el?.id}>
                      <Link
                        href={el?.link?.replace("http://localhost:3000", "")}
                        data-toggle='sub-menu'
                      >
                        {el?.name} <i className='expand'></i>
                      </Link>
                      <ul className='sub-menu'>
                        {el?.subMenus?.map((subMenu) => {
                          return (
                            <li className='menu-item' key={subMenu?.id}>
                              <Link
                                href={subMenu?.link?.replace(
                                  "http://localhost:3000",
                                  ""
                                )}
                              >
                                {subMenu?.name}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    </li>
                  ) : (
                    <li className='menu-item'>
                      <Link href='/'>{el?.name}</Link>
                    </li>
                  );
                })}
                <li className='menu-item'>
                  <a href='#'>Contact</a>
                </li>
              </ul>
            </nav>
          </div>
        </section>
      </header>
    </>
  );
};

export default Header;
