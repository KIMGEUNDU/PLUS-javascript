function fn(n1, n2) {
  // console.log(n1, n2);
  // 모든 인자값의 합계를 출력
  var sum = 0;
  for (var i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  console.log('인자값들의 합계', sum);
}

fn();
fn(10);
fn(20, 30);
fn(40, 50, 60);
fn(123, 456, 789, 12, 4, 5154, 1, 51, 54, 2);
