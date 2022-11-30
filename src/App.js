import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <body>
        <div class="d-flex" id="wrapper">
            <div class="border-end bg-white" id="sidebar-wrapper">
                <div class="sidebar-heading border-bottom bg-light">인사평가시스템</div>
                <div class="list-group list-group-flush">
                    <a class="list-group-item list-group-item-action list-group-item-light p-3" href="#!">홈</a>
                    <a class="list-group-item list-group-item-action list-group-item-light p-3" href="#!">평가항목 설정</a>
                    <a class="list-group-item list-group-item-action list-group-item-light p-3" href="#!">평가하기</a>
                </div>
            </div>
            
            <div id="page-content-wrapper">
                
                <nav class="navbar navbar-expand-lg navbar-light bg-light border-bottom">
                    <div class="container-fluid">
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav ms-auto mt-2 mt-lg-0">
                                <li class="nav-item"><a class="nav-link" href="#!">로그인</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
                
                <div class="container-fluid">
                    <h1 class="mt-4">인사평가 시스템입니다.</h1>
                </div>
            </div>
        </div>
        
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
        
        <script src="js/scripts.js"></script>
    </body>
  );
}

export default App;
