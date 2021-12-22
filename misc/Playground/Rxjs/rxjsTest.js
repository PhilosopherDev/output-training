const Observable = rxjs.Observable;

const observable = new Observable(subscriber => {
  subscriber.next(1);
  subscriber.next(2);
  subscriber.next(3);
  setInterval(() => {
    subscriber.next(777);
  }, 1000);
});

const observer = {
    next: x => console.log('Observer got a next value: ' + x),
    error: err => console.error('Observer got an error: ' + err),
    complete: () => console.log('Observer got a complete notification'),
};

const subscription = observable.subscribe(observer);

setTimeout(() => {
    console.log("unsubscribe!");
    subscription.unsubscribe();
}, 5000);