

const arr =  ['타노스', '아이언맨', '블랙 위도우']

console.log(arr.length)   //전체길이 (3)

console.log(arr[0])  //타노스
console.log(arr[1])  //아이언맨
console.log(arr[2])  //블랙위도우

//맨 마지막에 추가
const changedLength =  arr.push("블랙팬서")  //블랙팬서를 넣어준다

console.log(changedLength) //블랙팬서 추가로 인해 (4)

console.log(arr)  //4개표시

arr.splice(1,1) //1번항부터 1개 제거

console.log(arr)

for (let i = 0; i < arr.length ; i++) {
    if(arr[i] === '블랙 위도우'){
        continue  //해야할 명령문을 실행하지 않고 그 다음 명령문을 실행하는 명령문 (arr이 1번 블랙위도우가 되면 다음 명령으로)
    }
    console.log(i)
    console.log(arr[i])
}

console.log("-----------------------")



// 배열 설명 - https://mine-it-record.tistory.com/352

