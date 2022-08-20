# CSS-in-JS 스타일 코드 Stylelint 세팅 및 자동화

React, Typescript, emotion(CSS-in-JS), storybook 앱에 stylelint 초기 세팅 및 자동화

### CSS-in-JS Stylelint 설치 및 실행

1. 패키지 설치 (⭐️ 필수 설치)
  
  ```bash
  npm install --save-dev stylelint stylelint-config-standard stylelint-config-prettier postcss-syntax @stylelint/postcss-css-in-js
  ```
  
  - ⭐️ stylelint : stylelint 사용을 위해 설치해야할 기본 패키지
  - stylelint-config-standard : stylelint 에서 표준으로 제공하는 규칙에 대한 패키지
  - ⭐️ stylelint-config-prettier : prettier와 충돌되는 stylelint규칙을 비활성화하는 패키지 (prettier 사용 중이면 설치)
  - stylelint-config-recess-order : Recess 및 Bootstrap이 사용했던 방식으로 CSS 속성 정렬
    - [CSS property order](https://markdotto.com/2011/11/29/css-property-order/)
  - stylelint-order : “rules”에 원하는 CSS 속성 정렬 순서로 규칙을 추가 가능
  - ⭐️ postcss-syntax : css-in-js 의 코드에 stylelint 를 사용하기 위해 설치
  - ⭐️ @stylelint/postcss-css-in-js : css-in-js 의 코드에 stylelint 를 사용하기 위해 설치

2. 설정
  - .stylelintrc 파일 생성 후 아래 코드 작성
    - 스타일 코드 검사 방식 : “stylelint-config-standard”, rules 작성 → 둘 중 선택 또는 혼합해서 사용 가능
    - 순서 자동 정렬 방식 : “stylelint-config-recess-order”(정해져있는 순서 상용), “stylelint-order”(순서 직접 정함) → 둘 중 선택
      
    ```json
      {
        "extends": [
          "stylelint-config-prettier",
          "stylelint-config-recess-order" //stylelint-order 설정
        ],
      
        "overrides": [
          {
            "files": ["**/*.tsx"], //규칙을 적용하고 싶은 대상 파일을 지정
            "customSyntax": "@stylelint/postcss-css-in-js" //사용자 지정 문법
          }
        ],
        "rules": { //재정의하고 싶은 규칙명과 정의 범위를 작성
            // ...
          }
      }
      ```
      
  - pakage.json stylelint 실행 스크립트 추가
  
    ```json
    "scripts": {
      ...
      "stylelint": "stylelint --ignore-path .gitignore '**/*.(css|tsx|ts)' --fix",
      ...
    }
    ```
  
  - VSCode setting.json 설정 추가
    onSave 시, stylelint 동작 할 수 있도록 설정
    1. Stylelint - VSCode 확장 프로그램 설치
    2. (MAC 기준) shift + command + P → 기본 설정 : 사용자 설정 열기(JSON)
    3. 아래 설정 추가

    ```json
    {
      ...
      "editor.codeActionsOnSave": {
        "source.fixAll.stylelint": true
      },
      "stylelint.enable": true,
      "stylelint.validate": ["css", "scss", "typescript", "typescriptreact"],
      "editor.formatOnSave": true,
      ...
    }
    ```
  
3. 자동으로 커밋 전에 스타일을 수정하여 저장하도록 설정
  - husky 패키지 설치 및 Git Hook 활성화
    
    ```bash
    npm i -D husky
    npx install husky
    ```

  - pakage.json 설정
    
    ```json
    "script": {
      ...
      "prepare": "husky install",
      ...
    }
    ```

  - lint-staged 패키지 설치
    
    ```bash
    npm i -D lint-staged
    ```

  - pakage.json 설정
    
    ```json
    "lint-staged": {
      "src/**/*.{js,jsx,tx,tsx}" : [
        "stylelint --fix"
        "eslint"
      ]
    }
    ```
        
  - 아래 명령어 실행
  
    ```bash
    npx husky add .husky/pre-commit "npm run lint-staged" or "npx lint-staged" or "yarn lint-staged"
    ```
        
  - .husky/pre-commit 파일 및 설정 확인
    
    ```bash
    #!/bin/sh
    . "$(dirname "$0")/_/husky.sh"
    
    npx lint-staged OR npm run lint-staged OR yarn lint-staged
    ```
        
  
  ---
  
  📚 참고 글
  
  - [stylelint 공식 문서 가이드](https://stylelint.io/user-guide/get-started)
  - [[Linter] Stylelint](https://dev-yakuza.posstree.com/ko/linter/stylelint/#css-in-js%EB%A5%BC-%EC%9C%84%ED%95%9C-stylelint)
  - [Level up your CSS linting using Stylelint](https://blog.logrocket.com/using-stylelint-improve-lint-css-scss-sass/)
  - [Stylelint + Recess Property Order 🕺✨](https://dev.to/takuyakikuchi/stylelint-recess-property-order-5bfn)
  - [CSS-in-JS styles with template interpolation could be ignored by autofixing
   to avoid style corruption.](https://github.com/hudochenkov/stylelint-order)
  - [stylelint 설정](https://blog.chichoon.com/466)
  
  - [husky, lint-staged란 무엇인가?!](https://velog.io/@jma1020/husky-lint-staged%EB%9E%80-%EB%AC%B4%EC%97%87%EC%9D%B8%EA%B0%805)
  - https://github.com/jinn2u/react-lint-config