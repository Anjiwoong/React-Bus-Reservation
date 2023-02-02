<div align="center">
  
# 시외버스 예매 - react project

<span style="font-size:120px">:bus:</span>
<br />
<img src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB"> <img src="https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white"> <img src="https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white"> <img src="https://img.shields.io/badge/firestore-%23039BE5.svg?style=for-the-badge&logo=firebase">
<br />
**API 데이터문제로 출발 날짜는 최소 당일 이전부터 해야 도착지가 나옵니다.**
<br />
**출발지를 서울에 있는 서울남부, 제주에 있는 제주를 클릭하시면 도착할 수 있는 터미널이 많습니다.**

### [react-tmoney-bus.app](https://react-tmoney-bus.vercel.app/)

**[국토교통부_(TAGO)_고속버스정보] 시외버스API 사용**

</div>

```
npm install
npm start
```

|                                로그인                                |                              메인 페이지                               |
| :------------------------------------------------------------------: | :--------------------------------------------------------------------: |
| <img src="./src/assets/img/Login.png" width="600px" height="290px"/> | <img src="./src/assets/img/HomePage.png" width="600px" height="290px"> |

|                                Terminal Modal                                |                             Lookup 페이지                             |
| :--------------------------------------------------------------------------: | :-------------------------------------------------------------------: |
| <img src="./src/assets/img/TerminalModal.png" width="600px" height="290px"/> | <img src="./src/assets/img/Lookup.png"  width="600px" height="290px"> |

|                                Seat                                 |                                MyPage                                 |
| :-----------------------------------------------------------------: | :-------------------------------------------------------------------: |
| <img src="./src/assets/img/Seat.png" width="600px" height="290px"/> | <img src="./src/assets/img/Mypage.png"  width="600px" height="290px"> |

### 구현 기능

- **Redux-toolkit을 이용하여 전역 상태관리**
- **Firebase Authentication을 이용해 로그인, 회원가입 구현**
- **PrivateRoute를 통해 로그인상태에 따라 Route 지정**
- **Firestore를 이용해 예매 정보 저장 후 아이디 마다 티켓정보 저장**
- **use-http (custom hook)을 이용하여 fetch해서 data받아오는 코드 재사용성있게 구현**
- **Styled-Component - ThemeProvider를 이용해 주요 색상 및 폰트 크기 변수로 만들어 사용**
