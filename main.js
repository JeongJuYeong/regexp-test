

const str = `
010-1234-5678
thesecon@gmail.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
`
// string.match()  :  문자열이 정규식과 매치되는 부분을 검색
// g : 모두 검색
// i : 대소문자 구분 안함

//const regexp = new RegExp('the','gi');  // 생성자 방식
//const regexp = /the/gi; 
//console.log(str.match(regexp));


//const regexp = /fox/gi;
//console.log(regexp.test(str));
//console.log(str.match(regexp));
//console.log(str.replace(regexp, 'AAA'));
//console.log(str);

//const regexp = /the/gi;
//console.log( str.match(regexp) );

//console.log(str.match( /\.$/gim ));
//console.log(str.match(/^t/gmi));
//console.log( str.match(/fox|dog/g) );
//console.log( str.match(/https?/g) );
//console.log( str.match(/\b\w{2,3}\b/g) );
//console.log( str.match(/[가-힣]{1,}/g) );


// 소문자 f로 시작하는 단어를 찾게 된다.
//console.log( str.match(/\bf\w{1,}\b/g) );
//console.log( str.match(/\d{1,}/g) );
//console.log( str.match(/\s/g) );

/*/
const h = `  the hello  world   !

`;
console.log( h.replace( /\s/g, '') );
//--------/*/

// 이메일 앞 뒤로 조절
//console.log(str.match( /.{1,}(?=@)/g));
//console.log(str.match( /(?<=@).{1,}/g));