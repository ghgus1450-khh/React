const express = require('express');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
const fs = require('fs'); // 파일 시스템 모듈

let movies = require('./movies'); // let으로 변경하여 데이터 수정이 가능하게 함
const users = require('./users');

const app = express();
const port = 5000;

// --- 미들웨어 설정 ---
app.use(cors());
app.use(express.json());

// '/uploads' 경로로 들어오는 요청에 대해 'uploads' 폴더의 정적 파일을 제공
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// --- Multer 파일 업로드 설정 ---
// 업로드된 파일을 저장할 폴더가 없으면 생성
const uploadDir = 'uploads/';
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // 파일이 저장될 경로
  },
  filename: function (req, file, cb) {
    // 파일명 중복을 피하기 위해 타임스탬프를 사용
    cb(null, Date.now() + path.extname(file.originalname));
  }
});
const upload = multer({ storage: storage });

// --- 기존 영화 API ---
app.get('/api/movies', (req, res) => {
  res.json(movies);
});

app.get('/api/movies/:id', (req, res) => {
  const movieId = parseInt(req.params.id, 10);
  const movie = movies.find(m => m.id === movieId);
  if (movie) res.json(movie);
  else res.status(404).send('Movie not found');
});

// --- 새로운 인증 API ---

// API 엔드포인트 3: 회원가입
app.post('/api/signup', (req, res) => {
  const { email, password } = req.body;

  // 간단한 유효성 검사
  if (!email || !password) {
    return res.status(400).json({ message: '이메일과 비밀번호를 모두 입력해주세요.' });
  }

  // 이메일 중복 확인
  const userExists = users.find(user => user.email === email);
  if (userExists) {
    return res.status(409).json({ message: '이미 존재하는 이메일입니다.' });
  }

  // 새 사용자 생성 (id는 간단하게 배열 길이 + 1로 지정)
  const newUser = { id: users.length + 1, email, password };
  users.push(newUser);
  console.log('Current users:', users); // 서버 콘솔에서 확인용

  res.status(201).json({ message: '회원가입 성공!', user: newUser });
});

// API 엔드포인트 4: 로그인
app.post('/api/login', (req, res) => {
  const { email, password } = req.body;

  // 사용자 찾기
  const user = users.find(u => u.email === email && u.password === password);

  if (user) {
    // 실제로는 여기에 JWT 토큰을 생성해서 보내줘야 합니다.
    // 지금은 간단하게 사용자 정보와 성공 메시지를 보냅니다.
    res.json({ message: '로그인 성공!', user: { id: user.id, email: user.email } });
  } else {
    res.status(401).json({ message: '이메일 또는 비밀번호가 일치하지 않습니다.' });
  }
});

// --- 새로운 영화 CRUD API ---

// API 5: 영화 등록 (포스터 이미지 업로드 포함)
app.post('/api/movies', upload.single('poster'), (req, res) => {
  const { title, genre, director, releaseDate, description } = req.body;
  
  if (!req.file) {
    return res.status(400).send('포스터 이미지를 업로드해야 합니다.');
  }

  const newId = movies.length > 0 ? Math.max(...movies.map(m => m.id)) + 1 : 1;
  const newMovie = {
    id: newId,
    title,
    genre,
    director,
    releaseDate,
    description,
    poster: `http://localhost:5000/uploads/${req.file.filename}` // 이미지 파일 경로
  };

  movies.push(newMovie);
  res.status(201).json(newMovie);
});

// API 6: 영화 수정
app.put('/api/movies/:id', upload.single('poster'), (req, res) => {
  const movieId = parseInt(req.params.id);
  const movieIndex = movies.findIndex(m => m.id === movieId);

  if (movieIndex === -1) {
    return res.status(404).send('영화를 찾을 수 없습니다.');
  }

  const { title, genre, director, releaseDate, description } = req.body;
  const updatedMovie = { ...movies[movieIndex], title, genre, director, releaseDate, description };

  // 새 포스터 이미지가 업로드된 경우에만 경로 업데이트
  if (req.file) {
    updatedMovie.poster = `http://localhost:5000/uploads/${req.file.filename}`;
    // (선택) 기존 이미지 파일 삭제 로직 추가 가능
  }

  movies[movieIndex] = updatedMovie;
  res.json(updatedMovie);
});

// API 7: 영화 삭제
app.delete('/api/movies/:id', (req, res) => {
  const movieId = parseInt(req.params.id);
  const movieIndex = movies.findIndex(m => m.id === movieId);

  if (movieIndex === -1) {
    return res.status(404).send('영화를 찾을 수 없습니다.');
  }
  
  // (선택) 서버에서 이미지 파일도 함께 삭제
  const posterUrl = movies[movieIndex].poster;
  const filename = posterUrl.split('/uploads/')[1];
  fs.unlink(path.join(uploadDir, filename), (err) => {
    if (err) console.error("Error deleting file:", err);
  });

  movies.splice(movieIndex, 1);
  res.status(200).json({ message: '영화가 성공적으로 삭제되었습니다.' });
});


// --- 서버 실행 ---
app.listen(port, () => {
  console.log(`Movie API server listening at http://localhost:${port}`);
});


