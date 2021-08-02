import {Component, OnInit} from '@angular/core';
import {empty, from, fromEvent, interval, merge, Observable, of, pipe, Subject, timer} from "rxjs";
import {delay, filter, map, mapTo, mergeMap, scan, startWith, switchMap, take, takeWhile} from "rxjs/operators";
import {ajax} from "rxjs/ajax";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  ngOnInit() {
    this.getData();
  }

  getData() {

    // switch to new inner observable when source emits, emit result of project function
    // timer(0, 5000)
    //   .pipe(
    //     switchMap(
    //       _ => interval(2000),
    //       (outerValue, innerValue, outerIndex, innerIndex) => ({
    //         outerValue,
    //         innerValue,
    //         outerIndex,
    //         innerIndex
    //       })
    //     )
    //   )
    //   /*
    //     Output:
    //     {outerValue: 0, innerValue: 0, outerIndex: 0, innerIndex: 0}
    //     {outerValue: 0, innerValue: 1, outerIndex: 0, innerIndex: 1}
    //     {outerValue: 1, innerValue: 0, outerIndex: 1, innerIndex: 0}
    //     {outerValue: 1, innerValue: 1, outerIndex: 1, innerIndex: 1}
    // */
    //   .subscribe(console.log);









//     //emit value every two seconds
//     const source = interval(2000);
// //map all emissions to one value
//     const example = source.pipe(mapTo('HELLO WORLD!'));
// //output: 'HELLO WORLD!'...'HELLO WORLD!'...'HELLO WORLD!'...
//     const subscribe = example.subscribe(val => console.log(val));



//     const source = fromEvent(document, 'click');
// //map all emissions to one value
// //     const example = source.pipe(mapTo('GOODBYE WORLD!'));
//     const example = source.pipe(mapTo(-1));
// //output: (click)'GOODBYE WORLD!'...
//     const subscribe = example.subscribe(val => console.log(val));
//





//     //emit every 2.5 seconds
//     const first = interval(2500);
// //emit every 2 seconds
//     const second = interval(2000);
// //emit every 1.5 seconds
//     const third = interval(1500);
// //emit every 1 second
//     const fourth = interval(1000);
//
// //emit outputs from one observable
//     const example = merge(
//       first.pipe(mapTo('FIRST!')),
//       second.pipe(mapTo('SECOND!')),
//       third.pipe(mapTo('THIRD')),
//       fourth.pipe(mapTo('FOURTH'))
//     );
// //output: "FOURTH", "THIRD", "SECOND!", "FOURTH", "FIRST!", "THIRD", "FOURTH"
//     const subscribe = example.subscribe(val => console.log(val));





//     //emit (1,2,3)
//     const source = of(1, 2, 3);
// //start with 0
//     const example = source.pipe(startWith(1000));
// //output: 0,1,2,3
//     const subscribe = example.subscribe(val => console.log(val));





//     //emit ('World!', 'Goodbye', 'World!')
//     const source = of('World!', 'Goodbye', 'World!');
// //start with 'Hello', concat current string to previous
//     const example = source.pipe(
//       startWith('Hello'),
//       scan((acc, curr) => `${acc} ${curr}`)
//     );
//     /*
//       output:
//       "Hello"
//       "Hello World!"
//       "Hello World! Goodbye"
//       "Hello World! Goodbye World!"
//     */
//     const subscribe = example.subscribe(val => console.log(val));


    //COUNTDOWN
//     const COUNTDOWN_SECONDS = 10;
//
// // elem refs
//     const remainingLabel = document.getElementById('remaining');
//     const pauseButton = document.getElementById('pause');
//     const resumeButton = document.getElementById('resume');
//
// // streams
//     const interval$ = interval(1000).pipe(mapTo(-1));
//     // @ts-ignore
//     const pause$ = fromEvent(pauseButton, 'click').pipe(mapTo(false));
//     // @ts-ignore
//     const resume$ = fromEvent(resumeButton, 'click').pipe(mapTo(true));
//
//     const timer$ = merge(pause$, resume$)
//       .pipe(
//         startWith(true),
//         switchMap(val => (val ? interval$ : empty())),
//         scan((acc, curr) => (curr ? curr + acc : acc), COUNTDOWN_SECONDS),
//         takeWhile(v => v >= 0)
//       )
//       // @ts-ignore
//       .subscribe((val: any) => (remainingLabel.innerHTML = val));
//
//




    // fromEvent(document, 'click')
    //   .pipe(
    //     // restart counter on every click
    //     switchMap(() => interval(1000))
    //   )
    //   .subscribe(console.log);



//!!! cool working mergeMap
//     const letters = of('a', 'b', 'c');
//     const result = letters.pipe(
//       mergeMap(x => interval(1000).pipe(map(i => {
//
//         console.log('x', x);
//         console.log('i', i);
//         return x+i;
//       }))),
//     );
//     result.subscribe(x => console.log(x));







//     const source = of(1, 2, 3, 4, 5);
// //take the first emitted value then complete
//     const example = source.pipe(take(1));
// //output: 1
//     const subscribe = example.subscribe(val => console.log(val));






    // const source$ = interval(1000);
    //
    // source$
    //   .pipe(
    //     mergeMap(
    //       // project
    //       val => interval(5000).pipe(take(2)),
    //       // resultSelector
    //       (oVal, iVal, oIndex, iIndex) => [oIndex, oVal, iIndex, iVal],
    //       // concurrent
    //       2
    //     )
    //   )
    //   /*
    //         Output:
    //         [0, 0, 0, 0] <--1st inner observable
    //         [1, 1, 0, 0] <--2nd inner observable
    //         [0, 0, 1, 1] <--1st inner observable
    //         [1, 1, 1, 1] <--2nd inner observable
    //         [2, 2, 0, 0] <--3rd inner observable
    //         [3, 3, 0, 0] <--4th inner observable
    // */
    //   .subscribe(val => console.log(val));



//     // helper to create promise
//     const myPromise = (val: string) =>
//       new Promise(resolve => resolve(`${val} World From Promise!`));
//
// // emit 'Hello'
//     const source$ = of('Hello');
//
//     source$
//       .pipe(
//         mergeMap(
//           val => myPromise(val),
//           /*
//           you can also supply a second argument which receives the source value and emitted
//           value of inner observable or promise
//         */
//           (valueFromSource, valueFromPromise) => {
//             return `Source: ${valueFromSource}, Promise: ${valueFromPromise}`;
//           }
//         )
//       )
//       // output: "Source: Hello, Promise: Hello World From Promise!"
//       .subscribe(val => console.log(val));



//     // helper to create promise
//     const myPromise = (val: string) =>
//       new Promise(resolve => resolve(`${val} World From Promise!`));
//
// // emit 'Hello'
//     const source$ = of('Hello');
//
// // map to promise and emit result
//     source$
//       .pipe(mergeMap(val => myPromise(val)))
//       // output: 'Hello World From Promise'
//       .subscribe(val => console.log(val));

    //mergeMap
//     // free api url
//     const API_URL = 'https://jsonplaceholder.typicode.com/todos/1';
//
// // streams
//     const click$ = fromEvent(document, 'click');
//
//     click$
//       .pipe(
//         /*
//          * Using mergeMap for example, but generally for GET requests
//          * you will prefer switchMap.
//          * Also, if you do not need the parameter like
//          * below you could use mergeMapTo instead.
//          * ex. mergeMapTo(ajax.getJSON(API_URL))
//          */
//         mergeMap(() => ajax.getJSON(API_URL))
//       )
//       // { userId: 1, id: 1, ...}
//       .subscribe(console.log);

























    //filter
    // const observable = from([2, 30, 5, 22, 60, 1]);
    //
    // // observable.subscribe({
    // //   next: (value) => console.log("Received", value),
    // //   error: (err) => console.log(err),
    // //   complete: () => console.log("done")
    // // });
    //
    //
    // const greaterThanTen = observable.pipe(filter(x => x > 10));
    //
    // greaterThanTen.subscribe(console.log, console.log, () => console.log("completed"));

    // Create an Observable that emits data every second
//     const observable = new Observable(subscriber => {
//       let count = 1;
//       const interval = setInterval(() => {
//         subscriber.next(count++);
//
//         if (count > 5) {
//           clearInterval(interval);
//         }
//       }, 1000);
//     });
//
// // Create a subject
//     const subject = new Subject();
//
// // Use the Subject as Observer and subscribe to the Observable
//     observable.subscribe(subject);
//
// // // Subscribe to the subject
//     subject.subscribe({
//       next: value => console.log(value)
//     });


    // this not working
    // Create a subject
//     const subject = new Subject();
//
//     let count = 1;
//     const interval = setInterval((subscriber: { next: (arg0: number) => void; }) => {
//       subscriber.next(count++);
//       if (count > 10) {
//         clearInterval(interval);
//       }
//     }, 1000);
//
// // Subscribe to the subjects
//     subject.subscribe(data => {
//       console.log(`Observer 1: ${data}`);
//     });
//
// // After 5 seconds subscribe again
//     setTimeout(() => {
//       subject.subscribe(data => {
//         console.log(`Observer 2: ${data}`);
//       });
//     }, 5000);
//

    // Create an Observable that emits data every second for 10 seconds
//     const observable = new Observable(subscriber => {
//       let count = 1;
//       const interval = setInterval(() => {
//         subscriber.next(count++);
//
//         if (count > 10) {
//           clearInterval(interval);
//         }
//       }, 1000);
//     });
//
// // Subscribe to the Observable
//     observable.subscribe({
//       next: value => {
//         console.log(`Observer 1: ${value}`);
//       }
//     });
//
// // After 5 seconds subscribe again
//     setTimeout(() => {
//       observable.subscribe({
//         next: value => {
//           console.log(`Observer 2: ${value}`);
//         }
//       });
//     }, 5000);

    // observer and observable
//     const observable = new Observable(subscriber => {
//       subscriber.next('first data');
//       subscriber.next('second data');
//       setTimeout(() => {
//         subscriber.next('after 1 second - last data');
//         subscriber.complete();
//         subscriber.next('data after completion'); // <-- ignored
//       }, 1000);
//       subscriber.next('third data');
//     });
//
// // Subscribe to the Observable
//     observable.subscribe({
//       next: (x) => console.log(x),
//       error: (x) => console.log(x),
//       complete: () => console.log('completed')
//     });

    // short code of pipe
    // const squareOdd = of(1, 2, 3, 4, 5).pipe(
    //   filter((n: number) => n % 2 !== 0),
    //   map(n => n * n)
    // )
    //
    // squareOdd.subscribe(x => console.log('x', x))


    // with pipe
    // const nums = of(1, 2, 3, 4, 5)
    // console.log('nums', nums);
    //
    // const squareOddVals = pipe(
    //   filter((n: number) => n % 2 !== 0),
    //   map(n => n * n)
    // )
    //
    // const squareOdd = squareOddVals(nums)
    //
    // squareOdd.subscribe(x => console.log('x', x))

    // simple get double

    // const nums = of(1, 2, 3)
    // console.log('nums', nums);
    //
    // const squareValues = map((val: number) => val * val)
    // const squaredNums = squareValues(nums)
    //
    // squaredNums.subscribe(x => console.log('x', x))



    //ajax
    // const apiData = ajax('https://jsonplaceholder.typicode.com/posts')
    //
    // apiData.subscribe(res => console.log('res', res.status, res.response))



    // on event
    // const el = document.getElementById('my-element')!;
    //
    // const mouseMoves = fromEvent<MouseEvent>(el, 'mousemove');
    //
    // const subscription = mouseMoves.subscribe(evt => {
    //   console.log(`Coords: ${evt.clientX} X ${evt.clientY}`);
    //
    //   if (evt.clientX < 40 && evt.clientY < 40) {
    //     subscription.unsubscribe();
    //   }
    // })


    // timer working

    // const secondsCounter = interval(1000);
    //
    // console.log('secondsCounter', secondsCounter);
    //
    // const subscription = secondsCounter.subscribe(second => console.log(`It's been ${second} second since subscribing`))


    //not working get 2 streams

    // const data = from(fetch('https://jsonplaceholder.typicode.com/posts')); // from converts Promise to Observable
    // // console.log('fetch(\'https://jsonplaceholder.typicode.com/posts\')', fetch('https://jsonplaceholder.typicode.com/posts'));
    //
    // const newData = data.pipe(map((response: any) => response.json()),
    //     map(itemNewData => {
    //       console.log('itemNewData', itemNewData);
    //       return {
    //         // id: item.map((_: { id: any; }) => _.id)
    //         // id: item.then(_ => _.id)
    //       }
    //     })
    //   )
    //
    // newData.subscribe(item => console.log('item', item))
    //
    //
    //
    // console.log('data', data);
    // console.log('newData', newData);

    //
    // const newData = data.pipe(map((response: any) => response.json()),
    //   map(itemNewData => {
    //     console.log('itemNewData', itemNewData);
    //     return {
    //       // id: item.map((_: { id: any; }) => _.id)
    //       // id: item.then(_ => _.id)
    //     }
    //   })
    // )
    //
    // newData.subscribe(item => console.log('item', item))

    // data.pipe(map(res => {
    //   console.log('res', res);
    //   res.json().then(r => {
    //     console.log('r', r)
    //   })
    // })).subscribe(item => console.log('item', item))
    //
    // console.log('data', data);


    // 2 method to get data
    // const data = from(fetch('https://jsonplaceholder.typicode.com/posts')); // from converts Promise to Observable
    // // console.log('fetch(\'https://jsonplaceholder.typicode.com/posts\')', fetch('https://jsonplaceholder.typicode.com/posts'));
    //
    // data.pipe(map(res => {
    //   console.log('res', res);
    //   res.json().then(r => {
    //     console.log('r', r)
    //   })
    // })).subscribe(item => console.log('item', item))
    //
    // console.log('data', data);

// get data from promise from URL, convert to Observable and then get data as Promise again
//     const data = from(fetch('https://jsonplaceholder.typicode.com/posts')); // from converts Promise to Observable
//     console.log('fetch(\'https://jsonplaceholder.typicode.com/posts\')', fetch('https://jsonplaceholder.typicode.com/posts'));
//     console.log('data', data);
//
//     data.subscribe({
//       next(response) {
//         console.log('response', response);
//         response.json().then(r => console.log('r', r))
//       },
//       error(err) {
//         console.log('err', err);
//       },
//       complete() {
//         console.log('Completed', );
//       }
//     })

  }
}
