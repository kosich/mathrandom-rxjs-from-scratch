const { Observable, timer } = rxjs;
const { take, map } = rxjs.operators;

// VIEW
const outputLabel = document.getElementById('output');
const cancelBtn = document.getElementById('cancel-btn');

const subscription = timer(0, 100)
  .pipe(
    take(6),
    map(value => 5 - value)
  )
  .subscribe({
    next: value => {
      outputLabel.innerHTML += value + '..&nbsp;';
      console.log('N:', value)
    },
    complete: () => {
      outputLabel.innerText += '🚀';
      console.log('C;')
    }
  })


cancelBtn
  .addEventListener('click', () => {
    outputLabel.innerText = 'CANCELLED!';
    subscription.unsubscribe();
  })