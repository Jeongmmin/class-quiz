import {
  Outer,
  SearchBar,
  Navbar,
  Menubar,
  Header,
  List,
  ListItem,
  Footerbar,
} from '../../styles/faq';

export default function Faq() {
  return (
    <>
      <Outer>
        <Header>
          <SearchBar>
            <svg
              width='32'
              height='32'
              viewBox='0 0 32 32'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M28 28L23 23'
                stroke='#1F1F1F'
                strokeWidth='4'
                strokeLinecap='round'
              />
              <path
                d='M14.5 24C19.7467 24 24 19.7467 24 14.5C24 9.25329 19.7467 5 14.5 5C9.25329 5 5 9.25329 5 14.5C5 19.7467 9.25329 24 14.5 24Z'
                stroke='#1F1F1F'
                strokeWidth='4'
              />
            </svg>
          </SearchBar>
          <Navbar>
            <span>마이</span>
            <div>
              <img
                src='https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80'
                alt=''
              />
              <span>마이클</span>
              <svg
                className='icon'
                width='11'
                height='20'
                viewBox='0 0 11 20'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M1 1.5147L9.48528 9.99998L1 18.4853'
                  stroke='#CACACA'
                  strokeWidth='2'
                  strokeLinecap='round'
                />
              </svg>
            </div>
          </Navbar>
          <Menubar>
            <span>공지사항</span>
            <span>이벤트</span>
            <span className='active'>FAQ</span>
            <span>Q&A</span>
          </Menubar>
        </Header>

        <List>
          <ListItem>
            <div className='left'>
              <span>Q. 01</span>
              <p>리뷰 작성은 어떻게 하나요?</p>
            </div>
            <svg
              width='26'
              height='14'
              viewBox='0 0 26 14'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M1.6863 1L13 12.3137L24.3137 1'
                stroke='#CACACA'
                strokeWidth='2'
                strokeLinecap='round'
              />
            </svg>
          </ListItem>
          <ListItem>
            <div className='left'>
              <span>Q. 02</span>
              <p>리뷰 수정/삭제는 어떻게 하나요?</p>
            </div>
            <svg
              width='26'
              height='14'
              viewBox='0 0 26 14'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M1.6863 1L13 12.3137L24.3137 1'
                stroke='#CACACA'
                strokeWidth='2'
                strokeLinecap='round'
              />
            </svg>
          </ListItem>
          <ListItem>
            <div className='left'>
              <span>Q. 03</span>
              <p>아이디/비밀번호를 잊어버렸어요</p>
            </div>
            <svg
              width='26'
              height='14'
              viewBox='0 0 26 14'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M1.6863 1L13 12.3137L24.3137 1'
                stroke='#CACACA'
                strokeWidth='2'
                strokeLinecap='round'
              />
            </svg>
          </ListItem>
          <ListItem>
            <div className='left'>
              <span>Q. 04</span>
              <p>회원탈퇴를 하고싶어요.</p>
            </div>
            <svg
              width='26'
              height='14'
              viewBox='0 0 26 14'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M1.6863 1L13 12.3137L24.3137 1'
                stroke='#CACACA'
                strokeWidth='2'
                strokeLinecap='round'
              />
            </svg>
          </ListItem>
          <ListItem>
            <div className='left'>
              <span>Q. 05</span>
              <p>출발지 설정은 어떻게 하나요?</p>
            </div>
            <svg
              width='26'
              height='14'
              viewBox='0 0 26 14'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M1.6863 1L13 12.3137L24.3137 1'
                stroke='#CACACA'
                strokeWidth='2'
                strokeLinecap='round'
              />
            </svg>
          </ListItem>
          <ListItem>
            <div className='left'>
              <span>Q. 06</span>
              <p>비밀번호를 변경하고 싶어요</p>
            </div>
            <svg
              width='26'
              height='14'
              viewBox='0 0 26 14'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M1.6863 1L13 12.3137L24.3137 1'
                stroke='#CACACA'
                strokeWidth='2'
                strokeLinecap='round'
              />
            </svg>
          </ListItem>
        </List>

        <Footerbar>
          <div>
            <svg
              width='51'
              height='51'
              viewBox='0 0 51 51'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <g filter='url(#filter0_d_2_4)'>
                <path
                  fill-rule='evenodd'
                  clip-rule='evenodd'
                  d='M45.83 34.201V39.034C45.83 40.314 44.792 41.354 43.51 41.354H33.712C32.431 41.354 31.392 40.314 31.392 39.034V32.864C31.392 31.584 30.354 30.544 29.072 30.544H21.76C20.478 30.544 19.44 31.584 19.44 32.864V39.034C19.44 40.314 18.401 41.354 17.12 41.354H7.32C6.039 41.354 5 40.314 5 39.034V20.036C5 19.046 5.421 18.103 6.159 17.443L23.869 1.591C24.749 0.803 26.082 0.803 26.963 1.591L44.672 17.443C45.409 18.103 45.831 19.046 45.831 20.036V34.201H45.83Z'
                  stroke='#ADADAD'
                  stroke-width='2'
                  shape-rendering='crispEdges'
                />
              </g>
              <defs>
                <filter
                  id='filter0_d_2_4'
                  x='0'
                  y='0'
                  width='50.831'
                  height='50.354'
                  filterUnits='userSpaceOnUse'
                  color-interpolation-filters='sRGB'
                >
                  <feFlood flood-opacity='0' result='BackgroundImageFix' />
                  <feColorMatrix
                    in='SourceAlpha'
                    type='matrix'
                    values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                    result='hardAlpha'
                  />
                  <feOffset dy='4' />
                  <feGaussianBlur stdDeviation='2' />
                  <feComposite in2='hardAlpha' operator='out' />
                  <feColorMatrix
                    type='matrix'
                    values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0'
                  />
                  <feBlend
                    mode='normal'
                    in2='BackgroundImageFix'
                    result='effect1_dropShadow_2_4'
                  />
                  <feBlend
                    mode='normal'
                    in='SourceGraphic'
                    in2='effect1_dropShadow_2_4'
                    result='shape'
                  />
                </filter>
              </defs>
            </svg>

            <span>홈</span>
          </div>
          <div>
            <svg
              width='37'
              height='45'
              viewBox='0 0 37 45'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fill-rule='evenodd'
                clip-rule='evenodd'
                d='M25.5712 24.4797C21.6662 28.2097 15.3342 28.2097 11.4292 24.4797C7.5242 20.7477 7.5242 14.6967 11.4292 10.9657C15.3342 7.23375 21.6662 7.23375 25.5712 10.9657C29.4762 14.6967 29.4762 20.7478 25.5712 24.4788V24.4797ZM29.9612 4.99775C23.4352 -0.334249 13.5582 -0.33225 7.0342 5.00175C-0.0328016 10.7797 -0.891802 20.4858 4.4542 27.2218L16.5182 43.0438C17.4902 44.3188 19.5092 44.3188 20.4812 43.0438L32.5472 27.2227C37.8932 20.4857 37.0312 10.7758 29.9612 4.99775V4.99775Z'
                stroke='#ADADAD'
                stroke-width='2'
              />
            </svg>
            <span>잇츠로드</span>
          </div>
          <div>
            <svg
              width='43'
              height='36'
              viewBox='0 0 43 36'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fill-rule='evenodd'
                clip-rule='evenodd'
                d='M29.343 28.549C33.454 25.319 37.105 21.463 39.585 16.978L39.694 16.778L39.889 16.411C40.611 14.977 41.016 13.356 41.016 11.641C41.016 5.764 36.252 1 30.375 1C26.399 1 22.927 3.184 21.1 6.415C21.068 6.471 21.049 6.514 21.005 6.514C20.956 6.514 20.946 6.474 20.915 6.42C19.09 3.184 15.62 1 11.641 1C5.764 1 1 5.764 1 11.641C1 13.15 1.314 14.586 1.881 15.887L1.899 15.987C1.899 15.987 6.095 25.729 20.634 33.822L21.008 33.991L21.355 33.822C24.082 32.304 26.801 30.546 29.343 28.549V28.549Z'
                stroke='#ADADAD'
                stroke-width='2'
              />
            </svg>
            <span>마이찜</span>
          </div>
          <div>
            <svg
              width='41'
              height='41'
              viewBox='0 0 41 41'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fill-rule='evenodd'
                clip-rule='evenodd'
                d='M30 11C30 16.523 25.523 21 20 21C14.477 21 10 16.523 10 11C10 5.477 14.477 1 20 1C25.523 1 30 5.477 30 11ZM1 40C2.834 32.006 10.644 26 20 26C29.355 26 37.166 32.006 39 40H1Z'
                fill='#FF1B6D'
                stroke='#FF1B6D'
                stroke-width='2'
              />
            </svg>
            <span>마이</span>
          </div>
        </Footerbar>
      </Outer>
    </>
  );
}
