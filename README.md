# GitHub Statistics

[![Run on Ainize](https://ainize.ai/images/run_on_ainize_button.svg)](https://ainize.web.app/redirect?git_repo=https://github.com/IMHOJEONG/CDP_Project4)


## 개요 

- GitHub API를 활용해서 현재 사용자의 GitHub 계정 정보(repository, User, Forks, Commits, URL,
Participations 등) 정보를 보여주는 서비스 입니다.


## GitHub API

- 무조건 API 문서를 제대로 읽어보고 활용할 것 
    - 갑자기 X-Rate-Limit 제한으로 화면에서 안 보이는 부분이 존재 가능 
    - https://docs.github.com/en/free-pro-team@latest/rest/reference/repos#statistics

- Time관련 API 반환 값은 Timestamp 값으로 반환되는 경우가 대부분 
    - Timestamp에서 Date 형식으로 Human readable 하게 바꾸어주는 과정 필수 
    - https://stackoverflow.com/questions/19485353/function-to-convert-timestamp-to-human-date-in-javascript/34900794
    - timestamp 테스트
        - https://timestampgenerator.com/1599350400



## 개발 시 발생한 코딩 오류 사항 

1. axios 문법에 대한 기억 오류 

- https://stackoverflow.com/questions/52017939/nodejs-axios-error-the-url-argument-must-be-of-type-string-received-typ


2. GitHub API의 Rate limit 

- 인증하지 않고 사용하면 60번 호출/1hour 
    - https://developer.github.com/v3/#rate-limiting
- 인증하고 사용하면 5000번/1hour

3. BootStrap class 문제 
    - 이 부분은 Bootstrap class를 공부해서 활용해야 하지만, 오히려 HTML, CSS 기본 문법으로 충분히 작성할 수 있을 듯 합니다.
    - color 하나 넣는데도 클래스 명이 다 다름 ㅠㅠ
    - https://getbootstrap.com/docs/4.0/utilities/colors/

4. GitHub API Personal access token 
    - 이것을 발급받고 localhost에서는 써도 괜찮은데 => github에 올리려고 한다면??
    - 오류가 발생함 
    - Github 내에서 보안 문제 때문에 스스로 삭제하는 경우가 발생 

## 추가 개발 사항 

- 현재는 정적 페이지를 bootstrap 4를 이용해서 예제를 참고해 작성한 상태입니다. 
    - create-react-app 코드 디렉토리 구성으로 되어 있어서 React로 다시 개발해 볼 수 있을 것입니다. 

- 현재 외부 무료 클라우드 DB를 이용해서 MongoDB를 붙여둔 상태
    - 음... 정작 무엇을 DB에 저장할 지 몰라서 붙여두고 ㄲ
    - DB까지 공부 목적으로만 사용한다면 충분히 유용한 사이트 입니다. 
    - https://www.clever-cloud.com/


## 참고 사항 

- Bootstrap 4.0
   - https://getbootstrap.com/docs/4.0/getting-started/introduction/

   - 이 예제를 활용해서 구현했습니다. 
   - https://startbootstrap.com/previews/sb-admin-2/

- fontawesome
    - https://fontawesome.com/v4.7.0/icon/link

    - font나 아이콘 같은 것들을 필요할 때 쉽게 사용할 수 있는 장점이 있음 

## 사용한 기술 

- Bootstrap
- Node.js 
- MongoDB
